"use client";

import { useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { getProjectCover } from "@/lib/projectCover";
import { springSmooth } from "@/lib/motion";

const ArchitectureModal = dynamic(() => import("./ArchitectureModal"), { ssr: false });

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const showThumbnail = project.thumbnail && !imgError;
  const cover = getProjectCover(project.category);
  const CoverIcon = cover.icon;

  return (
    <>
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-hairline bg-surface-card/70 p-6 transition-colors duration-300 hover:border-accent-red/40 hover:bg-surface-card md:p-7 will-change-transform"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        transition={{
          ...springSmooth,
          delay: prefersReducedMotion ? 0 : index * 0.08,
        }}
      >
        {/* Dynamic Spotlight Radial Gradient */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300 -z-0"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
            }}
          />
        )}

        <div className="relative z-10">
          {/* Thumbnail / Designed cover */}
          <Link
            href={`/projects/${project.id}`}
             className="relative -mx-6 -mt-6 mb-6 block aspect-video overflow-hidden rounded-t-[1.5rem] border-b border-hairline bg-surface-dark md:-mx-7 md:-mt-7"

            aria-label={`View ${project.title} details`}
          >
            {showThumbnail ? (
              <Image
                src={project.thumbnail as string}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${cover.gradient}`}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    color: "var(--color-primary, #6366f1)",
                  }}
                />
                <CoverIcon
                  size={44}
                  strokeWidth={1.5}
                  className="relative text-accent-red transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {project.category ?? "Project"}
                </span>
              </div>
            )}
          </Link>

          {/* Status badge & Category */}
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <span className="badge-coral">
              {project.status}
            </span>
            {project.category && (
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider break-words">
                {project.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-heading text-title-md text-ink mb-2.5 leading-snug group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="font-sans text-xs md:text-sm text-body leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Highlight */}
            <p className="mb-5 flex items-start gap-2 font-sans text-xs font-medium leading-5 text-accent-cyan">
             <span className="text-primary font-bold">↳</span> {project.highlight}
           </p>


          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="badge-pill text-[11px]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Architecture Button */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-hairline">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 px-1 font-mono text-sm text-body hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 px-1 font-mono text-sm text-accent-cyan hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
             className="inline-flex min-h-10 items-center gap-1 px-1 font-sans text-sm font-semibold text-ink hover:text-primary transition-colors ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"

          >
            Details
            <ArrowRight size={13} />
          </Link>
          {project.architecture && (
            <button
              onClick={() => setArchModalOpen(true)}
               className="inline-flex min-h-10 items-center gap-1 font-mono text-xs font-medium px-2 py-1 rounded-full bg-primary/15 text-primary hover:bg-primary/25 border border-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"

            >
              <Layers size={11} />
              Architecture
            </button>
          )}
        </div>
      </motion.article>

      {/* Architecture Breakdown Modal */}
      {project.architecture && archModalOpen && (
        <ArchitectureModal
          isOpen={archModalOpen}
          onClose={() => setArchModalOpen(false)}
          projectTitle={project.title}
          architecture={project.architecture}
        />
      )}
    </>
  );
}
