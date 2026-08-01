"use client";

import { motion } from "framer-motion";
import { Users, Award, CheckCircle2 } from "lucide-react";
import { organizations } from "@/data/organizations";
import ScrollReveal from "./ScrollReveal";

export default function Organizations() {
  return (
    <section id="organizations" className="py-16 md:py-24 bg-surface-soft">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              <Users size={14} />
              Leadership & Community
            </span>
            <h2 className="font-serif text-display-md md:text-display-lg text-ink">
              Organizations & Committees
            </h2>
            <p className="font-sans text-base text-muted max-w-2xl mt-4">
              Active involvement in student associations, academic mentoring, and event management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              className="bg-surface-card rounded-lg p-6 lg:p-8 flex flex-col justify-between border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {org.id === "pkkmb-2025" ? <Award size={20} /> : <Users size={20} />}
                    </div>
                    <div>
                      <h3 className="font-sans text-title-sm md:text-title-md text-ink font-semibold">
                        {org.role}
                      </h3>
                      <p className="font-sans text-xs text-primary font-medium mt-0.5">
                        {org.organization}
                      </p>
                    </div>
                  </div>
                  <span className="badge-pill shrink-0 text-xs">{org.period}</span>
                </div>

                <ul className="space-y-2.5 mt-6 border-t border-border/40 pt-4">
                  {org.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-body">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
