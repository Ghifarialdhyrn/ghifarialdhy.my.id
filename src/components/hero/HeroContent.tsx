"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, MoveDownRight } from "lucide-react";

import Button from "@/components/ui/Button";
import AvailabilityBadge from "./AvailabilityBadge";

import { SITE_CONFIG } from "@/lib/constants";

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="relative"
    >
      {/* Intro metadata */}
      <motion.div
        variants={reveal}
        className="
          mb-8 flex flex-wrap
          items-center gap-4
        "
      >
        <AvailabilityBadge />

        <span
          className="
          hidden h-px w-10
          bg-[var(--border)]
          sm:block
        "
        />

        <span
          className="
          text-[10px] font-medium
          tracking-[0.2em]
          text-[var(--muted)]
        "
        >
          SOFTWARE ENGINEER / PORTFOLIO
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        variants={reveal}
        className="
          mb-4 text-xs font-medium
          uppercase tracking-[0.32em]
          text-[var(--muted)]
          sm:text-sm
        "
      >
        Hello, I'm
      </motion.p>

      {/* Main title */}
      <motion.h1
        variants={reveal}
        className="
  max-w-[750px]
  text-[clamp(2.8rem,5.5vw,5.2rem)]
  font-bold
  leading-[0.92]
  tracking-[-0.065em]
  text-[var(--foreground)]
"
      >
        <span className="block">Ghifarialdhy</span>

        <span
          className="
          relative mt-2 block
          text-[var(--muted)]
        "
        >
          Rahmansyah N
        </span>
      </motion.h1>

      {/* Role */}
      <motion.div
        variants={reveal}
        className="
          mt-9 flex items-start gap-3
          sm:mt-11
        "
      >
        <span
          className="
          mt-2 h-2 w-2 shrink-0
          rounded-full
          bg-[var(--primary)]
          shadow-[0_0_16px_var(--primary)]
        "
        />

        <div>
          <h2
            className="
            max-w-xl
            text-lg font-semibold
            leading-snug
            text-[var(--foreground)]
            sm:text-xl
          "
          >
            {SITE_CONFIG.role}
          </h2>

          <p
            className="
            mt-3 max-w-lg
            text-sm leading-7
            text-[var(--muted)]
            sm:text-base sm:leading-8
          "
          >
            {SITE_CONFIG.description}
          </p>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        variants={reveal}
        className="
          mt-9 flex flex-wrap
          items-center gap-3
          sm:mt-10
        "
      >
        <Button
          href="#projects"
          rightIcon={<ArrowUpRight size={17} />}
          className="
            group rounded-full
            !bg-[var(--button-bg)]
            !text-[var(--button-text)]
            px-7 py-3.5
            text-sm font-semibold
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:shadow-[var(--primary)]/15
            hover:!bg-[var(--button-hover)]
          "
        >
          Explore Projects
        </Button>

        <Button
          href={SITE_CONFIG.resume}
          variant="outline"
          leftIcon={<Download size={16} />}
          className="
            group rounded-full
            border border-[var(--border)]
            bg-transparent
            px-7 py-3.5
            text-sm font-semibold
            text-[var(--foreground)]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[var(--card)]
          "
        >
          Download CV
        </Button>
      </motion.div>

      {/* Bottom note */}
      <motion.div
        variants={reveal}
        className="
          mt-12 flex items-center gap-3
          border-t border-[var(--border)]
          pt-5
        "
      >
        <MoveDownRight size={16} className="text-[var(--muted)]" />

        <span
          className="
          text-[10px] font-medium
          tracking-[0.18em]
          text-[var(--muted)]
        "
        >
          SCROLL DOWN TO DISCOVER MY WORK
        </span>
      </motion.div>
    </motion.div>
  );
}
