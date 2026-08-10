"use client";

import { motion } from "motion/react";
import { UserPlus, CheckCircle2 } from "lucide-react";

const expectations = [
  "Warm welcome from our friendly greeters at the entrance",
  "Vibrant praise and worship to usher you into God's presence",
  "Powerful, practical teaching from the Word of God",
  "Friendly atmosphere — dress casually, come as you are",
  "Special Welcome Desk to answer all your questions",
];

export default function VisitorSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="visitor" className="py-20 px-4 sm:px-6 bg-linear-to-br from-primary/5 via-orange-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
              <UserPlus className="w-3.5 h-3.5" />
              First Visit
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              New Here? <br />
              <span className="text-primary">You're Family.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're new to faith, returning to church, or just curious —
              Wind & Fire is a place where you belong. Here's what to expect on your first visit:
            </p>
            <ul className="space-y-3">
              {expectations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("#schedule")}
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 cursor-pointer"
            >
              Plan Your Visit
            </button>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-2xl">
              <img
                src="/gallery/sunday-01.jpg"
                alt="Welcoming congregation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
              <p className="text-sm text-foreground font-medium italic leading-relaxed">
                "We exist to make you feel at home in the presence of God."
              </p>
              <p className="text-xs text-primary font-semibold mt-2">
                — Rev. Aaron Lambon Fant
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
