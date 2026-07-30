"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, Flame, Wind, Target, Eye, Heart, ArrowRight } from "lucide-react";

const stats = [
  { value: "1000+", label: "Congregation Members", color: "text-primary" },
  { value: "6+", label: "Active Ministries", color: "text-accent" },
  { value: "7", label: "Days of Prayer Weekly", color: "text-emerald-600" },
  { value: "2010s", label: "Rooted in Tamale", color: "text-violet-600" },
];

const values = [
  {
    icon: Flame,
    title: "Spirit-Filled Worship",
    description: "We pursue the genuine presence of God in every gathering — not performance, but encounter.",
    color: "from-primary to-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: BookOpen,
    title: "Word-Centred Teaching",
    description: "Every sermon is rooted in Scripture — practical, powerful, and life-transforming.",
    color: "from-accent to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Radical Hospitality",
    description: "Whoever you are, wherever you come from — you will find a warm home at Wind & Fire.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
  {
    icon: Wind,
    title: "Community Impact",
    description: "We are deeply invested in the welfare of Tamale — spiritually, socially, and economically.",
    color: "from-teal-500 to-emerald-600",
    bg: "bg-emerald-50",
  },
];

const timeline = [
  { period: "Founding", desc: "Wind and Fire A/G established with a handful of believers in Tamale with a burning vision." },
  { period: "Growth", desc: "The congregation rapidly grew as God confirmed the Word with signs, wonders and transformed lives." },
  { period: "Campus", desc: "Established a permanent home at King David Junction, off the Kanvili–Tuunayili Road." },
  { period: "Today", desc: "Over 1,000 members strong, with 6 thriving ministries and a citywide outreach presence." },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white overflow-hidden">

      {/* ── PART 1: Story & Stats ── */}
      <div className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: Image collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1663919402965-79055f1c0255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Wind and Fire congregation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-1">Est. Tamale, Ghana</div>
                  <div className="font-serif text-lg font-bold">Wind & Fire A/G</div>
                </div>
              </div>

              {/* Smaller inset image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute -bottom-8 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                  alt="Children's ministry"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-border"
              >
                <div className="text-3xl font-bold text-primary font-serif">1000+</div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">Members & Growing</div>
              </motion.div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                  <BookOpen className="w-3.5 h-3.5" />
                  Our Story
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                  A Church Born of<br />
                  <span className="text-primary">Wind and Fire</span>
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Wind and Fire Assemblies of God is a vibrant, Spirit-filled Pentecostal church rooted
                in the heart of Tamale, Ghana. We are a community on fire for God — committed to
                empowering lives through the Word, fervent prayer, and genuine fellowship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name reflects our identity — the <strong className="text-foreground">Wind</strong> of
                the Holy Spirit that moves freely and powerfully, and the <strong className="text-foreground">Fire</strong> of
                God that purifies, transforms, and ignites passion for Christ in every believer.
              </p>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                {[
                  {
                    icon: Target,
                    label: "Our Mission",
                    text: "To make disciples of Jesus Christ who transform Tamale and beyond.",
                    color: "text-primary",
                    bg: "bg-primary/5",
                  },
                  {
                    icon: Eye,
                    label: "Our Vision",
                    text: "A Spirit-empowered church that leaves no soul untouched in Northern Ghana.",
                    color: "text-accent",
                    bg: "bg-accent/5",
                  },
                ].map((item) => (
                  <div key={item.label} className={`flex gap-4 p-4 rounded-2xl ${item.bg}`}>
                    <div className={`shrink-0 mt-0.5 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${item.color} mb-0.5`}>{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-border"
              >
                <div className={`text-3xl font-bold font-serif mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── PART 2: Core Values ── */}
      <div className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
              What We Stand For
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Four pillars define everything we do as a church family.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${v.bg} rounded-2xl p-6 border border-transparent hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${v.color} flex items-center justify-center mb-4 shadow-md`}>
                  <v.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 3: Leadership ── */}
      <div className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Heart className="w-3.5 h-3.5" />
              Our Leadership
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Shepherded with Love
            </h3>
          </motion.div>

          {/* Pastor feature card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-foreground via-slate-900 to-slate-800 text-white shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-0">
                {/* Avatar side */}
                <div className="sm:col-span-2 p-8 flex flex-col items-center justify-center text-center border-b sm:border-b-0 sm:border-r border-white/10">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-2xl shadow-primary/50 ring-4 ring-white/20">
                    <Image
                      src="/leadership/lafante-sm.jpg"
                      alt="Rev. Aaron Lambon Fant"
                      width={112}
                      height={112}
                      quality={100}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white mb-1">
                    Rev. Aaron Lambon Fant
                  </h4>
                  <p className="text-primary text-sm font-semibold mb-3">Senior Pastor</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">Assemblies of God</span>
                  </div>
                </div>

                {/* Message side */}
                <div className="sm:col-span-3 p-8 flex flex-col justify-center gap-5">
                  <div className="text-4xl text-primary/60 font-serif leading-none select-none">"</div>
                  <p className="text-white/80 leading-relaxed text-sm -mt-4">
                    We are here for one reason — to see every person in Tamale encounter the living God.
                    Wind & Fire is not just a church building; it is a family, a hospital for the broken,
                    and a launching pad for your God-given destiny.
                  </p>
                  <p className="text-white/60 text-sm">
                    — Rev. Aaron Lambon Fant
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    {[
                      "Ordained Minister, Assemblies of God Ghana",
                      "Passionate advocate for Northern Ghana missions",
                      "Teacher, preacher, and community builder",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-white/60 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PART 4: Timeline ── */}
      <div className="py-20 px-4 sm:px-6 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Our Journey So Far
            </h3>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-primary via-accent to-primary/20 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <Flame className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl border border-border p-5 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <div className="font-bold text-primary text-sm font-serif mb-1">{item.period}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
