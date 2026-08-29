"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    // Use gsap.quickTo with soft expo deceleration for fluid liquid trail
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.38, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.38, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const badgeText = cursorTarget.getAttribute("data-cursor");
        if (!badgeText || badgeText === "undefined" || badgeText.trim() === "" || badgeText === "null") {
          textEl.textContent = "";
          gsap.to(cursor, {
            width: 0,
            height: 0,
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: "cubic-bezier(0.19, 1, 0.22, 1)",
          });
          gsap.to(textEl, { opacity: 0, duration: 0.15 });
          return;
        }

        textEl.textContent = badgeText;
        gsap.to(cursor, {
          width: 88,
          height: 88,
          backgroundColor: "#141414",
          color: "#f4f3ef",
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        });
        gsap.to(textEl, { opacity: 1, duration: 0.25 });
      } else {
        textEl.textContent = "";
        gsap.to(cursor, {
          width: 0,
          height: 0,
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        });
        gsap.to(textEl, { opacity: 0, duration: 0.15 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:flex opacity-0"
      style={{ width: 0, height: 0 }}
      aria-hidden="true"
    >
      <span
        ref={textRef}
        className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#f4f3ef] px-1.5 opacity-0 text-center select-none"
      />
    </div>
  );
}
