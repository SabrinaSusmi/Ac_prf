"use client";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Machine Learning Libraries",
    items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    title: "Frameworks & Environments",
    items: ["Angular", "ReactJS", "Spring Boot", "Node.js", "ExpressJS"],
  },
  {
    title: "Databases",
    items: ["Oracle", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Development & IDE Tools",
    items: [
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Eclipse",
      "PyCharm",
      "Jupyter Notebook",
      "Git & GitHub",
    ],
  },
  {
    title: "Design, Simulation & Utility Tools",
    items: [
      "Figma",
      "Jira",
      "Proteus",
      "Cisco Packet Tracer",
      "AutoCAD",
      "TinkerCAD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-main mb-2">{s.title}</h3>
            <ul className="text-sm text-main/70 space-y-1 list-disc list-inside">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
