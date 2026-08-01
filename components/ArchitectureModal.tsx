"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Layers } from "lucide-react";
import { ProjectArchitecture } from "@/lib/types";
import ArchitectureDetails from "./ArchitectureDetails";

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
  if (!architecture) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl bg-surface-card border border-border/60 rounded-xl shadow-2xl p-6 md:p-8 relative text-ink my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted hover:text-ink transition-colors rounded-full hover:bg-canvas"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Layers size={22} />
              </div>
              <div>
                <span className="text-xs font-sans uppercase font-medium text-primary tracking-wider">
                  System Architecture
                </span>
                <h3 className="font-serif text-title-md md:text-title-lg text-ink">
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
