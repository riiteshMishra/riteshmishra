import ProjectsPageData from "@/components/core/projects";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore selected web development projects by Ritesh Mishra, built with modern JavaScript and TypeScript technologies.",
  path: "/projects",
});

const ProjectsPage = () => {
  return <ProjectsPageData />;
};

export default ProjectsPage;
