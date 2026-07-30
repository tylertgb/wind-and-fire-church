"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Ministries", href: "#ministries" },
  { label: "Media", href: "#media" },
  { label: "Give", href: "#give" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-primary to-orange-500 shadow-lg">
              <Flame className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div
                className={`font-bold text-sm tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Wind & Fire
              </div>
              <div
                className={`text-[10px] tracking-widest uppercase transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                Assemblies of God
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer hover:bg-primary/10 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white hover:bg-white/20 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* New Here button + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#visitor")}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
            >
              New Here?
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full transition-colors cursor-pointer ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-border shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#visitor")}
                className="block w-full mt-2 px-4 py-3 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer text-center"
              >
                New Here?
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
