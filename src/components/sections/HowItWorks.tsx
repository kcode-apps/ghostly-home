"use client";

import { motion } from "framer-motion";
import { MousePointer2, ScanSearch, MessageSquareQuote } from "lucide-react";
import { PerceptionLoop } from "@/components/ui/PerceptionLoop";

const steps = [
  {
    icon: MousePointer2,
    title: "Summon GhostLy",
    description: "Use your global shortcut (Cmd + Shift + G) from any application. GhostLy appears instantly as a non-interruptive Heads Up Display (HUD).",
    accent: "bg-teal-500",
  },
  {
    icon: ScanSearch,
    title: "Instant Perception",
    description: "GhostLy captures the current screen context. No need to select text or take screenshots—it understands the entire window state.",
    accent: "bg-blue-500",
  },
  {
    icon: MessageSquareQuote,
    title: "Ghostly Assistance",
    description: "Ask anything. GhostLy provides precise, context-aware answers directly on top of your work. It's like your screen has a brain.",
    accent: "bg-indigo-500",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      {/* Connector Line (Desktop) */}


      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How it <span className="text-teal-400">Works.</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Power at your fingertips. 3 simple steps to integrate GhostLy into your workflow.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full glass border-2 border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary/50 transition-all shadow-xl">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center border-4 border-background">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-outfit">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {step.description}
              </p>

              {/* Decorative Accent Glow (Desktop only) */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 ${step.accent} opacity-5 blur-[80px] -z-10 group-hover:opacity-10 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        <PerceptionLoop />
      </div>
    </section>
  );
}
