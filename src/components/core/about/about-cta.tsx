import { ArrowDown } from "lucide-react";
import MotionFadeUp from "@/components/common/motion-fade-up";

const AboutCta = () => {
  return (
    <section className="py-24 text-center">
      <MotionFadeUp>
        <ArrowDown className="mx-auto size-5 animate-bounce text-accent-green" />

        <h2 className="mt-6 font-headline-mozi text-4xl font-bold text-text-primary sm:text-5xl">
          Let&apos;s build something useful.
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-roboto leading-7 text-text-muted">
          Whether it&apos;s a product idea, a web application or an interesting
          technical challenge, I&apos;m always interested in building and
          learning.
        </p>
      </MotionFadeUp>
    </section>
  );
};

export default AboutCta;
