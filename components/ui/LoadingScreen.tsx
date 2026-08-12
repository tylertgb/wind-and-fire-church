"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[oklch(0.09_0.02_25)]"
    >
      {/* Ambient glow behind the logo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, oklch(0.52 0.22 28 / 35%), transparent 70%)",
        }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-5"
      >
        {/* Animated Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px oklch(0.52 0.22 28 / 0.3)",
                "0 0 40px oklch(0.52 0.22 28 / 0.6)",
                "0 0 20px oklch(0.52 0.22 28 / 0.3)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full overflow-hidden"
          >
            <Image
              src="/favicon.png"
              alt="Wind & Fire Logo"
              width={80}
              height={80}
              quality={100}
              priority
              className="w-20 h-20"
            />
          </motion.div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="text-center"
        >
          <div className="text-white font-bold tracking-tight text-lg leading-none">
            Wind <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-primary">&amp;</span> Fire
          </div>
          <div className="text-white/35 text-[9px] tracking-[0.3em] uppercase mt-1">
            Assemblies of God, Tamale
          </div>
        </motion.div>
      </motion.div>

      {/* Tiny ember particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            background: `oklch(${0.70 + i * 0.02} 0.22 ${40 + i * 8})`,
            left: `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (22 + i * 10)}px)`,
            bottom: "calc(50% + 30px)",
          }}
          animate={{
            y: [0, -(45 + i * 16)],
            x: [(i % 2 === 0 ? -1 : 1) * i * 3, (i % 2 === 0 ? -1 : 1) * (i * 6 + 10)],
            opacity: [0, 0.8, 0],
            scale: [1, 0.5, 0],
          }}
          transition={{
            duration: 1.5 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
}