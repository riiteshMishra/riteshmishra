import { pageShell } from "@/lib/layout";
import ServicesCta from "./services-cta";
import ServicesGrid from "./services-grid";
import ServicesHero from "./services-hero";

interface ServicesPageProps {
  headingLevel?: "h1" | "h2";
}

const ServicesPage = ({ headingLevel = "h1" }: ServicesPageProps) => {
  return (
    <main className={`${pageShell}`}>
      <ServicesHero as={headingLevel} />

      <ServicesGrid />

      <ServicesCta />
    </main>
  );
};

export default ServicesPage;
