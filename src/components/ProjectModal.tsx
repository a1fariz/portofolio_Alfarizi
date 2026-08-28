"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RealProject } from "@/data/realPortfolio";
import { X, ArrowUpRight, ExternalLink, Cpu, Code2, Maximize2, Minimize2 } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function ProjectModal({
  project,
  onClose,
  onOpenInquiry,
}: {
  project: RealProject | null;
  onClose: () => void;
  onOpenInquiry: (projectName: string) => void;
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#f4f3ef] border border-black/10 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#141414] z-10 space-y-6"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/5 hover:bg-black text-black hover:text-white transition-colors z-20"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-black/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-full bg-black/5 text-black">
                {project.category}
              </span>
              <span className="font-mono text-xs text-neutral-500">
                {project.year} · Production Spec
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-black uppercase">
              {project.title}
            </h2>
            <p className="text-base text-neutral-600 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Tech stack row */}
          <div className="py-2 border-b border-black/10 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-neutral-700 bg-white border border-black/5 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive Lightbox Image Container with Zoom Toggle */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-200 group border border-black/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className={`object-cover transition-transform duration-500 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
              }`}
              onClick={() => {
                sounds.playClick();
                setIsZoomed(!isZoomed);
              }}
            />
            <button
              onClick={() => {
                sounds.playClick();
                setIsZoomed(!isZoomed);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black transition-colors"
              title="Toggle Zoom"
            >
              {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/80 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
              Click image to inspect high-resolution architecture
            </div>
          </div>

          {/* Description & Architecture Flow */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                System Overview
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Architecture Flow Breakdown */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-black/5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Data &amp; Request Flow
              </h4>
              <div className="space-y-2 font-mono text-xs text-neutral-600">
                {project.architecture.flow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-black font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-black/5 font-mono text-xs">
                  <span className="text-neutral-500 block mb-1">Key Specification</span>
                  <span className="text-black font-semibold">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 mt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={`/work/${project.id}`}
                className="px-4 py-2 rounded-full bg-white border border-black/10 hover:border-black text-black font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Full Page View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="px-4 py-2 rounded-full bg-white border border-black/10 text-black font-mono text-xs flex items-center gap-2 hover:bg-neutral-100"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="px-4 py-2 rounded-full bg-white border border-black/10 text-black font-mono text-xs flex items-center gap-2 hover:bg-neutral-100"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Platform</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
                onOpenInquiry(project.title);
              }}
              className="px-6 py-2.5 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-neutral-800"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
