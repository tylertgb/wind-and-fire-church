"use client";

import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Navigation, Zap, Users, Star } from "lucide-react";

const services = [
  {
    day: "Sunday",
    dayShort: "SUN",
    icon: Zap,
    color: "from-primary to-orange-500",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-primary",
    services: [
      {
        time: "7:30 AM",
        name: "Morning Celebration Service",
        tag: "All Welcome",
        tagColor: "bg-orange-100 text-orange-700",
        description: "Start your Sunday with powerful worship and an uplifting Word from God.",
      },
      {
        time: "10:00 AM",
        name: "Main Celebration Service",
        tag: "All Welcome",
        tagColor: "bg-orange-100 text-orange-700",
        description: "Our flagship service — spirit-filled worship, children's church, and powerful preaching.",
      },
    ],
  },
  {
    day: "Wednesday",
    dayShort: "WED",
    icon: Star,
    color: "from-accent to-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-accent",
    services: [
      {
        time: "6:00 PM",
        name: "Wisdom & Power Encounter Service",
        tag: "Mid-Week",
        tagColor: "bg-blue-100 text-blue-700",
        description: "Midweek recharge — deep Bible study, intercessory prayer, and personal testimonies.",
      },
    ],
  },
  {
    day: "Friday",
    dayShort: "FRI",
    icon: Users,
    color: "from-violet-500 to-purple-700",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-600",
    services: [
      {
        time: "5:00 PM",
        name: "Youth Fellowship",
        tag: "Ages 13–35",
        tagColor: "bg-violet-100 text-violet-700",
        description: "Dynamic youth meetings with games, worship, and real-talk discipleship for the next generation.",
      },
    ],
  },
];

const stats = [
  { value: "2", label: "Sunday Services", icon: Clock },
  { value: "3", label: "Weekly Meetings", icon: Calendar },
  { value: "All", label: "Ages Welcome", icon: Users },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 bg-linear-to-b from-slate-50 to-white overflow-hidden">
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
            <Calendar className="w-3.5 h-3.5" />
            Service Schedule
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Join Us in Worship
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Experience the power of God together. Every service is an encounter — come expecting a miracle.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-14 max-w-xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold font-serif text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {services.map((group, i) => (
            <motion.div
              key={group.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`bg-white rounded-3xl border ${group.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group`}
            >
              {/* Gradient header */}
              <div className={`bg-linear-to-r ${group.color} p-5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <group.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-[10px] font-semibold tracking-widest uppercase">
                        {group.dayShort}
                      </div>
                      <div className="text-white font-bold text-lg leading-tight">{group.day}</div>
                    </div>
                  </div>
                  <div className="text-white/30 text-5xl font-serif font-bold leading-none select-none">
                    {group.dayShort[0]}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="p-5 space-y-5">
                {group.services.map((svc, j) => (
                  <div key={svc.name} className={j > 0 ? "pt-5 border-t border-border" : ""}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`font-bold text-base ${group.textColor} font-serif`}>{svc.time}</span>
                      <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${svc.tagColor}`}>
                        {svc.tag}
                      </span>
                    </div>
                    <p className="font-semibold text-foreground text-sm mb-1.5">{svc.name}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{svc.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-foreground to-slate-800 text-white"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: details */}
            <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase mb-4">
                  <MapPin className="w-3 h-3" />
                  Find Us
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  We'd Love to See You
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  King David Junction, 50 meters off the<br />
                  <strong className="text-white">Kanvili – Tuunayili Road, Tamale, Ghana</strong>
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Clock, text: "Doors open 30 minutes before each service" },
                  { icon: Users, text: "Free parking available on-site" },
                  { icon: MapPin, text: "Easily accessible by trotro and private vehicle" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=Kanvili+Tuunayili+Road+Tamale+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/40 w-fit cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Right: map placeholder */}
            <div className="relative h-64 md:h-auto min-h-50 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535361251-cbe9d0d2357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Tamale gathering"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-3 shadow-xl animate-bounce">
                    <MapPin className="w-7 h-7 text-white fill-white/30" />
                  </div>
                  <div className="text-white font-semibold text-sm">Tamale, Ghana</div>
                  <div className="text-white/60 text-xs mt-1">King David Junction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
