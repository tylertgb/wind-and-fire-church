"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Flame } from "lucide-react";

type Category = "All" | "Sunday Services" | "Events" | "Youth & Ministries" | "Baptisms";

type Photo = {
  url: string;
  caption: string;
  category: Exclude<Category, "All">;
};

const photos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Sunday Morning Worship",
    category: "Sunday Services",
  },
  {
    url: "https://images.unsplash.com/photo-1570786032462-2efc3ca8fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Congregation in Prayer",
    category: "Sunday Services",
  },
  {
    url: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Praise & Worship Night",
    category: "Sunday Services",
  },
  {
    url: "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Special Evening Service",
    category: "Sunday Services",
  },
  {
    url: "https://images.unsplash.com/photo-1510384742052-1abcb6282645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Community Conference",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1609234656381-73e732808098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Outreach Event",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1563902341721-029085ad9347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Community Celebration",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Revival Night",
    category: "Events",
  },
  {
    url: "https://images.unsplash.com/photo-1594913434694-2164156256c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Youth Group Fellowship",
    category: "Youth & Ministries",
  },
  {
    url: "https://images.unsplash.com/photo-1594913421979-b9399c0cd4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Youth Ministry Team",
    category: "Youth & Ministries",
  },
  {
    url: "https://images.unsplash.com/photo-1594913517373-d1e63820a2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Youth Outdoor Retreat",
    category: "Youth & Ministries",
  },
  {
    url: "https://images.unsplash.com/photo-1594913508822-54188645ed4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Ministries Gathering",
    category: "Youth & Ministries",
  },
  {
    url: "https://images.unsplash.com/photo-1550633794-58a2127a9027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Baptism Sunday",
    category: "Baptisms",
  },
  {
    url: "https://images.unsplash.com/photo-1737337524795-45672146176c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Water Baptism Celebration",
    category: "Baptisms",
  },
  {
    url: "https://images.unsplash.com/photo-1638866406441-74dede2b2f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "New Life in Christ",
    category: "Baptisms",
  },
  {
    url: "https://images.unsplash.com/photo-1548347845-faa3b0b9c45b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Baptism Testimony",
    category: "Baptisms",
  },
];

const categories: Category[] = ["All", "Sunday Services", "Events", "Youth & Ministries", "Baptisms"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md shadow-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-br from-primary to-orange-500 shadow-lg">
                <Flame className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm tracking-tight text-foreground">Wind & Fire</div>
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground">Assemblies of God</div>
              </div>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Our Community</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Church Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A glimpse into the life, love, and legacy of Wind & Fire Assemblies of God.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((photo, index) => (
              <motion.div
                key={photo.url}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                  <p className="text-white/70 text-xs mt-0.5">{photo.category}</p>
                  <div className="absolute top-3 right-3">
                    <ZoomIn className="w-5 h-5 text-white drop-shadow" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white cursor-pointer z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light cursor-pointer z-10 px-3"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].url}
                alt={filtered[lightboxIndex].caption}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{filtered[lightboxIndex].caption}</p>
                <p className="text-white/50 text-sm mt-1">{filtered[lightboxIndex].category}</p>
                <p className="text-white/30 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light cursor-pointer z-10 px-3"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}