"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Music, Baby, Globe, Shield, Handshake, Clock, ChevronRight, X, Star } from "lucide-react";

const ministries = [
  {
    icon: Users,
    title: "Men's Ministry",
    tagline: "Iron sharpens iron",
    meeting: "Every 2nd Saturday · 6:00 AM",
    description: "Building men of God who lead with integrity, wisdom, and faith in their homes, workplaces, and community.",
    detail:
      "Our Men's Ministry gathers for early morning prayer, accountability groups, and practical discipleship. We host annual men's retreats, community service projects, and mentorship programs to raise godly fathers and leaders throughout Tamale.",
    color: "from-primary to-orange-600",
    borderColor: "border-orange-200",
    bgLight: "bg-orange-50",
    tagColor: "bg-orange-100 text-orange-700",
    image: "/ministries/men/1.jpg",
    featured: false,
  },
  {
    icon: Music,
    title: "Worship Team",
    tagline: "Ushering God's presence",
    meeting: "Rehearsal Saturdays · 4:00 PM",
    description: "An anointed team of musicians, singers, and creatives dedicated to leading the congregation into the presence of God.",
    detail:
      "The Wind & Fire Worship Team is more than musicians — they are worshippers first. Weekly rehearsals, regular voice and instrument training, and a deep culture of personal devotion equip the team to lead powerful, authentic encounters every Sunday.",
    color: "from-accent to-blue-700",
    borderColor: "border-blue-200",
    bgLight: "bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
    image: "/slides/2.jpg",
    featured: true,
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    tagline: "Train up a child",
    meeting: "Sundays · During both services",
    description: "Nurturing the next generation in God's Word through age-appropriate teaching, activities, and lots of love.",
    detail:
      "Our Children's Ministry runs simultaneously with Sunday services so parents can worship freely. With trained teachers, structured curriculum, creative arts, and a safe, fun environment, we plant seeds of faith that last a lifetime.",
    color: "from-rose-500 to-pink-600",
    borderColor: "border-rose-200",
    bgLight: "bg-rose-50",
    tagColor: "bg-rose-100 text-rose-700",
    image: "/ministries/children/1.jpg",
    featured: false,
  },
  {
    icon: Globe,
    title: "Youth Fellowship",
    tagline: "On fire for a generation",
    meeting: "Fridays · 5:00 PM",
    description: "Dynamic weekly gatherings for young people aged 13–35 to grow in faith, build friendships, and discover purpose.",
    detail:
      "Wind & Fire Youth is a movement, not just a meeting. Every Friday we gather for high-energy praise, real-talk discipleship, games, and community. We host quarterly youth conferences, outreach missions to schools, and leadership development tracks.",
    color: "from-violet-500 to-purple-700",
    borderColor: "border-violet-200",
    bgLight: "bg-violet-50",
    tagColor: "bg-violet-100 text-violet-700",
    image: "/ministries/youth/1.jpg",
    featured: false,
  },
  {
    icon: Shield,
    title: "Women's Ministry",
    tagline: "Fearfully and wonderfully made",
    meeting: "Every 1st Saturday · 9:00 AM",
    description: "Empowering women to walk boldly in their God-given calling, beauty, and purpose.",
    detail:
      "The Women's Ministry creates a safe, vibrant space for women of all ages to connect, grow, and be celebrated. Monthly meetings, annual women's conferences, mentorship circles, and community welfare projects — all centred on God's Word and genuine sisterhood.",
    color: "from-teal-500 to-emerald-600",
    borderColor: "border-teal-200",
    bgLight: "bg-teal-50",
    tagColor: "bg-teal-100 text-teal-700",
    image: "/ministries/women/1.jpg",
    featured: false,
  },
  {
    icon: Handshake,
    title: "Community Outreach",
    tagline: "Love in action",
    meeting: "Monthly · Rotating Saturdays",
    description: "Serving Tamale through feeding programs, health drives, school support, and open-air evangelism.",
    detail:
      "Our Outreach Ministry is the hands and feet of Wind & Fire in Tamale. We run regular food distributions in underserved communities, free medical screenings, school stationery drives, and street evangelism. Every member is encouraged to join at least one outreach per quarter.",
    color: "from-amber-500 to-orange-600",
    borderColor: "border-amber-200",
    bgLight: "bg-amber-50",
    tagColor: "bg-amber-100 text-amber-700",
    image: "/ministries/community/1.jpg",
    featured: false,
  },
];

type Ministry = typeof ministries[number];

function MinistryModal({ ministry, onClose }: { ministry: Ministry; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
      >
        {/* Image header */}
        <div className="relative h-48 overflow-hidden">
          <img src={ministry.image} alt={ministry.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent`} />
          <div className={`absolute inset-0 bg-linear-to-br ${ministry.color} opacity-40`} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-5">
            <div className={`inline-flex text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${ministry.tagColor} mb-2`}>
              {ministry.tagline}
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">{ministry.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${ministry.bgLight} text-xs font-semibold`}>
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-foreground">{ministry.meeting}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{ministry.detail}</p>
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl bg-linear-to-r ${ministry.color} text-white font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer`}
          >
            Join This Ministry
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MinistriesSection() {
  const [activeMinistry, setActiveMinistry] = useState<Ministry | null>(null);

  return (
    <section id="ministries" className="py-20 px-4 sm:px-0 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            Our Ministries
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Find Your Place
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            There is a ministry for every age and every season of life. Tap a card to learn more and find where you belong.
          </p>
        </motion.div>

        {/* Featured ministry banner */}
        {ministries.filter(m => m.featured).map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setActiveMinistry(m)}
            className="mb-8 rounded-3xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-56 sm:h-64">
              <img
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
              <div className={`absolute inset-0 bg-linear-to-br ${m.color} opacity-30`} />

              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 max-w-xl">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${m.tagColor} text-[10px] font-bold tracking-widest uppercase mb-3`}>
                    <Star className="w-3 h-3 fill-current" />
                    Featured Ministry
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed max-w-sm">{m.description}</p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Clock className="w-3 h-3 text-white/70" />
                <span className="text-white/80 text-xs">{m.meeting}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Ministry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.filter(m => !m.featured).map((ministry, i) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setActiveMinistry(ministry)}
              className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-linear-to-br ${ministry.color} flex items-center justify-center shadow-lg`}>
                  <ministry.icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className={`inline-flex text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${ministry.tagColor} mb-2`}>
                  {ministry.tagline}
                </div>
                <h3 className="font-semibold text-foreground text-base mb-1.5">{ministry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {ministry.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-1.5 text-xs ${ministry.borderColor.replace("border-", "text-").replace("-200", "-600")}`}>
                    <Clock className="w-3 h-3" />
                    <span className="font-medium">{ministry.meeting}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Not sure where to start? Our Welcome Desk team will help you find your fit.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#visitor");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
          >
            Talk to Us
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeMinistry && (
          <MinistryModal ministry={activeMinistry} onClose={() => setActiveMinistry(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
