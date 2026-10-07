import type { SkillCategory } from "@/data/content/skills";

interface SkillCardProps {
  skill: SkillCategory;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <article className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-green/30 sm:p-8">
      <h2 className="font-headline-mozi text-2xl font-semibold tracking-tight">
        {skill.title}
      </h2>

      <p className="mt-3 font-roboto text-sm leading-6 text-text-muted">
        {skill.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {skill.skills.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-background px-3 py-1.5 font-roboto text-xs text-text-muted transition-colors duration-300 group-hover:border-accent-green/20"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
