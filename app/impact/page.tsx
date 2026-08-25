"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Heart, GraduationCap, Droplet, Home, HandHelping, 
  Gift, Stethoscope, Church, Users, TrendingUp 
} from "lucide-react";

const impactStats = [
  { value: "115+", label: "Scholarships Given", sublabel: "8 Doctors, 17 Nurses, 13 Teachers, 4 Engineers", icon: GraduationCap, color: "from-primary to-orange-500" },
  { value: "100+", label: "Churches Planted", sublabel: "Across Northern Ghana Regions", icon: Church, color: "from-accent to-blue-600" },
  { value: "4,000+", label: "Medical Beneficiaries", sublabel: "Free healthcare services", icon: Stethoscope, color: "from-emerald-500 to-teal-600" },
  { value: "30+", label: "Vocational Training", sublabel: "Skills & business support", icon: HandHelping, color: "from-violet-500 to-purple-600" },
];

const outreachAreas = [
  {
    title: "Education & Scholarships",
    icon: GraduationCap,
    color: "bg-primary/10 text-primary",
    description: "Transforming lives through education",
    stats: [
      "115+ full and partial scholarships at various levels",
      "8 medical doctors trained",
      "17 nurses equipped",
      "13 teachers empowered",
      "4 engineers developed",
    ],
    image: "/gallery/ministry-03.jpg"
  },
  {
    title: "Water & Sanitation",
    icon: Droplet,
    color: "bg-accent/10 text-accent",
    description: "Providing clean water to communities",
    stats: [
      "Partnered with Seed Ministry",
      "Water provided to Jangbaryilli",
      "Water provided to Belamposo",
      "Community health improvement",
    ],
    image: "/gallery/event-06.jpg"
  },
  {
    title: "Housing & Shelter",
    icon: Home,
    color: "bg-emerald-600/10 text-emerald-600",
    description: "Providing accommodation and support",
    stats: [
      "Accommodation for homeless members",
      "Accommodation for non-members in need",
      "Daily sustenance support",
      "Food provisions for countless people",
    ],
    image: "/gallery/event-07.jpg"
  },
  {
    title: "Welfare Support",
    icon: Heart,
    color: "bg-rose-600/10 text-rose-600",
    description: "Supporting members in times of need",
    stats: [
      "Bereavement support",
      "Wedding/marriage assistance",
      "Child naming ceremonies",
      "Hospitalization/sickness support",
      "Old-age care",
    ],
    image: "/gallery/sunday-06.jpg"
  },
  {
    title: "Special Gifts & Donations",
    icon: Gift,
    color: "bg-violet-600/10 text-violet-600",
    description: "Celebrating and caring for God's people",
    stats: [
      "Special donations to needy church members",
      "Support for retired ministers",
      "Care for late ministers' widows and widowers",
      "Christmas gifts for needy members",
      "Family celebration support",
    ],
    image: "/gallery/event-08.jpg"
  },
  {
    title: "Vocational Training",
    icon: HandHelping,
    color: "bg-orange-600/10 text-orange-600",
    description: "Empowering through skills development",
    stats: [
      "30+ people received vocational training",
      "Business setup assistance",
      "Skills development programs",
      "Economic empowerment initiatives",
    ],
    image: "/gallery/ministry-04.jpg"
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-primary to-orange-700 opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/gallery/event-01.jpg"
            alt="Community Impact"
            fill
            className="object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="text-6xl sm:text-7xl font-bold font-serif">
                Ten Years of
              </div>
              <div className="text-7xl sm:text-8xl font-bold font-serif text-yellow-300">
                SHOWING CARE
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 italic max-w-3xl mx-auto mt-6">
              "Christianity without a heart for humanity is vanity" — A. L. Fant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Impact by Numbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decade of transforming lives and communities across Northern Ghana
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/30 transition-all hover:shadow-xl">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl font-bold font-serif text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Areas */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Areas of Community Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six key pillars of our humanitarian ministry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {outreachAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-74">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${area.color} text-xs font-semibold mb-3`}>
                      <area.icon className="w-4 h-4" />
                      Impact Area
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {area.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {area.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {area.stats.map((stat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {stat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Community Care */}
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
              Showing Care in Action
            </h2>
            <p className="text-muted-foreground">
              Pictures from our community outreach programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/gallery/event-02.jpg",
              "/gallery/ministry-05.jpg",
              "/gallery/event-03.jpg",
              "/gallery/ministry-06.jpg",
              "/gallery/event-04.jpg",
              "/gallery/ministry-07.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Community outreach ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marriage & Relationships Ministry */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Marriage & Relationships
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building strong families through counseling and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <Heart className="w-12 h-12 text-rose-600 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Premarital Counseling
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The church has provided premarital counseling to <strong className="text-rose-600">more than 300 couples</strong>, 
                  resulting in the happy unions of many marriages under:
                </p>
                <ul className="space-y-2">
                  {[
                    "Marriage by ordinance",
                    "Traditional marriages",
                    "Civil marriages",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-600" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 text-white shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Post-Marital Support
                </h3>
                <p className="text-white/90 leading-relaxed">
                  We have also provided <strong>more than 600 post-marital counseling sessions</strong> to 
                  couples, both members and non-members, strengthening marriages and families across our community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                "/gallery/baptism-01.jpg",
                "/gallery/baptism-02.jpg",
                "/gallery/baptism-03.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Wedding ceremony ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
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
              Ten Years, Four Schools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing kingdom education and social intervention for rural children
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Social Intervention & Kingdom Education
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As part of our social intervention programs and our Kingdom education mandate, 
                  we have enrolled <strong className="text-primary">more than 100 rural children</strong> into 
                  basic school who had never been to school.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We have planted <strong className="text-accent">three schools</strong> which provide everything: 
                  free uniforms, books, shoes, and much more to hundreds of pupils.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <h4 className="font-semibold text-foreground mb-4">Our Schools:</h4>
                <ul className="space-y-3">
                  {[
                    "Kingdom Light Academy, Tingyuring",
                    "Kingdom Light Academy, Mbanaayilli",
                    "Kingdom Light Academy, Tolon",
                  ].map((school, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{school}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    One of our offspring churches has also planted a school, bringing the total number of schools 
                    under the Wind and Fire family tree to <strong className="text-primary">four</strong>. To God alone be the glory!!
                  </p>
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
                "/gallery/ministry-01.jpg",
                "/gallery/ministry-02.jpg",
                "/gallery/event-08.jpg",
                "/gallery/ministry-04.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src={img}
                    alt={`School ${i + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Land Acquisition */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Acquiring Lands
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Securing land for future churches and kingdom expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/gallery/event-01.jpg"
                alt="Land acquired for churches"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-2">
                  100+ Acres Secured
                </h3>
                <p className="text-white/90 text-sm">
                  Strategic land acquisition for church planting across Northern Ghana
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                <Church className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Strategic Land Investment
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Within these ten years, Wind and Fire has acquired <strong className="text-emerald-600">more than 
                a hundred acres of land</strong> for AG Ghana. These are located at various places and some of 
                our offspring churches are currently situated on them.
              </p>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <p className="text-sm text-muted-foreground italic">
                  This strategic investment ensures sustainable growth and provides permanent locations for 
                  churches across the three northern regions, establishing lasting foundations for ministry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
