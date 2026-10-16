import MotionFadeUp from "@/components/common/motion-fade-up";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) => {
  return (
    <MotionFadeUp>
      <article className="group rounded-3xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent-green/30 motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-accent-green/20 bg-accent-green/5 text-accent-green transition-colors duration-300 group-hover:bg-accent-green/10">
          <Icon className="size-5" aria-hidden="true" />
        </div>

        <h2 className="mt-6 font-headline-mozi text-2xl font-semibold tracking-tight">
          {title}
        </h2>

        <p className="mt-3 font-headline-sans text-sm leading-6 text-text-muted sm:text-base">
          {description}
        </p>

        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3  font-headline-sans text-sm text-text-muted "
            >
              <span
                className="size-1.5 shrink-0 rounded-full bg-accent-green"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-2 font-roboto text-sm font-medium text-accent-green cursor-pointer">
          <span>Explore service</span>
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none " />
        </div>
      </article>
    </MotionFadeUp>
  );
};

export default ServiceCard;
