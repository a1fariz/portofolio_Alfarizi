"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RealProject } from "@/data/realPortfolio";

export default function ProjectList({ projects }: { projects: RealProject[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "bg-[#141414] font-bold text-[#f4f3ef]"
                  : "border border-black/10 bg-white text-neutral-600 hover:border-black/30 hover:text-black"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] ${
                  isActive ? "text-neutral-400" : "text-neutral-400"
                }`}
              >
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <Link
              href={`/work/${project.id}`}
              className="group block h-full rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-bold tracking-tight">{project.title}</h3>
                  <span className="font-mono text-[10px] uppercase text-neutral-400">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-sm font-light text-neutral-600">
                  {project.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#f4f3ef] px-2.5 py-0.5 font-mono text-[10px] text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
