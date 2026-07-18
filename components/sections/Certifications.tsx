"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          <span className="text-violet-400">Certifications</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {portfolio.certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

              </div>

              <div className="p-6">

                <Award className="mb-4 text-yellow-400" />

                <h3 className="text-xl font-bold">
                  {cert.title}
                </h3>

                <p className="mt-2 text-violet-400">
                  {cert.issuer}
                </p>

                <p className="mt-2 text-gray-400">
                  {cert.date}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 transition hover:bg-violet-700"
                >
                  View Certificate

                  <ExternalLink size={18} />

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}