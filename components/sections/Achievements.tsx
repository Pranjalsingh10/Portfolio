"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#030712] px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Achievements
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {portfolio.achievements.map((achievement, index) => (

            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <Trophy className="mb-5 text-yellow-400" size={34} />

              <h3 className="text-2xl font-bold">
                {achievement.title}
              </h3>

              <p className="mt-2 text-violet-400">
                {achievement.subtitle}
              </p>

              <p className="mt-5 leading-7 text-gray-400">
                {achievement.description}
              </p>

              <p className="mt-6 text-sm text-gray-500">
                {achievement.date}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}