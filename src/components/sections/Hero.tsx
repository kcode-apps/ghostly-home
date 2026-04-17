"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest leading-none">
            <Sparkles className="w-3 h-3" />
            The Future of Productivity
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest leading-none">
            BYOK • $20 Lifetime
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Your Desktop, <br />
          <span className="bg-gradient-to-r from-primary via-teal-400 to-blue-500 bg-clip-text text-transparent">
            Supercharged.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Access Gemini, Claude, and GPT-4o in a non-interruptive Heads Up Display (HUD). <br />
          Stay in your flow. A private bridge between your eyes and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] hover:shadow-[0_0_60px_-10px_rgba(20,184,166,0.6)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get GhostLy Pro
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all active:scale-95">
            Watch Demo
          </button>
        </motion.div>

        {/* Floating HUD Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-4 shadow-2xl border-white/20 aspect-[16/9] flex items-center justify-center group overflow-hidden">
            {/* Simulating HUD Content */}
            <div className="absolute inset-0 bg-glow opacity-50" />
            <div className="w-2/3 h-1/2 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-md flex flex-col p-6 text-left">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                <div className="w-24 h-4 bg-primary/20 rounded-full animate-pulse" />
                <div className="w-12 h-4 bg-white/10 rounded-full" />
              </div>
              <div className="space-y-3">
                <div className="w-full h-3 bg-white/5 rounded-full" />
                <div className="w-5/6 h-3 bg-white/5 rounded-full" />
                <div className="w-4/6 h-3 bg-white/5 rounded-full" />
              </div>
              <div className="mt-auto flex gap-2">
                <div className="w-20 h-8 rounded-lg bg-primary/40" />
                <div className="w-8 h-8 rounded-lg bg-white/10" />
              </div>
            </div>

            {/* Animated Accents */}
            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl" />
          </div>

          {/* Subtle reflection under HUD */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-primary/10 blur-[60px] rounded-[100%]" />
        </motion.div>
      </div>
    </section>
  );
}
