"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { HandCoins, Phone, Shield, Heart, BookOpen, Church, Users, Copy, Check } from "lucide-react";

const givingOptions = [
  {
    network: "MTN Mobile Money",
    shortName: "MTN MoMo",
    number: "+233 55 123 4567",
    momoname: "Wind and Fire A/G Church",
    image: "/mtn.jpg",
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
    number: "+233 20 765 4321",
    momoname: "Wind and Fire A/G Church",
    image: "/telecel.jpg",
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
    momoname: "Wind and Fire A/G Church",
    image: null,
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
  { icon: Church, label: "Tithes", desc: "Your faithful 10% — the foundation of our covenant with God." },
  { icon: HandCoins, label: "Offerings", desc: "Freewill gifts that fuel Sunday services and daily ministry." },
  { icon: BookOpen, label: "Building Fund", desc: "Investing in the physical expansion of God's house in Tamale." },
  { icon: Users, label: "Outreach & Missions", desc: "Sending the gospel to every corner of Northern Ghana." },
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
      className="p-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
      title="Copy number"
    >
      {copied
        ? <Check className="w-3.5 h-3.5 text-emerald-600" />
        : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
    </button>
  );
}

export default function GiveSection() {
  const [activeNetwork, setActiveNetwork] = useState(0);
  const active = givingOptions[activeNetwork];

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
        <div className="max-w-5xl mx-auto">

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
            className="bg-white rounded-3xl border border-border shadow-lg overflow-hidden"
          >
            {/* Network tabs */}
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

            {/* Active network content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left: number & copy */}
              <div className={`p-8 ${active.bg} flex flex-col justify-center gap-6`}>
                <div>
                  {active.image ? (
                    <div className="w-36 h-20 relative mb-5 overflow-hidden">
                      <Image
                        src={active.image}
                        alt={active.network}
                        width={96}
                        height={96}
                        quality={100}
                        priority
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-linear-to-br ${active.color} items-center justify-center shadow-xl ring-4 ${active.ringColor} mb-5`}>
                      <span className="text-white font-bold text-lg">{active.initial}</span>
                    </div>
                  )}
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
                      <span className="font-bold text-foreground text-lg">{active.number}</span>
                    </div>
                    <CopyButton text={active.number} />
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-border p-4">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
                    Account Name
                  </div>
                  <div className="flex items-center gap-2">
                    <Church className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground text-base">{active.momoname}</span>
                  </div>
                </div>
                <div className="bg-white/60 rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  USSD shortcode: <span className="font-bold text-foreground">{active.ussdCode}</span>
                </div>
              </div>

              {/* Right: steps */}
              <div className="p-8 flex flex-col justify-center gap-5">
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-1">How to Give</h4>
                  <p className="text-sm text-muted-foreground">Follow these 4 easy steps</p>
                </div>
                <div className="space-y-4">
                  {active.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full bg-linear-to-br ${active.color} flex items-center justify-center shrink-0 shadow-md`}>
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
