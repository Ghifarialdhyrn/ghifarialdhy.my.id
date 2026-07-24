import AnimatedBackground from "@/components/common/AnimatedBackground/AnimatedBackground";
import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AnimatedBackground />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
