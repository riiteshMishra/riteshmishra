import { projects } from "@/data/content/projects";
import ProjectGrid from "./project-grid";
import ProjectsHero from "./projects-hero";
import ProjectsCta from "./projects-cta";
import { pageShell } from "@/lib/layout";

const ProjectsPageData = () => {
  return (
    <main className={`${pageShell} overflow-hidden`}>
      <ProjectsHero />

      <ProjectGrid projects={projects} />

      <ProjectsCta />
    </main>
  );
};

export default ProjectsPageData;
