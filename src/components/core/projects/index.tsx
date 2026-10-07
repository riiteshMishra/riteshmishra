import { projects } from "@/data/content/projects";
import ProjectGrid from "./project-grid";
import ProjectsHero from "./projects-hero";
import ProjectsCta from "./projects-cta";

const ProjectsPageData = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <ProjectsHero />

      <ProjectGrid projects={projects} />

      <ProjectsCta />
    </main>
  );
};

export default ProjectsPageData;
