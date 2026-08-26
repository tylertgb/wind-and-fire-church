"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Users, Church, Heart, Sparkles } from "lucide-react";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-accent to-primary opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/4.jpg"
            alt="Church History"
            fill
            className="object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our History is His Story
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light">
              A decade of faith, growth, and transformation
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-sm sm:text-base md:text-lg font-semibold">February 5, 2012 - Present</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              The Beginning
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How It All Started
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The Church had its first Sunday Worship Service on the <strong className="text-primary">5th of February 2012</strong>. 
                  A few weeks after the pastor's wedding, there was need for his wife and him to cut off the honey moon for a season of prayer. 
                  The Lord impressed on them to pray into the establishment of the Church.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  The pastor and his wife declared a fast which began in mid-December to 21st January 2012. During this time, 
                  the vision was communicated to friends like Minister Eric Adenaabchage who was then in Gambaga, Minister Thomas Jato who was in Accra, 
                  James Jekuul who was in Navrongo, Paul Wondoh who was then the AGCM President for SMHS, and Simon Ayamba who was with them in Bontanga.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Also engaged were Isaac Yang, Ibrahim Asumah, Edna Asumah, Abraham Alhassan and Julian Saaka. By late January, 
                  various AGCM chapters from SHMS, Tatco, NTMC, T-poly and non-denominational evangelism groups from UDS Nyankpala 
                  were engaged. These groups helped carry out about 14 continuous days of house-to-house evangelism and follow up.
                </p>

                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mt-6">
                  <p className="text-accent font-semibold mb-2">The First Service</p>
                  <p className="text-sm text-muted-foreground">
                    By 5th February 2012, more than <strong>36 people</strong> had actively committed themselves to be members of Wind & Fire. 
                    The majority of these were students.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery/sunday-01.jpg"
                      alt="Early church service"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery/event-03.jpg"
                      alt="Church gathering"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery/sunday-02.jpg"
                      alt="Worship service"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/gallery/event-01.jpg"
                      alt="Church community"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-border">
                <div className="text-4xl font-bold text-primary font-serif">36</div>
                <div className="text-sm text-muted-foreground font-medium">Founding Members</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Days Gallery */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Early Days
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to a thriving community of faith
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/gallery/sunday-03.jpg",
              "/gallery/sunday-04.jpg",
              "/gallery/event-02.jpg",
              "/gallery/ministry-01.jpg",
              "/gallery/event-04.jpg",
              "/gallery/sunday-05.jpg",
              "/gallery/ministry-02.jpg",
              "/gallery/event-05.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Early days ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ten Years of Growth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey of faith
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-12">
              {[
                {
                  year: "2012",
                  title: "Foundation",
                  description: "First worship service held on February 5, 2012, with 36 founding members - mostly students committed to establishing God's kingdom in Tamale.",
                  icon: Church,
                  color: "primary"
                },
                {
                  year: "2012-2014",
                  title: "Rapid Growth",
                  description: "The congregation rapidly grew as God confirmed the Word with signs, wonders, and transformed lives. Ministry departments were established.",
                  icon: Users,
                  color: "accent"
                },
                {
                  year: "2015-2018",
                  title: "Permanent Home",
                  description: "Established a permanent campus at King David Junction, off the Kanvili–Tuunayili Road. Church building construction began.",
                  icon: Church,
                  color: "primary"
                },
                {
                  year: "2019-2022",
                  title: "Expanding Impact",
                  description: "Over 100 churches planted across Northern Ghana. Medical missions launched, scholarships provided, and community outreach expanded significantly.",
                  icon: Heart,
                  color: "accent"
                },
                {
                  year: "2022-Present",
                  title: "Thriving Community",
                  description: "Over 1,000 members strong with 6+ active ministries, citywide outreach presence, and continuous church planting across the three northern regions.",
                  icon: Sparkles,
                  color: "primary"
                },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start relative"
                >
                  <div className={`shrink-0 w-16 h-16 rounded-full bg-linear-to-br ${
                    milestone.color === 'primary' ? 'from-primary to-orange-500' : 'from-accent to-blue-600'
                  } flex items-center justify-center shadow-lg z-10`}>
                    <milestone.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`text-sm font-bold ${
                      milestone.color === 'primary' ? 'text-primary' : 'text-accent'
                    } font-mono mb-2`}>
                      {milestone.year}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
