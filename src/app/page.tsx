import { GradientOrb } from "@/components/common/backgrounds";
import AboutSection from "@/components/core/home/about";
import Developer from "@/components/core/home/developer/Developer";
import ExperiencePage from "@/components/core/home/experience/experience-page";
import Introduction from "@/components/core/home/Introduction";
import ProjectsPageData from "@/components/core/projects";
import ServicesPage from "@/components/core/services";
import ContactPage from "@/components/core/contact";

const Home = () => {
  return (
    <main>
      <div className="relative overflow-hidden py-16">
        <GradientOrb />
        <Introduction />
        <Developer />
      </div>

      <div className="relative overflow-hidden py-16">
        <GradientOrb />
        <AboutSection />
      </div>

      <ProjectsPageData />
      <ExperiencePage />
      <ServicesPage />
      <ContactPage />
    </main>
  );
};

export default Home;
