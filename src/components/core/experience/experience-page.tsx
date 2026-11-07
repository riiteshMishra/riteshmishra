import ExperienceCta from "./experience-cta";
import ExperienceHero from "./experience-hero";
import ExperienceTimeline from "./experience-timeline";
import { pageShell } from "@/lib/layout";

interface ExperiencePageProps {
  headingLevel?: "h1" | "h2";
}

const ExperiencePage = ({ headingLevel = "h1" }: ExperiencePageProps) => {
  return (
    <main className={`${pageShell}`}>
      <ExperienceHero as={headingLevel} />

      <ExperienceTimeline />

      <ExperienceCta />
    </main>
  );
};

export default ExperiencePage;
