import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ghostlydesktop.com"),
  title: "GhostLy Desktop | Official Site | Screen Aware AI Partner",
  description: "Experience the next generation of AI productivity on your desktop. GhostLy is a context-aware AI partner that unifies Claude, GPT & Gemini into a single spectral HUD.",
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
    description: "AI that understands your screen. Experience the ghostly power of context-aware productivity on desktop.",
    url: "/",
    siteName: "GhostLy",
    locale: "en_US",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostLy Desktop | Official Site",
    description: "The next generation of AI productivity for desktop.",
    images: ["/icon.png"],
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
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
