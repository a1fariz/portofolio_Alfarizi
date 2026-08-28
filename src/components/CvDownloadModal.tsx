"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Check, Globe } from "lucide-react";
import { cvVariants, CvLanguage, CvVariant } from "@/data/cv";
import { sounds } from "@/lib/sound";

export default function CvDownloadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedVariant, setSelectedVariant] = useState<string>("general");
  const [selectedLang, setSelectedLang] = useState<CvLanguage>("en");
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const currentVariant = cvVariants.find((v) => v.id === selectedVariant) || cvVariants[0];
  const downloadPath = currentVariant.paths[selectedLang];

  const handleDownload = () => {
    sounds.playChirp();
    setDownloading(true);
    const link = document.createElement("a");
    link.href = downloadPath;
    link.download = downloadPath.split("/").pop() || "AlfaRizi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-12">
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-[#f4f3ef] border border-black/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#141414] z-10 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 hover:bg-black text-black hover:text-white transition-colors"
            aria-label="Close CV Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Curriculum Vitae
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-black uppercase">
              Select Resume Track
            </h3>
            <p className="text-sm text-neutral-600 font-light">
              Tailored CV versions highlighting specific engineering capabilities.
            </p>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-black/5">
            <span className="font-mono text-xs text-neutral-500 uppercase flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-black" />
              Document Language
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setSelectedLang("en");
                  sounds.playClick();
                }}
                className={`px-3 py-1 rounded-xl font-mono text-xs uppercase font-bold transition-all ${
                  selectedLang === "en"
                    ? "bg-[#141414] text-[#f4f3ef]"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => {
                  setSelectedLang("id");
                  sounds.playClick();
                }}
                className={`px-3 py-1 rounded-xl font-mono text-xs uppercase font-bold transition-all ${
                  selectedLang === "id"
                    ? "bg-[#141414] text-[#f4f3ef]"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                Indonesia (ID)
              </button>
            </div>
          </div>

          {/* Track Selection Cards */}
          <div className="space-y-3">
            {cvVariants.map((variant) => {
              const isSelected = selectedVariant === variant.id;
              return (
                <div
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant.id);
                    sounds.playClick();
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-white border-black shadow-md"
                      : "bg-white/60 border-black/5 hover:border-black/20"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-black">
                        {variant.label} Track
                      </span>
                      {isSelected && (
                        <span className="px-2 py-0.5 rounded-full bg-black text-white font-mono text-[9px] uppercase font-bold">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-600 font-light">
                      {variant.description}
                    </p>
                  </div>

                  <div className="p-1 rounded-full border border-black/10 text-neutral-400">
                    <Check className={`w-4 h-4 ${isSelected ? "text-black opacity-100" : "opacity-0"}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Download Action Bar */}
          <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-neutral-500">
              PDF Format · Verified 2026
            </span>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-6 py-3 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? "Downloading..." : "Download Selected CV"}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
