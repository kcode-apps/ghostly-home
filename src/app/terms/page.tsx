import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GhostLy",
  description: "Terms and conditions for using the GhostLy AI HUD.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-3xl relative z-10">
        <div className="absolute inset-0 bg-glow opacity-10 pointer-events-none -z-10" />

        <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: May 7, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed font-inter">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">1. License Grant</h2>
            <p>
              GhostLy is a commercial software product. Upon purchase, we grant you a non-exclusive, non-transferable license to use the Software on a limited number of devices as specified in your purchase plan.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">2. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Decompile, reverse-engineer, or attempt to extract the source code of the Software.</li>
              <li>Use the Software to generate illegal, harmful, or abusive content through AI providers.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">3. AI Disclaimer (No Warranty)</h2>
            <p>
              GhostLy provides a bridge to Artificial Intelligence models. You acknowledge that AI can generate inaccurate, biased, or hallucinated information. <strong>GhostLy is provided &quot;as is&quot;</strong> without any warranty of accuracy or fitness for a particular purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">4. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, GhostLy shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the Software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">5. Refunds</h2>
            <p>
              Refunds are handled according to the policy of our merchant of record, Lemon Squeezy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white font-outfit">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of your applicable jurisdiction, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
