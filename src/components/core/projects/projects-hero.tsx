import MotionFadeUp from "@/components/common/motion-fade-up";

const ProjectsHero = () => {
  return (
    <MotionFadeUp>
      <section className="mb-20 max-w-3xl">
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          My Projects
        </p>

        <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          Things I&apos;ve built.
        </h1>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          A collection of projects I&apos;ve worked on while learning,
          experimenting and building real-world digital products.
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default ProjectsHero;
