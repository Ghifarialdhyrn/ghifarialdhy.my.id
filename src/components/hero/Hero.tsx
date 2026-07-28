"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden

        pt-24
        pb-16

        sm:pt-28
        md:pt-32

        lg:pt-20
        lg:pb-0
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            grid

            min-h-auto
            items-center

            gap-14

            md:gap-16

            lg:min-h-[calc(100vh-8rem)]
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 18,
              mass: 1.2,
              delay: 0.2,
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 18,
              mass: 1.2,
              delay: 0.45,
            }}
          >
            <HeroImage />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
