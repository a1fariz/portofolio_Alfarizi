"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import ScrollReveal from "./ScrollReveal";

export default function Certifications() {
  return (
    <section className="py-section bg-surface-soft">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-lg text-ink text-center mb-4">
            Certifications
          </h2>
          <p className="font-sans text-base text-muted text-center mb-16 max-w-2xl mx-auto">
            Continuous learning through verified certifications from leading
            institutions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-surface-card rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              {/* Emoji */}
              <span className="text-4xl mb-4 block">{cert.emoji}</span>

              {/* Title */}
              <h3 className="font-sans text-title-sm text-ink mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* Institution */}
              <p className="font-sans text-sm text-muted mb-1">
                {cert.institution}
              </p>

              {/* Year */}
              <p className="font-sans text-xs text-muted-soft">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
