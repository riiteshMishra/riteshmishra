import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const qurova = localFont({
  src: [
    {
      path: "./qurova-demo/QurovaDEMO-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./qurova-demo/QurovaDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./qurova-demo/QurovaDEMO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./qurova-demo/QurovaDEMO-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./qurova-demo/QurovaDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family-qurova",
});

export const anton = localFont({
  src: "./anton/Anton.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-family-anton",
});

export const moldie = localFont({
  src: "./moldie-demo/Moldie Demo.otf",
  weight: "400",
  style: "normal",
  variable: "--font-family-moldie",
});

export const transcity = localFont({
  src: "./transcity/Transcity DEMO.otf",
  weight: "400",
  style: "normal",
  variable: "--font-family-transcity",
});

export const roboto = Roboto({
  variable: "--font-family-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
