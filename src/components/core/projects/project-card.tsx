import {
  ArrowUpRight,
  ExternalLink,
  GitMergeIcon,
  Layers3,
} from "lucide-react";

import type { Project } from "@/data/content/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-green/30 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-background ${
          project.featured ? "aspect-2/1" : "aspect-16/10"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Layers3 className="size-12 text-text-muted/20 transition-transform duration-500 group-hover:scale-110" />
        </div>

        <div className="absolute left-5 top-5 rounded-full border border-border bg-card/80 px-3 py-1.5 backdrop-blur-md">
          <span className="font-roboto text-xs font-medium text-text-muted">
            {project.category}
          </span>
        </div>

        {project.featured && (
          <div className="absolute right-5 top-5 rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1.5">
            <span className="font-roboto text-xs font-medium text-accent-green">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-headline-mozi text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-3 max-w-2xl font-roboto text-sm leading-6 text-text-muted sm:text-base">
              {project.description}
            </p>
          </div>

          <ArrowUpRight className="size-5 shrink-0 text-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-green" />
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-1.5 font-roboto text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-3">
          {project.liveDemo !== "#" && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-green px-4 py-2.5 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          )}

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 font-roboto text-sm font-medium transition-colors duration-300 hover:border-accent-green/40"
            >
              <GitMergeIcon className="size-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
