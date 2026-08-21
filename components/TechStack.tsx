"use client";

import { motion } from "framer-motion";
import { techCategories, softSkills } from "@/data/techstack";
import ScrollReveal from "./ScrollReveal";

export default function TechStack() {
  return (
    <section className="relative border-b border-hairline bg-surface-soft/20 py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
           <div className="mb-14 max-w-2xl">
             <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
               02 / Capabilities
             </span>
             <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
               The tools behind the work.
             </h2>
             <p className="max-w-xl font-sans text-sm leading-7 text-muted md:text-base">

              Tools, frameworks, and core engineering concepts I use to design and deploy software systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {techCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.05}>
               <div className="h-full rounded-[1.5rem] border border-hairline bg-surface-card/60 p-6 transition-colors duration-300 hover:border-accent-red/40">

                <div>
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">

                      {category.name}
                    </h3>
                     <span className="h-px w-8 bg-primary/70" />

                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                         className="cursor-default border border-hairline bg-surface-soft px-2.5 py-1 font-mono text-xs text-body-strong transition-colors duration-200 hover:border-accent-red/40 hover:text-ink"

                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.25,
                          delay: itemIndex * 0.02,
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Soft Skills */}
        <ScrollReveal>
           <div className="rounded-[1.5rem] border border-accent-red/30 bg-accent-red/5 p-6">

            <h3 className="font-mono text-xs font-semibold text-muted uppercase tracking-wider mb-4">
              Core Professional &amp; Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                   className="inline-flex items-center border border-accent-red/30 bg-accent-red/10 px-3 py-1.5 font-sans text-xs font-medium text-accent-red"

                >
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-red" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
