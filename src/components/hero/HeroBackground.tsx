
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large ambient glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                x: [0, 35, 0],
                opacity: [0.08, 0.16, 0.08],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -top-48 left-[15%]
          h-[520px] w-[520px]
          rounded-full
          bg-[var(--primary)]
          blur-[150px]
          sm:h-[700px] sm:w-[700px]
        "
      />

      {/* Secondary glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -35, 0],
                y: [0, 45, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -right-40 top-[25%]
          h-[350px] w-[350px]
          rounded-full
          bg-[var(--primary)]
          opacity-[0.07]
          blur-[130px]
          sm:h-[500px] sm:w-[500px]
        "
      />

      {/* Editorial grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.045]
          [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      {/* Large decorative circle */}
      <div
        className="
          absolute -right-[18%] top-[12%]
          h-[500px] w-[500px]
          rounded-full
          border border-[var(--border)]
          opacity-40
          sm:h-[750px] sm:w-[750px]
        "
      />

      <div
        className="
          absolute -right-[12%] top-[18%]
          h-[400px] w-[400px]
          rounded-full
          border border-dashed
          border-[var(--border)]
          opacity-30
          sm:h-[650px] sm:w-[650px]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-48
          bg-gradient-to-b
          from-transparent
          to-[var(--background)]
        "
      />
    </div>
  );
}
