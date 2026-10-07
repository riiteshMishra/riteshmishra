import AboutHero from "../about/about-hero";
import AboutIntroduction from "../about/about-introduction";
import WhatIBuild from "../about/what-i-build";
import AboutCta from "../about/about-cta";
import Currently from "../about/currently";
import DevelopmentApproach from "../about/development-approach";
import TechStack from "../about/tech-stack";

const AboutSection = () => {
  return (
    <section className="mx-auto w-full  px-5 py-20 sm:px-8">
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
