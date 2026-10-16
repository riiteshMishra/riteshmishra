import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/content/projects";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
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
  );
};

export default ProjectDetails;
