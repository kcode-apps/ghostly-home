"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div 
        className={cn(
          "container mx-auto max-w-6xl rounded-2xl transition-all duration-300 flex items-center justify-between px-6",
          isScrolled ? "glass py-3 shadow-lg" : "py-4"
        )}
      >
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo variant="full" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#"}
            className="px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl text-sm hover:brightness-110 transition-all active:scale-95"
          >
            Download App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass rounded-3xl p-6 md:hidden flex flex-col gap-4 z-[99]"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#"}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl mt-4 text-center"
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
