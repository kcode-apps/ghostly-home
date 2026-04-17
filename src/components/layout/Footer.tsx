import { Ghost } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
               <Ghost className="w-5 h-5 text-primary" />
            </div>
            <span className="font-outfit font-bold text-xl text-white tracking-tight">GhostLy</span>
          </div>
          
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
