"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft, Search, Flame, Wind } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-orange-500 flex items-center justify-center shadow-2xl shadow-primary/30"
          >
            <Flame className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-linear-to-br from-accent to-blue-500 flex items-center justify-center shadow-2xl shadow-accent/30"
          >
            <Wind className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-9xl font-serif font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off. 
            Let's get you back to the sanctuary.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-primary to-orange-500 text-white font-semibold shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/sermons"
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Sermons
            </Link>
            <Link
              href="/give"
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Give
            </Link>
            <Link
              href="/#about"
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#ministries"
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Ministries
            </Link>
          </div>
        </motion.div>

        {/* Scripture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="max-w-lg mx-auto p-6 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10">
            <p className="font-serif text-slate-700 dark:text-slate-300 italic mb-2">
              "For I know the plans I have for you, declares the Lord, 
              plans to prosper you and not to harm you, 
              plans to give you hope and a future."
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              — Jeremiah 29:11
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
