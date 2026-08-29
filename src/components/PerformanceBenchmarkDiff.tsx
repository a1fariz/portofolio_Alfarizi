"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, CheckCircle2, ShieldAlert } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function PerformanceBenchmarkDiff() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
    sounds.playHover();
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-1">
              Engineering Optimization Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] uppercase">
              Benchmark Diff Matrix
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-600 max-w-sm">
            Drag the interactive slider to compare conventional ORM querying vs. optimized PostgreSQL triggers &amp; vector search indexes.
          </p>
        </motion.div>

        {/* Comparison Diff Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-white border border-black/10 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {/* Left: Traditional App Layer Logic */}
            <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 bg-neutral-50/50">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold uppercase text-[10px] sm:text-xs">
                  Before: Raw Polling
                </span>
                <span className="text-neutral-400">Baseline</span>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-neutral-800">
                  240ms <span className="text-xs sm:text-sm font-normal text-neutral-500">Latency</span>
                </div>
                <div className="space-y-2 text-xs text-neutral-600 font-mono">
                  <div className="flex items-center gap-2 text-red-600">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Race conditions on high-concurrency ticket reservations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                    <span>Heavy repetitive network round-trips for quota balance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                    <span>Sequential document search with high memory footprint</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Optimized Microservices & Triggers */}
            <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 bg-white">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-black text-white font-bold uppercase text-[10px] sm:text-xs">
                  After: DB Triggers
                </span>
                <span className="text-emerald-600 font-bold">88% Faster</span>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-black flex items-baseline gap-2">
                  28ms <span className="text-xs sm:text-sm font-normal text-neutral-500">Latency</span>
                  <span className="text-xs text-emerald-600 font-bold">(-212ms)</span>
                </div>
                <div className="space-y-2 text-xs text-neutral-700 font-mono">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>PostgreSQL row-level locking with atomic trigger verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>Materialized DB views feeding instant dashboard metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    <span>ChromaDB cosine similarity vector search in &lt; 15ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Range Input Indicator */}
          <div className="p-4 bg-[#141414] text-[#f4f3ef] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Sliders className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Simulated Load Balance Ratio: {sliderPos}% / {100 - sliderPos}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="w-full sm:w-64 accent-white cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
