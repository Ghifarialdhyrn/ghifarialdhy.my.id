import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "../ui/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-mono uppercase tracking-[0.2em] text-sm text-zinc-500">
            Selected Work
          </span>

          <h2 className="mt-5 text-5xl font-bold">Featured Projects</h2>
          <ScrollReveal>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
