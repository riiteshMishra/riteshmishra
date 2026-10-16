import { experiences } from "@/data/content/experience";
import ExperienceItem from "./experience-item";

const ExperienceTimeline = () => {
  return (
    <section className="space-y-8">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.number} {...experience} />
      ))}
    </section>
  );
};

export default ExperienceTimeline;
