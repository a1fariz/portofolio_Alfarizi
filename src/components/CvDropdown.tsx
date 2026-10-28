"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { CvVariant } from "@/data/cv";

export default function CvDropdown({
  variants,
  variant = "nav",
  align,
}: {
  variants: CvVariant[];
  variant?: "nav" | "hero" | "footer";
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const initialFocus = useRef<"first" | "last">("first");
  const id = useId();
  const menuAlign = align ?? (variant === "nav" ? "right" : "left");

  function closeMenu(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }

  function handleMenuKeys(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Tab") {
      closeMenu(true);
      return;
    }
    const items = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? []);
    const current = items.indexOf(document.activeElement as HTMLAnchorElement);
    let next: number | undefined;
    if (event.key === "ArrowDown") next = (current + 1) % items.length;
    if (event.key === "ArrowUp") next = (current - 1 + items.length) % items.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (event.key.length === 1 && event.key !== " " && !event.ctrlKey && !event.metaKey && !event.altKey) {
      for (let offset = 1; offset <= items.length; offset++) {
        const index = (current + offset) % items.length;
        if (items[index].dataset.label?.toLowerCase().startsWith(event.key.toLowerCase())) {
          next = index;
          break;
        }
      }
    }
    if (next !== undefined && items[next]) {
      event.preventDefault();
      items[next].focus();
    }
  }

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (open) {
      const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]');
      const item = initialFocus.current === "last" ? items?.[items.length - 1] : items?.[0];
      item?.focus();
      document.addEventListener("pointerdown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block text-left normal-case tracking-normal"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenu();
      }}
    >
      <button
        ref={buttonRef}
        id={`${id}-button`}
        type="button"
        onClick={() => {
          initialFocus.current = "first";
          setOpen((prev) => !prev);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            initialFocus.current = event.key === "ArrowUp" ? "last" : "first";
            if (open) {
              const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]');
              (event.key === "ArrowUp" ? items?.[items.length - 1] : items?.[0])?.focus();
            } else setOpen(true);
          }
        }}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? `${id}-menu` : undefined}
        className={
          variant !== "nav"
            ? "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:border-black"
            : "inline-flex items-center gap-1.5 rounded-full bg-[#141414] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#f4f3ef] transition-colors hover:bg-neutral-800"
        }
      >
        <FileText aria-hidden="true" className="h-3.5 w-3.5" />
        <span>{variant === "footer" ? "Choose a CV" : variant === "hero" ? "Resume / CV" : "CV"}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          id={`${id}-menu`}
          role="menu"
          aria-labelledby={`${id}-button`}
          onKeyDown={handleMenuKeys}
          className={`w-72 max-w-[calc(100vw-3rem)] rounded-xl border border-black/10 bg-[#f4f3ef] p-1.5 shadow-xl backdrop-blur-md ${
            variant === "hero"
              ? "relative mt-2"
              : `absolute z-50 ${variant === "footer" ? "bottom-full mb-2" : "top-full mt-2"} ${menuAlign === "left" ? "left-0" : "right-0"}`
          }`}
        >
          <div className="px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            Select CV Track
          </div>
          <div role="group" aria-label="CV tracks" className="max-h-[min(65vh,28rem)] space-y-0.5 overflow-y-auto overscroll-contain">
            {variants.map((cv) => (
              <a
                key={cv.id}
                role="menuitem"
                tabIndex={-1}
                data-label={cv.label}
                href={cv.paths.en}
                target="_blank"
                rel="noreferrer"
                onClick={() => closeMenu(true)}
                className="group flex flex-col rounded-lg px-2.5 py-2 transition-colors hover:bg-black/5 focus-visible:bg-black/5 focus-visible:-outline-offset-2"
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
