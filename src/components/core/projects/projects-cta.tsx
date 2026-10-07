import { Code2 } from "lucide-react";
import Link from "next/link";

const ProjectsCta = () => {
  return (
    <section className="mt-24 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
      <Code2 className="mx-auto size-8 text-accent-green" />

      <h2 className="mt-5 font-headline-mozi text-3xl font-semibold">
        Have an idea in mind?
      </h2>

      <p className="mx-auto mt-3 max-w-xl font-roboto text-sm leading-6 text-text-muted">
        I&apos;m always interested in building useful products and solving
        interesting problems.
      </p>

      <Link
        href="/contact"
        className="mt-7 inline-flex rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
      >
        Let&apos;s talk
      </Link>
    </section>
  );
};

export default ProjectsCta;
