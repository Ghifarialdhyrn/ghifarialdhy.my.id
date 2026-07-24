"use client";

import { motion } from "framer-motion";

export default function Spotlight() {
  return (
    <motion.div
      animate={{
        x: [0, 150, -50, 0],
        y: [0, -100, 80, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
      absolute
      left-1/2
      top-1/2
      h-[700px]
      w-[700px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-indigo-500/10
      blur-[180px]
      "
    />
  );
}