import MotionFadeUp from "@/components/common/motion-fade-up";
import { skillsHero } from "@/data/content/skills";
import { pageHero } from "@/lib/layout";

interface SkillsHeroProps {
  as?: "h1" | "h2";
}

const SkillsHero = ({ as = "h1" }: SkillsHeroProps) => {
  const Heading = as;
  return (
    <MotionFadeUp>
      <section className={pageHero}>
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          {skillsHero.eyebrow}
        </p>

        <Heading className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          {skillsHero.title}
        </Heading>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          {skillsHero.description}
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default SkillsHero;
