"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const badges = [
  { icon: SiReact, angle: 0 },
  { icon: SiNextdotjs, angle: 90 },
  { icon: SiTypescript, angle: 180 },
  { icon: SiNodedotjs, angle: 270 },
];

export default function HeroImage() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        items-center
        justify-center

        h-[340px]
        w-[340px]

        sm:h-[470px]
        sm:w-[470px]

        lg:h-[620px]
        lg:w-[620px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute

          h-[300px]
          w-[300px]

          rounded-full
          bg-[var(--primary)]
          opacity-10

          blur-[90px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[120px]

          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[140px]
        "
      />

      {/* Outer Ring */}
      <div
        className="
          absolute

          h-[280px]
          w-[280px]

          rounded-full
          border
          border-[var(--border)]

          sm:h-[390px]
          sm:w-[390px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* Orbit Ring */}
      <div
        className="
          absolute

          h-[320px]
          w-[320px]

          rounded-full
          border
          border-dashed
          border-[var(--border)]
          opacity-60

          sm:h-[450px]
          sm:w-[450px]

          lg:h-[560px]
          lg:w-[560px]
        "
      />

      {/* Orbit */}
      {/* Orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
    absolute

    h-[320px]
    w-[320px]

    sm:h-[450px]
    sm:w-[450px]

    lg:h-[560px]
    lg:w-[560px]
  "
      >
        {badges.map(({ icon: Icon, angle }, index) => (
          <div
            key={index}
            style={{
              transform: `rotate(${angle}deg)`,
            }}
            className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
      "
          >
            {/* Radius */}
            <div
              className="
          -translate-y-[170px]

          sm:-translate-y-[235px]

          lg:-translate-y-[292px]
        "
            >
              {/* Counter Rotate supaya badge tetap tegak */}
              <motion.div
                animate={{
                  rotate: -360 - angle,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--card)]

            backdrop-blur-xl

            shadow-[0_8px_30px_rgba(0,0,0,.15)]

            sm:h-12
            sm:w-12

            lg:h-16
            lg:w-16
          "
              >
                <Icon
                  className="
              h-5
              w-5

              text-[var(--foreground)]

              sm:h-6
              sm:w-6

              lg:h-8
              lg:w-8
            "
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Profile */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          h-[220px]
          w-[220px]

          overflow-hidden
          rounded-full

          border-4
          border-[var(--border)]

          bg-[var(--card)]

          shadow-[0_20px_80px_rgba(0,0,0,.15)]

          sm:h-[320px]
          sm:w-[320px]

          lg:h-[420px]
          lg:w-[420px]
        "
      >
        <Image
          src="/images/profile1.png"
          alt="Ghifar"
          fill
          priority
          sizes="(max-width:640px) 220px,
                 (max-width:1024px) 320px,
                 420px"
          className="
            object-cover
            object-center

            grayscale

            transition-all
            duration-700

            hover:scale-105
            hover:grayscale-0
          "
        />
      </motion.div>
    </div>
  );
}
