"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Book, BookOpen, Download, Mail, Phone } from "lucide-react";

const books = [
  // Row 1
  { title: "The Flourishing Church", author: "A.L. FANT" },
  { title: "Church from the Pulpit", author: "A.L. FANT" },
  { title: "Hands of Jesus", author: "A.L. FANT" },
  { title: "Rescued", author: "A.L. FANT" },
  { title: "Dynamics of Ministry", author: "A.L. FANT" },
  // Row 2
  { title: "The Breakthrough Giving", author: "A.L. FANT" },
  { title: "Heart of My Father", author: "A.L. FANT" },
  { title: "Power of Restorations", author: "A.L. FANT" },
  { title: "Lifestyle of Tithing", author: "A.L. FANT" },
  { title: "Loaded Mouth", author: "A.L. FANT" },
  // Row 3
  { title: "Let Us Build", author: "A.L. FANT" },
  { title: "Loaded Mouth", author: "A.L. FANT" },
  { title: "Law of Order", author: "A.L. FANT" },
  { title: "Secrets of Order", author: "A.L. FANT" },
  { title: "Secrets of Kingdom Covenant", author: "A.L. FANT" },
  // Row 4
  { title: "All About You", author: "A.L. FANT" },
  { title: "Dynamics of Service", author: "A.L. FANT" },
  { title: "Conquering Fear", author: "A.L. FANT" },
  { title: "Money Matters", author: "A.L. FANT" },
  { title: "Pulpit Pew", author: "A.L. FANT" },
  // Additional books
  { title: "Practical Believers", author: "A.L. FANT" },
  { title: "Let's Talk Money", author: "A.L. FANT" },
  { title: "Long Life My Heritage", author: "A.L. FANT" },
  { title: "Beyond the Grave", author: "A.L. FANT" },
  { title: "Women of Kingdom Influence", author: "A.L. FANT" },
  { title: "Realities of the Night", author: "A.L. FANT" },
  { title: "The Demonstration of Powerful Praise", author: "A.L. FANT" },
  { title: "Mystery Word Capsules", author: "A.L. FANT" },
  { title: "Double Impact", author: "A.L. FANT" },
  { title: "10 More", author: "A.L. FANT" },
  { title: "Sprinkled", author: "A.L. FANT" },
  { title: "Maxims", author: "A.L. FANT" },
  { title: "The Single", author: "A.L. FANT" },
  { title: "She Who Dreads", author: "A.L. FANT" },
  { title: "Energy Conquered", author: "A.L. FANT" },
  { title: "Enough Rubbish", author: "A.L. FANT" },
  { title: "All About Jesus", author: "A.L. FANT" },
  { title: "Miracles", author: "A.L. FANT" },
  { title: "Signs & Wonders", author: "A.L. FANT" },
  { title: "Altar", author: "A.L. FANT" },
  { title: "Mothers", author: "A.L. FANT" },
  { title: "Compelling Financial Powers", author: "A.L. FANT" },
  { title: "Church Dwarfs", author: "A.L. FANT" },
  { title: "Church Cracks", author: "A.L. FANT" },
  { title: "Church Members", author: "A.L. FANT" },
  { title: "Freedom of Oneself", author: "A.L. FANT" },
  { title: "Power of Focus", author: "A.L. FANT" },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-amber-700 via-orange-600 to-amber-800 opacity-95" />
        <div className="absolute inset-0">
          <Image
            src="/slides/4.jpg"
            alt="Books and Resources"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="text-5xl sm:text-6xl font-bold font-serif mb-3 text-white/90">
                Our History is His Story
              </div>
              <div className="text-7xl sm:text-8xl font-bold font-serif text-yellow-300">
                LITERATURE IN<br />MINISTRY
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-white/90 mt-8 max-w-3xl mx-auto">
              Ten years of authoring transformative books and teaching materials
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Library Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Book className="w-3.5 h-3.5" />
              Published Works
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Books by Rev. A.L. Fant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over 40 transformative books covering faith, ministry, finances, relationships, and spiritual growth
            </p>
          </motion.div>

          {/* Books Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {books.map((book, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className="group"
              >
                <div className="relative aspect-2/3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-linear-to-br from-slate-100 to-slate-200 border-2 border-border group-hover:border-amber-600/30">
                  {/* Book placeholder with title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-linear-to-br from-amber-50 to-orange-50">
                    <BookOpen className="w-12 h-12 text-amber-600/20 mb-4" />
                    <h3 className="font-serif text-sm font-bold text-center text-foreground mb-2 line-clamp-3">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {book.author}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-amber-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white text-xs font-semibold">View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { value: "40+", label: "Books Published", sublabel: "Covering various topics" },
              { value: "10", label: "Years of Writing", sublabel: "Consistent authorship" },
              { value: "1000s", label: "Lives Transformed", sublabel: "Through literature" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-sm"
              >
                <div className="text-5xl font-bold font-serif text-amber-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Book Categories */}
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
              Book Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive teaching on essential Christian life topics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Church & Ministry",
                books: [
                  "The Flourishing Church",
                  "Church from the Pulpit",
                  "Dynamics of Ministry",
                  "Church Dwarfs",
                  "Church Cracks",
                  "Church Members",
                ],
                color: "from-primary to-orange-500",
              },
              {
                category: "Financial Wisdom",
                books: [
                  "The Breakthrough Giving",
                  "Lifestyle of Tithing",
                  "Let's Talk Money",
                  "Money Matters",
                  "Compelling Financial Powers",
                ],
                color: "from-emerald-500 to-green-600",
              },
              {
                category: "Spiritual Power",
                books: [
                  "Loaded Mouth",
                  "Miracles",
                  "Signs & Wonders",
                  "Altar",
                  "Power of Focus",
                  "Realities of the Night",
                ],
                color: "from-violet-500 to-purple-600",
              },
              {
                category: "Personal Growth",
                books: [
                  "All About You",
                  "Long Life My Heritage",
                  "Conquering Fear",
                  "Beyond the Grave",
                  "The Single",
                ],
                color: "from-accent to-blue-600",
              },
              {
                category: "Kingdom Principles",
                books: [
                  "Law of Order",
                  "Secrets of Order",
                  "Secrets of Kingdom Covenant",
                  "Women of Kingdom Influence",
                ],
                color: "from-rose-500 to-pink-600",
              },
              {
                category: "Worship & Service",
                books: [
                  "The Demonstration of Powerful Praise",
                  "Dynamics of Service",
                  "All About Jesus",
                  "Heart of My Father",
                ],
                color: "from-teal-500 to-cyan-600",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${cat.color} flex items-center justify-center mb-4 shadow-md`}>
                  <BookOpen className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.books.map((book, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{book}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 bg-linear-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Book className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Your Copy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              For more information about purchasing these books or bulk orders for your ministry, 
              please contact Rev. A.L. Fant
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:mysterywordcapsules@yahoo.com"
                className="flex items-center gap-3 px-6 py-3 bg-white text-amber-700 rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
                mysterywordcapsules@yahoo.com
              </a>
              <a
                href="tel:+233209284668"
                className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                020 9284668
              </a>
            </div>

            <p className="text-sm text-white/70 italic">
              Transform your life and ministry with these powerful teaching resources
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
