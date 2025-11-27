"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MyHealth Keeper",
    stack: "React • ExpressJS • MongoDB • NodeJS • Python",
    summary:
      "A comprehensive health-tracking web platform that integrates user wellness data, AI-based pneumonia detection, and personalized reminders.",
    details: [
      "Developed full-stack features for medicine reminders, diet planning, and health information tracking.",
      "Trained and deployed a CNN model in Google Colab for pneumonia report analysis using chest X-ray datasets.",
      "Designed and implemented the complete UI including a marked calendar for menstruation cycle tracking.",
      "Integrated all modules into a unified REST-based architecture with ExpressJS and MongoDB.",
    ],
  },
  {
    title: "NGO Management System",
    stack: "JavaFX • Oracle",
    summary:
      "A desktop solution for NGOs to manage human resources, financial records, events, and donations through a centralized dashboard.",
    details: [
      "Implemented modules for donor management, event planning, and financial reporting.",
      "Introduced automatic weekly, monthly, and annual report generation for expense tracking.",
      "Designed an admin-only financial management feature ensuring secure access to sensitive records.",
    ],
  },
  {
    title: "Inventory Management System",
    stack: "Java Swing • Oracle",
    summary:
      "A small-business ERP tool for tracking purchases, sales, employees, and automated invoicing.",
    details: [
      "Developed complete buy–sell workflow with auto-generated invoices post-sale.",
      "Created a dynamic dashboard summarizing stock, sales, and revenue insights.",
    ],
  },
  {
    title: "Federated Organ-agnostic Tumor Segmentation",
    stack: "Python • PyTorch",
    summary:
      "Research implementation of a federated learning model for tumor segmentation across breast and brain datasets.",
    details: [
      "Implemented U-Net architecture under the FedAVG framework to achieve cross-organ generalization.",
      "Focused on data privacy and decentralized training efficiency.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold text-main mb-1">{proj.title}</h3>
            <p className="text-xs text-main/60 mb-2 font-mono">{proj.stack}</p>
            <p className="text-sm text-main/80 mb-3">{proj.summary}</p>
            <ul className="list-disc list-inside text-sm text-main/70 space-y-1">
              {proj.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
