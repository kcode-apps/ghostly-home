"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark-only";
  size?: number;
}

export function Logo({ className, variant = "full", size = 44 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <motion.div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Atmospheric Induction Glow */}
        <div className="absolute inset-0 bg-primary/25 rounded-2xl blur-xl animate-pulse" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>

          {/* 1. The Geometric "G" Framework */}
          <path
            d="M 85 45 C 85 25 70 15 50 15 C 30 15 15 30 15 50 C 15 70 30 85 50 85 C 65 85 80 75 85 60 L 85 50 L 60 50"
            stroke="url(#logo-gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 2. The Integrated Casper-like Ghost (Negative Space Induction) */}
          <motion.path
            d="M 40 55 C 40 45 45 40 50 40 C 55 40 60 45 60 55 C 60 65 55 75 50 75 C 45 75 40 65 40 55 Z"
            fill="white"
            fillOpacity="0.9"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 3. High-Fidelity Perception Nodes (Eyes) */}
          <circle cx="46" cy="52" r="2.5" fill="#09090b" />
          <circle cx="54" cy="52" r="2.5" fill="#09090b" />

          {/* 4. The Spectral Tail (Induction Flow) */}
          {/* <motion.path
            d="M 50 75 C 50 82 45 88 40 85"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.8"
            animate={{
              d: ["M 50 75 C 50 82 45 88 40 85", "M 50 75 C 50 85 55 88 60 85", "M 50 75 C 50 82 45 88 40 85"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          /> */}
        </svg>
      </motion.div>

      {variant === "full" && (
        <span className="font-outfit font-bold text-2xl text-white tracking-tight leading-none">
          GhostLy
        </span>
      )}
    </div>
  );
}
