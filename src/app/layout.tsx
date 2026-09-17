import type { Metadata } from "next";
import { Archivo_Black, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhruv Mahadik",
  description:
    "GTM operator and founder. Sold B2B SaaS to a Big 4 firm, industrial real estate to a clothing brand, and Delhi-style momo to hungry students. VC, defence tech, early-stage.",
  openGraph: {
    title: "Dhruv Mahadik — GTM Operator & Founder",
    description:
      "GTM operator and founder. B2B SaaS, commercial real estate — same trait, different markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables must live on <html>, not <body>: Tailwind's @theme
    // resolves --font-display on :root, so a variable defined on a descendant
    // would make that declaration invalid and silently fall back.
    <html
      lang="en"
      className={`${archivoBlack.variable} ${fraunces.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
