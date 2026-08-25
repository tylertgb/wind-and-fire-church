"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, Flame, Wind, Target, Eye, Heart, ArrowRight, Church, Users, Sparkles, Globe, Camera, Home, Gift, Coffee, ShoppingBag, Shield } from "lucide-react";

const stats = [
  { value: "1000+", label: "Congregation Members", color: "text-primary" },
  { value: "6+", label: "Active Ministries", color: "text-accent" },
  { value: "7", label: "Days of Prayer Weekly", color: "text-emerald-600" },
  { value: "2010s", label: "Rooted in Tamale", color: "text-violet-600" },
];

const values = [
  {
    icon: BookOpen,
    title: "Truth",
    description: "We stand firmly on the unchanging Word of God as the foundation of all we believe and teach.",
    color: "from-primary to-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Purity",
    description: "We pursue holiness and righteousness in our personal lives, ministries, and church culture.",
    color: "from-accent to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We honor God by giving our very best in worship, service, and everything we do for His kingdom.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    icon: Heart,
    title: "Relationships",
    description: "We prioritize genuine connections, community, and love — reflecting the heart of Christ to one another.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
  {
    icon: Flame,
    title: "Worship",
    description: "We pursue the genuine presence of God in Spirit-filled worship that glorifies Him in every gathering.",
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
      <div className="py-20 px-4 sm:px-0">
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
                  src="/slides/4.jpg"
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
                  src="/about-sm.jpg"
                  alt="Leaders"
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

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                {[
                  {
                    icon: Eye,
                    label: "Vision Statement",
                    text: "To be a twenty first century apostolic model Church that will primarily seek to establish the rule of God in every heart especially within the three northern regions.",
                    color: "text-accent",
                    bg: "bg-accent/5",
                  },
                  {
                    icon: Target,
                    label: "Mission Statement",
                    text: "To establish a centre of light, teaching and demonstrating God's wisdom and power, and raising an army of high-powered, un-ashamed, spiritual and intellectual ministers with one driving passion to depopulate hell and flood heaven with souls.",
                    color: "text-primary",
                    bg: "bg-primary/5",
                  },
                ].map((item) => (
                  <div key={item.label} className={`flex gap-4 p-4 rounded-2xl ${item.bg}`}>
                    <div className={`shrink-0 mt-0.5 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${item.color} mb-0.5`}>{item.label}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slogan */}
              <div className="mt-6 p-5 rounded-2xl bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="w-5 h-5 text-primary" />
                  <Flame className="w-5 h-5 text-accent" />
                </div>
                <div className="font-serif text-lg font-bold text-foreground mb-1">
                  Sanctuary of Wind & Fire
                </div>
                <div className="text-sm text-primary font-semibold">
                  Movers of God, Removers of Mountains
                </div>
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
              Core Values
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Truth | Purity | Excellence | Relationships | Worship
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
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
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-foreground via-slate-900 to-slate-800 text-white shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-7 gap-0">
                {/* Left column - Pastor Info */}
                <div className="lg:col-span-2 p-8 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-2xl shadow-primary/50 ring-4 ring-white/20">
                    <Image
                      src="/leadership/fant-sm.png"
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
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">Wind & Fire Assemblies of God</span>
                  </div>
                </div>

                {/* Middle column - Full Pastor Image */}
                <div className="lg:col-span-2 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  <Image
                    src="/leadership/fantfamily.png"
                    alt="Rev. Aaron Lambon Fant - Full Portrait"
                    width={400}
                    height={600}
                    quality={100}
                    priority
                    className="w-full h-full object-cover"
                  />
                  {/* linear overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 to-transparent" />
                </div>

                {/* Right column - Message */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-center gap-5">
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
            <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-primary via-accent to-primary/20 block" />
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

      {/* ── PART 5: Church Facilities ── */}
      <div className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Church className="w-3.5 h-3.5" />
              Our Facilities
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
              State-of-the-Art Church Complex
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A multi-purpose facility built by God's grace without bank loans, seating several thousands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/slides/4.jpg"
                  alt="Church Building"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-200">
                <h4 className="font-serif text-xl font-bold text-foreground mb-4">
                  Main Church Complex
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Total Floor Area", value: "4,200m²" },
                    { label: "Main Auditorium", value: "Multi-thousand seating" },
                    { label: "Additional Chapels", value: "4 specialized spaces" },
                    { label: "Hostel Facility", value: "80-bed capacity" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-emerald-200 last:border-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Teen's Church", subtitle: "Mountain of Mantles" },
                  { icon: Heart, label: "Children's Chapel", subtitle: "Celestial City" },
                  { icon: Sparkles, label: "Second Chapel", subtitle: "Children's second chapel" },
                  { icon: Globe, label: "City of Wonders", subtitle: "Destiny Arena" },
                ].map((chapel, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <chapel.icon className="w-8 h-8 text-emerald-600 mb-3" />
                    <div className="text-sm font-semibold text-foreground mb-1">{chapel.label}</div>
                    <div className="text-xs text-muted-foreground">{chapel.subtitle}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Facilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Camera, label: "Master Control Room", subtitle: "Broadcasting" },
              { icon: Home, label: "Pastoral Suite", subtitle: "4-bed facility" },
              { icon: Users, label: "Executive Lounge", subtitle: "Pastoral lounge" },
              { icon: Heart, label: "Administrative Block", subtitle: "9 offices" },
              { icon: Gift, label: "Restaurant", subtitle: "40-seater facility" },
              { icon: Coffee, label: "Coffee Shop", subtitle: "Refreshments" },
              { icon: ShoppingBag, label: "Mini Market", subtitle: "Convenience store" },
              { icon: Shield, label: "Security Post", subtitle: "24/7 protection" },
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-slate-50 to-white rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <facility.icon className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <div className="text-sm font-semibold text-foreground mb-1">{facility.label}</div>
                <div className="text-xs text-muted-foreground">{facility.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Built Without Loans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-linear-to-br from-emerald-600 to-green-600 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h4 className="font-serif text-3xl font-bold mb-4">
              Built by Faith, Not by Loans
            </h4>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              By God's Grace, this facility has been built <strong>without a loan from any bank</strong>. 
              What more can we say? Our history is his story. To God alone be all the glory!!
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
