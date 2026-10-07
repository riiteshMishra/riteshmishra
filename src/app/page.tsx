import { GradientOrb } from "@/components/common/backgrounds";
import Developer from "@/components/core/home/developer/Developer";
import Introduction from "@/components/core/home/Introduction";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden py-16">
      <GradientOrb />
      <Introduction />
      {/* <RitesMishra /> */}
      <Developer />
    </main>
  );
};

export default Home;
