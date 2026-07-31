"use client";

import { motion } from "motion/react";

/**
 * FaithCross - A decorative cross element positioned between sections
 * Symbolizes the intersection of heaven and earth, spirit and action
 */
export default function FaithCross() {
  return (
    <div className="relative -my-12 z-10">
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2 
          }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/30 to-orange-400/30 blur-2xl scale-150" />
          
          {/* Main container */}
          <div className="relative w-24 h-24 rounded-full bg-white shadow-2xl border-2 border-white flex items-center justify-center overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary via-orange-500 to-amber-500" />
            
            {/* Animated light rays */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[0, 45, 90, 135].map((angle) => (
                <div
                  key={angle}
                  className="absolute top-1/2 left-1/2 w-full h-0.5 bg-white/20"
                  style={{ 
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: "center"
                  }}
                />
              ))}
            </motion.div>

            {/* Cross icon - traditional faith cross shape */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="relative z-10 w-12 h-12 flex items-center justify-center"
            >
              {/* Vertical bar - longer */}
              <div className="absolute w-1 h-10 bg-white rounded-full shadow-lg" />
              {/* Horizontal bar - shorter and positioned above middle */}
              <div className="absolute w-8 h-1 bg-white rounded-full shadow-lg" style={{ top: '25%' }} />
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut" 
              }}
            />
          </div>

          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ 
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0.2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
