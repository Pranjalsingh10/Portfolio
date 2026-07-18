"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  {name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-xl">

        <h1 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          PS
        </h1>

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative text-gray-300 transition hover:text-white group"
          >
            {link.name}

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}

      </div>
    </motion.nav>
  );
}