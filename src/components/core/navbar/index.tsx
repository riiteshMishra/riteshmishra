"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { navigation } from "@/data";
import NavList from "./list";
import ThemeChanger from "@/components/common/theme-changer";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 mx-auto w-full  backdrop-blur-2xl"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2">
        <Link
          href="/"
          className="select-none font-headline-mozi text-2xl font-bold leading-none"
        >
          Ritesh Mishra
        </Link>

        <NavList navlist={navigation} />

        <ThemeChanger />
      </nav>
    </motion.header>
  );
};

export default Navbar;
