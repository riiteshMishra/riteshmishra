import ExperienceCta from "./experience-cta";
import ExperienceHero from "./experience-hero";
import ExperienceTimeline from "./experience-timeline";

const ExperiencePage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <ExperienceHero />

      <ExperienceTimeline />

      <ExperienceCta />
    </main>
  );
};

export default ExperiencePage;
