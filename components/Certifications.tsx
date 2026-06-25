"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import ScrollReveal from "./ScrollReveal";
import {
  Terminal,
  BarChart3,
  Code,
  Cloud,
  MessageSquare,
  Shield,
  Lock,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "🐍": Terminal,
  "📊": BarChart3,
  "💻": Code,
  "☁️": Cloud,
  "💬": MessageSquare,
  "🛡️": Shield,
  "🔒": Lock,
};

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-surface-soft">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-md md:text-display-lg text-ink text-center mb-4">
            Certifications
          </h2>
          <p className="font-sans text-base text-muted text-center mb-16 max-w-2xl mx-auto">
            Continuous learning through verified certifications from leading
            institutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.emoji];
            return (
              <motion.div
                key={cert.id}
                className="bg-surface-card rounded-lg p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                {/* Icon Component */}
                {IconComponent ? (
                  <IconComponent size={32} className="text-primary mb-4 shrink-0" />
                ) : (
                  <span className="text-4xl mb-4 block">{cert.emoji}</span>
                )}

                {/* Title */}
                <h3 className="font-sans text-title-sm text-ink mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Institution */}
                <p className="font-sans text-sm text-muted mb-1">
                  {cert.institution}
                </p>

                {/* Year */}
                <p className="font-sans text-xs text-muted-soft mt-auto">
                  {cert.year}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
