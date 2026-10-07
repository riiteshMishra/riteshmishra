import SkillsCta from "./skills-cta";
import SkillsGrid from "./skills-grid";
import SkillsHero from "./skills-hero";

const SkillsPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <SkillsHero />

      <SkillsGrid />

      <SkillsCta />
    </main>
  );
};

export default SkillsPage;
