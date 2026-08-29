"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { sounds } from "@/lib/sound";

export default function Footer({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sounds.playChirp();
    navigator.clipboard.writeText("alfarizi.developer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#f4f3ef] border-t border-black/10 text-[#141414] pt-24 pb-12 px-6 md:px-12 font-sans">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Massive Editorial Callout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-black/10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
              06 / Collaboration
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#141414] uppercase leading-none">
              Build the <br />
              <span className="font-serif italic font-normal text-neutral-500">
                Impossible.
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-neutral-600 text-sm max-w-sm font-light leading-relaxed">
              Available for select principal engineering, high-concurrency systems, and creative motion commissions.
            </p>
            <MagneticButton
              onClick={onOpenContact}
              cursorText="BRIEF"
              className="px-8 py-4 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-3 hover:bg-neutral-800 shadow-md"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono">
          <div className="space-y-3">
            <span className="text-neutral-500 uppercase">Navigation Index</span>
            <ul className="space-y-2 text-neutral-600">
              <li><Link href="/#overview" className="hover:text-black transition-colors">01 / Overview</Link></li>
              <li><Link href="/#projects" className="hover:text-black transition-colors">02 / Works Index</Link></li>
              <li><Link href="/#services" className="hover:text-black transition-colors">03 / Engineering Stack</Link></li>
              <li><Link href="/#awards" className="hover:text-black transition-colors">04 / Accreditations</Link></li>
              <li><Link href="/#contact" className="hover:text-black transition-colors">05 / Direct Connect</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-neutral-500 uppercase">Code &amp; Social</span>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="https://github.com/a1fariz" target="_blank" rel="noreferrer" className="hover:text-black flex items-center justify-between"><span>GitHub</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://www.linkedin.com/in/alfa-rizi-65b483412" target="_blank" rel="noreferrer" className="hover:text-black flex items-center justify-between"><span>LinkedIn</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://id.jobstreet.com/id/profiles/alfa-rizi-1lxtyz97xN" target="_blank" rel="noreferrer" className="hover:text-black flex items-center justify-between"><span>JobStreet</span><ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-neutral-500 uppercase">Architectural Stack</span>
            <div className="space-y-1.5 text-neutral-600">
              <p className="text-black font-bold">Java 17 · Spring Boot 3.2</p>
              <p>React 19 · Next.js · Three.js</p>
              <p>ChromaDB · Google Gemini 2.0</p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-neutral-500 uppercase">Contact Dispatch</span>
            <div className="space-y-2">
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 font-mono text-xs text-black font-bold hover:opacity-75 transition-opacity"
              >
                <span>alfarizi.developer@gmail.com</span>
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black" />}
              </button>
              {copied && (
                <span className="block text-[10px] text-emerald-600 font-bold animate-pulse">
                  Copied to clipboard!
                </span>
              )}
              <p className="text-neutral-600">West Bandung, West Java, ID</p>
              <p className="text-[10px] text-neutral-500 pt-1">Response window: &lt; 24h</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <div>© 2026 Alfa Rizi. All systems verified.</div>
          <div>Inspired by Kononenko Architectural Bureau (Awwwards SOTD)</div>
        </div>
      </div>
    </footer>
  );
}
