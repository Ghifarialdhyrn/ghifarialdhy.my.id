import { SITE_CONFIG } from "@/lib/constants";

export default function AboutCard() {
  return (
    <div className="border-l border-zinc-800 pl-8">
      <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-8 text-zinc-400 text-justify">
        <p>
          Hi, I'm{" "}
          <span className="font-medium text-white">{SITE_CONFIG.name}</span>, a
          Software Engineering graduate from{" "}
          <span className="font-medium text-white">
            Universitas Pendidikan Indonesia
          </span>{" "}
          who is currently focusing on Fullstack Web Development.
        </p>

        <p>
          I specialize in building modern web applications using{" "}
          <span className="font-medium text-white">
            React.js, Next.js, and TypeScript
          </span>
          , with experience developing responsive interfaces, admin dashboards,
          booking platforms, and API integrations.
        </p>

        <p>
          Throughout my journey, I have worked on various projects and
          internship experiences, including developing internal management
          systems and production-ready applications with a strong focus on
          performance, scalability, and user experience.
        </p>
      </div>
    </div>
  );
}
