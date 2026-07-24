import { stats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="mt-14 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-4xl font-bold">
            {item.value}
          </h3>

          <p className="mt-2 text-zinc-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}