"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
     <nav className="fixed top-4 right-4 z-50 md:top-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[92%] md:max-w-6xl md:rounded-full md:bg-black/40 md:backdrop-blur-xl md:border md:border-white/10">

        <div className="flex justify-end md:justify-between px-4 md:px-6 py-2 md:py-4">

          {/* Desktop Logo */}
          <a
            href="#"
            className="hidden md:block text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
          >
            PS
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-violet-400 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden text-white"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 md:hidden overflow-hidden"
          >
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-lg text-gray-300 hover:bg-violet-600/20 hover:text-violet-400 transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}