import type { Metadata } from "next";

import ContactPage from "@/components/core/contact";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, createWebPageJsonLd, createBreadcrumbJsonLd, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Ritesh Mishra to discuss a web application, product idea, or full-stack development project.",
  path: "/contact",
});

const Contact = () => {
  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          name: "Contact | Ritesh Mishra",
          description:
            "Contact Ritesh Mishra to discuss a web application, product idea, or full-stack development project.",
          url: absoluteUrl("/contact"),
        })}
      />
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact") },
        ])}
      />
      <ContactPage />
    </>
  );
};

export default Contact;
