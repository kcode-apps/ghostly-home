"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HUDMockup } from "@/components/ui/HUDMockup";
import { VideoModal } from "@/components/ui/VideoModal";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[110vh] sm:min-h-screen flex flex-col items-center justify-center pt-20 pb-32 sm:pb-0 overflow-hidden bg-background">
      {/* Background Glows */}
      {/* <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse delay-700" /> */}

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-outfit text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Desktop AI. <br />
          <span className="bg-gradient-to-r from-primary via-teal-400 to-blue-500 bg-clip-text text-transparent">
            Supercharged
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          An AI assistant that reads your screen, right where you work. <br />
          Use Claude, GPT, and Gemini without copy-pasting or switching apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="lemonsqueezy-button group relative w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(20,184,166,0.5)] hover:shadow-[0_0_60px_-10px_rgba(20,184,166,0.6)] flex items-center justify-center gap-2"
          >
            Get GhostLy Pro
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all active:scale-95"
          >
            Watch Demo
          </button>
        </motion.div>

        {/* Floating HUD Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 lg:mt-32 w-full max-w-4xl mx-auto px-4"
        >
          <HUDMockup />
        </motion.div>
        {/* Subtle reflection under HUD */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-primary/10 blur-[100px] rounded-[100%] opacity-50" />
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
