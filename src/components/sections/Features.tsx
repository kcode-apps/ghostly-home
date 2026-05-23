"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Zap, Layers, Cpu, Globe, LockKeyhole, type LucideIcon } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
};

const features: Feature[] = [
  {
    title: "Reads Your Screen",
    description: "GhostLy gives AI eyes on your desktop. It reads what's on your screen and in your clipboard. No screenshots to take, no text to copy and paste.",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    title: "Bring Your Own Keys",
    description: "Use your own Claude, GPT, or Gemini account. You pay the AI provider directly, with no markup from us and no GhostLy subscription.",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    title: "All Models, One App",
    description: "Switch between Claude, GPT, and Gemini in one place. If one provider is unavailable, GhostLy can try another automatically.",
    icon: Globe,
    color: "text-sky-400",
  },
  {
    title: "Sensitive Data Redaction",
    description:
      "GhostLy can protect your personal details on your device by redacting them before they’re sent to AI, like emails, phone numbers, and payment info.",
    icon: LockKeyhole,
    color: "text-violet-400",
    badge: "Beta",
  },
  {
    title: "Built-In Privacy",
    description: "Your screen stays on your Mac. GhostLy processes what it reads locally, and can hide itself from screen recordings and video calls.",
    icon: ShieldCheck,
    color: "text-indigo-400",
  },
  {
    title: "Smarter AI, Lower Costs",
    description: "GhostLy trims unnecessary detail before sending to AI, so you use less and pay less with your provider.",
    icon: Eye,
    color: "text-teal-400",
  },
  {
    title: "Always Ready, Never In Your Way",
    description: "GhostLy stays out of the way until you need it. Open it with a shortcut, get your answer, and get back to work.",
    icon: Cpu,
    color: "text-cyan-400",
  }
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
            <span className="text-primary">Focused Work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            GhostLy strips away the busywork of traditional AI apps. No more copy-pasting.
            No more setting up context by hand. Just help, right where you need it.
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
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white font-outfit">
                  {feature.title}
                </h3>
                {feature.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-violet-500/20 text-violet-300 border border-violet-400/30">
                    {feature.badge}
                  </span>
                )}
              </div>
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
