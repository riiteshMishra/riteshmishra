import { ExternalLink, GitMergeIcon } from "lucide-react";

import type { Project } from "@/data/content/projects";

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
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
  );
};

export default ProjectLinks;
