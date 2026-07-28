const timeline = [
  {
    year: "2021",
    title: "Started Computer Science",
    description:
      "Began studying Computer Science and exploring modern web development.",
  },
  {
    year: "Feb – May 2024",
    title: "Web Developer Intern, PT Len Industri",
    description:
      "Built an internal internship management system with dashboard, filtering, and CRUD workflow.",
  },
  {
    year: "2025",
    title: "Production Projects",
    description:
      "Developed Stayza Booking App and Website Kebun Taniku using React.js and Next.js.",
  },
  {
    year: "2026 — Present",
    title: "Building Modern Web Applications",
    description:
      "Continuing to improve frontend engineering skills and create scalable applications.",
  },
];


export default function AboutTimeline() {
  return (
    <div className="border-t border-zinc-800 pt-8 lg:border-t-0 lg:pt-0">
      <p className="text-sm font-medium text-zinc-500">
        Journey
      </p>


      <div className="mt-8 space-y-10">
        {timeline.map((item, index) => (
          <div
            key={item.year}
            className="flex gap-6"
          >
            {/* Year */}
            <div className="w-28 flex-shrink-0 text-sm font-mono text-zinc-500">
              {item.year}
            </div>


            {/* Content */}
            <div
              className="
                relative
                border-l
                border-zinc-800
                pl-6
                before:absolute
                before:-left-[6px]
                before:top-1
                before:h-3
                before:w-3
                before:rounded-full
                before:border
                before:border-zinc-500
                before:bg-zinc-950
              "
            >
              {index === timeline.length - 1 && (
                <span
                  className="
                    absolute
                    -left-[6px]
                    top-1
                    h-3
                    w-3
                    rounded-full
                    bg-white
                  "
                />
              )}


              <h3 className="font-semibold text-white">
                {item.title}
              </h3>


              <p className="mt-2 max-w-sm text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}