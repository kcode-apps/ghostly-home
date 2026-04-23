"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";



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
                  No monthly fees. No &quot;unlimited&quot; traps. Just a private, context-aware bridge between your screen and your AI keys.
               </p>
            </div>

            <div className="max-w-2xl mx-auto">
               {/* Lifetime Card */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass p-10 rounded-[40px] border-primary/50 bg-primary/[0.03] shadow-[0_0_50px_-10px_rgba(20,184,166,0.3)] flex flex-col relative overflow-hidden"
               >
                  <div className="absolute top-6 right-8 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                     Lifetime Access
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 font-outfit uppercase tracking-wider">Professional</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-6xl font-bold text-white font-outfit">$20</span>
                     <span className="text-muted-foreground font-medium italic">ONE TIME</span>
                  </div>
                  <p className="text-sm text-primary/60 font-bold mb-8">
                     Try everything for free. Pay only to remove the 20-query limit.
                  </p>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                     {[
                        "Claude & GPT-4 Series",
                        "Google Gemini Pro support",
                        "Your own API keys",
                        "Lower AI token costs",
                        "Hidden from Screen Share",
                        "Secure, Local Storage",
                        "Always Private"
                     ].map(f => (
                        <div key={f} className="flex items-center gap-3 text-sm text-neutral-200">
                           <Check className="w-4 h-4 text-primary shrink-0" />
                           <span>{f}</span>
                        </div>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                     <a 
                        href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
                        className="lemonsqueezy-button flex-1 py-5 rounded-3xl font-bold bg-primary text-primary-foreground shadow-2xl hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                     >
                        Get Lifetime License
                        <Zap className="w-5 h-5 fill-current" />
                     </a>
                     <button 
                        onClick={() => {
                          const el = document.getElementById('onboarding');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex-1 py-5 rounded-3xl font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                     >
                        Try for Free
                     </button>
                  </div>

                  <p className="mt-6 text-center text-xs text-muted-foreground opacity-60">
                     Works with your own Gemini, Claude, or OpenAI API keys.
                  </p>
               </motion.div>
            </div>

            <div className="mt-20 text-center max-w-2xl mx-auto p-6 rounded-3xl border border-white/5 bg-white/[0.02]">
               <h4 className="text-white font-bold mb-2">Total Control, Zero Fees</h4>
               <p className="text-muted-foreground text-sm">
                  Standard AI apps charge $20/month for access. <strong>GhostLy doesn&apos;t.</strong> By using your own API keys, you pay GhostLy once and access raw intelligence for just the pennies you actually use. <strong>No middleman markups. No monthly subscriptions.</strong>
               </p>
            </div>
         </div>
      </section>
   );
}