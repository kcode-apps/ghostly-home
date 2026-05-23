import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LemonSqueezyScript } from "@/components/utils/LemonSqueezyScript";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ghostlydesktop.com"),
  title: "GhostLy Desktop | AI Assistant That Reads Your Screen",
  description: "GhostLy connects Claude, GPT, and Gemini to whatever is on your screen. No copy-pasting, no tab switching. Ask questions right where you work.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "GhostLy Desktop | Official Site",
    description: "AI that understands your screen. One app for Claude, GPT, and Gemini on your desktop.",
    url: "/",
    siteName: "GhostLy",
    locale: "en_US",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostLy Desktop | Official Site",
    description: "GhostLy reads your screen and connects Claude, GPT, and Gemini in one desktop app.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <LemonSqueezyScript />
      </body>
    </html>
  );
}
