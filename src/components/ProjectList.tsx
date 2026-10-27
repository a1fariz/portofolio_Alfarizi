"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RealProject } from "@/data/realPortfolio";

const SELECTED_IDS = new Set(["catat-uang", "reloop", "apexgrid", "studymate-ai", "arte", "vanguard-ielts"]);
const ROLE_PROJECTS: Record<string, Set<string>> = {
  Backend: new Set(["catat-uang", "reloop", "apexgrid", "finance-management"]),
  "Full Stack": new Set(["reloop", "apexgrid", "finance-feasibility", "finance-management"]),
  Frontend: new Set(["arte", "vanguard-ielts", "renshuu", "universe-interactive"]),
  "AI & Python": new Set(["studymate-ai", "finance-feasibility"]),
  Mobile: new Set(["catat-uang"]),
};

export default function ProjectList({ projects }: { projects: RealProject[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("Featured");

  const categories = useMemo(() => {
    const counts: Record<string, number> = { Featured: projects.filter(p => SELECTED_IDS.has(p.id)).length, All: projects.length };
    for (const [role, ids] of Object.entries(ROLE_PROJECTS)) {
      counts[role] = projects.filter(project => ids.has(project.id)).length;
    }
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Featured") return projects.filter(p => SELECTED_IDS.has(p.id));
    if (activeCategory === "All") return projects;
    return projects.filter((p) => ROLE_PROJECTS[activeCategory]?.has(p.id));
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
              aria-pressed={isActive}
              onClick={() => setActiveCategory(cat.name)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "bg-[#141414] font-bold text-[#f4f3ef]"
                  : "border border-black/10 bg-white text-neutral-600 hover:border-black/30 hover:text-black"
              }`}
            >
              <span>{cat.name === "All" ? "All projects" : cat.name === "Featured" ? "Selected work" : cat.name}</span>
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
          <article key={project.id} className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <Link
              href={`/work/${project.id}`}
              className="group block p-3 transition-colors hover:bg-black/[0.02]"
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
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{project.highlight}</p>
                <p className="mt-2 font-mono text-[11px] text-neutral-500">{project.status}</p>
                {SELECTED_IDS.has(project.id) && <p className="mt-3 border-l-2 border-black/20 pl-3 text-sm font-medium">{project.metrics[0]}</p>}
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
            <div className="mt-auto flex flex-wrap gap-4 border-t border-black/5 px-7 py-4 text-xs font-semibold">
              <Link href={`/work/${project.id}`} className="underline underline-offset-4" aria-label={`Read ${project.title} case study`}>Case study ↗</Link>
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="underline underline-offset-4" aria-label={`${project.title} GitHub repository`}>GitHub ↗</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="underline underline-offset-4" aria-label={`${project.title} live demo`}>Live demo ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
