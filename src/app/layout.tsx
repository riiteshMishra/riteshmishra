import type { Metadata } from "next";

import {
  anton,
  roboto,
  headlineSans,
  headlineMozi,
  headlineFin,
} from "@/fonts";

import "./globals.css";
import Footer from "@/components/common/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Navbar from "@/components/core/navbar";
import { personJsonLd, siteConfig, siteUrl, websiteJsonLd } from "@/lib/seo";
import Providers from "@/providers";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: "%s | Ritesh Mishra",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${anton.variable}
        ${roboto.variable}
        ${headlineSans.variable}
        ${headlineMozi.variable}
        ${headlineFin.variable}
      `}
    >
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={personJsonLd} />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
