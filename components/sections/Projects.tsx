"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#050816]">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16"
        >
          Featured <span className="text-violet-500">Projects</span>
        </motion.h2>

        <div className="space-y-12">

          {portfolio.projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >

              <div className="grid lg:grid-cols-2">

                <div className="relative h-[320px]">

                  {project.image ? (

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />

                  ) : (

                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-600/20 to-cyan-500/20">
                      <span className="text-3xl font-bold text-gray-300">
                        Coming Soon
                      </span>
                    </div>

                  )}

                </div>

                <div className="p-10">

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-10 flex gap-5">

                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-xl border border-white/20 px-6 py-3 transition hover:border-violet-500"
                    >
                      GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 hover:bg-violet-700"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="rounded-xl bg-gray-700 px-6 py-3 text-gray-300 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}