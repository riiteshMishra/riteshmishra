import { projects } from "@/data/content/projects";
import ProjectGrid from "./project-grid";
import ProjectsHero from "./projects-hero";
import ProjectsCta from "./projects-cta";
import { pageShell } from "@/lib/layout";

interface ProjectsPageDataProps {
  headingLevel?: "h1" | "h2";
}

const ProjectsPageData = ({ headingLevel = "h1" }: ProjectsPageDataProps) => {
  return (
    <main className={`${pageShell} `}>
      <ProjectsHero as={headingLevel} />

      <ProjectGrid projects={projects} />

      <ProjectsCta />
    </main>
  );
};

export default ProjectsPageData;
