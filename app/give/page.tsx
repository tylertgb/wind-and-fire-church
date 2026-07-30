"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  HandCoins, Phone, Shield, Heart, BookOpen, Church,
  Users, Copy, Check, Flame, ArrowLeft, MessageCircle,
} from "lucide-react";

const givingOptions = [
  {
    network: "MTN Mobile Money",
    shortName: "MTN MoMo",
    number: "+233 XX XXX XXXX",
    ussdCode: "*170#",
    color: "from-yellow-400 to-amber-500",
    ringColor: "ring-yellow-300",
    textColor: "text-yellow-900",
    bg: "bg-linear-to-br from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    initial: "MTN",
    badgeBg: "bg-yellow-400",
    steps: ["Dial *170#", "Select 'Send Money'", "Enter the number above", "Enter amount & confirm"],
  },
  {
    network: "Telecel Cash",
    shortName: "Telecel",
    number: "+233 XX XXX XXXX",
    ussdCode: "*110#",
    color: "from-red-500 to-rose-600",
    ringColor: "ring-red-300",
    textColor: "text-red-900",
    bg: "bg-linear-to-br from-red-50 to-rose-50",
    border: "border-red-200",
    initial: "TC",
    badgeBg: "bg-red-500",
    steps: ["Dial *110#", "Select 'Send Money'", "Enter the number above", "Enter amount & confirm"],
  },
  {
    network: "AT Money",
    shortName: "AT Money",
    number: "+233 XX XXX XXXX",
    ussdCode: "*100#",
    color: "from-blue-500 to-indigo-600",
    ringColor: "ring-blue-300",
    textColor: "text-blue-900",
    bg: "bg-linear-to-br from-blue-50 to-indigo-50",
    border: "border-blue-200",
    initial: "AT",
    badgeBg: "bg-blue-500",
    steps: ["Dial *100#", "Select 'Send Money'", "Enter the number above", "Enter amount & confirm"],
  },
];

const givingCategories = [
  { icon: Church, label: "Tithes", desc: "Your faithful 10% — the foundation of our covenant with God.", color: "bg-orange-50 text-orange-600" },
  { icon: HandCoins, label: "Offerings", desc: "Freewill gifts that fuel Sunday services and daily ministry.", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, label: "Building Fund", desc: "Investing in the physical expansion of God's house in Tamale.", color: "bg-amber-50 text-amber-600" },
  { icon: Users, label: "Outreach & Missions", desc: "Sending the gospel to every corner of Northern Ghana.", color: "bg-violet-50 text-violet-600" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer flex items-center gap-1.5 text-xs text-muted-foreground font-medium"
      title="Copy number"
    >
      {copied
        ? <><Check className="w-3.5 h-3.5 text-emerald-600" /><span className="text-emerald-600">Copied!</span></>
        : <><Copy className="w-3.5 h-3.5" />Copy</>}
    </button>
  );
}

export default function GivePage() {
  const [activeNetwork, setActiveNetwork] = useState(0);
  const active = givingOptions[activeNetwork];

  return (
    <div className="min-h-screen bg-background">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:block">Back to Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-md">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm text-foreground hidden sm:block">Wind & Fire A/G</span>
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Need Help?
          </a>
        </div>
      </header>

      {/* ── SCRIPTURE HERO ── */}
      <div className="bg-linear-to-br from-primary via-orange-600 to-amber-500 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{ width: `${150 + i * 80}px`, height: `${150 + i * 80}px`, top: `${-10 + i * 25}%`, right: `${5 + i * 8}%` }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/30">
            <HandCoins className="w-3.5 h-3.5" />
            Online Giving
          </div>
          <blockquote className="font-serif text-2xl sm:text-3xl text-white font-bold leading-snug mb-3">
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <p className="text-white/70 text-sm">— 2 Corinthians 9:7</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* ── HEADER ── */}
        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Give & Support the Kingdom
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your generosity fuels every service, every outreach, and every life changed in Tamale.
            Give easily and securely via Mobile Money.
          </p>
        </div>

        {/* ── GIVING CATEGORIES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {givingCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white rounded-2xl border border-border p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                <cat.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="font-semibold text-sm text-foreground mb-1">{cat.label}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* ── MOMO WIDGET ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-border">
            {givingOptions.map((opt, i) => (
              <button
                key={opt.shortName}
                onClick={() => setActiveNetwork(i)}
                className={`flex-1 py-4 px-3 text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeNetwork === i
                    ? "bg-white border-b-2 border-primary text-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${opt.badgeBg}`} />
                {opt.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: number */}
            <div className={`p-8 ${active.bg} flex flex-col justify-center gap-6`}>
              <div>
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-linear-to-br ${active.color} items-center justify-center shadow-xl ring-4 ${active.ringColor} mb-5`}>
                  <span className="text-white font-bold text-lg">{active.initial}</span>
                </div>
                <h3 className={`font-bold text-xl mb-1 ${active.textColor}`}>{active.network}</h3>
                <p className="text-muted-foreground text-sm">Send your gift to the number below</p>
              </div>
              <div className="bg-white rounded-2xl border border-border p-4">
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                  Mobile Number
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono font-bold text-foreground text-lg">{active.number}</span>
                  </div>
                  <CopyButton text={active.number} />
                </div>
              </div>
              <div className="bg-white/70 rounded-xl px-4 py-3 text-sm text-muted-foreground">
                USSD shortcode: <span className="font-mono font-bold text-foreground">{active.ussdCode}</span>
              </div>
            </div>

            {/* Right: steps */}
            <div className="p-8 flex flex-col justify-center gap-5">
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-1">How to Give</h4>
                <p className="text-sm text-muted-foreground">Follow these 4 easy steps</p>
              </div>
              <div className="space-y-4">
                {active.steps.map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-full bg-linear-to-br ${active.color} flex items-center justify-center shrink-0 shadow-md`}>
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <p className="text-emerald-700 text-xs font-medium">
                  ✓ All gifts are acknowledged and receipted. Contact us if you need a giving statement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── TRUST STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: Shield, title: "Secure & Accountable", desc: "Every gift is recorded and stewarded with full transparency." },
            { icon: Heart, title: "100% to Ministry", desc: "No hidden fees. Every cedi goes directly to God's work." },
            { icon: HandCoins, title: "Tax Reference Available", desc: "Giving records available on request for personal filing." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
              <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-foreground mb-0.5">{item.title}</div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── BACK TO HOME ── */}
        <div className="text-center pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Wind & Fire Home
          </Link>
        </div>

      </div>
    </div>
  );
}
