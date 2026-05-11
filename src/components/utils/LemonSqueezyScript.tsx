"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
    LemonSqueezy?: {
      Setup: (config: {
        checkout?: {
          dark?: boolean;
          colors?: {
            accent?: string;
          };
        };
        eventHandler?: (data: { event: string }) => void;
      }) => void;
    };
  }
}

export function LemonSqueezyScript() {
  useEffect(() => {
    const initLS = () => {
      if (window.createLemonSqueezy) {
        window.createLemonSqueezy();
      }
      if (window.LemonSqueezy) {
        window.LemonSqueezy.Setup({
          checkout: {
            dark: true,
            colors: {
              accent: "#14b8a6", // GhostLy Teal
            },
          },
        });
      }
    };

    initLS();
  }, []);

  return (
    <Script
      src="https://assets.lemonsqueezy.com/lemon.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.createLemonSqueezy) {
          window.createLemonSqueezy();
        }
      }}
    />
  );
}
