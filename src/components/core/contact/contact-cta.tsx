import { sectionGap } from "@/lib/layout";

const ContactCta = () => {
  return (
    <section className={`${sectionGap} text-center`}>
      <p className="font-headline-mozi text-sm text-text-muted">
        Prefer email?
      </p>

      <a
        href="mailto:riteshmishra.dev@gmail.com"
        className="mt-2 inline-block break-all font-headline-mozi text-2xl font-semibold transition-colors duration-300 hover:text-accent-green sm:text-3xl"
      >
        riteshmishra.dev@gmail.com
      </a>
    </section>
  );
};

export default ContactCta;
