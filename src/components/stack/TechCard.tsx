import { IconType } from "react-icons";

interface Props {
  name: string;
  category: string;
  icon: IconType;
  description: string;
  position: number;
}

export default function TechCard({
  icon: Icon,
  name,
  category,
  description,
  position,
}: Props) {
  const rotate = [
    "-rotate-[12deg]",
    "-rotate-[6deg]",
    "rotate-0",
    "rotate-[6deg]",
    "rotate-[12deg]",
    "rotate-[15deg]",
    "-rotate-[15deg]",
  ];

  const translate = [
    "-translate-y-3",
    "-translate-y-2",
    "translate-y-0",
    "-translate-y-2",
    "-translate-y-3",
    "",
    "",
  ];

  return (
    <div
      className={`
        theme-dark-card
        group
        relative

        -ml-5
        sm:-ml-3
        lg:-ml-3

        flex
        items-center
        justify-center

        w-[68px]
        h-[88px]

        sm:w-[110px]
        sm:h-[140px]

        lg:w-[120px]
        lg:h-[150px]

        overflow-hidden

        rounded-[22px]
        sm:rounded-[28px]
        lg:rounded-[32px]

        border
        border-neutral-800

        bg-neutral-900/90

        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,.25)]

        transition-all
        duration-500

        hover:-translate-y-6
        hover:z-50

        hover:border-neutral-600

        ${rotate[position % rotate.length]}
        ${translate[position % translate.length]}
      `}
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          bg-gradient-to-br
          from-white/10
          via-white/5
          to-transparent

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          transition-all
          duration-500

          group-hover:scale-75
          group-hover:opacity-0
        "
      >
        <Icon
          className="
            w-7
            h-7

            sm:w-12
            sm:h-12

            lg:w-16
            lg:h-16

            text-neutral-200

            transition-all
            duration-500
          "
        />
      </div>

      {/* Hover */}
      <div
        className="
          absolute
          inset-0

          flex
          flex-col
          items-center
          justify-center

          px-2
          sm:px-4

          text-center

          opacity-0
          scale-95

          transition-all
          duration-500

          group-hover:opacity-100
          group-hover:scale-100
        "
      >
        <span
          className="
            text-[8px]
            sm:text-[9px]
            lg:text-[10px]

            uppercase
            tracking-[0.25em]

            text-neutral-400
          "
        >
          {category}
        </span>

        <h3
          className="
            mt-1

            text-[11px]
            sm:text-base
            lg:text-lg

            font-semibold

            text-white
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-1

            text-[8px]
            sm:text-[10px]
            lg:text-[11px]

            leading-relaxed

            text-neutral-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
