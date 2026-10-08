import localFont from "next/font/local";
import {
  Mozilla_Headline,
  Roboto,
  Stack_Sans_Headline,
  Finlandica_Headline,
} from "next/font/google";

// GOOGLE FONTS
export const roboto = Roboto({
  variable: "--font-family-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const headlineSans = Stack_Sans_Headline({
  variable: "--font-family-headline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const headlineMozi = Mozilla_Headline({
  variable: "--font-family-headline-mozi",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const headlineFin = Finlandica_Headline({
  variable: "--font-family-headline-fin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// LOCAL FONTS
export const anton = localFont({
  src: "./anton/Anton.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-family-anton",
});
