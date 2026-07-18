"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16"
        >
          About <span className="text-violet-500">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              Software Developer
            </h3>

            <p className="text-gray-400 leading-8">
              I'm <span className="text-white font-semibold">Pranjal Singh</span>,
              a Computer Science student at KIET Group of Institutions.
              I enjoy building scalable backend systems, AI-powered
              applications, and modern web experiences.
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              My interests include Machine Learning, Artificial
              Intelligence, Backend Development, Cloud Computing,
              and creating software that solves real-world problems.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-3xl bg-violet-600/10 border border-violet-500/20 p-8">
              <h1 className="text-5xl font-black text-violet-400">
                3+
              </h1>

              <p className="text-gray-300 mt-3">
                Major Projects
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-8">
              <h1 className="text-5xl font-black text-cyan-400">
                2+
              </h1>

              <p className="text-gray-300 mt-3">
                Certifications
              </p>
            </div>

            <div className="rounded-3xl bg-pink-500/10 border border-pink-500/20 p-8">
              <h1 className="text-5xl font-black text-pink-400">
                AI
              </h1>

              <p className="text-gray-300 mt-3">
                Machine Learning Focus
              </p>
            </div>

            <div className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-8">
              <h1 className="text-5xl font-black text-emerald-400">
                10+
              </h1>

              <p className="text-gray-300 mt-3">
                Technologies
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}