"use client";
import { motion } from "framer-motion";

const teaching = [
  {
    title: "Lecturer, Department of Computer Science and Engineering",
    organization: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    period: "Aug 2023 – Present",
    responsibilities: [
      "Deliver theory courses including Computer Organization and Architecture, and Digital Logic Design.",
      "Conduct laboratory sessions for Engineering Drawing, Object-Oriented Programming, Data Structures, Computer Fundamentals, and Embedded Systems.",
      "Supervise student projects under Software Project Lab and Design Project-I, and co-supervise undergraduate theses.",
    ],
  },
];

const internships = [
  {
    id: '1',
    title: "Trainee Software Developer",
    organization: "RedDot Digital Limited",
    location: "Dhaka, Bangladesh",
    period: "Sep 2022 – Mar 2023",
    responsibilities: [
      "Contributed to the HRMS Project (ITP Department) using Angular, RxJS, and Tailwind CSS.",
      "Collaborated within agile sprints to refine frontend components and enhance system responsiveness.",
    ],
  },
  {
    id: '2',
    title: "Software Developer Intern",
    organization: "RedDot Digital Limited",
    location: "Dhaka, Bangladesh",
    period: "May 2022 – Sep 2022",
    responsibilities: [
      "Assisted in developing in-house HRMS and Blog Posting applications.",
      "Worked on a weather prediction tool leveraging real-time data APIs and Angular framework.",
    ],
  },
  {
    id: '3',
    title: "Software Developer Intern",
    organization: "Dhaka Stock Exchange Limited",
    location: "Dhaka, Bangladesh",
    period: "Feb 2021 – Aug 2021",
    responsibilities: [
      "Developed modules for the Digital Submission and Dissemination System using Spring Boot, JavaScript, and PostgreSQL.",
      "Collaborated with senior engineers to optimize backend queries and ensure data integrity in production.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Teaching and Professional Experience
      </motion.h2>

      <div className="space-y-14">
        {/* --- Teaching Section --- */}
        {teaching.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-main">{exp.title}</h3>
            <p className="text-sm text-main/80 font-medium">
              {exp.organization} — {exp.location}
            </p>
            <p className="text-xs text-main/60 italic">{exp.period}</p>
            <ul className="list-disc list-inside text-sm text-main/70 mt-2 space-y-1">
              {exp.responsibilities.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* --- Internship Section --- */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-accent mb-4">
            Industry Internships
          </h3>
          {internships.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pl-4 border-l-2 border-accent/30 mb-8"
            >
              <h4 className="font-medium text-main">{exp.title}</h4>
              <p className="text-sm text-main/80 font-medium">
                {exp.organization} — {exp.location}
              </p>
              <p className="text-xs text-main/60 italic">{exp.period}</p>
              <ul className="list-disc list-inside text-sm text-main/70 mt-2 space-y-1">
                {exp.responsibilities.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
