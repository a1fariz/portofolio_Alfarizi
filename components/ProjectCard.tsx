"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { getProjectCover } from "@/lib/projectCover";
import ArchitectureModal from "./ArchitectureModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showThumbnail = project.thumbnail && !imgError;
  const cover = getProjectCover(project.category);
  const CoverIcon = cover.icon;

  return (
    <>
      <motion.article
        className="group relative bg-surface-dark rounded-lg p-8 transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div>
          {/* Coral accent line at top */}
          <div className="absolute top-0 left-8 right-8 h-0.5 bg-primary" />

          {/* Thumbnail / Designed cover */}
          <Link
            href={`/projects/${project.id}`}
            className="block relative -mx-8 -mt-8 mb-6 aspect-video overflow-hidden rounded-t-lg bg-surface-dark"
            aria-label={`View ${project.title} details`}
          >
            {showThumbnail ? (
              <Image
                src={project.thumbnail as string}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${cover.gradient}`}
              >
                {/* Faint dot-grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                    color: "var(--color-primary, #cc785c)",
                  }}
                />
                <CoverIcon
                  size={44}
                  strokeWidth={1.5}
                  className="relative text-primary transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-wider text-on-dark-soft/70">
                  {project.category ?? "Project"}
                </span>
              </div>
            )}
          </Link>

          {/* Status badge & Category */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="badge-coral inline-block">
              {project.status}
            </span>
            {project.category && (
              <span className="text-[11px] font-mono text-on-dark-soft uppercase tracking-wider">
                {project.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-sans text-title-md text-on-dark mb-3 leading-tight">
            <Link
              href={`/projects/${project.id}`}
              className="hover:text-primary transition-colors"
            >
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-on-dark-soft leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlight */}
          <p className="font-sans text-sm text-primary font-medium mb-5">
            ✦ {project.highlight}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="badge-pill text-[12px]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links & Architecture Button */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-hairline/20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-sm text-primary hover:text-primary-active transition-colors"
          >
            <svg
              className="w-4 h-4"
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
              className="inline-flex items-center gap-1.5 font-sans text-sm text-primary hover:text-primary-active transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1 font-sans text-sm font-medium text-on-dark hover:text-primary transition-colors ml-auto"
          >
            View Details
            <ArrowRight size={14} />
          </Link>
          {project.architecture && (
            <button
              onClick={() => setArchModalOpen(true)}
              className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold px-2.5 py-1 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              <Layers size={13} />
              Architecture
            </button>
          )}
        </div>
      </motion.article>

      {/* Architecture Breakdown Modal */}
      {project.architecture && (
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
