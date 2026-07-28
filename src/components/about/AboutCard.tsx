import { SITE_CONFIG } from "@/lib/constants";

export default function AboutCard() {
  return (
    <div className="border-l border-zinc-800 pl-8">
      <p className="text-sm font-medium text-zinc-500">
        About me
      </p>


      <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-8 text-zinc-400">
        <p>
          Hi, I'm{" "}
          <span className="font-medium text-white">
            {SITE_CONFIG.name}
          </span>
          , a Front-End Web Developer specializing in React.js, Next.js,
          and TypeScript.
        </p>


        <p>
          I build responsive web applications, booking systems, admin
          dashboards, and payment integrations with a strong focus on
          scalable frontend architecture and clean user experience.
        </p>


        <p>
          I've developed and deployed production-ready applications on
          Vercel and Netlify while maintaining performance, accessibility,
          and responsive design across devices.
        </p>
      </div>
    </div>
  );
}