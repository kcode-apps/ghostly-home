import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "GhostLy | Context-Aware AI HUD for macOS",
  description: "The next generation of AI productivity. A high-performance HUD that sees what you see, providing instant context-aware assistance without stealing focus.",
  openGraph: {
    title: "GhostLy | Context-Aware AI HUD",
    description: "AI that understands your screen. Experience the ghostly power of context-aware productivity on macOS.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://ghostly.ai",
    siteName: "GhostLy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostLy | Context-Aware AI HUD",
    description: "The next generation of AI productivity for macOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
