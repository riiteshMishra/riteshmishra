import ProjectCard from "./project-card";
import type { Project } from "@/data/content/projects";
interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectGrid;
