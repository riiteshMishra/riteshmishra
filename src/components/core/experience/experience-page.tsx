import ExperienceCta from "./experience-cta";
import ExperienceHero from "./experience-hero";
import ExperienceTimeline from "./experience-timeline";
import { pageShell } from "@/lib/layout";

const ExperiencePage = () => {
  return (
    <main className={`${pageShell}`}>
      <ExperienceHero />

      <ExperienceTimeline />

      <ExperienceCta />
    </main>
  );
};

export default ExperiencePage;
