import AboutCta from "@/components/core/about/about-cta";
import AboutHero from "@/components/core/about/about-hero";
import AboutIntroduction from "@/components/core/about/about-introduction";
import Currently from "@/components/core/about/currently";
import DevelopmentApproach from "@/components/core/about/development-approach";
import TechStack from "@/components/core/about/tech-stack";
import WhatIBuild from "@/components/core/about/what-i-build";
import { pageShell } from "@/lib/layout";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Ritesh Mishra, a Full Stack Developer focused on building modern, scalable web applications.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <main>
      <AboutHero />

      <AboutIntroduction />

      <WhatIBuild />

      <TechStack />

      <DevelopmentApproach />

      <Currently />

      <AboutCta />
    </main>
  );
};

export default AboutPage;
