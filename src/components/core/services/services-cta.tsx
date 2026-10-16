import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { sectionGap } from "@/lib/layout";
import MotionFadeUp from "@/components/common/motion-fade-up";

const ServicesCta = () => {
  return (
    <MotionFadeUp>
      <section
        className={`${sectionGap} rounded-3xl border border-border bg-card p-8 text-center sm:p-12`}
      >
        <p className="font-roboto text-sm font-medium text-accent-green">
          Have a project in mind?
        </p>

        <h2 className="mt-3 font-headline-mozi text-3xl font-semibold sm:text-4xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-headline-sans text-sm leading-6 text-text-muted ">
          Tell me what you&apos;re trying to build and we can figure out the
          right technical approach together.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_24px_-8px_var(--color-accent-green)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
        >
          Start a conversation
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </MotionFadeUp>
  );
};

export default ServicesCta;
