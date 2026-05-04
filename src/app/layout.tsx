import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ghostlydesktop.com"),
  title: "GhostLy | Context-Aware AI Partner",
  description: "The next generation of AI productivity. A high-performance heads up display that sees what you see, providing instant context-aware assistance without stealing focus.",
  openGraph: {
    title: "GhostLy | Context-Aware AI Partner",
    description: "AI that understands your screen. Experience the ghostly power of context-aware productivity on desktop.",
    url: "/",
    siteName: "GhostLy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostLy | Context-Aware AI Partner",
    description: "The next generation of AI productivity for desktop.",
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
