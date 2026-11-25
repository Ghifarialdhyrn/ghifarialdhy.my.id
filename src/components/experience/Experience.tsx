
import { experiences } from "@/data/experience";

import ExperienceCard from "./ExperienceCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        py-24
        sm:py-28
        lg:py-36
        scroll-mt-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Pinned Heading */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <ScrollReveal>
              <span className="
                font-mono
                text-xs
                uppercase
                tracking-[0.2em]
                text-zinc-500
              ">
                Web Development
              </span>

              <div className="mt-5 flex items-center gap-3">
                <span className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_12px_rgba(52,211,153,0.7)]
                " />

                <h2 className="
                  text-4xl
                  font-bold
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                ">
                  Experience
                </h2>
              </div>

              <p className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
              ">
                My professional journey, where I turn
                ideas into meaningful digital experiences
                through development and collaboration.
              </p>

              <div className="
                mt-8
                hidden
                h-px
                w-24
                bg-gradient-to-r
                from-emerald-400
                to-transparent
                lg:block
              " />
            </ScrollReveal>
          </div>

          {/* Moving Timeline */}
          <div className="
            relative
            ml-1
            space-y-8
            border-l
            border-zinc-800
            pl-6
            sm:ml-2
            sm:pl-8
            lg:pl-10
          ">
            {experiences.map((experience, index) => (
              <ScrollReveal
                key={`${experience.role}-${experience.company}`}
                delay={index * 0.12}
                y={45}
              >
                <ExperienceCard
                  experience={experience}
                />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
