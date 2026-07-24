import FloatingBadge from "@/components/common/FloatingBadge/FloatingBadge";

import { technologies } from "@/data/technologies";

export default function HeroTech() {
  return (
    <>
      {technologies.map((item) => (
        <FloatingBadge
          key={item.name}
          className={item.className}
        >
          {item.name}
        </FloatingBadge>
      ))}
    </>
  );
}