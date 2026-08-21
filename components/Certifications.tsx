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
  Award,
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
    <section className="border-b border-hairline bg-canvas py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
           <div className="mb-14 max-w-2xl">
             <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
               06 / Credentials
             </span>
             <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
               Proof of continuous learning.
             </h2>
             <p className="max-w-xl font-sans text-sm leading-7 text-muted md:text-base">

              Continuous learning through verified credentials from leading academic institutions and tech organizations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.emoji];
            return (
              <motion.div
                key={cert.id}
                 className="group flex flex-col items-center rounded-[1.5rem] border border-hairline bg-surface-card/60 p-6 text-center transition-colors duration-300 hover:border-accent-red/40"

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
              >
                {/* Icon Component */}
                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">

                  {IconComponent ? (
                    <IconComponent size={22} className="text-primary shrink-0" />
                  ) : (
                    <Award size={22} className="text-primary shrink-0" />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm md:text-base font-semibold text-ink mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Institution */}
                <p className="font-sans text-xs text-muted mb-3">
                  {cert.institution}
                </p>

                {/* Year */}
                <span className="font-mono text-[11px] text-accent-cyan mt-auto bg-surface-soft px-2.5 py-0.5 rounded-full border border-hairline/60">
                  {cert.year}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
