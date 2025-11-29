"use client";
import { motion } from "framer-motion";

const publications = [
  {
    id: '1',
    title:
      "CardoSum",
    authors:
      "Sabrina Islam, Md. Atiqur Rahman, Dr. Arifur Rahman, Dr. Shamimur Parvez and Md. Hasanul Kabir.",
    venue:
      "arXiv preprint arXiv:2501.06805",
    link: "https://ieeexplore.ieee.org/document/XXXXXX", // Give the url susmi
    img_path: "/images/CardoSum.png"
  },
  {
    id: '2',
    title:
      "Rep3Net: An Approach Exploiting Multimodal Representation for Molecular Bioactivity Prediction",
    authors:
      "Sabrina Islam, Md. Atiqur Rahman, Md. Bakhtiar Hasan, Md. Hasanul Kabir.",
    venue:
      "arXiv preprint",
    link: "https://ieeexplore.ieee.org/document/XXXXXX", // Give the url susmi
    img_path: "/images/PARP.png"
  },
  {
    id: '3',
    title:
      "LLM-Based Evaluation of Low-Resource Machine Translation: A Reference-less Dialect Guided Approach with a Refined Sylheti-English Benchmark",
    authors:
      "Md Atiqur Rahman, Sabrina Islam, and Mushfiqul Haque Omi.",
    venue:
      "Accepted at CLNLP 2025. arXiv preprint arXiv:2505.12273",
    link: "https://arxiv.org/abs/2505.12273", // Give the url susmi
    img_path: "/images/MTEval.png"
  },
  {
    id: '4',
    title:
      "Personalized Federated Segmentation with Shared Feature Aggregation and Boundary-Focused Calibration",
    authors:
      "Ishmam Tashdeed, Md. Atiqur Rahman, Sabrina Islam, and Md. Azam Hossain.",
    venue:
      "arXiv preprint arXiv:2511.18847",
    link: "https://arxiv.org/abs/2511.18847", // Give the url susmi
    img_path: "/images/FedOAP.png"
  },
  {
    id: '5',
    title:
      "Precision Cancer Classification and Biomarker Identification from mRNA Gene Expression via Dimensionality Reduction and Explainable AI",
    authors:
      "Farzana Tabassum, Sabrina Islam, Siana Rizwan, Masrur Sobhan, Tasnim Ahmed, Sabbir Ahmed, and Tareque Mohmud Chowdhury.",
    venue:
      "arXiv preprint arXiv:2410.07260",
    link: "https://arxiv.org/abs/2410.07260", // Give the url susmi
    img_path: "/images/Pancan_architecture.png"
  },
  {
    id: '6',
    title:
      "Transfer Learning-based Ensemble Approach for Organ Classification: An Empirical Study",
    authors:
      "Sabrina Islam, Farzana Tabassum, Siana Rizwan, and Tareque Mohmud Chowdhury.",
    venue:
      "In 2022 12th International Conference on Electrical and Computer Engineering (ICECE), pages 52–55, 2022. doi:10.1109/ICECE57408.2022.10089089.",
    link: "https://ieeexplore.ieee.org/abstract/document/10089089/", // Give the url susmi
    img_path: "/images/Organ.png"
  },
  {
    id: '7',
    title:
      "A Pan-cancer Classification Model using Multi-view Feature Selection Method and Ensemble Classifier",
    authors:
      "Tareque Mohmud Chowdhury, Farzana Tabassum, Sabrina Islam.",
    venue:
      "arXiv preprint arXiv:2501.06805",
    link: "https://arxiv.org/abs/2501.06805", // Give the url susmi
    img_path: "/images/Pancan_FS.png"
  },
];

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
        <div className="space-y-8">
          {publications.map((p) => (
              <div key={p.id} className="flex flex-col-reverse md:flex-row gap-6 items-center">
                <div className="flex w-30 h-20 md:w-36 md:h-24 overflow-hidden border-1 border-accent/30 shadow-card">
                  <img
                    src={p.img_path}
                    alt="Portrait of Sabrina Islam"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <span className="block">
                  <strong>{p.title}</strong> <br />
                  {p.authors} <br />
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
                </div>
                {/* <span className="block">
                  <strong>{p.authors}</strong>, “{p.title},”{" "}
                  <em>{p.venue}</em>.
                </span> */}
                
              </div>
            ))}
          {/* <h3 className="text-lg font-semibold text-main mb-3">Published Paper</h3> */}
          {/* <div className="flex flex-col-reverse">
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
          </div> */}
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
