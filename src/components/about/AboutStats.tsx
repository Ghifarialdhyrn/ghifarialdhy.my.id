const stats = [
  {
    value: "1+",
    label: "Years Experience",
  },
  {
    value: "6",
    label: "Projects Completed",
  },
  {
    value: "12+",
    label: "Technologies Learned",
  },
  {
    value: "3.79",
    label: "GPA",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 justify-center">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
            transition
            duration-300
            hover:-translate-y-1
            hover:border-zinc-700
            text-center
          "
        >
          <h3 className="text-3xl font-bold tracking-tight text-white text-center">
            {item.value}
          </h3>

          <p className="mt-2 text-xs text-zinc-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
