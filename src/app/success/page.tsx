"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Copy, 
  ArrowRight, 
  ShieldCheck, 
  Check 
} from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const licenseKey = searchParams.get("key") || "XXXX-XXXX-XXXX-XXXX";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container relative z-10 px-4 mx-auto pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Success Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30"
          >
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-4">
            Welcome to <span className="text-primary text-glow">GhostLy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Your purchase was successful. Your license key has been sent to your email.
            You can also find it below for immediate activation.
          </p>
        </div>

        {/* Step 1: License Key */}
        <div className="glass rounded-[32px] p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck className="w-32 h-32 text-primary" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <h2 className="text-xl font-bold text-white tracking-tight">Your License Key</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                <code className="text-primary font-mono text-lg md:text-xl tracking-wider select-all">
                  {licenseKey}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground hover:text-primary"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-primary" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <button
                onClick={copyToClipboard}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {copied ? "Copied!" : "Copy Key"}
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground flex items-center gap-2 italic">
              <ArrowRight className="w-3 h-3" />
              You&apos;ll need this key to activate GhostLy after installation.
            </p>
          </div>
        </div>

        {/* Step 2: Activation Instructions */}
        <div className="glass rounded-[32px] p-8 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
            <h2 className="text-xl font-bold text-white tracking-tight">How to Activate</h2>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Now that you have your license key, open the GhostLy application on your desktop to activate your Pro workspace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "1", text: "Open GhostLy Settings", icon: <Check className="w-4 h-4" /> },
                { step: "2", text: "Go to License Tab", icon: <Check className="w-4 h-4" /> },
                { step: "3", text: "Paste Key & Activate", icon: <Check className="w-4 h-4" /> },
              ].map((item) => (
                <div key={item.step} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {item.step}
                  </div>
                  <span className="text-xs text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <div className="relative min-h-screen">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </div>
    </main>
  );
}
