"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Send, CheckCircle2, BookOpen, HeartPulse, Users, DollarSign, Cross, Briefcase, Flame, MessageCircle, Lock } from "lucide-react";

const prayerCategories = [
  { label: "Healing", icon: HeartPulse },
  { label: "Family", icon: Users },
  { label: "Finances", icon: DollarSign },
  { label: "Salvation", icon: Cross },
  { label: "Career", icon: Briefcase },
  { label: "Marriage", icon: Heart },
  { label: "Deliverance", icon: Flame },
  { label: "Other", icon: MessageCircle },
];

const scriptures = [
  { verse: "The prayer of a righteous person is powerful and effective.", ref: "James 5:16" },
  { verse: "Do not be anxious about anything, but in every situation present your requests to God.", ref: "Philippians 4:6" },
  { verse: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
];

export default function PrayerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", category: "", request: "", anonymous: false, urgent: false });
  const [scriptureIndex] = useState(Math.floor(Math.random() * scriptures.length));

  const scripture = scriptures[scriptureIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="prayer" className="bg-slate-50 overflow-hidden">

      {/* ── SCRIPTURE HEADER STRIP ── */}
      <div className="bg-linear-to-r from-rose-600 to-pink-600 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <BookOpen className="w-6 h-6 text-white/70 mx-auto mb-3" />
          <p className="font-serif text-lg sm:text-xl text-white font-semibold italic leading-relaxed mb-1">
            "{scripture.verse}"
          </p>
          <p className="text-white/70 text-sm">— {scripture.ref}</p>
        </div>
      </div>

      {/* ── MAIN PRAYER SECTION ── */}
      <div className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold tracking-widest uppercase mb-4">
                  <Heart className="w-3.5 h-3.5" />
                  Prayer
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                  We Pray for<br />
                  <span className="text-rose-600">Every Request</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  No request is too big or too small. Our dedicated prayer team intercedes over
                  every submission — with faith, fervency, and full confidentiality.
                </p>
              </div>

              {/* How prayer works */}
              <div className="space-y-4">
                {[
                  { step: "01", title: "You Submit", desc: "Fill out the form — name optional, confidentiality guaranteed." },
                  { step: "02", title: "We Intercede", desc: "Our prayer team prays over your request within 24 hours." },
                  { step: "03", title: "God Moves", desc: "Expect miracles. Share your testimony with us when He answers." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center">
                      <span className="text-rose-600 text-xs font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-0.5">{item.title}</div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Confidentiality note */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
                <p className="text-rose-700 text-xs font-medium leading-relaxed flex items-start gap-2">
                  <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>All prayer requests are treated with the utmost confidentiality. Your information is never shared outside our prayer team.</span>
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-border shadow-sm p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-rose-500 to-pink-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-rose-200">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      We're Praying For You
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
                      Your request has been received. Our prayer team will intercede on your behalf within 24 hours.
                    </p>
                    <div className="mt-5 p-4 bg-rose-50 rounded-2xl border border-rose-100 max-w-xs mx-auto">
                      <p className="text-rose-700 text-xs italic">
                        "Is anyone among you in trouble? Let them pray." — James 5:13
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", category: "", request: "", anonymous: false, urgent: false }); }}
                      className="mt-6 text-primary text-sm font-semibold hover:underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Category selector */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prayer Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {prayerCategories.map((cat) => (
                          <button
                            type="button"
                            key={cat.label}
                            onClick={() => setForm({ ...form, category: cat.label })}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                              form.category === cat.label
                                ? "bg-rose-500 text-white border-rose-500 shadow-md"
                                : "bg-muted text-muted-foreground border-border hover:border-rose-300 hover:text-rose-600"
                            }`}
                          >
                            <cat.icon className="w-3.5 h-3.5" />
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Name <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone/Email <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="For a follow-up"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Request */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Your Prayer Request <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.request}
                        onChange={(e) => setForm({ ...form, request: e.target.value })}
                        placeholder="Share your prayer need here. Be as specific as you like — we are listening..."
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-400 transition-all resize-none"
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.anonymous}
                          onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
                          className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground">Submit anonymously</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.urgent}
                          onChange={(e) => setForm({ ...form, urgent: e.target.checked })}
                          className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground">Mark as urgent</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-rose-500 to-pink-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-rose-200/60 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Prayer Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
