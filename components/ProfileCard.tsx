"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Animated Gradient Ring */}
      <div className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 animate-spin [animation-duration:12s]" />

      {/* Dark Inner Ring */}
      <div className="absolute h-[320px] w-[320px] rounded-full bg-[#030712]" />

      {/* Profile Image */}
      <div className="relative z-10 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
        <Image
          src="/images/IMG_8276.JPG.jpeg"
          alt="Pranjal Singh"
          width={300}
          height={300}
          className="h-[300px] w-[300px] object-cover transition duration-500 hover:scale-110"
          priority
        />
      </div>
    </motion.div>
  );
}