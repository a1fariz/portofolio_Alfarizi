"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";
import { useModalAccessibility } from "./useModalAccessibility";
import {
  cvVariants,
  defaultCvVariant,
  defaultCvLanguage,
  cvFileName,
  type CvVariant,
  type CvLanguage,
} from "@/data/cv";

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVariant?: CvVariant;
}

export default function CvPreviewModal({
  isOpen,
  onClose,
  initialVariant,
}: CvPreviewModalProps) {
  const [selectedCv, setSelectedCv] = useState<CvVariant>(
    initialVariant ?? defaultCvVariant
  );
  const [language, setLanguage] = useState<CvLanguage>(defaultCvLanguage);
  const dialogRef = useModalAccessibility(isOpen, onClose);

  const activePath = selectedCv.paths[language];

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
            <div className="px-6 py-4 bg-surface-card border-b border-border/40 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText size={20} className="text-primary" />
                  <h3 id="cv-preview-title" className="font-sans text-title-sm md:text-title-md font-semibold text-ink">
                    Alfa Rizi — CV {selectedCv.label} ({language.toUpperCase()})
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={activePath}
                    download={cvFileName(activePath)}
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

              {/* Role Tabs + Language Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div
                  role="tablist"
                  aria-label="CV role selector"
                  className="flex flex-wrap gap-2"
                >
                  {cvVariants.map((variant) => (
                    <button
                      key={variant.id}
                      role="tab"
                      aria-selected={selectedCv.id === variant.id}
                      onClick={() => setSelectedCv(variant)}
                      title={variant.description}
                      className={`min-h-9 px-3.5 rounded-full text-xs font-medium transition-colors border ${
                        selectedCv.id === variant.id
                          ? "bg-primary text-canvas border-primary"
                          : "bg-transparent text-muted border-border hover:text-ink hover:border-muted"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>

                <div
                  role="group"
                  aria-label="CV language selector"
                  className="flex overflow-hidden rounded-full border border-border"
                >
                  {(["en", "id"] as CvLanguage[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      aria-pressed={language === lang}
                      className={`min-h-9 px-4 text-xs font-medium uppercase transition-colors ${
                        language === lang
                          ? "bg-primary text-canvas"
                          : "bg-transparent text-muted hover:text-ink"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`}
                    >
                      {lang === "en" ? "EN" : "ID"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 bg-canvas relative">
              <iframe
                key={activePath}
                src={`${activePath}#toolbar=0`}
                className="w-full h-full border-none"
                title={`CV Preview — ${selectedCv.label} (${language.toUpperCase()})`}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
