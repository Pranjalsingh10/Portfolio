"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const icons: Record<string, string> = {
  Languages: "💻",
  Backend: "⚙️",
  "AI / ML": "🤖",
  Tools: "🛠️",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[#030712] px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          My <span className="text-violet-500">Skills</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {portfolio.skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {icons[group.category]} {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 transition-all duration-300 hover:bg-violet-600 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}