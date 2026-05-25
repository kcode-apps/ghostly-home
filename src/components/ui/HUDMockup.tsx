"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Sun, Settings, Pin } from "lucide-react";
import { Logo } from "./Logo";

const QUESTION = "What's wrong with this layout?";
const ANSWER =
  "The Sign up button has low contrast against the background. Use white text on teal for better readability and accessibility.";

type Phase = "idle" | "gathering" | "connecting" | "typing" | "done";

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 2200,
  gathering: 1400,
  connecting: 1200,
  typing: 4800,
  done: 3200,
};

const PHASE_ORDER: Phase[] = ["idle", "gathering", "connecting", "typing", "done"];

function useTypewriter(text: string, active: boolean, speedMs = 26) {
  const [visibleLength, setVisibleLength] = useState(0);
  const [prevActive, setPrevActive] = useState(active);
  const [prevText, setPrevText] = useState(text);

  if (active !== prevActive || text !== prevText) {
    setPrevActive(active);
    setPrevText(text);
    setVisibleLength(0);
  }

  useEffect(() => {
    if (!active) return;

    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setVisibleLength(i);
      if (i >= text.length) window.clearInterval(timer);
    }, speedMs);

    return () => window.clearInterval(timer);
  }, [text, active, speedMs]);

  return active ? text.slice(0, visibleLength) : "";
}

function headerStatus(phase: Phase): string | null {
  switch (phase) {
    case "gathering":
      return "Gathering context...";
    case "connecting":
      return "Connecting to Claude...";
    case "typing":
      return "Claude is typing...";
    default:
      return null;
  }
}

export function HUDMockup() {
  const [phase, setPhase] = useState<Phase>("idle");
  const answerText = useTypewriter(ANSWER, phase === "typing" || phase === "done");
  const isLoading = phase === "gathering" || phase === "connecting" || phase === "typing";
  const showQuery = phase !== "idle";
  const showAnswer = phase === "typing" || phase === "done";
  const status = headerStatus(phase);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const idx = PHASE_ORDER.indexOf(phase);
      setPhase(PHASE_ORDER[(idx + 1) % PHASE_ORDER.length]);
    }, PHASE_DURATIONS[phase]);
    return () => window.clearTimeout(timer);
  }, [phase]);

  return (
    <div className="relative group perspective-1000">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 2, rotateY: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        whileHover={{ rotateX: 2, rotateY: -2, y: -5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[600px] mx-auto aspect-video sm:aspect-[16/10] bg-[#1a1a1a]/80 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col p-4 sm:p-6"
      >
        {/* Header: matches real HUD (logo, title, status line) */}
        <div className="flex items-start justify-between mb-4 pb-2 border-b border-white/5">
          <div className="flex flex-col select-none">
            <div className="flex items-center gap-2 sm:gap-3">
              <Logo variant="mark-only" size={28} className="sm:size-8" />
              <span className="font-outfit text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                GhostLy
              </span>
            </div>
            {status && (
              <span className="mt-1 text-[10px] text-cyan-400/80 font-mono tracking-tight animate-pulse">
                {status}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {[Copy, Sun, Settings, Pin].map((Icon, i) => (
              <div
                key={i}
                className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/5 text-white/40"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Response area: query anchor + answer, no screen preview inside HUD */}
        <div className="flex-1 rounded-2xl bg-black/20 border border-white/5 p-4 sm:p-5 mb-4 font-sans text-[13px] sm:text-[15px] leading-relaxed text-slate-200 min-h-0 overflow-hidden flex flex-col">
          {showQuery && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 py-2 px-3 sm:px-4 rounded-lg bg-white/5 border-l-[3px] border-cyan-400 shrink-0"
            >
              <p className="text-[12px] sm:text-[14px] text-slate-200 font-medium italic leading-snug">
                {QUESTION}
              </p>
            </motion.div>
          )}

          {!showQuery && (
            <p className="text-slate-400/90">GhostLy is ready.</p>
          )}

          {isLoading && !showAnswer && (
            <div className="flex items-center gap-2 text-cyan-400/80 font-mono text-xs mt-1 animate-pulse">
              <span className="w-1.5 h-4 bg-cyan-400" />
              <span>Thinking...</span>
            </div>
          )}

          {showAnswer && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-200 leading-relaxed font-outfit"
            >
              {answerText.split(/(Sign up|white text on teal)/g).map((part, i) =>
                part === "Sign up" || part === "white text on teal" ? (
                  <span key={i} className="text-primary font-medium">
                    {part}
                  </span>
                ) : (
                  part
                ),
              )}
              {phase === "typing" && answerText.length < ANSWER.length && (
                <span className="inline-block w-0.5 h-3.5 bg-cyan-400/80 ml-0.5 align-middle animate-pulse" />
              )}
            </motion.p>
          )}
        </div>

        {/* Query input: matches real HUD */}
        <div className="shrink-0">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-2 mb-2">
            System Default
          </div>
          <div
            className={`w-full bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-5 py-3 text-white/40 font-medium flex items-center justify-between transition-colors duration-500 ${
              isLoading ? "opacity-60" : "group-hover:border-primary/30"
            }`}
          >
            <span className="text-sm truncate pr-2">
              {isLoading ? "Generating response..." : "Ask GhostLy..."}
            </span>
            <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
              <div className={`w-2 h-2 rounded-full bg-primary ${isLoading ? "animate-pulse" : ""}`} />
            </div>
          </div>
        </div>

        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine" />
      </motion.div>
    </div>
  );
}
