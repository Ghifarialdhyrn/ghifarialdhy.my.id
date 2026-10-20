import Image from "next/image";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Project } from "@/types/project";
import { tagColors } from "@/constants/tag-colors";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="theme-dark-card group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-600">
      {/* Banner */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Tech Stack */}

        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`project-tag rounded-full bg-black/60 px-3 py-1 text-xs font-medium backdrop-blur-md ${
                tagColors[tag] ?? "text-zinc-300"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>

        {/* Links */}

        <div className="mt-auto flex items-center gap-6 pt-8">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <Globe size={16} />
              Website
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
