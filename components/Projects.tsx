"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-canvas">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-md md:text-display-lg text-ink text-center mb-4">
            Selected Projects
          </h2>
          <p className="font-sans text-base text-muted text-center mb-16 max-w-2xl mx-auto">
            A curated selection of projects showcasing backend architecture,
            AI integration, and full-stack development.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
