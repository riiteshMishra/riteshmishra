import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { skillsCta } from "@/data/content/skills";

const SkillsCta = () => {
  return (
    <section className="mt-24 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
      <Sparkles className="mx-auto size-8 text-accent-green" />

      <p className="mt-5 font-roboto text-sm font-medium text-accent-green">
        {skillsCta.eyebrow}
      </p>

      <h2 className="mt-3 font-headline-mozi text-3xl font-semibold sm:text-4xl">
        {skillsCta.title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl font-roboto text-sm leading-6 text-text-muted">
        {skillsCta.description}
      </p>

      <Link
        href={skillsCta.buttonHref}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
      >
        {skillsCta.buttonLabel}
        <ArrowRight className="size-4" />
      </Link>
    </section>
  );
};

export default SkillsCta;
