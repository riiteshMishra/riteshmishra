import { pageShell } from "@/lib/layout";
import ContactCta from "./contact-cta";
import ContactForm from "./contact-form";
import ContactHero from "./contact-hero";
import ContactInfo from "./contact-info";

interface ContactPageProps {
  headingLevel?: "h1" | "h2";
}

const ContactPage = ({ headingLevel = "h1" }: ContactPageProps) => {
  return (
    <main className={pageShell}>
      <ContactHero as={headingLevel} />

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <ContactInfo />
        <ContactForm />
      </section>

      <ContactCta />
    </main>
  );
};

export default ContactPage;
