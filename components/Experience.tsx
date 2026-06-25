"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-canvas">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-md md:text-display-lg text-ink text-center mb-4">
            Experience
          </h2>
          <p className="font-sans text-base text-muted text-center mb-16 max-w-2xl mx-auto">
            Professional experience in IT operations, team leadership, and
            hardware maintenance.
          </p>
        </ScrollReveal>

        {/* Vertical timeline */}
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
