import AboutCta from "@/components/core/about/about-cta";
import AboutHero from "@/components/core/about/about-hero";
import AboutIntroduction from "@/components/core/about/about-introduction";
import Currently from "@/components/core/about/currently";
import DevelopmentApproach from "@/components/core/about/development-approach";
import TechStack from "@/components/core/about/tech-stack";
import WhatIBuild from "@/components/core/about/what-i-build";

const AboutPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
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
