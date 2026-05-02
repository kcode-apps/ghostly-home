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

        <svg
          viewBox="0 0 100 115"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Purple-to-cyan gradient matching the PNG */}
            <linearGradient id="ghost-grad" x1="15%" y1="10%" x2="85%" y2="95%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="40%" stopColor="#a855f7" />
              <stop offset="75%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>

            {/* Soft inner glow filter */}
            <filter id="ghost-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Outer neon glow */}
            <filter id="outer-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="circuit-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="0.6" result="gb" />
              <feMerge>
                <feMergeNode in="gb" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/*
            Ghost shape traced from PNG:
            - Smooth rounded dome, head offset slightly right
            - Body widens toward bottom, right side bulges outward
            - 3 wavy bumps at base
          */}
          <motion.path
            d="
              M 50 8
              C 32 8, 18 20, 18 38
              C 18 48, 20 56, 24 63
              L 24 80
              C 24 83, 26 85, 29 83
              C 32 81, 33 78, 33 75
              C 33 72, 35 70, 38 70
              C 41 70, 43 72, 43 75
              L 43 83
              C 43 86, 45 88, 48 88
              C 51 88, 53 86, 53 83
              L 53 75
              C 53 72, 55 70, 58 70
              C 61 70, 63 72, 63 75
              L 63 83
              C 63 86, 65 88, 68 88
              C 71 88, 74 86, 76 83
              C 78 80, 78 76, 76 73
              L 76 63
              C 82 56, 86 48, 86 37
              C 86 20, 71 8, 54 8
              Z
            "
            fill="url(#ghost-grad)"
            filter="url(#ghost-glow)"
            animate={{
              opacity: [0.97, 1, 0.97],
              y: [0, -1.5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Outer neon edge glow on ghost silhouette */}
          <motion.path
            d="
              M 50 8
              C 32 8, 18 20, 18 38
              C 18 48, 20 56, 24 63
              L 24 80
              C 24 83, 26 85, 29 83
              C 32 81, 33 78, 33 75
              C 33 72, 35 70, 38 70
              C 41 70, 43 72, 43 75
              L 43 83
              C 43 86, 45 88, 48 88
              C 51 88, 53 86, 53 83
              L 53 75
              C 53 72, 55 70, 58 70
              C 61 70, 63 72, 63 75
              L 63 83
              C 63 86, 65 88, 68 88
              C 71 88, 74 86, 76 83
              C 78 80, 78 76, 76 73
              L 76 63
              C 82 56, 86 48, 86 37
              C 86 20, 71 8, 54 8
              Z
            "
            fill="none"
            stroke="rgba(192,132,252,0.6)"
            strokeWidth="1.5"
            filter="url(#outer-glow)"
            animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -1.5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── LEFT EYE with blink ── */}
          <motion.ellipse
            cx="38"
            cy="43"
            rx="5"
            ry="7"
            fill="#1e293b"
            animate={{ scaleY: [1, 0.08, 1] }}
            transition={{
              duration: 0.13,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "38px 43px" }}
          />

          {/* ── RIGHT EYE with blink ── */}
          <motion.ellipse
            cx="62"
            cy="43"
            rx="5"
            ry="7"
            fill="#1e293b"
            animate={{ scaleY: [1, 0.08, 1] }}
            transition={{
              duration: 0.13,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "62px 43px" }}
          />

          {/* ── CIRCUIT ACCENTS ── */}
          <g
            stroke="#22d3ee"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            filter="url(#circuit-glow)"
            opacity="0.9"
          >
            {/* Left circuit */}
            <motion.g
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <line x1="20" y1="44" x2="30" y2="44" />
              <path d="M 24 44 C 23 41, 22 40, 20 39" />
              <path d="M 26 44 C 25 47, 24 48, 22 49" />
              <circle cx="20" cy="39" r="1" fill="#22d3ee" stroke="none" />
              <circle cx="22" cy="49" r="1" fill="#22d3ee" stroke="none" />
              <circle cx="30" cy="44" r="0.8" fill="#22d3ee" stroke="none" />
            </motion.g>

            {/* Right circuit */}
            <motion.g
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <line x1="70" y1="44" x2="80" y2="44" />
              <path d="M 76 44 C 77 41, 78 40, 80 39" />
              <path d="M 74 44 C 75 47, 76 48, 78 49" />
              <circle cx="80" cy="39" r="1" fill="#22d3ee" stroke="none" />
              <circle cx="78" cy="49" r="1" fill="#22d3ee" stroke="none" />
              <circle cx="70" cy="44" r="0.8" fill="#22d3ee" stroke="none" />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      {variant === "full" && (
        <span className="font-outfit font-bold text-2xl text-white tracking-tight leading-none ml-1">
          GhostLy
        </span>
      )}
    </div>
  );
}