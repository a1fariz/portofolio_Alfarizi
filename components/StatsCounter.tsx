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
    <section className="py-10 bg-surface-card border-y border-border/40 relative z-20">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-canvas/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <span className="font-serif text-display-sm md:text-display-md text-ink font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-xs md:text-sm text-body-strong font-semibold mt-1">
                  {stat.label}
                </span>
                <span className="font-sans text-[11px] md:text-xs text-muted mt-0.5">
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
