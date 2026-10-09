import { GradientOrb } from "@/components/common/backgrounds";
import AboutSection from "@/components/core/home/about";
import Developer from "@/components/core/home/developer/Developer";
import ExperiencePage from "@/components/core/home/experience/experience-page";
import Introduction from "@/components/core/home/Introduction";
import ProjectsPageData from "@/components/core/projects";
import ServicesPage from "@/components/core/services";
import ContactPage from "@/components/core/contact";
import HomeHero from "@/components/core/home/home-hero";

const Home = () => {
  return (
    <main>
      <HomeHero>
        <GradientOrb />
        <Introduction />
        <Developer />
      </HomeHero>

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
