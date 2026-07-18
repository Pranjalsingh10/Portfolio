"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/mykrwygg",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      form.reset();
      setToast("success");
    } else {
      setToast("error");
    }

    setLoading(false);

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#030712] px-6 py-28"
    >

      {/* Toast */}

      <AnimatePresence>

        {toast === "success" && (

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className="fixed right-8 top-8 z-50 flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-6 py-4 backdrop-blur-xl"
          >
            <CheckCircle className="text-green-400" />

            <div>

              <p className="font-semibold">
                Message Sent!
              </p>

              <p className="text-sm text-gray-300">
                Thank you for reaching out.
              </p>

            </div>

          </motion.div>

        )}

        {toast === "error" && (

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className="fixed right-8 top-8 z-50 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-4 backdrop-blur-xl"
          >
            <XCircle className="text-red-400" />

            <div>

              <p className="font-semibold">
                Something went wrong
              </p>

              <p className="text-sm text-gray-300">
                Please try again.
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-bold"
        >
          Let's <span className="text-violet-400">Connect</span>
        </motion.h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Have an internship opportunity, project idea, or just
          want to connect? Fill out the form and I'll reply as
          soon as possible.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-violet-400" />
                <span>pranjalsingh2508@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-violet-400" />
                <span>+91 8920890438</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-violet-400" />
                <span>Ghaziabad, India</span>
              </div>

            </div>

            <div className="mt-10 flex gap-5">

              <a
                href="https://github.com/Pranjalsingh10"
                target="_blank"
                className="rounded-xl border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pranjalsingh10/"
                target="_blank"
                className="rounded-xl border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
              >
                LinkedIn
              </a>

            </div>

          </motion.div>
                    {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@gmail.com"
                  className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Internship Opportunity"
                  className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-transparent p-4 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <div className="flex items-center gap-3">

                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />

                    </svg>

                    Sending...
                  </div>
                ) : (
                  "🚀 Send Message"
                )}
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}