"use client";
import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import Background from "../effects/Background";
import ProfileCard from "../ProfileCard";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">

      <Background />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-violet-400 text-xl"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-5 text-7xl md:text-9xl font-black leading-none"
        >
          {portfolio.name.split(" ")[0]}
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {portfolio.name.split(" ")[1]}
          </span>
        </motion.h1>

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

<div className="mt-10 grid max-w-lg grid-cols-3 gap-6">
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

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-12 flex flex-wrap gap-5"
>
  <a
    href="#projects"
    className="rounded-xl bg-violet-600 px-8 py-4 font-semibold shadow-lg shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-violet-700"
  >
    View Projects
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-500"
  >
    Download Resume
  </a>
</motion.div> 

</div>

<div className="flex justify-center">
  <ProfileCard />
</div>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
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