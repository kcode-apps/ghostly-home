"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Zap, Layers, Cpu, Globe, Sparkles } from "lucide-react";

const features = [
  {
    title: "Clipboard & Screen Aware",
    description: "Contextual depth. GhostLy synchronizes your system clipboard and active window state into a unified XML structure for the AI.",
    icon: Layers,
    color: "text-emerald-400",
  },
  {
    title: "Bring Your Own Key (BYOK)",
    description: "Zero token markup. Access Gemini, Claude 3.5, and GPT-4o using your direct API keys. Securely stored in macOS hardware Keychain.",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    title: "Unified AI Interface",
    description: "Stop switching between ChatGPT, Gemini, and Claude tabs. Access every major model in one persistent, context-aware window designed for power users.",
    icon: Globe,
    color: "text-sky-400",
  },
  {
    title: "Stealth Privacy Mode",
    description: "You choose your visibility. Opt to keep GhostLy completely silent and invisible during Zoom, Teams, and screen recordings using native macOS privacy controls.",
    icon: ShieldCheck,
    color: "text-indigo-400",
  },
  {
    title: "Smart Token Optimization",
    description: "Save on AI costs. GhostLy uses a local embedding engine to filter out irrelevant data before it reaches the LLM. You only pay for the context that actually matters.",
    icon: Eye,
    color: "text-teal-400",
  },
  {
    title: "Non-Intrusive Heads Up Display (HUD)",
    description: "Built for zero context-switching and zero interruptions. Interact with your screen through the HUD without ever losing focus on your active task.",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Pre-Configurable AI Prompts",
    description: "Automate repetitive tasks. Save your most complex prompts once and trigger them instantly from any application via custom global shortcuts.",
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
