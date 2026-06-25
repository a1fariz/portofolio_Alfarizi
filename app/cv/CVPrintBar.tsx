"use client";

import { Printer, Languages, ArrowLeft } from "lucide-react";

interface CVPrintBarProps {
  lang: "en" | "id";
}

export default function CVPrintBar({ lang }: CVPrintBarProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-print-bar">
      <button
        onClick={handlePrint}
        className="cv-print-btn cv-print-btn-primary"
      >
        <Printer size={14} />
        <span>{lang === "id" ? "Cetak / Simpan PDF" : "Print / Save as PDF"}</span>
      </button>
      <a
        href={lang === "id" ? "/cv/en" : "/cv/id"}
        className="cv-print-btn cv-print-btn-secondary"
      >
        <Languages size={14} />
        <span>{lang === "id" ? "English Version" : "Versi Indonesia"}</span>
      </a>
      <a href="/" className="cv-print-btn cv-print-btn-secondary">
        <ArrowLeft size={14} />
        <span>{lang === "id" ? "Kembali ke Portofolio" : "Back to Portfolio"}</span>
      </a>
    </div>
  );
}
