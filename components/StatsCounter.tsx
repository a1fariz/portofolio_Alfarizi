"use client";

import { motion } from "framer-motion";
import { Server, FolderGit2, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Server,
    value: "3+",
    label: "Production Services & RAG Pipelines",
    subtext: "Spring Boot Microservices & LangChain RAG",
  },
  {
    icon: FolderGit2,
    value: "6+",
    label: "Technical Projects",
    subtext: "Backend, AI, Web & C CLI Systems",
  },
  {
    icon: Award,
    value: "7+",
    label: "Verified Certifications",
    subtext: "U. Michigan, HarvardX, IBM, edX",
  },
  {
    icon: GraduationCap,
    value: "3.6 / 4.0",
    label: "Academic GPA",
    subtext: "Informatics Management (PASIM)",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative z-20 border-b border-hairline bg-surface-card/40 py-8">
      <div className="section-container">
        <div className="grid grid-cols-2 divide-x divide-y divide-hairline md:grid-cols-4 md:divide-y-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                 className="group flex flex-col items-center px-4 py-5 text-center transition-colors duration-300 hover:bg-surface-card"

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                 <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">

                  <Icon size={18} />
                </div>
                <span className="font-heading text-display-sm md:text-display-md text-ink font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs md:text-sm text-body-strong font-semibold mt-1">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] md:text-[11px] text-muted mt-0.5">
                  {stat.subtext}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
