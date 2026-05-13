"use client";

import { useState } from "react";
import { Monitor, ArrowRight } from "lucide-react";

export function WindowsWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleJoinWaitlist = async () => {
    if (!validateEmail(email)) return;
    setStatus("submitting");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, variant: "Windows" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="glass max-w-4xl mx-auto rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Monitor className="w-3 h-3" />
                Coming for PC
              </div>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
                Not a Mac user?
              </h2>
              <p className="text-muted-foreground">
                We&apos;re building GhostLy for Windows. Join the exclusive waitlist to be synchronized first.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={status === "success" ? "You're on the list!" : "Enter your email..."}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting" || status === "success"}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-600 outline-none focus:border-primary/50 transition-all min-w-[280px] disabled:opacity-50"
              />
              <button
                onClick={handleJoinWaitlist}
                disabled={!validateEmail(email) || status === "submitting" || status === "success"}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Joining..." : status === "success" ? "Joined" : "Join Waitlist"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
