import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import ProjectsPageData from "@/components/core/projects";
import { createPageMetadata, createWebPageJsonLd, createBreadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore selected web development projects by Ritesh Mishra, featuring modern web applications built with React, Next.js, Node.js, and TypeScript.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: "Projects | Ritesh Mishra",
          description:
            "Explore selected web development projects by Ritesh Mishra, featuring modern web applications built with React, Next.js, Node.js, and TypeScript.",
          url: absoluteUrl("/projects"),
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Projects", url: absoluteUrl("/projects") },
        ])}
      />
      <ProjectsPageData />
    </>
  );
}
