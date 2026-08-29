"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Check, Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import { cvVariants, CvLanguage } from "@/data/cv";
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
  const [previewMode, setPreviewMode] = useState(false);

  if (!isOpen) return null;

  const currentVariant = cvVariants.find((v) => v.id === selectedVariant) || cvVariants[0];
  const cvPath = currentVariant.paths[selectedLang];

  const handleDownload = () => {
    sounds.playChirp();
    setDownloading(true);
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = cvPath.split("/").pop() || "AlfaRizi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const handleTogglePreview = () => {
    sounds.playClick();
    setPreviewMode(!previewMode);
  };

  const handleOpenNewTab = () => {
    sounds.playClick();
    window.open(cvPath, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className={`relative w-full ${
            previewMode ? "max-w-5xl" : "max-w-3xl"
          } bg-[#f4f3ef] border border-black/10 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl text-[#141414] z-10 space-y-6 transition-all duration-300`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2.5 rounded-full bg-black/5 hover:bg-black text-black hover:text-white transition-colors z-20"
            aria-label="Close CV Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Profile Header & Info Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pr-10">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-black/10 shadow-sm shrink-0 bg-neutral-200">
                <Image
                  src="/images/profile.jpg"
                  alt="Alfa Rizi"
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                  priority
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                    Curriculum Vitae
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tight">
                  Alfa Rizi
                </h3>
                <p className="text-xs text-neutral-600 font-mono">
                  Software Engineer · Java 17 & Spring Boot · RAG AI
                </p>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white border border-black/5 self-stretch sm:self-auto justify-center">
              <button
                onClick={() => {
                  setSelectedLang("en");
                  sounds.playClick();
                }}
                data-cursor="EN"
                className={`px-3 py-1.5 rounded-xl font-mono text-xs uppercase font-bold transition-all ${
                  selectedLang === "en"
                    ? "bg-[#141414] text-[#f4f3ef] shadow-sm"
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
                data-cursor="ID"
                className={`px-3 py-1.5 rounded-xl font-mono text-xs uppercase font-bold transition-all ${
                  selectedLang === "id"
                    ? "bg-[#141414] text-[#f4f3ef] shadow-sm"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                Indonesia (ID)
              </button>
            </div>
          </div>

          {/* Track Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cvVariants.map((variant) => {
              const isSelected = selectedVariant === variant.id;
              return (
                <div
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant.id);
                    sounds.playClick();
                  }}
                  data-cursor="SELECT"
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-white border-black shadow-md ring-1 ring-black"
                      : "bg-white/60 border-black/5 hover:border-black/20 hover:bg-white"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-black">
                        {variant.label}
                      </span>
                      {isSelected ? (
                        <span className="px-2 py-0.5 rounded-full bg-black text-white font-mono text-[9px] uppercase font-bold">
                          Active
                        </span>
                      ) : (
                        <div className="p-0.5 rounded-full border border-black/10 text-neutral-300">
                          <Check className="w-3.5 h-3.5 opacity-0" />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
                      {variant.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Preview Embed (Toggleable) */}
          {previewMode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 border border-black/10 rounded-2xl p-2 bg-white overflow-hidden"
            >
              <div className="flex items-center justify-between px-2 py-1 font-mono text-xs text-neutral-500">
                <span className="truncate">
                  Preview: {cvPath.split("/").pop() || "CV Preview"}
                </span>
                <button
                  onClick={handleOpenNewTab}
                  data-cursor="EXPAND"
                  className="flex items-center gap-1 text-black hover:opacity-75 font-semibold text-[11px]"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <div className="w-full h-[55vh] min-h-[380px] rounded-xl overflow-hidden bg-neutral-100 border border-black/5">
                <iframe
                  src={`${cvPath}#toolbar=0&navpanes=0`}
                  title="CV Document Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          )}

          {/* Bottom Action Controls */}
          <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <span className="text-neutral-500 hidden sm:inline">
              PDF Format · Verified 2026
            </span>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              {/* Preview Toggle Button */}
              <button
                onClick={handleTogglePreview}
                data-cursor={previewMode ? "HIDE" : "VIEW"}
                className={`px-4 py-2.5 rounded-full border transition-all flex items-center gap-2 font-mono text-xs uppercase font-semibold ${
                  previewMode
                    ? "bg-black text-white border-black"
                    : "bg-white border-black/15 text-black hover:border-black"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{previewMode ? "Hide Preview" : "View CV"}</span>
              </button>

              {/* Direct Download Button */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                data-cursor="DOWNLOAD"
                className="px-5 py-2.5 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading ? "Downloading..." : "Download PDF"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

