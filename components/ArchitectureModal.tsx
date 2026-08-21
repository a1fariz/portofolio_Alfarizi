"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Layers } from "lucide-react";
import { ProjectArchitecture } from "@/lib/types";
import ArchitectureDetails from "./ArchitectureDetails";
import { useModalAccessibility } from "./useModalAccessibility";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  architecture?: ProjectArchitecture;
}

export default function ArchitectureModal({
  isOpen,
  onClose,
  projectTitle,
  architecture,
}: ArchitectureModalProps) {
  const dialogRef = useModalAccessibility(isOpen, onClose);

  if (!architecture) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/20 backdrop-blur-md overflow-y-auto">
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="architecture-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl bg-surface-card border border-border/60 rounded-xl shadow-2xl p-6 md:p-8 relative text-ink my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 min-h-10 min-w-10 inline-flex items-center justify-center p-2 text-muted hover:text-ink transition-colors rounded-full hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                data-autofocus
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-glow-sm">
                <Layers size={20} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase font-medium text-accent-cyan tracking-wider">
                  System Architecture
                </span>
                <h3 id="architecture-modal-title" className="font-heading text-title-md md:text-title-lg text-ink font-semibold">
                  {projectTitle}
                </h3>
              </div>
            </div>

            {/* Summary + Flow + Modules (shared) */}
            <ArchitectureDetails architecture={architecture} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
