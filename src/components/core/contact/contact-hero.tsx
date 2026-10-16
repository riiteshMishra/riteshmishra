import { pageHero } from "@/lib/layout";

const ContactHero = () => {
  return (
    <section className={pageHero}>
      <p className="mb-4 font-roboto text-sm font-medium uppercase tracking-[0.2em] text-accent-green">
        Contact
      </p>

      <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-6xl">
        Let&apos;s build something together.
      </h1>

      <p className="mt-6 max-w-2xl font-roboto text-base leading-7 text-text-muted sm:text-lg">
        Have an idea, a project or just want to talk about development? I&apos;d
        love to hear from you.
      </p>
    </section>
  );
};

export default ContactHero;
