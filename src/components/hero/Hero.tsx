
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

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const contentY = useTransform(progress, [0, 1], [0, 90]);
  const imageY = useTransform(progress, [0, 1], [0, 145]);
  const imageRotate = useTransform(progress, [0, 1], [0, -7]);
  const imageScale = useTransform(progress, [0, 1], [1, 0.88]);
  const backgroundY = useTransform(progress, [0, 1], [0, 180]);

  const contentOpacity = useTransform(progress, [0, 0.8], [1, 0]);
  const imageOpacity = useTransform(progress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative isolate min-h-screen
        overflow-hidden
        pt-28 pb-24
        sm:pt-36
        lg:flex lg:items-center
        lg:pt-28 lg:pb-28
      "
    >
      {/* Background layers */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
      >
        <HeroBackground />
      </motion.div>

      <Container className="relative z-10">
        <div
          className="
            grid items-center
            gap-14
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-8
            xl:gap-16
          "
        >
          {/* Editorial content */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: contentY,
                    opacity: contentOpacity,
                  }
            }
            className="relative z-20 order-2 lg:order-1"
          >
            <HeroContent />
          </motion.div>

          {/* 3D portrait */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: imageY,
                    rotate: imageRotate,
                    scale: imageScale,
                    opacity: imageOpacity,
                  }
            }
            className="
              relative z-10 order-1
              mx-auto w-full max-w-[480px]
              lg:order-2 lg:max-w-none
            "
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>

      {/* Bottom editorial metadata */}
      <div
        className="
          pointer-events-none absolute
          bottom-7 left-0 right-0
          hidden lg:block
        "
      >
        <Container>
          <div className="
            flex items-center justify-between
            border-t border-[var(--border)]
            pt-4
          ">
            <span className="
              text-[10px] font-medium
              tracking-[0.22em]
              text-[var(--muted)]
            ">
              PORTFOLIO / 2026
            </span>

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, 5, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex items-center gap-2
                text-[10px] font-medium
                tracking-[0.2em]
                text-[var(--muted)]
              "
            >
              SCROLL TO EXPLORE
              <span className="h-5 w-px bg-[var(--foreground)]" />
            </motion.div>

            <span className="
              text-[10px] font-medium
              tracking-[0.22em]
              text-[var(--muted)]
            ">
              BANDUNG, INDONESIA
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
}
