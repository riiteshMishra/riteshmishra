import MotionFadeUp from "@/components/common/motion-fade-up";
import { developmentApproach } from "@/data/content/about";

const DevelopmentApproach = () => {
  return (
    <section className="mt-24 relative w-full max-w-6xl mx-auto">
      <MotionFadeUp>
        <div className="max-w-2xl">
          <p className="font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
            My approach
          </p>

          <h2 className="mt-3 font-headline-mozi text-4xl font-bold text-text-primary sm:text-5xl">
            How I think about development.
          </h2>
        </div>
      </MotionFadeUp>

      <div className="mt-10 space-y-4">
        {developmentApproach.map((item, index) => (
          <MotionFadeUp key={item.number} delay={index * 0.08}>
            <div className="group flex gap-5 rounded-3xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-accent-green/30 sm:p-7">
              <span className="font-headline-sans text-sm font-semibold text-accent-green">
                {item.number}
              </span>

              <div>
                <h3 className="font-headline-sans text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-3xl font-roboto text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </MotionFadeUp>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentApproach;
