import type { Metadata } from "next";

import ContactPage from "@/components/core/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Ritesh Mishra to discuss a web application, product idea, or full-stack development project.",
  path: "/contact",
});

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
