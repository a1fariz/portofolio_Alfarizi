"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { useModalAccessibility } from "./useModalAccessibility";

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvPath?: string;
  cvTitle?: string;
}

export default function CvPreviewModal({
  isOpen,
  onClose,
  cvPath = "/cv/AlfaRizi_CV_English.pdf",
  cvTitle = "Alfa Rizi — CV (English)",
}: CvPreviewModalProps) {
  const dialogRef = useModalAccessibility(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/20 backdrop-blur-md">
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-preview-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-4xl h-[85vh] bg-surface-card border border-border/60 rounded-xl shadow-2xl flex flex-col overflow-hidden text-ink"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-surface-card border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText size={20} className="text-primary" />
                <h3 id="cv-preview-title" className="font-sans text-title-sm md:text-title-md font-semibold text-ink">
                  {cvTitle}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={cvPath}
                  download
                  className="btn-secondary text-xs px-3 py-1.5 gap-1.5"
                >
                  <Download size={14} />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="min-h-10 min-w-10 inline-flex items-center justify-center p-1.5 text-muted hover:text-ink transition-colors rounded-full hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    data-autofocus
                  aria-label="Close CV Preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 bg-canvas relative">
              <iframe
                src={`${cvPath}#toolbar=0`}
                className="w-full h-full border-none"
                title="CV Preview"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
