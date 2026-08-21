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
    <section id="projects" className="scroll-mt-24 border-b border-hairline bg-canvas py-24 md:py-32">
      <div className="section-container">
        <ScrollReveal>
           <div className="mb-12 max-w-2xl">
             <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
               01 / Selected work
             </span>
             <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
               Systems built to solve real problems.
             </h2>
             <p className="max-w-xl font-sans text-sm leading-7 text-muted md:text-base">

              A curated selection of software systems showcasing distributed backend architecture,
              AI pipelines, and full-stack applications.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
           <div className="mb-12 flex flex-wrap gap-2 border-y border-hairline py-3">

            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 relative border ${
                    isActive
                     ? "border-primary bg-primary text-on-primary font-semibold"
                     : "border-hairline bg-transparent text-muted hover:border-hairline-strong hover:text-ink"

                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                       className="absolute inset-0 rounded-md bg-primary -z-10"

                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                     <span className={`text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-on-primary/10 text-on-primary" : "bg-surface-soft text-muted"}`}>

                      {count}
                    </span>
                  </span>
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
