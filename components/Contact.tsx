"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border mt-20 mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 text-sm md:text-base text-main/80"
      >
        <div>
          <p className="flex items-center gap-2">
            <Mail size={18} />{" "}
            <a
              href="mailto:sabrinaislam22@iut-dhaka.edu"
              className="hover:underline text-accent font-medium"
            >
              sabrinaislam22@iut-dhaka.edu
            </a>
          </p>

          <p className="flex items-center gap-2">
            <Phone size={18} />{" "}
            <span>+880 1832 239 897</span>
          </p>

          <p className="flex items-center gap-2">
            <MapPin size={18} />{" "}
            <span>
              House #71, Road #15, Sector #11, Uttara, Dhaka-1230, Bangladesh
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-5 pt-2 text-accent font-medium">
          <a
            href="https://github.com/SabrinaSusmi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>

          <a
            href="http://www.linkedin.com/in/sabrinaislam22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

          <a
            href="https://scholar.google.com/citations?user=MscSfTkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FileText size={18} /> Google Scholar
          </a>
        </div>
      </motion.div>
    </section>
  );
}
