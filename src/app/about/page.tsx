import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import AboutSection from "@/components/core/home/about";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Discover Ritesh Mishra's background, technical skills, and approach to building modern web applications using React, Next.js, Node.js, and TypeScript.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <main>
      <AboutSection />
    </main>
  );
};

export default AboutPage;
