import About from "@/components/about/About";
import CTA from "@/components/CTA/CTA";

import Experience from "@/components/experience/Experience";

import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/stack/TechStack";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="site-background" />
      <div className="site-noise" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <CTA />
      </main>

      <Footer />
    </>
  );
}