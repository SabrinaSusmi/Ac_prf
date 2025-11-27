"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Islamic University of Technology (IUT), Gazipur, Bangladesh",
    period: "2019 – 2023",
    highlights: [
      "CGPA 3.91 / 4.00",
      "Rank: 2/47",
    ],
  },
  // {
  //   degree: "Higher Secondary Certificate (Science)",
  //   institution: "Rajuk Uttara Model College, Dhaka Board",
  //   period: "2016 – 2018",
  //   highlights: [
  //     "GPA 5.00 / 5.00",
  //     "Recipient of Government Scholarship."
  //   ],
  // },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-border mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Education
      </motion.h2>

      <div className="space-y-10">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-accent/40 pl-6"
          >
            <h3 className="text-lg font-semibold text-main">{edu.degree}</h3>
            <p className="text-sm text-main/80 font-medium">{edu.institution}</p>
            <p className="text-xs text-main/60 italic">{edu.period}</p>
            <ul className="list-disc list-inside text-sm text-main/70 mt-2 space-y-1">
              {edu.highlights.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
