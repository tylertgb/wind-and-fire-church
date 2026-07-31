"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PlayCircle, ExternalLink, Tv, Radio, ChevronRight, Clock } from "lucide-react";

const sermons = [
  {
    title: "Walking in the Fire of the Holy Spirit",
    series: "Faith Convention 2026",
    date: "July 20, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1576919463908-de1f877114bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "58 min",
    featured: true,
  },
  {
    title: "The Wind of Change — God's Timing",
    series: "Wisdom Series",
    date: "July 13, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1769755409781-9e8924c57362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "47 min",
    featured: false,
  },
  {
    title: "Standing Firm in Turbulent Times",
    series: "Wisdom Series",
    date: "July 6, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "52 min",
    featured: false,
  },
  {
    title: "Empowered for Purpose",
    series: "Faith Convention 2026",
    date: "June 29, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1782544120562-dae3fd999899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "44 min",
    featured: false,
  },
  {
    title: "When God Breathes Into Your Situation",
    series: "Power Encounters",
    date: "June 22, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1624522457679-2f62d921fd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "61 min",
    featured: false,
  },
  {
    title: "Fire Falls: A Night of Miracles",
    series: "Power Encounters",
    date: "June 15, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "39 min",
    featured: false,
  },
  {
    title: "Positioned for a Breakthrough",
    series: "Power Encounters",
    date: "June 8, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1547656834-630c4efa3c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "55 min",
    featured: false,
  },
  {
    title: "The Prayer that Moves Mountains",
    series: "Wisdom Series",
    date: "June 1, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "49 min",
    featured: false,
  },
];

const FILTERS = ["All", "Faith Convention 2026", "Wisdom Series", "Power Encounters"] as const;
type Filter = typeof FILTERS[number];

const seriesColors: Record<string, string> = {
  "Faith Convention 2026": "text-primary",
  "Wisdom Series": "text-accent",
  "Power Encounters": "text-violet-600",
};

const seriesTagColors: Record<string, string> = {
  "Faith Convention 2026": "bg-orange-100 text-orange-700",
  "Wisdom Series": "bg-blue-100 text-blue-700",
  "Power Encounters": "bg-violet-100 text-violet-700",
};

export default function MediaSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = activeFilter === "All"
    ? sermons
    : sermons.filter((s) => s.series === activeFilter);

  const featured = sermons.find((s) => s.featured)!;
  const grid = filtered.filter((s) => !s.featured);

  return (
    <section id="media" className="bg-white overflow-hidden">

      {/* ── LIVE STREAM BANNER ── */}
      <div className="bg-linear-to-r from-foreground via-slate-900 to-slate-800 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Live Sunday</span>
            </div>
            <p className="text-white/80 text-sm">
              Join us live every Sunday at <strong className="text-white">7:30 AM & 10:00 AM</strong>
            </p>
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold text-xs hover:bg-primary/90 transition-all cursor-pointer shrink-0"
          >
            <Tv className="w-3.5 h-3.5" />
            Watch on Facebook Live
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              <PlayCircle className="w-3.5 h-3.5" />
              Sermons & Media
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Messages That Transform
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Every sermon is a seed. Watch, share, and let God's Word take root in your life.
            </p>
          </motion.div>

          {/* Featured sermon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 group cursor-pointer rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-80">
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />

              {/* Latest badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase shadow-lg">
                  Latest Message
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-10">
                <div className="max-w-lg">
                  <div className={`text-xs font-bold tracking-widest uppercase mb-2 ${seriesColors[featured.series] ?? "text-primary"}`}>
                    {featured.series}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-2 md:gap-4 text-white/60 text-sm mb-5">
                    <span className="text-[10px] md:text-sm">{featured.speaker}</span>
                    <span>·</span>
                    <span className="text-[10px] md:text-sm">{featured.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[10px] md:text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.duration}
                    </span>
                  </div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer"
                  >
                    <PlayCircle className="w-4 h-4 text-primary fill-primary/20" />
                    Watch Now
                  </a>
                </div>
              </div>

              {/* Big play icon, right side */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:flex">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                  <PlayCircle className="w-10 h-10 text-white fill-white/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <div className="flex items-center gap-1.5 mr-2 text-sm text-muted-foreground font-medium">
              <Radio className="w-3.5 h-3.5" />
              Series:
            </div>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === f
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Sermon grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {grid.map((sermon, i) => (
                <motion.div
                  key={sermon.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative h-44 md:h-36 overflow-hidden bg-muted">
                    <img
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <PlayCircle className="w-6 h-6 text-white fill-white/70" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-medium">
                      {sermon.duration}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${seriesTagColors[sermon.series] ?? "bg-muted text-muted-foreground"} inline-block mb-2`}>
                      {sermon.series}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 line-clamp-2">
                      {sermon.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{sermon.date}</div>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              Watch More on Facebook
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm hover:border-primary transition-all cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              Subscribe on YouTube
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
