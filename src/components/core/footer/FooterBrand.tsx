"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "9565672752";

const FooterBrand = () => {
  return (
    <div className="max-w-md">
      {/* Brand */}
      <Link
        href="/"
        aria-label="Ritesh Mishra home"
        className="group inline-flex items-center gap-2"
      >
        <span className="font-headline-mozi text-3xl font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent-green">
          Ritesh<span className="text-accent-green">.</span>
        </span>

        <span className="mb-1 inline-flex items-center gap-1 rounded-full border border-accent-green/25 bg-accent-green/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-green font-headline-sans">
          <Sparkles size={11} />
          Developer
        </span>
      </Link>

      {/* Description */}
      <p className="mt-4 max-w-sm font-headline-sans text-sm leading-7 text-text-muted">
        Building thoughtful digital experiences with modern technologies, clean
        architecture, and a focus on performance.
      </p>

      {/* Availability */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-green opacity-40" />
          <span className="relative inline-flex size-2 rounded-full bg-accent-green" />
        </span>

        <span className="font-headline-sans text-xs font-medium text-text-muted">
          Open to exciting opportunities
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        {/* WhatsApp */}
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex min-h-12 items-center gap-2.5 overflow-hidden rounded-xl border border-accent-green/30 bg-accent-green/10 px-4 py-3 font-roboto text-sm font-semibold text-accent-green transition-colors duration-300 hover:border-accent-green/60 hover:bg-accent-green/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
          aria-label="Contact Ritesh Mishra on WhatsApp"
        >
          <FaWhatsapp size={20} strokeWidth={1.8} />
          <span className="font-headline-sans">Whatsapp</span>

          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>

        {/* Resume */}
        <motion.a
          href="/ritesh-mishra-resume.pdf"
          download="ritesh-mishra-resume.pdf"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 font-roboto text-sm font-semibold text-text-primary shadow-sm transition-colors duration-300 hover:border-accent-green/40 hover:bg-accent-green/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green"
        >
          <FaDownload
            size={17}
            strokeWidth={1.8}
            className="text-text-muted transition-colors group-hover:text-accent-green"
          />

          <span className="font-headline-sans">Download CV</span>

          <span className="rounded-md border border-border px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-text-muted">
            PDF
          </span>
        </motion.a>
      </div>

      {/* Small trust detail */}
      <p className="mt-4 font-headline-sans text-xs leading-5 text-text-muted/80">
        Have a project in mind? Let’s build something meaningful.
      </p>
    </div>
  );
};

export default FooterBrand;
