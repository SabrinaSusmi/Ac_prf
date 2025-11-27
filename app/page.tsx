"use client";

import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
// (We'll import Experience, Projects, Skills, Contact later)

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Hero />
      <Research />
      <Education />
      <Experience />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </motion.div>
  );
}