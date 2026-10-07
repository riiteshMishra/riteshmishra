import type { LucideIcon } from "lucide-react";
import MotionFadeUp from "@/components/common/motion-fade-up";
import { techStack } from "@/data/content/about";

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  technologies: string[];
  color: "green" | "purple";
  delay?: number;
}

const TechCard = ({
  icon: Icon,
  title,
  technologies,
  color,
  delay = 0,
}: TechCardProps) => {
  return (
    <MotionFadeUp delay={delay}>
      <div className="rounded-3xl border border-border bg-card/50 p-7">
        <div className="flex items-center gap-3">
          <Icon
            className={
              color === "green"
                ? "size-5 text-accent-green"
                : "size-5 text-accent-purple"
            }
          />

          <h3 className="font-headline-sans text-xl font-semibold text-text-primary">
            {title}
          </h3>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-4 py-2 font-roboto text-sm text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </MotionFadeUp>
  );
};

const TechStack = () => {
  return (
    <section className="mt-24 relative w-full max-w-6xl mx-auto">
      <MotionFadeUp>
        <div className="text-center">
          <p className="font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
            Technology
          </p>

          <h2 className="mt-3 font-headline-mozi text-4xl font-bold text-text-primary sm:text-5xl">
            Tools I work with.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-roboto leading-7 text-text-muted">
            A practical stack built around modern JavaScript and TypeScript
            technologies.
          </p>
        </div>
      </MotionFadeUp>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {techStack.map((item) => (
          <TechCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
