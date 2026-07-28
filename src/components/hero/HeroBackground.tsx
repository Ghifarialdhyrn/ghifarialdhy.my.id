"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <motion.div
        animate={{
          scale:[1,1.08,1],
          opacity:[0.12,0.25,0.12],
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-10
          -z-10
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-[var(--primary)]
          opacity-20
          blur-[180px]
        "
      />


      <motion.div
        animate={{
          x:[-30,30,-30],
          y:[0,20,0],
        }}
        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut",
        }}
        className="
          absolute
          right-0
          top-40
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--muted)]
          opacity-20
          blur-[140px]
        "
      />


      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          -z-10
          bg-gradient-to-b
          from-transparent
          to-[var(--background)]
        "
      />

    </>
  );
}