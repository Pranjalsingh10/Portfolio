"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] py-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Pranjal Singh. All rights reserved.</p>
    </footer>
  );
}