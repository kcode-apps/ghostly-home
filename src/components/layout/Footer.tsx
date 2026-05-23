import { Logo } from "../ui/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo size={32} />
          
          <nav className="flex gap-8 text-sm text-muted-foreground font-medium flex-wrap justify-center">
            <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="/#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
            <Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/open-source" className="hover:text-white transition-colors">Open Source</Link>
            <Link href="https://github.com/kcode-apps/ghostly-community" target="_blank" className="hover:text-white transition-colors">Community</Link>
          </nav>

          <p className="text-xs text-muted-foreground/50">
            © 2026 GhostLy AI. AI that stays out of your way.
          </p>
        </div>
      </div>
    </footer>
  );
}
