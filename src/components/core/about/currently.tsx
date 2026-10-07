import { Terminal } from "lucide-react";
import MotionFadeUp from "@/components/common/motion-fade-up";

const Currently = () => {
  return (
    <section className="mt-24 relative w-full max-w-6xl mx-auto">
      <MotionFadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-accent-green/20 bg-accent-green/5 p-8 sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-accent-green">
              <Terminal className="size-5" />

              <span className="font-roboto text-sm font-medium">Currently</span>
            </div>

            <h2 className="mt-5 font-headline-mozi text-3xl font-bold text-text-primary sm:text-4xl">
              Always learning. Always building.
            </h2>

            <p className="mt-5 font-roboto leading-7 text-text-muted">
              I&apos;m currently focused on improving my full-stack engineering
              skills, building production-ready applications and learning more
              about system design, performance, security and scalable backend
              architecture.
            </p>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-accent-green/10 blur-3xl" />
        </div>
      </MotionFadeUp>
    </section>
  );
};

export default Currently;
