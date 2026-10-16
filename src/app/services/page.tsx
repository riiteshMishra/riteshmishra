import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";
import ServicesPage from "@/components/core/services";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore web development services by Ritesh Mishra, including modern, responsive websites and full-stack applications built with React, Next.js, Node.js, and TypeScript.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
