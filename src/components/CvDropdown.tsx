"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { CvVariant } from "@/data/cv";

export default function CvDropdown({ variants }: { variants: CvVariant[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#141414] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#f4f3ef] transition-colors hover:bg-neutral-800"
      >
        <FileText className="h-3.5 w-3.5" />
        <span>CV</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl border border-black/10 bg-[#f4f3ef] p-1.5 shadow-xl backdrop-blur-md"
        >
          <div className="px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            Select CV Track
          </div>
          <div className="space-y-0.5">
            {variants.map((cv) => (
              <a
                key={cv.id}
                role="menuitem"
                href={cv.paths.en}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="group flex flex-col rounded-lg px-2.5 py-2 transition-colors hover:bg-black/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-neutral-900 group-hover:text-black">
                    {cv.label}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 group-hover:text-neutral-700">
                    PDF ↗
                  </span>
                </div>
                <span className="mt-0.5 line-clamp-1 font-mono text-[11px] text-neutral-500">
                  {cv.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
