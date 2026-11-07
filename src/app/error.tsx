"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-headline-mozi text-4xl font-bold tracking-tight sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md font-roboto text-sm leading-6 text-text-muted">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-accent-green px-6 py-3 font-roboto text-sm font-medium text-black transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-border bg-card px-6 py-3 font-roboto text-sm font-medium text-text-primary transition-colors duration-300 hover:border-accent-green/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}