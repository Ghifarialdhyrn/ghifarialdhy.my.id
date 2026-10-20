import { Experience } from "@/types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <div className="relative pl-6 sm:pl-8 lg:pl-10">
      {/* Timeline Dot */}
      <div
        className={`absolute left-0 top-8 h-3 w-3 rounded-full border sm:top-10 ${
          experience.current
            ? "border-white bg-white"
            : "border-zinc-500 bg-zinc-700"
        }`}
      />

      {/* Card */}
      <div className="theme-dark-card rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
              {experience.role}
            </h3>

            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
              {experience.company}
            </p>
          </div>

          <span className="shrink-0 text-xs whitespace-nowrap text-zinc-500 sm:text-sm">
            {experience.duration}
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
          {experience.summary}
        </p>
      </div>
    </div>
  );
}
