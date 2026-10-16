import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";
import ExperiencePage from "@/components/core/experience/experience-page";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Explore Ritesh Mishra's development experience, technical work, and practical projects in modern web development.",
  path: "/experience",
});

export default function Page() {
  return <ExperiencePage />;
}
