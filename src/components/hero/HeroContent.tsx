import { ArrowRight, Download } from "lucide-react";

import Button from "@/components/ui/Button";
import AvailabilityBadge from "./AvailabilityBadge";

import { SITE_CONFIG } from "@/lib/constants";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <AvailabilityBadge />

      <p
        className="
          mt-8
          text-xs
          font-medium
          uppercase
          tracking-[0.45em]
          text-[var(--muted)]
        "
      >
        Hello, I'm
      </p>

      <h1
        className="
          mt-4
          text-5xl
          font-bold
          leading-[0.95]
          tracking-[-0.04em]
          text-[var(--foreground)]

          sm:text-6xl
          lg:text-7xl
        "
      >
        Ghifarialdhy
        <br />
        Rahmansyah
        <br />
        Nitikusumah
      </h1>

      <h2
        className="
          mt-6
          max-w-xl
          text-xl
          font-medium
          leading-relaxed
          text-[var(--foreground)]

          lg:text-2xl
        "
      >
        {SITE_CONFIG.role}
      </h2>

      <p
        className="
          mt-8
          max-w-xl
          text-base
          leading-8
          text-[var(--muted)]
        "
      >
        {SITE_CONFIG.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        {/* Primary Button */}
        <Button
          href="#projects"
          rightIcon={
            <ArrowRight
              size={18}
              className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
            />
          }
          className="
    group

    rounded-full

    !bg-black
    !text-white

    dark:!bg-white
    dark:!text-black

    px-7
    py-3.5

    text-sm
    font-semibold

    transition-all
    duration-300

    hover:-translate-y-1
    hover:!bg-zinc-800

    dark:hover:!bg-zinc-200
  "
        >
          View Projects
        </Button>

        {/* Outline Button */}
        <Button
          href={SITE_CONFIG.resume}
          variant="outline"
          leftIcon={
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          }
          className="
            group
            rounded-full
            border
            border-[var(--border)]
            bg-transparent
            px-7
            py-3.5
            text-sm
            font-semibold
            text-[var(--foreground)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[var(--card)]
          "
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
