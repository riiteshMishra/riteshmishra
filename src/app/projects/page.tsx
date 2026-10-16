import type { Metadata } from "next";

import ProjectsPageData from "@/components/core/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore selected web development projects by Ritesh Mishra, featuring modern web applications built with React, Next.js, Node.js, and TypeScript.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageData />;
}
