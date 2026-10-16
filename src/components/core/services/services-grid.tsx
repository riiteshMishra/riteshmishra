import { services } from "@/data/content/services-data";
import ServiceCard from "./service-card";

const ServicesGrid = () => {
  return (
    <section
      aria-label="Development services"
      className="grid gap-6 md:grid-cols-2"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          features={service.features}
        />
      ))}
    </section>
  );
};

export default ServicesGrid;
