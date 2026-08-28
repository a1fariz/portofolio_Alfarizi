"use client";

import { motion } from "framer-motion";

export default function SpinningBadge({
  text = "• ARCHITECTURE • DESIGN • PORTFOLIO • 2026 ",
  size = "md",
}: {
  text?: string;
  size?: "sm" | "md" | "lg";
}) {
  const characters = text.split("");
  const sizeMap = {
    sm: { box: "w-24 h-24", radius: 36, font: "text-[8px]", icon: "w-8 h-8 text-[10px]" },
    md: { box: "w-32 h-32", radius: 50, font: "text-[10px]", icon: "w-11 h-11 text-xs" },
    lg: { box: "w-40 h-40", radius: 64, font: "text-[11px]", icon: "w-14 h-14 text-sm" },
  };

  const { box, radius, font, icon } = sizeMap[size];

  return (
    <div className={`relative ${box} flex items-center justify-center pointer-events-none`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {characters.map((char, i) => {
          const angle = (i / characters.length) * 360;
          return (
            <span
              key={i}
              className={`absolute font-mono uppercase font-semibold text-[#121212] tracking-widest origin-center ${font}`}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>

      <div
        className={`${icon} rounded-full bg-[#141414] text-[#f4f3ef] flex items-center justify-center font-mono shadow-sm`}
      >
        ✦
      </div>
    </div>
  );
}
