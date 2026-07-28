import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import TechStack from "@/components/stack/TechStack";

export default function Home() {
  return (
    <>
      {/* Global Background */}
      <div className="site-background" />
      <div className="site-noise" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
}