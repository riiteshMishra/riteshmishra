"use client";

import Button from "@/components/common/Button";
import GreenChip from "@/components/common/green-chips";
import MotionFadeUp from "@/components/common/motion-fade-up";
import { ArrowUpRight, FolderOpen } from "lucide-react";

const Introduction = () => {
  return (
    <section className="flex items-center justify-center px-5">
      <div className="mx-auto max-w-4xl text-center">
        <MotionFadeUp>
          <GreenChip title="Available for new projects" />
        </MotionFadeUp>

        <MotionFadeUp delay={0.1}>
          <h1 className="mt-6 font-headline-mozi text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl">
            Building digital
            <br />
            <span className="text-accent-green">experiences</span> that matter.
          </h1>
        </MotionFadeUp>

        <MotionFadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl font-headline-sans text-base leading-7 text-text-muted sm:text-lg">
            I&apos;m Ritesh Mishra, a Full Stack Developer focused on building
            modern, scalable and user-friendly web applications.
          </p>
        </MotionFadeUp>

        {/* BUTTONS */}
        <MotionFadeUp
          delay={0.3}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            href="/projects"
            startIcon={<FolderOpen className="size-4" />}
          >
            View Projects
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            endIcon={<ArrowUpRight className="size-4" />}
          >
            Let&apos;s Talk
          </Button>
        </MotionFadeUp>
      </div>
    </section>
  );
};

export default Introduction;
