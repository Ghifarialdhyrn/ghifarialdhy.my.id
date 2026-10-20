import { NextResponse } from "next/server";

export const revalidate = 3600;

type ContributionDay = { date: string; count: number };

async function getGitHubContributions(username: string, token: string) {
  const from = new Date();
  from.setUTCFullYear(from.getUTCFullYear() - 1);
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query($login: String!, $from: DateTime!, $to: DateTime!) { user(login: $login) { contributionsCollection(from: $from, to: $to) { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`,
      variables: { login: username, from: from.toISOString(), to: new Date().toISOString() },
    }),
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error("GitHub API tidak dapat mengambil data.");
  const result = await response.json();
  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) throw new Error("Akun GitHub tidak ditemukan atau token tidak memiliki akses.");
  return {
    total: calendar.totalContributions as number,
    days: (calendar.weeks as { contributionDays: { date: string; contributionCount: number }[] }[])
      .flatMap((week) => week.contributionDays)
      .map((day) => ({ date: day.date, count: day.contributionCount })),
  };
}

async function getGitLabContributions(username: string, gitlabUrl: string, token: string) {
  const from = new Date();
  from.setUTCFullYear(from.getUTCFullYear() - 1);
  const since = from.toISOString();
  const apiUrl = new URL("/api/v4/", gitlabUrl);
  const userResponse = await fetch(new URL(`users?username=${encodeURIComponent(username)}`, apiUrl), { next: { revalidate: 3600 } });
  if (!userResponse.ok) throw new Error("GitLab API tidak dapat mengambil profil.");
  const users = (await userResponse.json()) as { id: number }[];
  if (!users[0]) throw new Error("Akun GitLab tidak ditemukan.");

  const counts = new Map<string, number>();
  let total = 0;
  // GitLab's public events API exposes a rolling 90-day window, so retain that limit in the UI.
  for (let page = 1; page <= 10; page += 1) {
    const eventsUrl = new URL(`users/${users[0].id}/events`, apiUrl);
    eventsUrl.search = new URLSearchParams({ after: since.slice(0, 10), per_page: "100", page: String(page) }).toString();
    const response = await fetch(eventsUrl, {
      headers: { "PRIVATE-TOKEN": token },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("GitLab API tidak dapat mengambil aktivitas.");
    const events = (await response.json()) as { created_at: string }[];
    for (const event of events) {
      const date = event.created_at.slice(0, 10);
      counts.set(date, (counts.get(date) ?? 0) + 1);
      total += 1;
    }
    if (events.length < 100) break;
  }
  return { total, days: [...counts].map(([date, count]) => ({ date, count })) };
}

export async function GET() {
  const githubUsername = process.env.GITHUB_USERNAME;
  const gitlabUsername = process.env.GITLAB_USERNAME;
  const gitlabUrl = process.env.GITLAB_URL ?? "https://gitlab.com";
  const gitlabToken = process.env.GITLAB_TOKEN;
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubUsername || !gitlabUsername || !githubToken || !gitlabToken) {
    return NextResponse.json({ error: "Lengkapi GITHUB_USERNAME, GITHUB_TOKEN, GITLAB_USERNAME, GITLAB_URL, dan GITLAB_TOKEN di environment situs." }, { status: 503 });
  }

  try {
    const [github, gitlab] = await Promise.all([
      getGitHubContributions(githubUsername, githubToken),
      getGitLabContributions(gitlabUsername, gitlabUrl, gitlabToken),
    ]);
    const merged = new Map<string, { github: number; gitlab: number }>();
    for (const day of github.days) {
      const counts = merged.get(day.date) ?? { github: 0, gitlab: 0 };
      counts.github += day.count;
      merged.set(day.date, counts);
    }
    for (const day of gitlab.days) {
      const counts = merged.get(day.date) ?? { github: 0, gitlab: 0 };
      counts.gitlab += day.count;
      merged.set(day.date, counts);
    }
    const days: (ContributionDay & { github: number; gitlab: number })[] = [...merged].map(([date, counts]) => ({ date, github: counts.github, gitlab: counts.gitlab, count: counts.github + counts.gitlab }));
    return NextResponse.json({ days, totals: { github: github.total, gitlab: gitlab.total }, usernames: { github: githubUsername, gitlab: gitlabUsername } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Gagal memuat kontribusi.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
