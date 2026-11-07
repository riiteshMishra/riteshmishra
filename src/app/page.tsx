import { GradientOrb } from "@/components/common/backgrounds";
import AboutSection from "@/components/core/home/about";
import Developer from "@/components/core/home/developer/Developer";

import Introduction from "@/components/core/home/Introduction";
import ProjectsPageData from "@/components/core/projects";
import ServicesPage from "@/components/core/services";
import ContactPage from "@/components/core/contact";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, siteConfig, createWebPageJsonLd, absoluteUrl } from "@/lib/seo";
import ExperiencePage from "@/components/core/experience/experience-page";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

const Home = () => {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: siteConfig.title,
          description: siteConfig.description,
          url: absoluteUrl("/"),
        })}
      />
      <main>
      <div className="relative overflow-hidden py-16">
        <GradientOrb />
        <Introduction />
        <Developer />
      </div>

      <div className="relative overflow-hidden">
        <GradientOrb />
        <AboutSection headingLevel="h2" />
      </div>

      <ProjectsPageData headingLevel="h2" />
      <ExperiencePage headingLevel="h2" />
      <ServicesPage headingLevel="h2" />
      <ContactPage headingLevel="h2" />
    </main>
    </>
  );
};

export default Home;
