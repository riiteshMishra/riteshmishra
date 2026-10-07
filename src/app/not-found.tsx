"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { fadeUp } from "@/lib/motion-variables";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-60px)] flex-1 items-center justify-center px-6">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex max-w-xl flex-col items-center text-center"
      >
        <span className="font-anton text-8xl leading-none text-accent-green">
          404
        </span>

        <h1 className="mt-6 font-headline-sans text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-md font-roboto text-text-muted">
          The page you are looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-8 rounded-full bg-accent-green px-6 py-3 font-roboto font-medium text-background transition-transform duration-200 hover:scale-105"
        >
          Back to Home
        </Link>
      </motion.section>
    </main>
  );
};

export default NotFound;
