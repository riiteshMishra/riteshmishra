"use client";

import {
  ArrowUpRight,
  GitBranch,
  LineChart,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@riteshmishra.online",
    href: "mailto:hello@riteshmishra.online",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/Parle-ji",
    href: "https://github.com/riiteshmishra",
  },
  {
    icon: LineChart,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

const ContactPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 overflow-hidden">
      {/* Hero */}
      <section className="mb-16 max-w-3xl">
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Contact
        </p>

        <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          Let's build something together.
        </h1>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          Have an idea, a project or just want to talk about development? I'd
          love to hear from you.
        </p>
      </section>

      {/* Contact content */}
      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact information */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div>
            <p className="font-roboto text-sm font-medium text-accent-green">
              Get in touch
            </p>

            <h2 className="mt-2 font-headline-mozi text-2xl font-semibold">
              Let's talk about your idea.
            </h2>

            <p className="mt-4 font-roboto text-sm leading-6 text-text-muted">
              Whether you're building a new product, improving an existing
              application or simply want to discuss an idea, feel free to reach
              out.
            </p>
          </div>

          {/* Details */}
          <div className="mt-8 space-y-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent-green/30"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent-green/20 bg-accent-green/5 text-accent-green">
                    <Icon className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-roboto text-xs text-text-muted">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate font-roboto text-sm font-medium text-text-primary">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight className="size-4 shrink-0 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
                </a>
              );
            })}
          </div>

          {/* Availability */}
          <div className="mt-8 rounded-2xl border border-accent-green/20 bg-accent-green/5 p-4">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-green opacity-50" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent-green" />
              </span>

              <span className="font-roboto text-sm font-medium text-text-primary">
                Available for new projects
              </span>
            </div>

            <p className="mt-2 pl-5 font-roboto text-xs leading-5 text-text-muted">
              Currently open to interesting projects, collaborations and
              opportunities.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div>
            <p className="font-roboto text-sm font-medium text-accent-green">
              Send a message
            </p>

            <h2 className="mt-2 font-headline-mozi text-2xl font-semibold">
              Tell me what you're building.
            </h2>
          </div>

          <form className="mt-8 space-y-5">
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-roboto text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 font-roboto text-sm outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent-green/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-roboto text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 font-roboto text-sm outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent-green/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-roboto text-sm font-medium"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 font-roboto text-sm outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent-green/50"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-roboto text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me a little about your project..."
                className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 font-roboto text-sm outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent-green/50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-24 text-center">
        <p className="font-roboto text-sm text-text-muted">Prefer email?</p>

        <a
          href="mailto:hello@riteshmishra.online"
          className="mt-2 inline-block font-headline-mozi text-2xl font-semibold transition-colors hover:text-accent-green sm:text-3xl"
        >
          hello@riteshmishra.online
        </a>
      </section>
    </main>
  );
};

export default ContactPage;
