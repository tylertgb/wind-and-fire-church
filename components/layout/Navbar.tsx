"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import SideNav from "./SideNav";

// Primary navigation links (shown in main navbar on desktop)
const primaryNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give" },
];

// Secondary navigation links (for mobile menu)
const secondaryNavLinks = [
  { label: "History", href: "/history" },
  { label: "Leadership", href: "/leadership" },
  { label: "Pastor's Message", href: "/pastor-message" },
  { label: "Impact", href: "/impact" },
  { label: "Missions", href: "/missions" },
  { label: "Sermons", href: "/sermons" },
  { label: "Gallery", href: "/gallery" },
  { label: "Resources", href: "/resources" },
];

// All links combined for mobile menu
const allNavLinks = [...primaryNavLinks, ...secondaryNavLinks];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md rounded-b-lg shadow-md shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Logo />
              <div className="leading-tight">
                <div
                  className={`font-bold text-sm tracking-tight transition-colors ${
                    scrolled || isOpen ? "text-foreground" : "text-white"
                  }`}
                >
                  Wind & Fire A/G
                </div>
                <div
                  className={`text-[10px] tracking-widest uppercase transition-colors ${
                    scrolled || isOpen ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  Tamale, Ghana
                </div>
              </div>
            </Link>

            {/* Desktop Nav - Primary Links Only */}
            <nav className="hidden lg:flex items-center gap-1">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer hover:bg-primary/10 hover:text-primary ${
                    scrolled ? "text-foreground" : "text-white hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions - New Here button only */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#visitor"
                className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
              >
                New Here?
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors cursor-pointer ${
                scrolled || isOpen
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Shows All Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              <div className="rounded-2xl overflow-hidden">
                <div className="px-2 py-3 divide-y divide-border/50">
                  {allNavLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-4 py-3.5 text-xs font-bold text-foreground tracking-widest uppercase hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-3 px-2">
                    <Link
                      href="/#visitor"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-xs font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer text-center tracking-widest uppercase"
                    >
                      New Here?
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Desktop Side Nav - Fixed Top Right */}
      <SideNav scrolled={scrolled} />
    </>
  );
}
