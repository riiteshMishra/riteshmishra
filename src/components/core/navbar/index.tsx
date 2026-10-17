"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data";
import NavList from "./list";
import ThemeChanger from "@/components/common/theme-changer";
import { NavOrb } from "@/components/common/backgrounds";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    setHidden(true);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      setHidden(false);
    }, 150);
  });

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="sticky top-0 z-50 mx-auto w-full  backdrop-blur-2xl overflow-hidden"
    >
      <NavOrb />
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2">
        <Link
          href="/"
          className="select-none font-headline-mozi text-2xl font-bold leading-none"
        >
          Ritesh Mishra
          <span className="text-accent-green rounded-full">.</span>
        </Link>

        <NavList navlist={navigation} />

        <ThemeChanger />
      </nav>
    </motion.header>
  );
};

export default Navbar;
