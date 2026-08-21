"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-hairline bg-canvas py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
              03 / Career journey
            </span>
            <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
              Experience that compounds.
            </h2>
            <p className="max-w-xl font-sans text-sm leading-7 text-muted md:text-base">
              Professional experience in IT operations, technical leadership, and systems maintenance.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
