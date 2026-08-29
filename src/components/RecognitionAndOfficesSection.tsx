"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS, EXPERIENCE_RECORDS, ORGANIZATIONS } from "@/data/realPortfolio";
import { ArrowUpRight, Award, Briefcase, Copy, Check } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function RecognitionAndOfficesSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sounds.playChirp();
    navigator.clipboard.writeText("alfarizi.developer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="awards" className="py-28 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5 space-y-24">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Credentials & Experiences Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Certifications (7+ from alfarizi.my.id) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-black" />
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  03 / Verified Certifications (7+)
                </h3>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">HarvardX · Michigan · IBM</span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-black/5 flex items-start justify-between gap-4 hover:border-black/20 transition-colors shadow-sm"
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-medium text-black block">
                      {cert.title}
                    </span>
                    <p className="font-mono text-xs text-neutral-500">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience & Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-black" />
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                  04 / Career &amp; Leadership
                </h3>
              </div>
              <span className="font-mono text-[10px] text-neutral-500">2024 – Present</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCE_RECORDS.map((exp, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-black/5 space-y-2 hover:border-black/20 transition-colors shadow-sm"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-medium text-black">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-neutral-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-neutral-500">
                    {exp.org}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {exp.desc}
                  </p>
                </div>
              ))}

              {ORGANIZATIONS.map((org, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-black/5 space-y-2 hover:border-black/20 transition-colors shadow-sm"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-medium text-black">
                      {org.role}
                    </h4>
                    <span className="font-mono text-xs text-neutral-400">
                      {org.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-neutral-500">
                    {org.org}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {org.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Global Hubs & Connection */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 pt-8 border-t border-black/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                05 / Direct Dispatch
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#141414] uppercase mt-1">
                Contact &amp; Profiles
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full border border-black/10 bg-white font-mono text-xs text-black hover:bg-[#141414] hover:text-white transition-all shadow-sm flex items-center gap-2"
              >
                <span>alfarizi.developer@gmail.com</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-white border border-black/5 space-y-2 shadow-sm">
              <span className="text-neutral-500 uppercase">Specialization</span>
              <h4 className="text-base font-normal text-black font-sans">
                Backend &amp; AI Systems
              </h4>
              <p className="text-neutral-500">Spring Boot 3 · LangChain · PostgreSQL</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 space-y-2 shadow-sm">
              <span className="text-neutral-500 uppercase">Architecture &amp; Core</span>
              <h4 className="text-base font-normal text-black font-sans">
                Distributed Microservices
              </h4>
              <p className="text-neutral-500">RESTful APIs · JWT Auth · ACID DB</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 space-y-2 shadow-sm">
              <span className="text-neutral-500 uppercase">Location</span>
              <h4 className="text-base font-normal text-black font-sans">
                West Bandung, ID
              </h4>
              <p className="text-neutral-500">Open to Remote / Jakarta</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 space-y-2 shadow-sm">
              <span className="text-neutral-500 uppercase">LinkedIn &amp; GitHub</span>
              <h4 className="text-base font-normal text-black font-sans">
                Alfa Rizi
              </h4>
              <a
                href="https://github.com/a1fariz"
                target="_blank"
                rel="noreferrer"
                className="text-black inline-flex items-center gap-1.5 hover:opacity-75 pt-1 font-bold"
              >
                <span>github.com/a1fariz</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
