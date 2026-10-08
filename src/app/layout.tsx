import type { Metadata } from "next";

import {
  anton,
  roboto,
  headlineSans,
  headlineMozi,
  headlineFin,
} from "@/fonts";

import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/core/navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Ritesh Mishra — Full Stack Developer",
  description:
    "Portfolio of Ritesh Mishra, a Full Stack Developer building modern and scalable web applications.",
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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
