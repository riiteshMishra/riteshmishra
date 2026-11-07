import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd, createBreadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import AboutSection from "@/components/core/home/about";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Discover Ritesh Mishra's background, technical skills, and approach to building modern web applications using React, Next.js, Node.js, and TypeScript.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: "About | Ritesh Mishra",
          description:
            "Discover Ritesh Mishra's background, technical skills, and approach to building modern web applications using React, Next.js, Node.js, and TypeScript.",
          url: absoluteUrl("/about"),
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "About", url: absoluteUrl("/about") },
        ])}
      />
      <main>
        <AboutSection />
      </main>
    </>
  );
};

export default AboutPage;
