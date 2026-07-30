"use client";

import { motion } from "motion/react";
import { UserPlus, PlayCircle, Heart, HandCoins } from "lucide-react";

const actions = [
  {
    icon: UserPlus,
    title: "I'm New",
    description: "First visit? Welcome! Find out what to expect at Wind & Fire.",
    color: "from-orange-500 to-red-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    href: "#visitor",
  },
  {
    icon: PlayCircle,
    title: "Watch Online",
    description: "Stream our latest sermons and live services from anywhere.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    href: "#media",
  },
  {
    icon: Heart,
    title: "Prayer Request",
    description: "Submit a confidential prayer request. We pray for every need.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    href: "#prayer",
  },
  {
    icon: HandCoins,
    title: "Online Giving",
    description: "Give your tithes and offerings securely via Mobile Money.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    href: "#give",
  },
];

export default function QuickActions() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quick-actions" className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((action, i) => (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => scrollTo(action.href)}
              className={`group relative text-left p-6 rounded-2xl border ${action.border} ${action.bg} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Subtle gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${action.color} shadow-lg mb-4`}
              >
                <action.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1.5">
                {action.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {action.description}
              </p>
              <div
                className={`mt-4 text-xs font-semibold bg-linear-to-r ${action.color} bg-clip-text text-transparent group-hover:gap-2 transition-all`}
              >
                Learn more →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
