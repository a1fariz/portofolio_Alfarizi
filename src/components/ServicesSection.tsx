"use client";

import { motion } from "framer-motion";
import { TECH_CAPABILITIES } from "@/data/realPortfolio";
import { ArrowRight, Terminal, Cpu, Sparkles, Layers } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService: (serviceName: string) => void;
}) {
  const icons = [Terminal, Layers, Cpu, Sparkles];

  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5">
      <div className="max-w-[1440px] mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-1">
              05 / Capability &amp; Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#141414] tracking-tight uppercase">
              Full Stack Mastery
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md font-light">
            Architecting production-ready backend microservices, RAG AI vector stores, and fluid WebGL/GSAP client interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_CAPABILITIES.map((cap, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={cap.category}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 rounded-3xl bg-white border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between space-y-8 group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/5 text-black">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-neutral-500 uppercase">
                        Domain 0{index + 1}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase">
                      Engineering Layer
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal text-[#141414] group-hover:opacity-75 transition-opacity uppercase">
                    {cap.category}
                  </h3>

                  <ul className="space-y-2.5 pt-2">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs font-mono text-neutral-600 flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <button
                    onClick={() => onSelectService(cap.category)}
                    className="font-mono text-xs uppercase tracking-wider text-black hover:opacity-60 flex items-center gap-2"
                  >
                    <span>Inquire for stack</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
