"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, MoreVertical } from "lucide-react";

// Secondary navigation links for desktop side nav
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

interface SideNavProps {
  scrolled?: boolean;
}

export default function SideNav({ scrolled = false }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Fixed Top Right Corner - Desktop Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden lg:flex fixed top-5 right-6 items-center justify-center p-2.5 rounded-full transition-all cursor-pointer shadow-lg z-50 ${
          scrolled 
            ? "bg-white hover:bg-primary/10 text-foreground border border-border" 
            : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
        }`}
        aria-label="More pages"
        title="More pages"
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      {/* Desktop Side Nav Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed inset-0 bg-black/30 z-60"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden lg:flex flex-col fixed top-0 right-0 bottom-0 w-50 bg-white shadow-2xl z-70"
            >
              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">More Pages</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="divide-y divide-border/50">
                  {secondaryNavLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left px-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Footer Text - Sticky at Bottom */}
              <div className="px-4 py-2 border-t border-border/50 text-center bg-slate-50">
                <p className="text-[10px] text-muted-foreground/60">
                  Sanctuary of Wind & Fire A/G
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
