"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Heart, Shield, Crown, Sparkles } from "lucide-react";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-violet-700 opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/3.jpg"
            alt="Church Leadership"
            fill
            className="object-cover mix-blend-overlay opacity-25"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
              <Crown className="w-4 h-4" />
              Servant Leadership
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              Shepherding with love, wisdom, and dedication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Senior Pastor Section - Already exists in AboutSection, but can add reference */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Heart className="w-3.5 h-3.5" />
              Senior Pastor
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Rev. Aaron Lambon Fant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visionary leader and founding pastor of Wind & Fire Assemblies of God
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10 text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-2xl shadow-primary/30 ring-4 ring-white">
              <Image
                src="/leadership/fant-sm.png"
                alt="Rev. Aaron Lambon Fant"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-muted-foreground italic max-w-2xl mx-auto mb-6">
              "We are here for one reason — to see every person in Tamale encounter the living God. 
              Wind & Fire is not just a church building; it is a family, a hospital for the broken, 
              and a launching pad for your God-given destiny."
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-white">Ordained Minister, AG Ghana</span>
              <span className="px-3 py-1 rounded-full bg-white">Visionary Church Planter</span>
              <span className="px-3 py-1 rounded-full bg-white">Community Advocate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Church Board */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
              <Shield className="w-3.5 h-3.5" />
              Governance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Church Board
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing spiritual oversight and strategic direction for the church
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
          >
            <Image
              src="/gallery/event-01.jpg"
              alt="Church Board"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-semibold opacity-90">
                Our dedicated board members provide wisdom, accountability, and leadership to guide the church in fulfilling its mission
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Counsellors */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-600/10 text-rose-600 text-xs font-semibold tracking-widest uppercase mb-4">
              <Heart className="w-3.5 h-3.5" />
              Pastoral Care
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Counsellors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Couples dedicated to providing spiritual guidance and pastoral care to our members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { image: "/members/1.jpg", label: "Pastoral Counsellors" },
              { image: "/members/2.jpg", label: "Family Counsellors" },
              { image: "/members/3.jpg", label: "Marriage Counsellors" },
              { image: "/members/4.jpg", label: "Youth Counsellors" },
            ].map((counsellor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={counsellor.image}
                    alt={counsellor.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-semibold inline-block mb-2">
                      {counsellor.label}
                    </div>
                    <p className="text-white/80 text-sm">
                      Providing wisdom, care, and spiritual guidance
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Unit Leaders */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              Ministry Teams
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Service Unit Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated servants leading various ministries and departments across the church
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: num * 0.02 }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden shadow-lg ring-2 ring-primary/20 hover:ring-primary transition-all group">
                    <Image
                      src={`/members/${(num % 4) + 1}.jpg`}
                      alt={`Service Unit Leader ${num}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Unit Leader
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our service unit leaders coordinate worship, media, hospitality, children's ministry, youth programs, 
                medical fellowship, missions, administration, and many other vital departments that keep the church thriving.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* First Church Committee */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-600/10 text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Founding Team
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              First Church Committee
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pioneering leaders who laid the foundation in 2012
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/gallery/sunday-08.jpg"
              alt="First Church Committee"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">
                Foundation Builders
              </h3>
              <p className="text-white/90 text-sm max-w-2xl">
                This committee was instrumental in establishing the structures, systems, and spiritual foundation 
                that have enabled Wind & Fire to grow into the thriving ministry it is today.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
