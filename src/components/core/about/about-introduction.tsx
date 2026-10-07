import { Code2 } from "lucide-react";
import MotionFadeUp from "@/components/common/motion-fade-up";
import { aboutFacts } from "@/data/content/about";

const AboutIntroduction = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <section className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <MotionFadeUp>
          <div className="h-full rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-sm sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                <Code2 className="size-5" />
              </div>

              <h2 className="font-headline-sans text-2xl font-semibold text-text-primary">
                Who I am
              </h2>
            </div>

            <div className="space-y-5 font-roboto leading-7 text-text-muted">
              <p>
                I&apos;m a self-taught Full Stack Developer passionate about
                building web applications from the ground up. I enjoy
                understanding how things work behind the interface, from the
                frontend experience to APIs, databases and authentication.
              </p>

              <p>
                My main focus is the JavaScript/TypeScript ecosystem, especially
                React, Next.js, Node.js and Express. I like building products
                that are not only visually polished but also structured,
                maintainable and reliable.
              </p>

              <p>
                I&apos;m constantly learning, experimenting with new
                technologies and improving the way I write software.
              </p>
            </div>
          </div>
        </MotionFadeUp>

        <MotionFadeUp delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm"
              >
                <p className="font-roboto text-sm text-text-muted">
                  {fact.label}
                </p>

                <h3 className="mt-2 font-headline-sans text-xl font-semibold text-text-primary">
                  {fact.value}
                </h3>
              </div>
            ))}
          </div>
        </MotionFadeUp>
      </section>
    </div>
  );
};

export default AboutIntroduction;
