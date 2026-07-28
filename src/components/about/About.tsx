import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

import AboutCard from "./AboutCard";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 scroll-mt-28"
    >
      <Container>
        <ScrollReveal>
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-px w-6 bg-zinc-600" />
              About Me
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-2 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.15}>
            <div>
              <AboutCard />
              <AboutStats />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <AboutTimeline />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}