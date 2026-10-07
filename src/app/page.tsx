import { GradientOrb } from "@/components/common/backgrounds";
import Introduction from "@/components/core/home/Introduction";

const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden py-16 space-y-10">
      <GradientOrb />
      <Introduction />
      {/* <RitesMishra /> */}
    </main>
  );
};

export default Home;
