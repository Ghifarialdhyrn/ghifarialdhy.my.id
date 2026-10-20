"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { IconBrandGithub, IconBrandGitlab } from "@tabler/icons-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Day = { date: string; count: number; github: number; gitlab: number };
type Data = { days: Day[]; totals: { github: number; gitlab: number }; usernames: { github: string; gitlab: string } };

const levels = ["bg-zinc-800", "bg-emerald-900", "bg-emerald-700", "bg-emerald-500", "bg-emerald-300"];

function ContributionCell({ day, color }: { day: Day; color: string }) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; side: "above" | "below" } | null>(null);
  const dateLabel = new Date(`${day.date}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const showTooltip = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const side = rect.top < 84 ? "below" : "above";
    setTooltip({
      x: Math.min(Math.max(rect.left + rect.width / 2, 130), window.innerWidth - 130),
      y: side === "above" ? rect.top - 8 : rect.bottom + 8,
      side,
    });
  };

  return (
    <span className="group relative h-3 w-3" onMouseEnter={(event) => showTooltip(event.currentTarget)} onMouseLeave={() => setTooltip(null)}>
      <span
        tabIndex={0}
        aria-label={`${day.count} kontribusi pada ${dateLabel}; GitHub ${day.github}, GitLab ${day.gitlab}`}
        onFocus={(event) => showTooltip(event.currentTarget)}
        onBlur={() => setTooltip(null)}
        className={`contribution-cell block h-3 w-3 rounded-[3px] outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${color}`}
      />
      {tooltip && typeof document !== "undefined" && createPortal(
        <span
          role="tooltip"
          className={`pointer-events-none fixed z-[9999] min-w-max -translate-x-1/2 rounded-md border border-white/10 bg-zinc-950 px-2.5 py-1.5 text-xs text-white shadow-xl ${tooltip.side === "above" ? "-translate-y-full" : ""}`}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <span className="font-semibold">{day.count} kontribusi</span>
          <span className="block text-zinc-300">{dateLabel}</span>
          <span className="mt-1 block text-zinc-400">GitHub {day.github} / GitLab {day.gitlab}</span>
        </span>,
        document.body,
      )}
    </span>
  );
}

export default function Contributions() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/contributions")
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error ?? "Tidak dapat memuat kontribusi.");
        setData(result as Data);
      })
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : "Tidak dapat memuat kontribusi."));
  }, []);

  const days = useMemo(() => {
    if (!data) return [];
    const counts = new Map(data.days.map((day) => [day.date, day]));
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 363);
    start.setDate(start.getDate() - start.getDay());
    const result: Day[] = [];
    for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      const key = date.toISOString().slice(0, 10);
      const contribution = counts.get(key);
      result.push({ date: key, count: contribution?.count ?? 0, github: contribution?.github ?? 0, gitlab: contribution?.gitlab ?? 0 });
    }
    return result;
  }, [data]);

  const max = Math.max(1, ...days.map((day) => day.count));
  const level = (count: number) => count === 0 ? 0 : Math.min(4, Math.ceil((count / max) * 4));
  const months = days.reduce<{ label: string; week: number }[]>((labels, day, index) => {
    const date = new Date(`${day.date}T00:00:00`);
    if (date.getDate() === 1) labels.push({ label: date.toLocaleDateString("id-ID", { month: "short" }), week: Math.floor(index / 7) });
    return labels;
  }, []);
  const weekCount = Math.ceil(days.length / 7);

  return (
    <section id="contributions" className="section">
      <Container>
        <SectionHeading eyebrow="Aktivitas" title="Kontribusi" description="Aktivitas GitHub dan GitLab dalam satu kalender." />
        <div className="card overflow-hidden p-5 sm:p-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-semibold">{data ? (data.totals.github + data.totals.gitlab).toLocaleString("id-ID") : "—"}</p>
              <p className="text-sm text-muted">kontribusi selama setahun terakhir</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2"><IconBrandGithub size={17} /> GitHub {data && `· ${data.totals.github}`}</span>
              <span className="flex items-center gap-2"><IconBrandGitlab size={17} /> GitLab {data && `· ${data.totals.gitlab}`}</span>
            </div>
          </div>

          {error ? <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-200">{error}</p> : !data ? <div className="h-28 animate-pulse rounded-xl bg-white/5" aria-label="Memuat kalender kontribusi" /> : (
            <>
              <div className="overflow-x-auto pb-2">
                <div className="mb-2 grid w-max grid-rows-1 gap-1 text-[11px] leading-4 text-muted" style={{ gridTemplateColumns: `repeat(${weekCount}, 12px)` }}>
                  {months.map((month) => (
                    <span key={`${month.label}-${month.week}`} className="whitespace-nowrap" style={{ gridColumnStart: month.week + 1 }}>{month.label}</span>
                  ))}
                </div>
                <div className="grid w-max grid-flow-col grid-rows-7 gap-1" aria-label="Kalender kontribusi gabungan">
                  {days.map((day) => (
                    <ContributionCell key={day.date} day={day} color={levels[level(day.count)]} />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
                <span>{data.usernames.github} · {data.usernames.gitlab}</span>
                <span className="flex items-center gap-1.5">Sedikit <span className="h-3 w-3 rounded-[3px] bg-zinc-800" />{levels.slice(1).map((color) => <span key={color} className={`h-3 w-3 rounded-[3px] ${color}`} />)} Banyak</span>
              </div>
              <p className="mt-3 text-xs text-muted">Data GitLab diambil dari event aktivitas akun; GitLab menyimpan event hingga tiga tahun.</p>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
