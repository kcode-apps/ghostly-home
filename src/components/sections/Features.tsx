"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Zap, Layers, Cpu, Globe, Sparkles } from "lucide-react";

const features = [
  {
    title: "Understands Your Screen",
    description: "GhostLy automatically reads your active window and clipboard. No more copy-pasting—it has the full context of what you're working on.",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    title: "Bring Your Own Keys",
    description: "Zero markup on AI tokens. Use your own Gemini, Claude, or OpenAI API keys and pay only for what you actually use. No monthly fees.",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    title: "All Models, One HUD",
    description: "Stop switching tabs. Access Claude 3.5, GPT-4o, and Gemini 1.5 in a single, persistent display that lives on top of any app.",
    icon: Globe,
    color: "text-sky-400",
  },
  {
    title: "Built-In Privacy",
    description: "Your data stays yours. GhostLy uses native macOS security to remain invisible to screen recordings and video calls automatically.",
    icon: ShieldCheck,
    color: "text-indigo-400",
  },
  {
    title: "Smarter AI, Lower Costs",
    description: "GhostLy cleans up your screen context before sending it to the AI, stripping away noise to save you up to 60% on token fees.",
    icon: Eye,
    color: "text-teal-400",
  },
  {
    title: "Never In Your Way",
    description: "The non-intrusive HUD is designed for zero context-switching. It’s always there when you need it and vanishes when you don’t.",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Custom AI Shortcuts",
    description: "Automate your repetitive tasks. Save your most complex prompts once and trigger them instantly from any application with global shortcuts.",
    icon: Sparkles,
    color: "text-amber-400",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built for <br />
            <span className="text-primary">High-Performance Work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            GhostLy strips away the complexity of traditional AI apps. No more copy-pasting.
            No more manual context setup. Just seamless, intelligent assistance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass p-8 rounded-3xl transition-all hover:border-primary/50"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-outfit">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
