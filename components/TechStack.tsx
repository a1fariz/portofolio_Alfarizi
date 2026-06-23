"use client";

import { motion } from "framer-motion";
import { techCategories, softSkills } from "@/data/techstack";
import ScrollReveal from "./ScrollReveal";

export default function TechStack() {
  return (
    <section className="py-section bg-surface-soft">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-lg text-ink text-center mb-4">
            Tech Stack
          </h2>
          <p className="font-sans text-base text-muted text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I work with across the full stack.
          </p>
        </ScrollReveal>

        {/* Category rows */}
        <div className="space-y-10 mb-16">
          {techCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.05}>
              <div>
                <h3 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className="badge-pill cursor-default transition-transform duration-200 hover:-translate-y-0.5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: itemIndex * 0.03,
                      }}
                      title={item}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Soft Skills */}
        <ScrollReveal>
          <div className="border-t border-hairline pt-10">
            <h3 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center bg-primary/10 text-primary font-sans text-sm font-medium px-4 py-2 rounded-pill"
                >
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
