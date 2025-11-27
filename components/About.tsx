"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-heading text-2xl font-semibold text-wash md:text-3xl"
      >
        About Me
      </motion.h2>

      <div className="mt-10 grid gap-10 md:grid-cols-[2fr,1fr] md:gap-16">
        {/* text block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-soft leading-relaxed text-sm md:text-base"
        >
          <p className="mb-4">
            I’m a Computer Science and Engineering undergraduate passionate
            about building scalable systems that blend creativity with
            precision.
          </p>
          <p className="mb-4">
            I manage technical operations and project delivery — designing
            system architecture, coordinating teams, and driving products from
            concept to execution. My work spans product thinking, automation,
            and storytelling.
          </p>
          <p>
            Outside tech, I’m deeply involved in event management, social impact
            work, and cricket analysis. I like turning messy ideas into things
            that run smoothly.
          </p>
        </motion.div>

        {/* side card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-soft/20 bg-page/40 p-6 shadow-card shadow-black/60"
        >
          <ul className="space-y-3 text-sm text-soft">
            <li>
              <span className="text-wash font-medium">Location:</span> Dhaka,
              Bangladesh
            </li>
            <li>
              <span className="text-wash font-medium">Education:</span> B.Sc.
              CSE, Islamic University of Technology
            </li>
            <li>
              <span className="text-wash font-medium">Focus:</span> System
              Design, Project Management, Automation
            </li>
            <li>
              <span className="text-wash font-medium">Also:</span> Event Host,
              Cricket Analyst
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
