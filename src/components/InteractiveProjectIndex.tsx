"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Search, X } from "lucide-react";
import { RealProject, REAL_PROJECTS } from "@/data/realPortfolio";
import { sounds } from "@/lib/sound";

export default function InteractiveProjectIndex({
  onSelectProject,
}: {
  onSelectProject: (project: RealProject) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<RealProject | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = ["All", "Java / Backend", "AI & RAG", "Full-Stack Web", "C Systems"];

  // Hotkey '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName.toLowerCase() !== "input") {
        e.preventDefault();
        sounds.playClick();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = REAL_PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stack.some((tech) => tech.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const floatingCard = floatingCardRef.current;
    if (!floatingCard) return;

    const xTo = gsap.quickTo(floatingCard, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(floatingCard, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX + 24);
      yTo(e.clientY - 140);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnterRow = (project: RealProject, e: React.MouseEvent<HTMLDivElement>) => {
    setActiveProject(project);

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const targetRow = e.currentTarget;
    const titleEl = targetRow.querySelector(".project-title");
    const floatingCard = floatingCardRef.current;

    if (titleEl) {
      gsap.to(titleEl, { x: 20, duration: 0.4, ease: "power3.out" });
    }

    if (floatingCard) {
      gsap.to(floatingCard, {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.45,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      });
    }
  };

  const handleMouseLeaveRow = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetRow = e.currentTarget;
    const titleEl = targetRow.querySelector(".project-title");
    const floatingCard = floatingCardRef.current;

    if (titleEl) {
      gsap.to(titleEl, { x: 0, duration: 0.3, ease: "power2.out" });
    }

    if (floatingCard) {
      gsap.to(floatingCard, {
        opacity: 0,
        scale: 0.95,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-28 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5"
    >
      <div className="max-w-[1440px] mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              01 / Selected Work (alfarizi.my.id)
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141414] uppercase">
              Production Systems
            </h2>
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, keyword (press '/')"
              className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-black/10 text-xs font-mono text-black placeholder-neutral-400 focus:outline-none focus:border-black shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar & Count Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  sounds.playClick();
                }}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#141414] text-[#f4f3ef] font-bold shadow-sm"
                    : "bg-white text-neutral-600 border border-black/5 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-neutral-500">
            Showing {filteredProjects.length} of {REAL_PROJECTS.length} systems
          </span>
        </div>

        {/* Editorial Project Index Table */}
        <div className="divide-y divide-black/10 pt-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.12 }}
                transition={{ duration: 0.85, delay: (index % 4) * 0.07, ease: [0.19, 1, 0.22, 1] }}
                onClick={() => onSelectProject(project)}
                onMouseEnter={(e) => handleMouseEnterRow(project, e as any)}
                onMouseLeave={handleMouseLeaveRow as any}
                data-cursor="VIEW CASE"
                className="group relative py-8 md:py-10 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-500 hover:bg-black/[0.02] px-4 -mx-4 rounded-xl"
              >
                {/* Left Column: Number & Title */}
                <div className="flex items-baseline gap-6 md:gap-10 max-w-3xl">
                  <span className="font-mono text-sm text-neutral-400 group-hover:text-black transition-colors">
                    0{index + 1}.
                  </span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="project-title text-xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#141414] group-hover:translate-x-3 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] uppercase">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/5 border border-black/5 text-neutral-600">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light">
                      {project.subtitle}
                    </p>
                    <p className="text-xs font-mono text-neutral-500 pt-1">
                      ↳ {project.highlight}
                    </p>
                  </div>
                </div>

                {/* Right Column: Tech & Year */}
                <div className="flex items-center gap-6 md:gap-10 self-end md:self-auto font-mono text-xs">
                  <span className="text-neutral-500 hidden lg:inline-block">{project.status}</span>
                  <span className="text-neutral-500">{project.year}</span>
                  <div className="p-3 rounded-full border border-black/10 group-hover:border-black group-hover:bg-[#141414] group-hover:text-[#f4f3ef] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Mobile Visual Fallback */}
                <div className="w-full relative aspect-[16/9] rounded-xl overflow-hidden md:hidden mt-3 border border-black/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-16 text-center space-y-2 font-mono text-xs text-neutral-500">
              <p className="text-base text-black font-sans">No matching systems found</p>
              <p>Try searching for &quot;Spring&quot;, &quot;RAG&quot;, &quot;PostgreSQL&quot;, or reset filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-2 px-4 py-2 rounded-full bg-[#141414] text-[#f4f3ef] text-xs uppercase font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Cursor Trail Preview Card (Desktop Only) */}
      <div
        ref={floatingCardRef}
        style={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
        className="pointer-events-none fixed top-0 left-0 z-40 w-84 h-60 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-2xl hidden md:block will-change-transform"
      >
        {activeProject && (
          <div className="relative w-full h-full">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="340px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] text-white">
              <div className="space-y-0.5">
                <span className="text-neutral-300 block">{activeProject.category}</span>
                <span className="font-bold uppercase text-xs">{activeProject.title}</span>
              </div>
              <span className="px-2 py-1 rounded bg-[#141414] text-[#f4f3ef] font-bold uppercase">
                {activeProject.year}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
