"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing the waters and seeing the ghostly power.",
    features: [
      "Access to Gemini 1.5 Flash",
      "5 Screen captures / day",
      "Native macOS HUD",
      "Standard support",
    ],
    cta: "Download Now",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    description: "The ultimate tool for high-performance developers.",
    features: [
      "Full access to Claude 3.5 & GPT-4o",
      "Unlimited screen captures",
      "Custom Persona support",
      "Priority feature access",
      "Multi-monitor support",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$99",
    period: "",
    description: "One payment. Infinite context. For the true GhostLy fanatic.",
    features: [
      "Everything in Pro",
      "One-time payment",
      "Lifetime updates",
      "Founding member badge",
      "Direct Discord access",
    ],
    cta: "Get Lifetime",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6"
          >
            One License. <br />
            <span className="text-primary">Lifetime Context.</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No monthly fees. No "unlimited" traps. Just a private, context-aware bridge between your screen and your AI keys.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Trial Card */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 glass p-8 rounded-[32px] border-white/5 flex flex-col"
          >
             <h3 className="text-xl font-bold text-white mb-4 font-outfit uppercase tracking-wider">The Trial</h3>
             <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-neutral-400 font-outfit">Free</span>
             </div>
             <p className="text-muted-foreground text-sm mb-8">
                Try GhostLy with zero risk. Access all features for your first 20 queries.
             </p>
             <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-sm text-neutral-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                   20 Total GhostLy Queries
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                   Full Semantic Context
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                   Multi-Model Support
                </li>
             </ul>
             <button className="w-full py-4 rounded-2xl font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all active:scale-95">
                Download Free Trial
             </button>
          </motion.div>

          {/* Lifetime Card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex-[1.5] glass p-10 rounded-[40px] border-primary/50 bg-primary/[0.03] shadow-[0_0_50px_-10px_rgba(20,184,166,0.3)] flex flex-col relative overflow-hidden"
          >
             <div className="absolute top-6 right-8 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                Lifetime Access
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-6 font-outfit uppercase tracking-wider">Professional</h3>
             <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-bold text-white font-outfit">$20</span>
                <span className="text-muted-foreground font-medium italic">ONE TIME</span>
             </div>
             
             <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                {[
                   "Unlimited Screen Capture",
                   "BYOK (Zero Markup)",
                   "Semantic Token Optimization",
                   "Stealth Screen-Share Mode",
                   "Multiple LLM Support",
                   "Lifetime Feature Updates",
                   "Secure Keychain Storage",
                   "Direct Context Extraction"
                ].map(f => (
                   <div key={f} className="flex items-center gap-3 text-sm text-neutral-200">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{f}</span>
                   </div>
                ))}
             </div>

             <button className="w-full py-5 rounded-3xl font-bold bg-primary text-primary-foreground shadow-2xl hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg">
                Get Lifetime License
                <Zap className="w-5 h-5 fill-current" />
             </button>
             
             <p className="mt-6 text-center text-xs text-muted-foreground opacity-60">
                Works with your own Gemini, Claude, or OpenAI keys.
             </p>
          </motion.div>
        </div>
        
        <div className="mt-20 text-center max-w-2xl mx-auto p-6 rounded-3xl border border-white/5 bg-white/[0.02]">
           <h4 className="text-white font-bold mb-2">Why BYOK?</h4>
           <p className="text-muted-foreground text-sm">
              Standard AI apps charge $20/month for access. We don't. With **Bring Your Own Key**, you pay GhostLy once and pay the LLM providers pennies for your actual usage. **Total control. Zero middleman markup.**
           </p>
        </div>
      </div>
    </section>
  );
}
