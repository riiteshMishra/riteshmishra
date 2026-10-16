import Image from "next/image";
import { Layers3 } from "lucide-react";

import type { Project } from "@/data/content/projects";

interface ProjectImageProps {
  project: Project;
}

const ProjectImage = ({ project }: ProjectImageProps) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-background ${
        project.featured ? "aspect-2/1" : "aspect-16/10"
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={
            project.featured
              ? "(max-width: 768px) 90vw, 100vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className=" transition-transform duration-200 ease-out group-hover:scale-105"
        />
      ) : (
        <Layers3 className="size-12 text-text-muted/20 transition-transform duration-500 group-hover:scale-110" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

      <div className="absolute left-5 top-5 z-10 rounded-full border border-border bg-card/80 px-3 py-1.5 backdrop-blur-md">
        <span className="font-roboto text-xs font-medium text-text-muted">
          {project.category}
        </span>
      </div>

      {project.featured && (
        <div className="absolute right-5 top-5 z-10 rounded-full border border-accent-green/20 bg-accent-green/10 px-3 py-1.5">
          <span className="font-roboto text-xs font-medium text-accent-green">
            Featured
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
