"use client";

import { motion } from "motion/react";
import { HandCoins, Shield, Heart, BookOpen, Church, Users } from "lucide-react";
import MoMoWidget from "@/components/pages/give/MoMoWidget";

const givingCategories = [
  { icon: Church, label: "Tithes", desc: "Your faithful 10% — the foundation of our covenant with God." },
  { icon: HandCoins, label: "Offerings", desc: "Freewill gifts that fuel Sunday services and daily ministry." },
  { icon: BookOpen, label: "Building Fund", desc: "Investing in the physical expansion of God's house in Tamale." },
  { icon: Users, label: "Outreach & Missions", desc: "Sending the gospel to every corner of Northern Ghana." },
];

export default function GiveSection() {
  return (
    <section id="give" className="bg-white overflow-hidden">

      {/* ── SCRIPTURE BANNER ── */}
      <div className="bg-linear-to-r from-primary to-orange-500 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl sm:text-2xl text-white font-bold leading-snug mb-1">
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-white/70 text-sm mt-2">— 2 Corinthians 9:7</p>
        </div>
      </div>

      {/* ── MAIN GIVE SECTION ── */}
      <div className="py-20 px-4 sm:px-6 bg-linear-to-b from-orange-50/40 to-white">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <HandCoins className="w-3.5 h-3.5" />
              Online Giving
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Give & Support the Kingdom
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Your generosity fuels every service, every outreach, and every life changed in Tamale.
              Give easily and securely via Mobile Money.
            </p>
          </motion.div>

          {/* Giving categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          >
            {givingCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="bg-white rounded-2xl border border-border p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <cat.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="font-semibold text-sm text-foreground mb-1">{cat.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* MoMo interactive widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <MoMoWidget />
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Shield, title: "Secure & Accountable", desc: "Every gift is recorded and stewarded with full transparency." },
              { icon: Heart, title: "100% to Ministry", desc: "No hidden fees. Every cedi goes directly to God's work." },
              { icon: HandCoins, title: "Tax Reference Available", desc: "Giving records available on request for personal filing." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-muted/40 rounded-xl">
                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm text-foreground mb-0.5">{item.title}</div>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
