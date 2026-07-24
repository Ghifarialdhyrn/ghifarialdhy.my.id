export default function GridBackground() {
  return (
    <div
      className="
      absolute
      inset-0
      opacity-[0.04]
      pointer-events-none
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}