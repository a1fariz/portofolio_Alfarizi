"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

const categories = [
  "All",
  "Java / Backend",
  "AI & RAG",
  "Full-Stack Web",
  "C Systems",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-canvas">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-md md:text-display-lg text-ink text-center mb-4">
            Selected Projects
          </h2>
          <p className="font-sans text-base text-muted text-center mb-10 max-w-2xl mx-auto">
            A curated selection of projects showcasing backend architecture,
            AI integration, and full-stack development.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-sans font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-on-dark font-semibold shadow-sm"
                      : "bg-surface-card text-muted hover:text-ink hover:bg-surface-card/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with Layout Animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
