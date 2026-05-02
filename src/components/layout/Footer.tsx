import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo size={32} />
          
          <nav className="flex gap-8 text-sm text-muted-foreground font-medium">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </nav>

          <p className="text-xs text-muted-foreground/50">
            © 2026 GhostLy AI. Built for the future of focus.
          </p>
        </div>
      </div>
    </footer>
  );
}
