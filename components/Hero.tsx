"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 mt-16"
    >
      {/* === Left: Text Info === */}
      <div className="flex-1 space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-semibold leading-tight"
        >
          <span className="border-b-4 border-accent pb-1">
            Sabrina Islam
          </span>
        </motion.h1>

        {/* <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-lg md:text-lg text-main/80 font-medium"
        >
          Lecturer <br />
          Department of Computer Science and Engineering <br />
          Islamic University of Technology (IUT)
          Welcome! I am a lecturer at the <a
            href="https://www.iutoic-dhaka.edu/" className="text-accent"
          >Islamic University of Technology (IUT)</a>. <br />
          <br />
          My research interests span the intersection of natural language processing, explainability and reasoning in LLMs and AI for healthcare.
        </motion.h2> */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base text-main/80 max-w-xl leading-relaxed"
        >
          Welcome! I am a lecturer at the <a
            href="https://www.iutoic-dhaka.edu/" className="text-accent"
          >Islamic University of Technology (IUT)</a>. <br />
          <br />
          My research interests span the intersection of natural language processing, explainability and reasoning in LLMs and AI for healthcare.
          {/* Passionate about advancing software engineering and intelligent systems
          through research and teaching. Experienced in machine learning, 
          web development, and academic supervision. Currently involved in 
          federated learning and biomedical AI research. */}
        </motion.p>

        {/* === Links === */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap gap-5 pt-4"
        >
          <a
            href="mailto:sabrinaislam22@iut-dhaka.edu"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="http://www.linkedin.com/in/sabrinaislam22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/SabrinaSusmi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?user=MscSfTkAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <FileText size={16} /> Google Scholar
          </a>
        </motion.div>
      </div>

      {/* === Right: Photo === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-card">
          <img
            src="/images/profile_photo_2.jpg"
            alt="Portrait of Sabrina Islam"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
