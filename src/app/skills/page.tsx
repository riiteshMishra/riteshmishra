import SkillsPage from "@/components/core/skills/skills-page";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Explore the frontend, backend, and full-stack development skills used by Ritesh Mishra.",
  path: "/skills",
});

const Skills = () => {
  return <SkillsPage />;
};

export default Skills;
