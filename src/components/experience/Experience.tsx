import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-28">
      <ScrollReveal>
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 sm:mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
              Web Development
            </span>

            <div className="mt-4 flex items-center gap-3 sm:gap-4">
              <span className="h-2 w-2 rounded-full bg-white" />

              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Experience
              </h2>
            </div>
          </div>

          <ScrollReveal>
            {/* Timeline */}
            <div className="relative ml-1 border-l border-zinc-800 pl-6 text-justify sm:ml-2 sm:pl-8 lg:pl-10 space-y-6 sm:space-y-8">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={`${experience.role}-${experience.company}`}
                  experience={experience}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
