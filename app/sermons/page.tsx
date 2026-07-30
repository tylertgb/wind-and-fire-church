"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  PlayCircle, Clock, Search, Radio, X, ChevronLeft,
  Tv, ExternalLink, Calendar, User, Flame,
} from "lucide-react";

const ALL_SERMONS = [
  {
    id: 1,
    title: "Walking in the Fire of the Holy Spirit",
    series: "Faith Convention 2026",
    date: "July 20, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1576919463908-de1f877114bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "58 min",
    description: "In this powerful message from Faith Convention 2026, Rev. Fant unpacks what it means to walk daily in the fire of the Holy Spirit — not just in the church building, but in every area of life.",
    scripture: "Acts 2:1-4",
    tags: ["Holy Spirit", "Revival", "Convention"],
  },
  {
    id: 2,
    title: "The Wind of Change — God's Timing",
    series: "Wisdom Series",
    date: "July 13, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1769755409781-9e8924c57362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "47 min",
    description: "God's timing is never early, never late. This message explores the wind of change that moves through seasons of life and how to trust God's perfect schedule for your story.",
    scripture: "Ecclesiastes 3:1-8",
    tags: ["Faith", "Patience", "Trust"],
  },
  {
    id: 3,
    title: "Standing Firm in Turbulent Times",
    series: "Wisdom Series",
    date: "July 6, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "52 min",
    description: "When the world shakes and uncertainty surrounds us, the Word of God remains our anchor. Learn practical keys to standing unshakeable in your faith no matter what storms arise.",
    scripture: "Ephesians 6:10-18",
    tags: ["Faith", "Strength", "Warfare"],
  },
  {
    id: 4,
    title: "Empowered for Purpose",
    series: "Faith Convention 2026",
    date: "June 29, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1782544120562-dae3fd999899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "44 min",
    description: "You were not saved by accident. Every believer carries a divine assignment — and the Holy Spirit equips you with everything you need to walk in that purpose boldly.",
    scripture: "Jeremiah 29:11",
    tags: ["Purpose", "Holy Spirit", "Identity"],
  },
  {
    id: 5,
    title: "When God Breathes Into Your Situation",
    series: "Power Encounters",
    date: "June 22, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1624522457679-2f62d921fd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "61 min",
    description: "No situation is too dry, too dead, or too far gone. Just as God breathed life into the valley of dry bones, He can breathe resurrection power into every area of your life today.",
    scripture: "Ezekiel 37:1-10",
    tags: ["Miracles", "Resurrection", "Healing"],
  },
  {
    id: 6,
    title: "Fire Falls: A Night of Miracles",
    series: "Power Encounters",
    date: "June 15, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "39 min",
    description: "A live recording from our night of miracles service. Testimonies of healing, deliverance, and encounter as God's fire fell on Wind & Fire in Tamale.",
    scripture: "1 Kings 18:38",
    tags: ["Miracles", "Healing", "Fire"],
  },
  {
    id: 7,
    title: "Positioned for a Breakthrough",
    series: "Power Encounters",
    date: "June 8, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1547656834-630c4efa3c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "55 min",
    description: "Breakthrough is not a matter of luck — it is a matter of positioning. In this message, discover the spiritual postures that open the door for God's supernatural intervention in your life.",
    scripture: "Joshua 3:5",
    tags: ["Breakthrough", "Faith", "Prayer"],
  },
  {
    id: 8,
    title: "The Prayer that Moves Mountains",
    series: "Wisdom Series",
    date: "June 1, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    duration: "49 min",
    description: "Faith-filled prayer is the most powerful force in the universe. This message breaks down the anatomy of mountain-moving prayer from the words of Jesus himself.",
    scripture: "Matthew 17:20",
    tags: ["Prayer", "Faith", "Mountains"],
  },
  {
    id: 9,
    title: "The Blood of Jesus: Our Covenant Shield",
    series: "Wisdom Series",
    date: "May 25, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1576919463908-de1f877114bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "43 min",
    description: "The blood of Jesus is not merely a doctrine — it is a living covenant that speaks on your behalf. Learn to plead the blood with understanding, authority, and confidence.",
    scripture: "Hebrews 12:24",
    tags: ["Blood of Jesus", "Covenant", "Protection"],
  },
  {
    id: 10,
    title: "Rivers of Living Water",
    series: "Faith Convention 2026",
    date: "May 18, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "51 min",
    description: "Jesus promised that rivers of living water would flow from the belly of every believer. This message is an invitation to an overflow experience in the Holy Spirit.",
    scripture: "John 7:38",
    tags: ["Holy Spirit", "Overflow", "Revival"],
  },
  {
    id: 11,
    title: "Warfare Prayers: Taking Back Your Territory",
    series: "Power Encounters",
    date: "May 11, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1769755409781-9e8924c57362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "66 min",
    description: "The enemy has no legal right to your family, your health, or your destiny. This is a call to spiritual warfare — to take back every territory the enemy has stolen through fervent, scripture-based prayer.",
    scripture: "Luke 10:19",
    tags: ["Warfare", "Authority", "Prayer"],
  },
  {
    id: 12,
    title: "Grace That Is Greater",
    series: "Wisdom Series",
    date: "May 4, 2026",
    speaker: "Rev. Aaron Lambon Fant",
    thumbnail: "https://images.unsplash.com/photo-1782544120562-dae3fd999899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    duration: "40 min",
    description: "No matter what you've done, where you've been, or how far you've fallen — God's grace is greater still. A message of hope, restoration, and the Father's relentless love.",
    scripture: "Romans 5:20",
    tags: ["Grace", "Restoration", "Love"],
  },
];

const SERIES = ["All", "Faith Convention 2026", "Wisdom Series", "Power Encounters"] as const;
type Series = typeof SERIES[number];

const seriesTagColors: Record<string, string> = {
  "Faith Convention 2026": "bg-orange-100 text-orange-700",
  "Wisdom Series": "bg-blue-100 text-blue-700",
  "Power Encounters": "bg-violet-100 text-violet-700",
};

const PAGE_SIZE = 9;

type Sermon = typeof ALL_SERMONS[number];

export default function SermonsPage() {
  const [search, setSearch] = useState("");
  const [activeSeries, setActiveSeries] = useState<Series>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Sermon | null>(null);

  const filtered = ALL_SERMONS.filter((s) => {
    const matchesSeries = activeSeries === "All" || s.series === activeSeries;
    const q = search.toLowerCase();
    const matchesSearch = !q || s.title.toLowerCase().includes(q) || s.speaker.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q));
    return matchesSeries && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-background">

      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-md">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm text-foreground hidden sm:block">Wind & Fire A/G</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link href="/" className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
              Home
            </Link>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold">
              Sermons
            </span>
          </nav>
          <Link
            href="/give"
            className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-md cursor-pointer"
          >
            Give Online
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <div className="relative bg-linear-to-br from-foreground via-slate-900 to-slate-800 pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{ width: `${200 + i * 100}px`, height: `${200 + i * 100}px`, top: `${-20 + i * 20}%`, right: `${5 + i * 10}%` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5 border border-primary/30">
            <Radio className="w-3.5 h-3.5" />
            Sermons Library
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight text-balance">
            Messages That Transform Lives
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Browse all sermons from Wind & Fire Assemblies of God, Tamale.
            Search by title, topic, or series.
          </p>
          {/* Live stream CTA */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
          >
            <Tv className="w-4 h-4" />
            Watch Live — Sundays 7:30 AM & 10:00 AM
          </a>
        </div>
      </div>

      {/* ── SEARCH & FILTER ── */}
      <div className="bg-white border-b border-border sticky top-16 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search sermons, topics…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(PAGE_SIZE); }}
              className="w-full pl-9 pr-8 py-2.5 rounded-full bg-muted text-sm text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          {/* Series filters */}
          <div className="flex flex-wrap gap-2">
            {SERIES.map((s) => (
              <button
                key={s}
                onClick={() => { setActiveSeries(s); setVisibleCount(PAGE_SIZE); }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeSeries === s
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {/* Result count */}
          <div className="text-xs text-muted-foreground shrink-0 ml-auto hidden sm:block">
            {filtered.length} sermon{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* ── SERMON GRID ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSeries}-${search}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {visible.length === 0 ? (
              <div className="py-20 text-center">
                <PlayCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-1">No sermons found</p>
                <p className="text-muted-foreground text-sm">Try a different search or series filter</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((sermon, i) => (
                  <motion.div
                    key={sermon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    onClick={() => setSelected(sermon)}
                    className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-44 overflow-hidden bg-muted">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-200">
                          <PlayCircle className="w-6 h-6 text-white fill-white/70" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {sermon.duration}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-5">
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${seriesTagColors[sermon.series] ?? "bg-muted text-muted-foreground"} inline-block mb-2`}>
                        {sermon.series}
                      </span>
                      <h3 className="font-semibold text-foreground text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {sermon.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {sermon.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {sermon.date}
                        </div>
                        <div className="text-xs font-semibold text-primary">Watch →</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {canLoadMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
            >
              Load More Sermons
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs">
                {filtered.length - visibleCount} remaining
              </span>
            </button>
          </div>
        )}
      </div>

      {/* ── SERMON DETAIL MODAL ── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-50 flex flex-col max-h-[90vh]"
            >
              {/* Thumbnail */}
              <div className="relative h-52 shrink-0 overflow-hidden">
                <img
                  src={selected.thumbnail}
                  alt={selected.title}
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${seriesTagColors[selected.series] ?? "bg-white/20 text-white"} inline-block mb-2`}>
                    {selected.series}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                    {selected.title}
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="overflow-y-auto flex-1 p-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5 pb-5 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {selected.speaker}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selected.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {selected.duration}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Scripture</div>
                  <div className="text-sm font-semibold text-primary">{selected.scripture}</div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch on Facebook
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm hover:border-primary transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    YouTube Channel
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── FOOTER CTA ── */}
      <div className="bg-linear-to-r from-primary to-orange-500 py-12 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Want to Hear These Live?
          </h3>
          <p className="text-white/70 mb-6">
            Join us every Sunday at King David Junction, Tamale. New faces always welcome.
          </p>
          <Link
            href="/#visitor"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-white/90 transition-all shadow-xl cursor-pointer"
          >
            Plan My First Visit →
          </Link>
        </div>
      </div>

    </div>
  );
}
