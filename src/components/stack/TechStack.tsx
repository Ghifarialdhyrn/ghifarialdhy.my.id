import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

import TechCard from "./TechCard";
import TechMarquee from "./TechMarquee";
import { stackCards } from "./technologies";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="
        relative
        overflow-hidden
        bg-transparent
        py-20
        sm:py-24
        scroll-mt-28
      "
    >
      <Container>
        <ScrollReveal>
          <div
            className="
              mb-14
              flex
              flex-col
              items-center
              text-center

              sm:mb-20
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                tracking-tight

                text-neutral-900
                dark:text-white

                transition-colors
                duration-500

                sm:text-4xl
                lg:text-5xl
              "
            >
              Technology Stack
            </h2>

            <p
              className="
                mt-3
                max-w-2xl

                text-sm
                sm:text-base

                text-neutral-600
                dark:text-neutral-400

                transition-colors
                duration-500
              "
            >
              The technologies I rely on to build, integrate, and deliver
              scalable digital products.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="
              relative
              flex
              items-center
              justify-center

              h-[170px]
              sm:h-[220px]
              lg:h-[260px]
            "
          >
            {stackCards.map((tech, index) => (
              <TechCard key={tech.name} {...tech} position={index} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <TechMarquee />
        </ScrollReveal>
      </Container>
    </section>
  );
}
