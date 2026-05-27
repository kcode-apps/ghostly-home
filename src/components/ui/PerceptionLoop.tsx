"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, MessageSquare, ArrowRight, MousePointer2 } from "lucide-react";

const STAGES = [
  { id: "summon", label: "Open", icon: MousePointer2, color: "text-teal-400" },
  { id: "scan", label: "Read", icon: Scan, color: "text-blue-400" },
  { id: "assist", label: "Answer", icon: MessageSquare, color: "text-indigo-400" },
];

export function PerceptionLoop() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      {/* Stage Indicators */}
      <div className="flex justify-center gap-4 mb-12">
        {STAGES.map((stage, i) => (
          <button
            key={stage.id}
            onClick={() => setActiveStage(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 border ${activeStage === i
              ? `bg-white/10 border-white/20 ${stage.color} shadow-[0_0_20px_rgba(255,255,255,0.05)]`
              : "bg-transparent border-white/5 text-white/30 hover:border-white/10"
              }`}
          >
            <stage.icon className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">{stage.label}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch h-auto lg:h-[450px]">
        {/* Panel A: coding question on screen */}
        <div className="relative glass rounded-[2.5rem] group border-white/5 bg-black/20 p-4 sm:p-8 flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
            </div>
            <div className="ml-4 px-3 py-1 rounded bg-white/5 text-[10px] font-mono text-white/30 tracking-widest">
              practice.app / Two Sum
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden">
            <div className="h-full flex flex-col gap-3 px-1 sm:px-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  Easy
                </span>
                <h4 className="text-sm sm:text-base font-outfit font-bold text-white">Two Sum</h4>
              </div>

              <p className="text-[11px] sm:text-xs text-white/75 leading-relaxed font-sans">
                Given an array of integers{" "}
                <code className="text-cyan-300/90 bg-white/5 px-1 rounded">nums</code> and an integer{" "}
                <code className="text-cyan-300/90 bg-white/5 px-1 rounded">target</code>, return{" "}
                <strong className="text-white/90 font-medium">indices of the two numbers</strong> that add up to{" "}
                <code className="text-cyan-300/90 bg-white/5 px-1 rounded">target</code>.
              </p>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-[10px] sm:text-[11px] text-white/60 leading-relaxed">
                <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1.5">Example</p>
                <p>
                  Input: nums = <span className="text-amber-300/90">[2, 7, 11, 15]</span>, target ={" "}
                  <span className="text-amber-300/90">9</span>
                </p>
                <p>
                  Output: <span className="text-primary">[0, 1]</span>
                </p>
              </div>

              <div className="rounded-lg border border-dashed border-white/10 bg-black/30 p-3 font-mono text-[10px] text-white/40">
                <span className="text-violet-300/80">function</span>{" "}
                <span className="text-white/60">twoSum</span>
                <span className="text-white/40">(nums, target) {"{"}</span>
                <br />
                <span className="pl-4 text-white/30">{"// your code here"}</span>
                <br />
                <span className="text-white/40">{"}"}</span>
              </div>
            </div>

            {/* Scanning Laser Line */}
            {activeStage === 1 && (
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm z-20"
              />
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-white/20">
            <span>Reading your screen</span>
            <div className="flex gap-2">
              <div className={`w-2 h-2 rounded-full ${activeStage === 1 ? "bg-primary animate-pulse" : "bg-white/10"}`} />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* Panel B: The GhostLy HUD (Induction Output) */}
        <div className="relative glass rounded-[2.5rem] bg-[#171717]/60 p-4 sm:p-8 border-white/10 flex flex-col shadow-2xl">
          <AnimatePresence mode="wait">
            {activeStage === 0 && (
              <motion.div
                key="stage0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="flex-1 flex flex-col items-center justify-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <MousePointer2 className="w-8 h-8 text-primary" />
                </div>
                <h5 className="text-xl font-bold text-white mb-2 font-outfit">Open from anywhere.</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/50">⌥⌘G</kbd> to open GhostLy over any app.
                </p>
              </motion.div>
            )}

            {activeStage === 1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col pt-4"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="h-4 w-32 bg-primary/20 rounded-full animate-pulse" />
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10" />
                    <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                  <div className="h-2 w-5/6 bg-white/5 rounded-full" />
                  <div className="h-2 w-4/6 bg-white/10 rounded-full animate-pulse" />
                </div>
                <div className="mt-auto pb-4">
                  <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-2">
                    Solving Two Sum...
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeStage === 2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">GhostLy</span>
                </div>

                <div className="text-sm text-white/90 leading-relaxed font-outfit mb-4">
                  Use a hash map. For each number, check if{" "}
                  <code className="text-cyan-300/90 bg-white/5 px-1 rounded text-xs">target - num</code>{" "}
                  is already stored. Return both indices when you find a match.{" "}
                  <span className="text-primary font-medium">O(n) time</span>, one pass.
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[10px] text-white/70 mb-6 leading-relaxed overflow-x-auto">
                  <div className="flex justify-between mb-2 pb-2 border-b border-white/5">
                    <span className="text-primary/60 uppercase text-[8px]">Solution</span>
                    <span className="text-white/20">JavaScript</span>
                  </div>
                  <div>
                    <span className="text-violet-300">function</span>{" "}
                    <span className="text-white/80">twoSum</span>
                    <span className="text-white/50">(nums, target) {"{"}</span>
                  </div>
                  <div className="pl-3">
                    <span className="text-violet-300">const</span> seen ={" "}
                    <span className="text-violet-300">new</span> Map();
                  </div>
                  <div className="pl-3">
                    <span className="text-violet-300">for</span> (
                    <span className="text-violet-300">let</span> i = 0; i &lt; nums.length; i++) {"{"}
                  </div>
                  <div className="pl-6">
                    <span className="text-violet-300">const</span> need = target - nums[i];
                  </div>
                  <div className="pl-6">
                    <span className="text-violet-300">if</span> (seen.has(need)){" "}
                    <span className="text-violet-300">return</span> [seen.get(need), i];
                  </div>
                  <div className="pl-6">seen.set(nums[i], i);</div>
                  <div className="pl-3">{"}"}</div>
                  <div>{"}"}</div>
                </div>

                <div className="mt-auto px-4 py-3 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-between">
                  <span className="text-xs text-white/40">Ask GhostLy...</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Connectors (Visual Parity bridge) */}
          {activeStage >= 1 && (
            <svg className="absolute inset-0 pointer-events-none z-0 overflow-visible" width="100%" height="100%">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 1.5 }}
                d="M -150 150 Q -50 150 0 100"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
