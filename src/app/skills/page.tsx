import SkillsPage from "@/components/core/skills/skills-page";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd, createBreadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Explore the frontend, backend, and full-stack development skills used by Ritesh Mishra.",
  path: "/skills",
});

const Skills = () => {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: "Skills | Ritesh Mishra",
          description:
            "Explore the frontend, backend, and full-stack development skills used by Ritesh Mishra.",
          url: absoluteUrl("/skills"),
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Skills", url: absoluteUrl("/skills") },
        ])}
      />
      <SkillsPage />
    </>
  );
};

export default Skills;
