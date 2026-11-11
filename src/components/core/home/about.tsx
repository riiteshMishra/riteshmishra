import AboutHero from "../about/about-hero";
import AboutIntroduction from "../about/about-introduction";
import WhatIBuild from "../about/what-i-build";
import AboutCta from "../about/about-cta";
import Currently from "../about/currently";
import DevelopmentApproach from "../about/development-approach";
import TechStack from "../about/tech-stack";
import TechUniverseExperience from "../about/TechUniverseExperience";
import { pageSection } from "@/lib/layout";

interface AboutSectionProps {
  headingLevel?: "h1" | "h2";
}

const AboutSection = ({ headingLevel = "h1" }: AboutSectionProps) => {
  return (
    <section className={pageSection}>
      <AboutHero as={headingLevel} />
      <AboutIntroduction />
      <WhatIBuild />
      <TechStack />
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <p className="font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Interactive
        </p>
        <h2 className="mt-3 font-headline-mozi text-4xl font-bold text-text-primary sm:text-5xl">
          My technical universe.
        </h2>
        <p className="mt-5 max-w-2xl font-roboto leading-7 text-text-muted">
          An interactive map of the technologies, tools, and architectural
          concepts I work with. Select a node to learn more.
        </p>
        <div className="mt-10">
          <TechUniverseExperience />
        </div>
      </section>
      <DevelopmentApproach />
      <Currently />
      <AboutCta />
    </section>
  );
};

export default AboutSection;
