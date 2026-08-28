"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sounds } from "@/lib/sound";

export default function CinematicPreloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 6;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setProgress(100);
        triggerExit();
      } else {
        setProgress(currentProgress);
      }
    }, 45);

    const triggerExit = () => {
      sounds.playChirp();
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(topCurtainRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }, "-=0.1")
        .to(bottomCurtainRef.current, {
          yPercent: 100,
          duration: 0.9,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }, "<")
        .set(containerRef.current, { display: "none" });
    };

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto flex items-center justify-center font-mono select-none"
    >
      {/* Top Split Shutter */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#141414] border-b border-white/10 will-change-transform"
      />

      {/* Bottom Split Shutter */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#141414] border-t border-white/10 will-change-transform"
      />

      {/* Center Counter */}
      <div
        ref={textRef}
        className="relative z-10 text-center space-y-3 text-[#f4f3ef]"
      >
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f4f3ef] animate-ping" />
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            System Initialization
          </span>
        </div>

        <div className="text-6xl sm:text-8xl font-bold tracking-tighter">
          {progress.toString().padStart(2, "0")}
          <span className="text-2xl font-light text-neutral-500">%</span>
        </div>

        <div className="text-[11px] uppercase tracking-widest text-neutral-500">
          Alfa Rizi · Architecture v2026
        </div>
      </div>
    </div>
  );
}
