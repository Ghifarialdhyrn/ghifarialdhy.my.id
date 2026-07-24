import Image from "next/image";

import HeroTech from "./HeroTech";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <Image
        src="/images/profile.png"
        alt="Profile"
        width={450}
        height={520}
        priority
        className="relative rounded-[36px] border border-white/10 object-cover shadow-2xl"
      />

      <HeroTech />
    </div>
  );
}