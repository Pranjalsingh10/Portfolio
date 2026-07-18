"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Education
        </motion.h2>

        <div className="space-y-8">

          {portfolio.education.map((edu, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                <GraduationCap className="text-violet-400" />

                <h3 className="text-2xl font-bold">
                  {edu.degree}
                </h3>

              </div>

              {edu.field && (
                <p className="mt-2 text-lg text-violet-300">
                  {edu.field}
                </p>
              )}

              <p className="mt-4 text-gray-300">
                {edu.institute}
              </p>

              <div className="mt-3 flex flex-wrap gap-6 text-gray-400">

                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {edu.duration}
                </span>

                <span className="flex items-center gap-2">
                  <Award size={18} />
                  {edu.grade}
                </span>

              </div>

              {edu.details && (
                <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-400">
                  {edu.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}