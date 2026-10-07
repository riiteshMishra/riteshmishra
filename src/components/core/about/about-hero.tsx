import { Sparkles } from "lucide-react";
import MotionFadeUp from "@/components/common/motion-fade-up";

const AboutHero = () => {
  return (
    <div className="">
      <section className="mx-auto max-w-4xl text-center relative">
        <MotionFadeUp>
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-4 py-2">
            <Sparkles className="size-4 text-accent-green" />

            <span className="font-roboto text-sm text-text-primary">
              A little bit about me
            </span>
          </div>
        </MotionFadeUp>

        <MotionFadeUp delay={0.1}>
          <h1 className="font-headline-mozi text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl">
            Building with <span className="text-accent-green">curiosity</span>
            <br />
            and purpose.
          </h1>
        </MotionFadeUp>

        <MotionFadeUp delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl font-roboto text-base leading-8 text-text-muted sm:text-lg">
            I&apos;m Ritesh Mishra, a Full Stack Developer who enjoys turning
            ideas into modern, scalable and meaningful digital experiences.
          </p>
        </MotionFadeUp>
      </section>
    </div>
  );
};

export default AboutHero;
