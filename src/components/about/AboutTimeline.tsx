const timeline = [
  {
    year: "2021",
    title: "Started Software Engineering at UPI",
    description:
      "Began studying Software Engineering at Universitas Pendidikan Indonesia and exploring web development technologies.",
  },
  {
    year: "Feb – May 2024",
    title: "Web Developer Intern - PT Len Industri",
    description:
      "Developed an internal internship management system with participant management, search filtering, dashboard, and CRUD functionality.",
  },
  {
    year: "2025",
    title: "Web Development Projects & Skill Growth",
    description:
      "Developed web applications such as Stayza Booking App and Kebun Taniku using React.js, Next.js, and modern web technologies.",
  },
  {
    year: "2026 — Present",
    title: "Software Engineering Graduate",
    description:
      "Graduated with a GPA of 3.79 and currently focusing on building modern web applications while pursuing opportunities as a Front-End Developer.",
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