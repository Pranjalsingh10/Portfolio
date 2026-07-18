"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, -150, 70, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Small Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-3xl"
      />

    </div>
  );
}