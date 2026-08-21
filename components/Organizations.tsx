"use client";

import { motion } from "framer-motion";
import { Users, Award, CheckCircle2 } from "lucide-react";
import { organizations } from "@/data/organizations";
import ScrollReveal from "./ScrollReveal";

export default function Organizations() {
  return (
    <section id="organizations" className="scroll-mt-24 border-b border-hairline bg-surface-soft/20 py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
              05 / Leadership &amp; community
            </span>
            <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
              Building beyond the codebase.
            </h2>
            <p className="max-w-xl font-sans text-sm leading-7 text-muted md:text-base">
              Active involvement in student associations, academic mentoring, and event leadership.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
               className="flex flex-col justify-between rounded-[1.5rem] border border-hairline bg-surface-card/60 p-6 transition-colors duration-300 hover:border-accent-red/40 lg:p-7"

              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-glow-sm">
                      {org.id === "pkkmb-2025" ? <Award size={18} /> : <Users size={18} />}
                    </div>
                    <div>
                      <h3 className="font-heading text-title-sm md:text-title-md text-ink font-semibold">
                        {org.role}
                      </h3>
                      <p className="font-sans text-xs text-accent-cyan font-medium mt-0.5">
                        {org.organization}
                      </p>
                    </div>
                  </div>
                  <span className="badge-pill shrink-0 text-xs font-mono">{org.period}</span>
                </div>

                <ul className="space-y-2.5 mt-5 border-t border-hairline pt-4">
                  {org.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-body">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
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
