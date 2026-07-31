"use client";

import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[oklch(0.09_0.02_25)]"
    >
          {/* Ambient glow behind the flame */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 180,
              height: 180,
              background: "radial-gradient(circle, oklch(0.52 0.22 28 / 35%), transparent 70%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Flame icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-5"
          >
            {/* The flame SVG — animated flicker */}
            <motion.div
              animate={{ scaleY: [1, 1.06, 0.97, 1.04, 1], scaleX: [1, 0.97, 1.02, 0.98, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "bottom center" }}
            >
              <svg
                width="64"
                height="80"
                viewBox="0 0 64 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer flame */}
                <motion.path
                  d="M32 4C32 4 14 22 14 42C14 52.5 22.5 60 32 60C41.5 60 50 52.5 50 42C50 22 32 4 32 4Z"
                  fill="url(#outerFlame)"
                  animate={{ d: [
                    "M32 4C32 4 14 22 14 42C14 52.5 22.5 60 32 60C41.5 60 50 52.5 50 42C50 22 32 4 32 4Z",
                    "M32 4C32 4 13 24 14 41C14.5 51.5 22.5 61 32 60C41.5 59 51 51.5 50 41C49 23 32 4 32 4Z",
                    "M32 4C32 4 15 21 14 42C13.5 52.5 23 60 32 60C41 60 50.5 52.5 50 42C49.5 21 32 4 32 4Z",
                    "M32 4C32 4 14 22 14 42C14 52.5 22.5 60 32 60C41.5 60 50 52.5 50 42C50 22 32 4 32 4Z",
                  ] as unknown as string }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Inner flame core */}
                <motion.path
                  d="M32 22C32 22 22 34 22 44C22 49.5 26.5 54 32 54C37.5 54 42 49.5 42 44C42 34 32 22 32 22Z"
                  fill="url(#innerFlame)"
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Bright core tip */}
                <motion.ellipse
                  cx="32" cy="46" rx="6" ry="8"
                  fill="url(#coreGlow)"
                  animate={{ ry: [8, 9, 7.5, 8], opacity: [0.9, 1, 0.85, 0.9] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />

                <defs>
                  <radialGradient id="outerFlame" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" stopColor="oklch(0.75 0.22 50)" />
                    <stop offset="50%" stopColor="oklch(0.60 0.25 35)" />
                    <stop offset="100%" stopColor="oklch(0.40 0.20 25)" stopOpacity="0.6" />
                  </radialGradient>
                  <radialGradient id="innerFlame" cx="50%" cy="75%" r="55%">
                    <stop offset="0%" stopColor="oklch(0.95 0.15 80)" />
                    <stop offset="40%" stopColor="oklch(0.80 0.22 55)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.25 30)" stopOpacity="0.5" />
                  </radialGradient>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="oklch(0.95 0.12 80)" stopOpacity="0.3" />
                  </radialGradient>
                </defs>
              </svg>
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
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 3 + (i % 3),
                height: 3 + (i % 3),
                background: `oklch(${0.70 + i * 0.02} 0.22 ${40 + i * 8})`,
                left: `calc(50% + ${(i % 2 === 0 ? -1 : 1) * (18 + i * 9)}px)`,
                bottom: "calc(50% + 20px)",
              }}
              animate={{
                y: [0, -(40 + i * 14)],
                x: [(i % 2 === 0 ? -1 : 1) * i * 3, (i % 2 === 0 ? -1 : 1) * (i * 5 + 8)],
                opacity: [0, 0.8, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{
                duration: 1.4 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
  );
}