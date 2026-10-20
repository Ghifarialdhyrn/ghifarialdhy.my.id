"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32"
    >
      <ScrollReveal>
        <div className="theme-dark-card mx-auto max-w-5xl rounded-[28px] border border-zinc-800 bg-zinc-900 px-6 py-12 text-center sm:rounded-[32px] sm:px-8 sm:py-16 lg:rounded-[40px] lg:px-10 lg:py-20">

          {/* Subtitle */}
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
            Let's Build Something Amazing
          </span>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Interested in working together?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            I'm currently available for freelance projects, internships, and
            full-time opportunities. Let's create something impactful together.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <Link
              href="mailto:your@email.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200 sm:px-8 sm:py-4"
            >
              <span className="text-sm text-black sm:text-base">
                Contact Me
              </span>

              <ArrowRight
                size={18}
                color="#000000"
                strokeWidth={2.25}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
