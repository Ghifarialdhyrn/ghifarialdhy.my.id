export default function AvailabilityBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[var(--border)]
        bg-[var(--card)]
        px-4
        py-2
        text-sm
        text-[var(--muted)]
        backdrop-blur
      "
    >

      <span
        className="
          relative
          flex
          h-2.5
          w-2.5
        "
      >
        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            animate-ping
            rounded-full
            bg-green-400
            opacity-75
          "
        />

        <span
          className="
            relative
            inline-flex
            h-2.5
            w-2.5
            rounded-full
            bg-green-500
          "
        />
      </span>


      Available for opportunities

    </div>
  );
}