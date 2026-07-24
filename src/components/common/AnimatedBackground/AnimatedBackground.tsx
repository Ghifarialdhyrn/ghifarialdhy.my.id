"use client";

import GridBackground from "../GridBackground/GridBackground";
import Noise from "../Noise/Noise";
import Spotlight from "../Spotlight/Spotlight";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Spotlight />

      <GridBackground />

      <Noise />
    </div>
  );
}