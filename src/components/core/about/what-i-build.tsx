import MotionFadeUp from "@/components/common/motion-fade-up";
import { whatIBuildItems } from "@/data/content/about";

const WhatIBuild = () => {
  return (
    <section className="mt-24 relative w-full max-w-6xl mx-auto">
      <MotionFadeUp>
        <div className="max-w-2xl">
          <p className="font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
            What I build
          </p>

          <h2 className="mt-3 font-headline-mozi text-4xl font-bold text-text-primary sm:text-5xl">
            From idea to production.
          </h2>

          <p className="mt-5 font-roboto leading-7 text-text-muted">
            I enjoy working across the complete product lifecycle — from
            designing interfaces and building APIs to authentication, databases,
            payments and deployment.
          </p>
        </div>
      </MotionFadeUp>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whatIBuildItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <MotionFadeUp key={item.title} delay={index * 0.1}>
              <div className="h-full rounded-3xl border border-border bg-card/50 p-7 transition-colors duration-300 hover:border-accent-green/30">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-6 font-headline-sans text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 font-roboto text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </div>
            </MotionFadeUp>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIBuild;
