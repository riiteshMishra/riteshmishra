import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ExperienceCta = () => {
  return (
    <section className="mt-24 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
      <p className="font-roboto text-sm font-medium text-accent-green">
        What&apos;s next?
      </p>

      <h2 className="mt-4 font-headline-mozi text-3xl font-semibold sm:text-4xl">
        Still building. Still learning.
      </h2>

      <p className="mx-auto mt-4 max-w-xl font-roboto text-sm leading-6 text-text-muted">
        Every project is another opportunity to learn something new and build
        better software.
      </p>

      <Link
        href="/projects"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
      >
        Explore my projects
        <ArrowRight className="size-4" />
      </Link>
    </section>
  );
};

export default ExperienceCta;
