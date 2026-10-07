import { skills } from "@/data/content/skills";
import SkillCard from "./skill-card";

const SkillsGrid = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </section>
  );
};

export default SkillsGrid;
