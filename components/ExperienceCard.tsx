"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Experience } from "@/lib/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="relative pl-7 md:pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Timeline line */}
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-hairline" />

      {/* Timeline dot with glowing effect */}
      <div className="absolute left-0 top-3 w-3 h-3 rounded-full bg-primary border-2 border-canvas shadow-glow-sm" />

      {/* Card */}
      <div className="rounded-[1.5rem] border border-hairline bg-surface-card/60 p-6 transition-colors duration-300 hover:border-accent-red/40 lg:p-7">
        <div className="space-y-3.5">
          {/* Role & Period */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-heading text-title-md text-ink font-semibold">
              {experience.role}
            </h3>
            <span className="font-mono text-xs text-muted">
              {experience.period}
            </span>
          </div>

          {/* Company */}
          <p className="font-sans text-xs md:text-sm text-accent-cyan font-medium flex items-center gap-1.5">
            <Building2 size={13} />
            <span>{experience.company}</span>
          </p>

          {/* Highlights */}
          <ul className="space-y-2 pt-1">
            {experience.highlights.map((highlight, i) => (
              <li
                key={i}
                className="font-sans text-xs md:text-sm text-body leading-relaxed flex gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
