"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play, MapPin, ChevronLeft, ChevronRight,
  X, PlayCircle, Volume2,
  MoveDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import MemberAvatarStack from "@/components/ui/MemberAvatarStack";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600",
    tag: "Welcome To Sanctuary Of Wind & Fire",
    headline: "Experience His\nPresence Every Sunday",
    sub: "Where the Wind of the Spirit meets the Fire of Revival.",
    accent: "from-orange-400 to-red-500",
  },
  {
    image: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600",
    tag: "Spirit & Truth",
    headline: "Lifted Hands,\nTransformed Lives",
    sub: "Every voice matters. Every heart belongs. Come as you are.",
    accent: "from-red-400 to-primary",
  },
  {
    image: "https://images.unsplash.com/photo-1510590124886-dc2653b48bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600",
    tag: "Revival in Tamale",
    headline: "The Fire is\nFalling Here",
    sub: "Wind and Fire A/G - a Spirit-filled community at King David Junction.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    image: "https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600",
    tag: "Power Encounters",
    headline: "Come Encounter\nthe Living God",
    sub: "Signs, wonders, and miracles happen when believers gather in His name.",
    accent: "from-rose-400 to-primary",
  },
  {
    image: "https://images.unsplash.com/photo-1600288480699-0b0d8a456dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600",
    tag: "You Belong Here",
    headline: "A Church That\nFeels Like Family",
    sub: "New faces always welcome. Your next chapter starts this Sunday.",
    accent: "from-orange-300 to-red-400",
  },
] as const;

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || videoOpen) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, videoOpen, next]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section
      id="home"
      className="group relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── BACKGROUND SLIDER ── */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            {/* Ken Burns zoom */}
            <motion.img
              src={s.image}
              alt="worship"
              className="w-full h-full object-cover"
              animate={{ scale: i === current ? 1.18 : 1.08 }}
              transition={{ duration: INTERVAL / 1000 + 1.4, ease: "linear" }}
              style={{ filter: "brightness(0.38)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* ── FLAME PARTICLES ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              background: "radial-gradient(circle, oklch(0.68 0.22 35), transparent)",
              width: `${80 + i * 35}px`,
              height: `${80 + i * 35}px`,
              left: `${8 + i * 18}%`,
              bottom: `${4 + (i % 3) * 8}%`,
              opacity: 0.18,
            }}
            animate={{ y: [0, -28, 0], opacity: [0.12, 0.26, 0.12], scale: [1, 1.25, 1] }}
            transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* ── SLIDE CONTENT ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-24 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-left max-w-3xl"
          >
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              {slide.tag}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-5"
            >
              {slide.headline.split("\n").map((line, i) => (
                <span key={i} className={i === 1 ? `block py-2 text-transparent bg-clip-text bg-linear-to-r ${slide.accent}` : "block"}>
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-white/75 max-w-xl mb-2 leading-relaxed"
            >
              {slide.sub}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-1.5 text-white/50 text-sm mb-10"
            >
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              King David Junction, Kanvili – Tuunayili Road, Tamale
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* Watch video */}
              <button
                onClick={() => setVideoOpen(true)}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-base hover:bg-white/25 hover:border-white/50 transition-all duration-200 cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform duration-200 shrink-0">
                  <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                </span>
                Watch a Message
              </button>

              <button
                onClick={() => scrollTo("#schedule")}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-linear-to-r from-primary to-orange-500 text-white font-semibold text-base shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                Service Times & Location
              </button>
            </motion.div>

            {/* Member Avatar Stack - only show on "You Belong Here" slide */}
            {current === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="inline-flex"
              >
                <div className="">
                  <MemberAvatarStack
                    avatars={[
                      { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", alt: "Member 1" },
                      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", alt: "Member 2" },
                      { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop", alt: "Member 3" },
                      { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", alt: "Member 4" },
                    ]}
                    count="500+"
                    label="active members"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── SLIDE CONTROLS (arrows + dots) ── */}
      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/40 transition-all duration-500 opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/40 transition-all duration-500 opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Next slide"
      >
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Dots indicators */}
      <div className="absolute bottom-20 left-0 right-0 z-20 flex justify-center px-4">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                animate={{
                  width: i === current ? 28 : 8,
                  opacity: i === current ? 1 : 0.4,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-1.5 rounded-full bg-white"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        onClick={() => scrollTo("#quick-actions")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MoveDown className="w-6 h-6" />
      </motion.button>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {videoOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 cursor-pointer"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed z-50 inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-3xl bg-gray-950 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <div className="text-white font-semibold text-sm">Latest Message</div>
                  <div className="text-white/40 text-xs mt-0.5">Wind & Fire Assemblies of God, Tamale</div>
                </div>
                <button
                  onClick={() => setVideoOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video embed placeholder */}
              <div className="relative bg-black" style={{ paddingBottom: "56.25%" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-2xl shadow-primary/50">
                    <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                  </div>
                  <div className="text-center px-6">
                    <p className="text-white font-serif text-xl font-bold mb-1">
                      Walking in the Fire of the Holy Spirit
                    </p>
                    <p className="text-white/50 text-sm mb-5">Rev. Aaron Lambon Fant · July 20, 2026 · 58 min</p>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all cursor-pointer shadow-lg shadow-primary/30"
                    >
                      <Volume2 className="w-4 h-4" />
                      Watch on Facebook Live
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick sermon links */}
              <div className="px-6 py-4 flex flex-wrap gap-3 border-t border-white/10">
                <span className="text-white/40 text-xs self-center">More sermons:</span>
                {["The Wind of Change", "Empowered for Purpose", "Fire Falls"].map((title) => (
                  <a
                    key={title}
                    href="/sermons"
                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                  >
                    {title}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
