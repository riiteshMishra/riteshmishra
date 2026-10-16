import SkillsCta from "./skills-cta";
import SkillsGrid from "./skills-grid";
import SkillsHero from "./skills-hero";
import { pageShell } from "@/lib/layout";

const SkillsPage = () => {
  return (
    <main className={pageShell}>
      <SkillsHero />

      <SkillsGrid />

      <SkillsCta />
    </main>
  );
};

export default SkillsPage;
