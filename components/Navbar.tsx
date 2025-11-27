"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add subtle shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    // { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
        {/* === Logo / Name === */}
        <a
          href="#top"
          className="font-heading text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          Sabrina Islam
        </a>

        {/* === Desktop Menu === */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-main/80">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-main/80 hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-white/95 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-4 py-5 text-sm font-medium text-main/80">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                    onClick={() => setOpen(false)} // closes menu after clicking
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
