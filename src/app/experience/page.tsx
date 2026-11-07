import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd, createBreadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import ExperiencePage from "@/components/core/experience/experience-page";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Explore Ritesh Mishra's development experience, technical work, and practical projects in modern web development.",
  path: "/experience",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: "Experience | Ritesh Mishra",
          description:
            "Explore Ritesh Mishra's development experience, technical work, and practical projects in modern web development.",
          url: absoluteUrl("/experience"),
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Experience", url: absoluteUrl("/experience") },
        ])}
      />
      <ExperiencePage />
    </>
  );
}
