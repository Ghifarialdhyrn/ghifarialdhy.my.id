
"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-36
        scroll-mt-28
      "
    >
      {/* Decorative Background */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/4
          -z-10
          h-72
          w-72
          rounded-full
          bg-emerald-500/[0.04]
          blur-[100px]
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20">
            <span className="
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-500
            ">
              Selected Work
            </span>

            <div className="
              mt-5
              flex
              flex-col
              justify-between
              gap-5
              md:flex-row
              md:items-end
            ">
              <h2 className="
                text-4xl
                font-bold
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              ">
                Featured Projects
                <span className="text-emerald-400">.</span>
              </h2>

              <p className="
                max-w-sm
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
              ">
                A selection of digital products and
                development projects I've worked on.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3D Project Grid */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
          style={{
            perspective: "1600px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 65,
                      rotateX: 8,
                      scale: 0.94,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.85,
                delay: shouldReduceMotion ? 0 : index * 0.13,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -10,
                      scale: 1.025,
                      rotateX: -2,
                      rotateY: 2,
                      z: 30,
                      transition: {
                        duration: 0.35,
                        ease: "easeOut",
                      },
                    }
              }
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              className="
                relative
                h-full
                will-change-transform
              "
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <ScrollReveal delay={0.2}>
          <div className="
            mt-16
            flex
            items-center
            justify-center
            gap-3
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-600
          ">
            <span className="h-px w-10 bg-zinc-800" />
            More projects coming soon
            <span className="h-px w-10 bg-zinc-800" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
