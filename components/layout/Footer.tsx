"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Flame, MapPin, Phone, Mail, Share2, MessageCircle, Clock, ArrowRight, PlayCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Media", href: "/#media" },
  { label: "Sermons", href: "/sermons" },
  { label: "Gallery", href: "/gallery" },
  { label: "Give", href: "/give" },
  { label: "Prayer Request", href: "/#prayer" },
  { label: "I'm New", href: "/#visitor" },
];

const serviceTimes = [
  { day: "Sunday", time: "7:30 AM & 10:00 AM", name: "Celebration Service" },
  { day: "Wednesday", time: "6:00 PM", name: "Wisdom & Power Service" },
  { day: "Friday", time: "5:00 PM", name: "Youth Fellowship" },
];

const socialLinks = [
  {
    label: "Facebook Page",
    href: "https://www.facebook.com",
    icon: Share2,
    hoverColor: "hover:bg-blue-600",
    description: "Follow our page",
  },
  {
    label: "WhatsApp Channel",
    href: "https://wa.me/",
    icon: MessageCircle,
    hoverColor: "hover:bg-emerald-600",
    description: "Join the channel",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: PlayCircle,
    hoverColor: "hover:bg-red-600",
    description: "Subscribe",
  },
];

export default function Footer() {
  return (
    <footer>

      {/* ── PRE-FOOTER CTA ── */}
      <div className="relative bg-linear-to-br from-primary via-orange-600 to-amber-500 py-16 px-4 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${120 + i * 60}px`,
                height: `${120 + i * 60}px`,
                top: `${10 + i * 20}%`,
                right: `${5 + i * 8}%`,
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-5">
              <Flame className="w-3.5 h-3.5" />
              Come as You Are
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
              Your Next Step Starts<br />This Sunday
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of believers in Tamale experiencing God's power every week.
              We'd love to meet you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#visitor"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold text-sm hover:bg-white/90 transition-all shadow-xl cursor-pointer"
              >
                Plan My First Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 border-2 border-white/40 text-white font-bold text-sm hover:bg-white/30 transition-all cursor-pointer"
              >
                <Clock className="w-4 h-4" />
                View Service Times
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg shadow-primary/30">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight text-white">Wind & Fire A/G</div>
                  <div className="text-[10px] tracking-widest uppercase text-white/40">Tamale, Ghana</div>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                A Spirit-filled Pentecostal community in the heart of Tamale empowering lives
                through faith, prayer, and the power of the Holy Spirit.
              </p>

              {/* Social links */}
              <div className="space-y-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-2.5 rounded-xl bg-white/5 ${s.hoverColor} hover:text-white transition-all duration-200 group cursor-pointer`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/80 group-hover:text-white">{s.label}</div>
                      <div className="text-[10px] text-white/40">{s.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service times */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                Service Times
              </h4>
              <div className="space-y-4">
                {serviceTimes.map((s) => (
                  <div key={s.day} className="border-l-2 border-primary/40 pl-3">
                    <div className="text-white font-semibold text-sm">{s.day}</div>
                    <div className="text-primary text-xs font-bold">{s.time}</div>
                    <div className="text-white/40 text-xs">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                Find Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-white/50 leading-relaxed">
                    King David Junction, 50 meters off the Kanvili – Tuunayili Road, Tamale, Ghana
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-white/50">+233 XX XXX XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <a
                    href="mailto:info@windandfire.org"
                    className="text-sm text-white/50 hover:text-white transition-colors cursor-pointer"
                  >
                    info@windandfire.org
                  </a>
                </li>
              </ul>

              {/* Google Maps CTA */}
              <a
                href="https://maps.google.com/?q=Kanvili+Tuunayili+Road+Tamale+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-xs text-white/30">
                &copy; {new Date().getFullYear()} Wind and Fire Assemblies of God, Tamale. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs text-white/20">Assemblies of God, Ghana</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs text-white/20">Northern Region</span>
              </div>
              
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />

              <span className="text-xs text-white/40">
                Built with <span className="text-primary">♥</span> for God&apos;s Glory by <a href="https://brightgobka.onrender.com" target="_blank" className="font-semibold text-primary">Tyler Bright</a>
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
