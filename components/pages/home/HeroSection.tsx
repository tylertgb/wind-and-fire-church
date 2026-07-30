"use client";

import { motion } from "motion/react";
import { Play, MapPin, ChevronDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1629143893729-3a79f48ff473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1510384742052-1abcb6282645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image collage */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ opacity: i === 1 ? 1 : 0.7 }}
          >
            <img
              src={img}
              alt="worship"
              className="w-full h-full object-cover scale-105"
              style={{
                filter: "brightness(0.45)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-transparent to-accent/20" />

      {/* Animated flame particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              background: `radial-gradient(circle, oklch(0.68 0.22 35), transparent)`,
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              bottom: `${5 + (i % 3) * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Tamale, Ghana · Assemblies of God
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance mb-4"
        >
          Welcome to the{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">
            Sanctuary
          </span>{" "}
          of Wind and Fire
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-2"
        >
          A place of empowerment, faith, and community in Tamale.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-1.5 text-white/60 text-sm mb-10"
        >
          <MapPin className="w-3.5 h-3.5" />
          King David Junction, Kanvili - Tuunayili Road, Tamale
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-primary to-orange-500 text-white font-semibold text-base shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Join Our Live Stream
          </a>
          <button
            onClick={() => scrollToSection("#schedule")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold text-base hover:bg-white/20 hover:border-white/60 transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            Service Times & Location
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#quick-actions")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
