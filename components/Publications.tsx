"use client";
import { motion } from "framer-motion";

const publications = [
  {
    title:
      "Transfer learning-based ensemble approach for organ classification: An empirical study",
    authors:
      "S. Islam, F. Tabassum, S. Rizwan, and T. M. Chowdhury",
    venue:
      "12th International Conference on Electrical and Computer Engineering (ICECE), IEEE, 2022, pp. 52–55",
    link: "https://ieeexplore.ieee.org/document/XXXXXX", // Give the url susmi
  },
];

// const underReview = [
//   {
//     title:
//       "Precision Cancer Classification and Biomarker Identification from mRNA Gene Expression via Dimensionality Reduction and Explainable AI",
//     authors:
//       "F. Tabassum, S. Islam, S. Rizwan, M. Sobhan, T. Ahmed, S. Ahmed, and T. M. Chowdhury",
//     venue: "arXiv preprint arXiv:2410.07260 (2024)",
//     link: "https://arxiv.org/abs/2410.07260",
//   },
// ];

// const ongoing = [
//   {
//     title: "Federated Organ-agnostic Tumor Segmentation",
//     authors: "S. Islam, F. Tabassum, and T. M. Chowdhury",
//     description:
//       "Research project employing the U-Net architecture within a federated learning (FedAVG) framework for organ-agnostic tumor segmentation using breast and brain imaging datasets.",
//   },
// ];

export default function Research() {
  return (
    <section id="research" className="border-t border-border mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-semibold text-accent mb-10"
      >
        Research
      </motion.h2>

      <div className="space-y-12">
        {/* === Published === */}
        <div>
          {/* <h3 className="text-lg font-semibold text-main mb-3">Published Paper</h3> */}
          <div className="flex flex-col-reverse">
            {publications.map((p) => (
              <li key={p.title}>
                <span className="block">
                  <strong>{p.authors}</strong>, “{p.title},”{" "}
                  <em>{p.venue}</em>.
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs hover:underline"
                  >
                    View Publication ↗
                  </a>
                )}
              </li>
            ))}
          </div>
        </div>

        {/* === Under Review === */}
        {/* <div>
          <h3 className="text-lg font-semibold text-main mb-3">Article Under Review</h3>
          <ul className="list-disc list-inside text-sm text-main/80 space-y-3">
            {underReview.map((p) => (
              <li key={p.title}>
                <span className="block">
                  <strong>{p.authors}</strong>, “{p.title},”{" "}
                  <em>{p.venue}</em>.
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs hover:underline"
                  >
                    View Manuscript ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div> */}

        {/* === Ongoing === */}
        {/* <div>
          <h3 className="text-lg font-semibold text-main mb-3">Ongoing Research</h3>
          <div className="text-sm text-main/80 space-y-2">
            {ongoing.map((r) => (
              <div key={r.title}>
                <p className="font-semibold">{r.title}</p>
                <p className="text-main/70 italic">{r.authors}</p>
                <p className="text-main/70 mt-1">{r.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
