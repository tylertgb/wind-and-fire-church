"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Users, Music, Camera, Mic, Heart, Baby, 
  Radio, Sparkles, MessageSquare, Car, Info, Gift
} from "lucide-react";

const ministryUnits = [
  { name: "Missions", image: "/gallery/ministry-01.jpg", icon: Users, color: "from-primary to-orange-500" },
  { name: "Women Ministry", image: "/gallery/ministry-02.jpg", icon: Heart, color: "from-rose-500 to-pink-600" },
  { name: "Cherubs of Praise", image: "/gallery/ministry-03.jpg", icon: Music, color: "from-violet-500 to-purple-600" },
  { name: "Melodies of Heaven", image: "/gallery/ministry-04.jpg", icon: Music, color: "from-accent to-blue-600" },
  { name: "Media Unit", image: "/gallery/ministry-05.jpg", icon: Camera, color: "from-teal-500 to-cyan-600" },
  { name: "Technical Unit", image: "/gallery/ministry-06.jpg", icon: Mic, color: "from-emerald-500 to-green-600" },
  { name: "Care and Visitation", image: "/gallery/ministry-07.jpg", icon: Heart, color: "from-rose-600 to-red-600" },
  { name: "Joy Fellowship", image: "/gallery/ministry-08.jpg", icon: Sparkles, color: "from-yellow-500 to-amber-600" },
  { name: "Transport Team", image: "/gallery/event-01.jpg", icon: Car, color: "from-slate-600 to-gray-700" },
  { name: "Information and Communication", image: "/gallery/event-02.jpg", icon: Info, color: "from-blue-600 to-indigo-600" },
  { name: "Fire Kids Teachers", image: "/gallery/event-03.jpg", icon: Baby, color: "from-pink-500 to-rose-500" },
  { name: "Ushers", image: "/gallery/sunday-01.jpg", icon: Users, color: "from-primary to-accent" },
  { name: "Ministering Angels", image: "/gallery/sunday-02.jpg", icon: Sparkles, color: "from-violet-600 to-purple-700" },
  { name: "Amnation Team", image: "/gallery/sunday-03.jpg", icon: Users, color: "from-teal-600 to-emerald-600" },
  { name: "Women's Ministry", image: "/gallery/sunday-04.jpg", icon: Heart, color: "from-rose-500 to-pink-500" },
  { name: "Care Unit", image: "/gallery/sunday-05.jpg", icon: Heart, color: "from-emerald-600 to-green-700" },
  { name: "Levites", image: "/gallery/sunday-06.jpg", icon: Music, color: "from-accent to-blue-700" },
  { name: "Ministering Angels", image: "/gallery/sunday-07.jpg", icon: Gift, color: "from-violet-500 to-purple-600" },
];

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-primary to-accent opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/2.jpg"
            alt="Church Ministries"
            fill
            className="object-cover mix-blend-overlay opacity-25"
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
                SERVICE IN<br />THE CHURCH
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 mt-8 max-w-3xl mx-auto">
              20 Service Units providing avenues for members to serve the Lord
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ministry Units Grid */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              20 Service Units
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Ministry Teams
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every member has a place to serve, grow, and make an impact for God's kingdom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ministryUnits.map((unit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${unit.color} flex items-center justify-center shadow-lg`}>
                    <unit.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {unit.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Serving with excellence and passion
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Radio & TV Ministry */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              <Radio className="w-3.5 h-3.5" />
              Media Ministry
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Radio and Television Ministry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reaching millions across Northern Ghana through broadcast media
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/leadership/fant-sm.png"
                alt="Wisdom & Power Encounter with Ps. A. L. Fant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-sm font-bold uppercase tracking-widest mb-2 text-yellow-300">
                  Wisdom & Power Encounter
                </div>
                <div className="font-serif text-3xl font-bold mb-2">
                  with Ps. A. L. Fant
                </div>
                <div className="text-2xl font-bold mb-4">
                  Saturdays • 6:30 PM
                </div>
                <div className="text-sm text-white/90">
                  Broadcasting across multiple radio stations in Northern Ghana
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Broadcasting Reach
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Our Radio broadcast reaches <strong className="text-primary">millions of people across Northern Ghana</strong> with 
                    at least <strong className="text-accent">96 broadcasts a week</strong> across several radio stations including:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Keemi FM (Might FM in Savelugu)",
                      "Eagle FM in Walewale",
                      "Radio Kitawon in Saboba",
                      "Quality FM in Garu",
                      "Lom FM in Bunkpurugu",
                      "Scarp FM in Nakpanduri",
                      "Ura Radio in Bolgatanga",
                    ].map((station, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Radio className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm">{station}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-primary text-white rounded-3xl p-8 shadow-lg">
                <h4 className="font-serif text-xl font-bold mb-3">
                  Impact Stats
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-4xl font-bold font-serif">96+</div>
                    <div className="text-sm text-white/80">Weekly Broadcasts</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold font-serif">7+</div>
                    <div className="text-sm text-white/80">Radio Stations</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minister Training */}
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
              Ten Years of Raising Men and Women for God
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Equipping and empowering ministers for effective kingdom service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              { value: "29", label: "Ministers Trained Directly", sublabel: "Through Bible school in Kumbungu" },
              { value: "65", label: "Ministers Supported", sublabel: "23 pastors + 23 non-AG + 8 lay ministers + 11 schools" },
              { value: "170", label: "Total Ministers", sublabel: "In Wind & Fire family tree" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-accent/20 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold font-serif text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">
                Ministerial Mentorship Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We have raised <strong className="text-primary">42 ministers through our Ministerial Mentorship Programs</strong>, 
                many of whom are currently founders of churches and great evangelists. Some of our offspring churches have also 
                trained ministers of the gospel, bringing the number to about <strong className="text-accent">170 in the Wind and Fire family tree</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The ministry has also conducted several <strong className="text-foreground">Church and Ministry conferences</strong> that 
                have impacted the lives of thousands of ministers both locally and internationally.
              </p>
            </div>
          </motion.div>

          {/* Minister Photos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={`/members/${((num - 1) % 4) + 1}.jpg`}
                  alt={`Trained Minister ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
