import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { WindowsWaitlist } from "@/components/sections/WindowsWaitlist";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
        <Features />
        <HowItWorks />
        <Pricing />
        <WindowsWaitlist />
      </div>
    </main>
  );
}
