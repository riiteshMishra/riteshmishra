import SkillsCta from "./skills-cta";
import SkillsGrid from "./skills-grid";
import SkillsHero from "./skills-hero";
import { pageShell } from "@/lib/layout";

interface SkillsPageProps {
  headingLevel?: "h1" | "h2";
}

const SkillsPage = ({ headingLevel = "h1" }: SkillsPageProps) => {
  return (
    <main className={pageShell}>
      <SkillsHero as={headingLevel} />

      <SkillsGrid />

      <SkillsCta />
    </main>
  );
};

export default SkillsPage;
