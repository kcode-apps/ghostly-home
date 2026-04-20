"use client";

import { motion } from "framer-motion";
import { Copy, Sun, Settings, Pin } from "lucide-react";
import { Logo } from "./Logo";

export function HUDMockup() {
  return (
    <div className="relative group perspective-1000">
      {/* Spectral Glow behind the HUD */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 2, rotateY: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
        whileHover={{ rotateX: 2, rotateY: -2, y: -5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[600px] mx-auto aspect-[16/10] bg-[#1a1a1a]/80 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col p-6 overflow-hidden"
      >
        {/* Header Logic */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Logo variant="mark-only" size={32} />
            <span className="font-outfit text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
              GhostLy
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {[Copy, Sun, Settings, Pin].map((Icon, i) => (
              <div 
                key={i} 
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/40 hover:text-white/80 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Induction Canvas */}
        <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 p-5 font-mono text-sm leading-relaxed overflow-hidden">
          <div className="mb-4 text-white font-bold opacity-90 animate-pulse flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            GhostLy is ready.
          </div>
          
          <div className="space-y-1.5">
            <div className="flex gap-4">
              <span className="text-primary/60">1</span>
              <span className="text-white/80">int main() &#123;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary/60">2</span>
              <span className="text-white/80 ml-4">vector&lt;int&gt; results = compareTriplets(a, b);</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary/60">3</span>
              <span className="text-white/80 ml-4 animate-caret border-r border-primary/60">return 0;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-primary/60">4</span>
              <span className="text-white/80">&#125;</span>
            </div>
          </div>
          
          <div className="mt-6 opacity-30 select-none pointer-events-none">
            <div className="h-4 w-48 bg-white/20 rounded mb-2" />
            <div className="h-4 w-64 bg-white/20 rounded mb-2" />
            <div className="h-4 w-40 bg-white/20 rounded" />
          </div>
        </div>

        {/* Action Prompt Bar */}
        <div className="mt-6">
          <div className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/40 font-medium flex items-center justify-between group-hover:border-primary/30 transition-colors duration-500">
            <span>Ask GhostLy...</span>
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
        
        {/* Dynamic Light Sweep */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 group-hover:animate-shine" />
      </motion.div>
    </div>
  );
}
