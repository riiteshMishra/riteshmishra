import { contactDetails } from "@/data/content/contact-data";
import { ArrowUpRight } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div>
        <p className="font-roboto text-sm font-medium text-accent-green">
          Get in touch
        </p>

        <h2 className="mt-2 font-headline-mozi text-2xl font-semibold">
          Let&apos;s talk about your idea.
        </h2>

        <p className="mt-4 text-sm leading-6 text-text-muted font-headline-sans">
          Whether you&apos;re building a new product, improving an existing
          application or simply want to discuss an idea, feel free to reach out.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        {contactDetails.map((item) => {
          const Icon = item.icon;

          const content = (
            <>
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent-green/20 bg-accent-green/5 text-accent-green">
                <Icon className="size-4" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-roboto text-xs text-text-muted">
                  {item.label}
                </p>

                <p className="mt-1 truncate font-roboto text-sm font-medium text-text-primary">
                  {item.value}
                </p>
              </div>

              {item.href && (
                <ArrowUpRight className="size-4 shrink-0 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
              )}
            </>
          );

          const className =
            "group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors duration-300 hover:border-accent-green/30";

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={className}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className={className}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-accent-green/20 bg-accent-green/5 p-4">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-green opacity-50" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent-green" />
          </span>

          <span className="font-headline-mozi text-sm font-medium text-text-primary">
            Available for new projects
          </span>
        </div>

        <p className="mt-2 pl-5 font-headline-sans text-xs leading-5 text-text-muted ">
          Currently open to interesting projects, collaborations and
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
