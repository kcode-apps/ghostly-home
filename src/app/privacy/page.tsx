import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GhostLy",
  description: "How GhostLy handles your data and protects your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white bg-background text-foreground">
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-3xl relative z-10">
        <div className="absolute inset-0 bg-glow opacity-10 pointer-events-none -z-10" />
        
        <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: May 23, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed font-inter">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">1. Introduction</h2>
            <p>
              GhostLy (&quot;we,&quot; &quot;our,&quot; or &quot;the Software&quot;) is designed with a privacy-first architecture. This policy explains how we handle your information when you use the GhostLy desktop app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">2. Information We Never Collect</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>No Analytics</strong>: We do not use tracking scripts, telemetry, or analytics cookies inside the application.</li>
              <li><strong>No Personal Data Collection</strong>: We do not collect your name, location, or browsing history.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">3. Information We Process</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><strong>Licensing</strong>: When you purchase GhostLy, our merchant of record (<strong>Lemon Squeezy</strong>) collects your email and payment details. We access your email solely to manage your license.</li>
              <li><strong>AI Prompts</strong>: GhostLy does not store your AI prompts. When you use OpenAI, Anthropic, or Google Gemini, your prompts are transmitted directly to those providers via their respective APIs to generate responses. GhostLy does not intercept, log, or store these prompts on any central server.</li>
              <li><strong>System Info</strong>: We may check your OS version and Hardware (Apple Silicon/Intel) locally to optimize performance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">
              4. Sensitive Data Redaction <span className="text-sm font-semibold uppercase tracking-wide text-violet-300">(Beta)</span>
            </h2>
            <p>
              GhostLy includes a <strong>Sensitive Data Redaction</strong> feature (Secure Processing), currently in <strong>beta</strong>. On your device, it tries to hide personal details (such as emails, phone numbers, and payment info) and common credential patterns (such as API keys and secrets in environment files) before anything is sent to an AI provider.
            </p>
            <p>
              <strong>Important:</strong> Because this feature is in beta, it may not catch everything. You are still responsible for what you choose to share with AI providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">5. Third-Party Services</h2>
            <p>By using remote AI models, you are subject to the privacy policies of the providers you configure:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI Privacy Policy</a></li>
              <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Anthropic Privacy Policy</a></li>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
