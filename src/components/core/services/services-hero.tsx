import MotionFadeUp from "@/components/common/motion-fade-up";
import { pageHero } from "@/lib/layout";

interface ServicesHeroProps {
  as?: "h1" | "h2";
}

const ServicesHero = ({ as = "h1" }: ServicesHeroProps) => {
  const Heading = as;
  return (
    <MotionFadeUp>
      <section className={pageHero}>
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Services
        </p>

        <Heading className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          What I can build for you.
        </Heading>

        <p className="mt-6 max-w-2xl font-headline-sans text-sm leading-7 text-text-muted sm:text-lg">
          From polished frontend experiences to complete backend systems, I
          build modern web solutions around real product requirements.
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default ServicesHero;
