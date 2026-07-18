"use client";

import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import Background from "../effects/Background";
import ProfileCard from "../ProfileCard";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 md:pt-36"
    >
      <Background />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start lg:items-start gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-2 px-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-violet-400 text-xl"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name + Mobile Image */}
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-5">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black leading-none"
            >
              {portfolio.name.split(" ")[0]}
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                {portfolio.name.split(" ")[1]}
              </span>
            </motion.h1>

            {/* Mobile Profile Photo */}
            <div className="block lg:hidden">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-violet-500 shadow-lg shadow-violet-500/30">
                <Image
                  src="/images/IMG_8276.JPG.jpeg"
                  alt="Pranjal Singh"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-2xl font-semibold text-violet-300"
          >
            <TypeAnimation
              sequence={[
                "Software Developer",
                1800,
                "AI Engineer",
                1800,
                "Machine Learning Enthusiast",
                1800,
                "Backend Developer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            {portfolio.tagline}
          </motion.p>

          {/* Stats */}
          <div className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-500">
              <h3 className="text-3xl font-bold text-violet-400">3+</h3>
              <p className="mt-1 text-sm text-gray-400">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="mt-1 text-sm text-gray-400">Technologies</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-pink-500">
              <h3 className="text-3xl font-bold text-pink-400">5+</h3>
              <p className="mt-1 text-sm text-gray-400">Certifications</p>
            </div>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5"
          >
            <a
              href="#projects"
              className="rounded-xl bg-violet-600 px-5 md:px-8 py-4 font-semibold shadow-lg shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-violet-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl border border-white/20 px-5 md:px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-500"
            >
              Download Resume
            </a>
          </motion.div>

        </div>

        {/* Desktop Profile Card */}
        <div className="hidden lg:flex justify-center">
  <ProfileCard />
</div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="flex flex-col items-center text-gray-400 hover:text-violet-400"
          >
            <span className="mb-2 text-sm tracking-widest uppercase">
              Scroll
            </span>

            <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
              <motion.div
                animate={{ y: [2, 18, 2] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="mt-2 h-3 w-3 rounded-full bg-violet-500"
              />
            </div>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}