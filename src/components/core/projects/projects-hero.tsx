import Link from "next/link";
import MotionFadeUp from "@/components/common/motion-fade-up";
import { pageHero } from "@/lib/layout";

interface ProjectsHeroProps {
  as?: "h1" | "h2";
}

const ProjectsHero = ({ as = "h1" }: ProjectsHeroProps) => {
  const Heading = as;
  return (
    <MotionFadeUp>
      <section className={pageHero}>
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          My Projects
        </p>

        <Heading className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          Things I&apos;ve built.
        </Heading>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          A collection of projects I&apos;ve worked on while learning,
          experimenting and building real-world digital products.
        </p>

        <p className="mt-4 font-roboto text-sm text-text-muted">
          Need something similar built?{" "}
          <Link
            href="/services"
            className="text-accent-green transition-colors hover:text-accent-green/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
          >
            Explore my services
          </Link>
          .
        </p>
      </section>
    </MotionFadeUp>
  );
};

export default ProjectsHero;
