import { pageShell } from "@/lib/layout";
import ServicesCta from "./services-cta";
import ServicesGrid from "./services-grid";
import ServicesHero from "./services-hero";

const ServicesPage = () => {
  return (
    <main className={`${pageShell}`}>
      <ServicesHero />

      <ServicesGrid />

      <ServicesCta />
    </main>
  );
};

export default ServicesPage;
