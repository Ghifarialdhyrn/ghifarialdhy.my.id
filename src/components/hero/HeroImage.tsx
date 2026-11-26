
"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", angle: 0, size: "normal" },
  { icon: SiNextdotjs, name: "Next.js", angle: 90, size: "large" },
  { icon: SiTypescript, name: "TypeScript", angle: 180, size: "normal" },
  { icon: SiNodedotjs, name: "Node.js", angle: 270, size: "large" },
];

export default function HeroImage() {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const spotlightX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      circle at ${spotlightX} ${spotlightY},
      rgba(255,255,255,0.22),
      transparent 48%
    )
  `;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="
        relative mx-auto
        flex aspect-square w-full
        max-w-[500px]
        items-center justify-center
        [perspective:1200px]
      "
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Ambient light */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.16, 1],
                opacity: [0.1, 0.2, 0.1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute inset-[12%]
          z-0
          rounded-full
          bg-[var(--primary)]
          opacity-15
          blur-[85px]
        "
      />

      {/* Outer orbital ring */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute inset-[3%]
          z-0
          rounded-full
          border border-[var(--border)]
          opacity-60
        "
      >
        <span
          className="
            absolute left-[18%] top-[11%]
            h-1.5 w-1.5 rounded-full
            bg-[var(--primary)]
            shadow-[0_0_12px_var(--primary)]
          "
        />
      </motion.div>

      {/* Inner decorative ring */}
      <div
        className="
          pointer-events-none
          absolute inset-[11%]
          z-0
          rounded-full
          border border-[var(--border)]
          opacity-40
        "
      />

      {/* PORTRAIT */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 h-[86%] w-[74%]"
      >
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : {
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                }
          }
          className="
            group relative
            h-full w-full
            overflow-hidden
            rounded-[2rem]
            border border-[var(--border)]
            bg-[var(--card)]
            shadow-[0_30px_100px_rgba(0,0,0,0.2)]
            sm:rounded-[2.5rem]
          "
        >
          <Image
            src="/images/profile1.png"
            alt="Ghifarialdhy Rahmansyah Nitikusumah"
            fill
            priority
            sizes="
              (max-width: 640px) 270px,
              (max-width: 1024px) 340px,
              380px
            "
            className="
              object-cover object-center
              grayscale
              transition-all duration-700
              group-hover:scale-105
              group-hover:grayscale-0
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-black/50 via-transparent to-white/10
            "
          />

          {/* Spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={shouldReduceMotion ? undefined : { background: spotlight }}
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <p className="text-[9px] font-medium tracking-[0.22em] text-white/65">
              CREATIVE DEVELOPER
            </p>

            <p className="mt-1 text-sm font-semibold tracking-wide text-white sm:text-base">
              Ghifarialdhy RN.
            </p>
          </div>

          {/* Glass highlight */}
          <div
            className="
              pointer-events-none absolute inset-0
              rounded-[2rem]
              border border-white/10
              bg-gradient-to-br
              from-white/10 via-transparent to-black/10
              sm:rounded-[2.5rem]
            "
          />
        </motion.div>
      </motion.div>

      {/* FLOATING TECHNOLOGY ORBIT */}
      <motion.div
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute inset-0
          z-20
          [--orbit-radius:155px]
          sm:[--orbit-radius:195px]
          lg:[--orbit-radius:215px]
        "
      >
        {technologies.map(({ icon: Icon, name, angle, size }) => (
          <div
            key={name}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translateY(calc(var(--orbit-radius) * -1))
              `,
            }}
          >
            {/* Keep icon upright while orbit rotates */}
            <motion.div
              className="pointer-events-auto"
              style={{
                rotate: -angle,
              }}
              animate={shouldReduceMotion ? undefined : { rotate: -360 - angle }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Technology Icon */}
              <div className="group relative">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.12, y: -3 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className={`
                    relative flex items-center justify-center
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--background)]/90
                    shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    backdrop-blur-2xl
                    text-[var(--foreground)]
                    transition-colors duration-300
                    hover:border-[var(--primary)]/50
                    hover:text-[var(--primary)]
                    ${
                      size === "large"
                        ? "h-14 w-14 sm:h-[4.25rem] sm:w-[4.25rem]"
                        : "h-12 w-12 sm:h-14 sm:w-14"
                    }
                  `}
                >
                  <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />

                  {/* Accent dot */}
                  <span
                    className="
                      absolute right-2 top-2
                      h-1.5 w-1.5
                      rounded-full
                      bg-[var(--primary)]
                      opacity-70
                    "
                  />
                </motion.div>

                {/* Hover Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute left-1/2 top-full z-30
                    mt-3
                    -translate-x-1/2 translate-y-1
                    whitespace-nowrap
                    rounded-xl
                    border border-[var(--border)]
                    bg-[var(--background)]/95
                    px-3 py-2
                    text-[11px] font-semibold
                    tracking-wide
                    text-[var(--foreground)]
                    opacity-0
                    shadow-lg shadow-black/10
                    backdrop-blur-xl
                    transition-all duration-200
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {name}

                  <span
                    className="
                      absolute -top-1 left-1/2
                      h-2 w-2
                      -translate-x-1/2
                      rotate-45
                      border-l border-t
                      border-[var(--border)]
                      bg-[var(--background)]
                    "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
