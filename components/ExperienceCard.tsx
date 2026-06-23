"use client";

import { motion } from "framer-motion";
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
      className="relative pl-8 md:pl-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-surface-dark border-2 border-primary" />

      {/* Card */}
      <div className="bg-surface-dark rounded-lg p-6 lg:p-8">
        {/* Coral accent line at left */}
        <div className="absolute left-8 md:left-12 top-4 bottom-4 w-0.5 bg-primary/30 -ml-[calc(2rem+1px)] md:-ml-[calc(3rem+1px)]" />

        <div className="space-y-4">
          {/* Role & Period */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-sans text-title-md text-on-dark">
              {experience.role}
            </h3>
            <span className="font-sans text-xs font-medium text-on-dark-soft whitespace-nowrap">
              {experience.period}
            </span>
          </div>

          {/* Company */}
          <p className="font-sans text-sm text-primary font-medium">
            🏢 {experience.company}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {experience.highlights.map((highlight, i) => (
              <li
                key={i}
                className="font-sans text-sm text-on-dark-soft leading-relaxed flex gap-2"
              >
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
