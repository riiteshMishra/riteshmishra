import MotionFadeUp from "@/components/common/motion-fade-up";
import { pageHero } from "@/lib/layout";

interface ExperienceHeroProps {
  as?: "h1" | "h2";
}

const ExperienceHero = ({ as = "h1" }: ExperienceHeroProps) => {
  const Heading = as;
  return (
    <MotionFadeUp>
      <section className={pageHero}>
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Experience
        </p>

        <Heading className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          My journey so far.
        </Heading>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          A look at the projects, technologies and experiences that have shaped
          the way I build software.
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default ExperienceHero;
