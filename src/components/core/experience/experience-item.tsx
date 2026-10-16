import { CalendarDays, Check, ExternalLink } from "lucide-react";

interface ExperienceItemProps {
  number: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  link?: string;
  current?: boolean;
}

const ExperienceItem = ({
  number,
  role,
  company,
  duration,
  description,
  technologies,
  responsibilities,
  link,
  current = false,
}: ExperienceItemProps) => {
  return (
    <article className="relative pl-10 sm:pl-14">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[11px]" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border border-accent-green/40 bg-background sm:size-6">
        <span className="size-1.5 rounded-full bg-accent-green sm:size-2" />
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent-green/30 sm:p-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <span className="font-headline-mozi text-lg font-semibold text-accent-green">
              {number}
            </span>

            <div>
              <h2 className="font-headline-mozi text-2xl font-semibold tracking-tight sm:text-3xl">
                {role}
              </h2>

              <p className="mt-1 font-roboto text-sm font-medium text-text-muted">
                {company}
              </p>
            </div>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
            <CalendarDays className="size-3.5 text-accent-green" />

            <span className="font-roboto text-xs text-text-muted">
              {duration}
            </span>
          </div>
        </div>

        {/* Current badge */}
        {current && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent-green/20 bg-accent-green/5 px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-accent-green" />

            <span className="font-roboto text-xs font-medium text-accent-green">
              Currently building
            </span>
          </div>
        )}

        {/* Description */}
        <p className="mt-6 font-roboto text-sm leading-7 text-text-muted sm:text-base">
          {description}
        </p>

        {/* Responsibilities */}
        <div className="mt-7">
          <h3 className="font-roboto text-sm font-semibold text-text-primary">
            What I worked on
          </h3>

          <ul className="mt-4 space-y-3">
            {responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex items-start gap-3 font-roboto text-sm leading-6 text-text-muted"
              >
                <Check className="mt-1 size-4 shrink-0 text-accent-green" />

                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-background px-3 py-1.5 font-roboto text-xs text-text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 font-roboto text-sm font-medium text-accent-green transition-colors hover:text-accent-green/80"
          >
            View project
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ExperienceItem;
