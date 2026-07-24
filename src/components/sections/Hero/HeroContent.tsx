import { profile } from "@/data/profile";

import HeroCTA from "./HeroCTA";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

import GradientText from "@/components/common/GradientText";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
        <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        Available for Work
      </div>

      <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
        Building
        <br />
        <GradientText>
          Digital Experiences
        </GradientText>
      </h1>

      <p className="mt-8 text-lg leading-8 text-zinc-400">
        {profile.description}
      </p>

      <HeroCTA />

      <HeroStats />

      <HeroSocial />
    </div>
  );
}