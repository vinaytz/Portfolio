import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Unbounded, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/other/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vinaytz",
  description: "This is Vinay Tiwari's personal website.",
  icons: {
    icon: "/favicon.png", // Make sure it's in the /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${unbounded.variable} ${spaceGrotesk.variable} ${fraunces.variable} antialiased dark`}
      >
        {/* <SmoothScroll /> */}
        {children}
      </body>
    </html>
  );
}
