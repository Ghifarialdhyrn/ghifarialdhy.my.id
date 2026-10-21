import { stackCards } from "./technologies";

interface MarqueeRowProps {
  reverse?: boolean;
}

function MarqueeRow({ reverse = false }: MarqueeRowProps) {
  const items = [...stackCards, ...stackCards, ...stackCards, ...stackCards];

  return (
    <div className="relative overflow-hidden">
      {/* Left Fade */}
      <div
        className="
    pointer-events-none
    absolute
    inset-y-0
    left-0
    z-20
    w-8
    sm:w-20
    lg:w-32
    bg-gradient-to-r
    from-[var(--background)]
    via-[var(--background)]
    via-40%
    to-transparent
  "
      />

      {/* Right Fade */}
      <div
        className="
    pointer-events-none
    absolute
    inset-y-0
    right-0
    z-20
    w-8
    sm:w-20
    lg:w-32
    bg-gradient-to-l
    from-[var(--background)]
    via-[var(--background)]
    via-40%
    to-transparent
  "
      />

      <div
        className={`
          flex
          w-max
          gap-1.5
          sm:gap-3
          lg:gap-4
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
          group-hover:[animation-play-state:paused]
        `}
      >
        {items.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={`${tech.name}-${index}`}
              className="
                flex
                items-center
                gap-1
                sm:gap-2
                whitespace-nowrap
                rounded-full
                border
                border-neutral-200
                bg-white/80
                shadow-sm
                backdrop-blur-xl
                px-2.5
                py-1.5
                sm:px-4
                sm:py-2.5
                lg:px-5
                lg:py-3
                transition-colors
                duration-500

                dark:border-neutral-800
                dark:bg-neutral-900/80
                dark:shadow-none
              "
            >
              <Icon
                className="
                  h-3.5
                  w-3.5
                  sm:h-[18px]
                  sm:w-[18px]
                  text-neutral-500
                  transition-colors
                  duration-500
                  dark:text-neutral-400
                "
              />

              <span
                className="
                  text-[10px]
                  sm:text-sm
                  font-medium
                  text-neutral-800
                  transition-colors
                  duration-500
                  dark:text-neutral-200
                "
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div
      className="
        group
        relative
        mt-14
        sm:mt-20
        space-y-3
        sm:space-y-5
        overflow-hidden
      "
    >
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>
  );
}
