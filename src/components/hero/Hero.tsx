
"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  // Different movement speeds create depth.
  const contentY = useTransform(
    smoothProgress,
    [0, 1],
    [0, 75]
  );

  const imageY = useTransform(
    smoothProgress,
    [0, 1],
    [0, 140]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 0.88]
  );

  const imageRotate = useTransform(
    smoothProgress,
    [0, 1],
    [0, -5]
  );

  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    [0, 180]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
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
      {/* Background Parallax */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { y: backgroundY }
        }
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <HeroBackground />
      </motion.div>

      <Container className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-14
            md:gap-16
            lg:min-h-[calc(100vh-5rem)]
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* Hero Content */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : { y: contentY, opacity }
            }
            initial={{
              opacity: 0,
              x: -35,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="relative z-10"
          >
            <HeroContent />
          </motion.div>

          {/* Hero Image Parallax */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: imageY,
                    scale: imageScale,
                    rotate: imageRotate,
                  }
            }
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.9,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.3,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            className="
              relative
              z-10
              will-change-transform
            "
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          pointer-events-none
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          lg:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-8
            w-[1px]
            bg-gradient-to-b
            from-zinc-500
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}
