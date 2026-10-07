"use client";

import {
  ArrowRight,
  Code2,
  Database,
  LockKeyhole,
  Server,
  CreditCard,
  Layers3,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications from frontend interfaces to backend APIs, databases and authentication.",
    features: [
      "Modern React & Next.js applications",
      "TypeScript-based development",
      "Responsive and interactive UI",
      "Backend API integration",
    ],
  },
  {
    icon: Layers3,
    title: "Frontend Development",
    description:
      "Creating modern, responsive and user-focused interfaces with clean component architecture and smooth interactions.",
    features: [
      "React & Next.js",
      "Tailwind CSS",
      "Reusable components",
      "Responsive design",
      "Animations & interactions",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Designing reliable backend systems with structured APIs, business logic, validation and error handling.",
    features: [
      "Node.js & Express.js",
      "REST API development",
      "API architecture",
      "Request validation",
      "Error handling",
    ],
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Security",
    description:
      "Implementing secure authentication and authorization flows for applications that need protected resources and user roles.",
    features: [
      "Firebase Authentication",
      "JWT & sessions",
      "Role-based authorization",
      "Secure cookies",
      "Rate limiting & validation",
    ],
  },
  {
    icon: Database,
    title: "Database & Backend Architecture",
    description:
      "Designing application data structures and backend architecture with performance, maintainability and scalability in mind.",
    features: [
      "MongoDB & Mongoose",
      "Redis caching",
      "Data modeling",
      "Database architecture",
      "Performance optimization",
    ],
  },
  {
    icon: CreditCard,
    title: "API & Payment Integration",
    description:
      "Connecting applications with third-party services and payment systems to extend product functionality.",
    features: [
      "Razorpay integration",
      "Third-party APIs",
      "Axios-based integrations",
      "Webhook handling",
      "External service integration",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      {/* Hero */}
      <section className="mb-20 max-w-3xl">
        <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
          Services
        </p>

        <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
          What I can build for you.
        </h1>

        <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
          From polished frontend experiences to complete backend systems, I
          build modern web solutions around real product requirements.
        </p>
      </section>

      {/* Services */}
      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent-green/30 sm:p-8"
            >
              {/* Icon */}
              <div className="flex size-12 items-center justify-center rounded-2xl border border-accent-green/20 bg-accent-green/5 text-accent-green transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-green/10">
                <Icon className="size-5" />
              </div>

              {/* Content */}
              <h2 className="mt-6 font-headline-mozi text-2xl font-semibold tracking-tight">
                {service.title}
              </h2>

              <p className="mt-3 font-roboto text-sm leading-6 text-text-muted sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 font-roboto text-sm text-text-muted"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom indicator */}
              <div className="mt-8 flex items-center gap-2 font-roboto text-sm font-medium text-accent-green">
                <span>Explore service</span>

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-24 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
        <p className="font-roboto text-sm font-medium text-accent-green">
          Have a project in mind?
        </p>

        <h2 className="mt-3 font-headline-mozi text-3xl font-semibold sm:text-4xl">
          Let's build something useful.
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-roboto text-sm leading-6 text-text-muted">
          Tell me what you're trying to build and we can figure out the right
          technical approach together.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
        >
          Start a conversation
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </main>
  );
};

export default ServicesPage;