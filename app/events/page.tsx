"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Sparkles, Users, Zap, Target, Globe } from "lucide-react";

const conferences = [
  { 
    name: "Invasion Prayer Storms", 
    description: "Powerful prayer gatherings that shake heavens and transform communities",
    icon: Zap,
    color: "from-primary to-orange-500"
  },
  { 
    name: "Father's Touch", 
    description: "Encountering God's fatherhood and experiencing His love and presence",
    icon: Sparkles,
    color: "from-accent to-blue-600"
  },
  { 
    name: "Festival of Wonders", 
    description: "Celebrating God's miraculous power with signs, wonders, and testimonies",
    icon: Target,
    color: "from-violet-500 to-purple-600"
  },
  { 
    name: "Weightier Matters", 
    description: "Deep teaching on kingdom priorities and spiritual maturity",
    icon: Users,
    color: "from-emerald-500 to-teal-600"
  },
  { 
    name: "Connecting to Mantles", 
    description: "Powerful ministry impartation and anointing transfer gatherings",
    icon: Globe,
    color: "from-rose-500 to-pink-600"
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-primary to-violet-900 opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/1.jpg"
            alt="Church Events"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="text-5xl sm:text-6xl font-bold font-serif mb-3 text-white/90">
                Our History is His Story
              </div>
              <div className="text-7xl sm:text-8xl font-bold font-serif text-yellow-300">
                IMPACTFUL<br />CONFERENCES
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 mt-8 max-w-3xl mx-auto">
              Well-patronized annual conferences that transform lives and communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Annual Conferences */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" />
              Annual Events
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Major Conferences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In the past ten years, the Church has established well-patronized annual conferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferences.map((conf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${conf.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <conf.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {conf.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {conf.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Photos */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Conference Highlights
            </h2>
            <p className="text-muted-foreground">
              Thousands gather for powerful encounters with God
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/slides/1.jpg",
              "/slides/2.jpg",
              "/slides/3.jpg",
              "/gallery/event-01.jpg",
              "/gallery/event-02.jpg",
              "/gallery/event-03.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Conference ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mass Evangelism */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Mass Evangelism
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Taking the gospel to the streets with power and demonstration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Open-Air Crusades
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over the past decade, Wind & Fire has conducted numerous large-scale evangelistic crusades 
                  across Northern Ghana, reaching thousands with the gospel message.
                </p>
                <div className="space-y-3">
                  {[
                    "Miracle healing services",
                    "Before and after testimonies",
                    "Powerful worship and praise",
                    "Altar calls with salvations",
                    "Community transformation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "/gallery/event-04.jpg",
                "/gallery/event-05.jpg",
                "/gallery/event-06.jpg",
                "/gallery/event-07.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
                >
                  <Image
                    src={img}
                    alt={`Mass evangelism ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {i === 0 && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary">Before/After</span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-accent text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">
              Signs, Wonders & Miracles
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Through mass evangelism campaigns, thousands have encountered the power of God, 
              witnessed miraculous healings, and given their lives to Christ. Communities have 
              been transformed by the demonstration of God's love and power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connecting to Mantles Gallery */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Connecting to Mantles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Special ministry impartation events featuring powerful ministers of the gospel
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: num * 0.03 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={`/gallery/${num % 2 === 0 ? 'sunday' : 'event'}-0${((num - 1) % 8) + 1}.jpg`}
                  alt={`Mantles conference ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
