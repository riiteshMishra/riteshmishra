import MotionFadeUp from "@/components/common/motion-fade-up";

const ExperienceHero = () => {
  return (
    <MotionFadeUp>
      <section className="mb-20 max-w-3xl">
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Experience
        </p>

        <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          My journey so far.
        </h1>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          A look at the projects, technologies and experiences that have shaped
          the way I build software.
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default ExperienceHero;
