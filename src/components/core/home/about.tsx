import AboutHero from "../about/about-hero";
import AboutIntroduction from "../about/about-introduction";
import WhatIBuild from "../about/what-i-build";
import AboutCta from "../about/about-cta";
import Currently from "../about/currently";
import DevelopmentApproach from "../about/development-approach";
import TechStack from "../about/tech-stack";
import { pageSection } from "@/lib/layout";

const AboutSection = () => {
  return (
    <section className={pageSection}>
      <AboutHero />
      <AboutIntroduction />
      <WhatIBuild />
      <TechStack />
      <DevelopmentApproach />
      <Currently />
      <AboutCta />
    </section>
  );
};

export default AboutSection;
