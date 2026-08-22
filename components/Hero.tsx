"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Briefcase, Check, Copy, Eye, Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { fadeInUpVariants, springSmooth, springGentle } from "@/lib/motion";

const CvPreviewModal = dynamic(() => import("./CvPreviewModal"), { ssr: false });
const TerminalModal = dynamic(() => import("./TerminalModal"), { ssr: false });

const socialLinks = [
  { label: "GitHub", href: "https://github.com/a1fariz", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfa-rizi-65b483412", icon: LinkedinIcon },
  { label: "Jobstreet", href: "https://id.jobstreet.com/id/profiles/alfa-rizi-1lxtyz97xN", icon: Briefcase },
  { label: "Email", href: "mailto:alfarizi.developer@gmail.com", icon: Mail },
];

const focusAreas = [
  { number: "01", title: "Reliable services", detail: "Secure APIs and clear microservice boundaries." },
  { number: "02", title: "Useful AI", detail: "RAG pipelines that turn data into practical tools." },
  { number: "03", title: "Built for people", detail: "Thoughtful interfaces around complex systems." },
];

const reveal = fadeInUpVariants;

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alfarizi.developer@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section id="home" className="relative scroll-mt-20 overflow-hidden border-b border-hairline bg-canvas pb-20 pt-32 md:pb-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
        <motion.div
          className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent-red/10 blur-[120px]"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={prefersReducedMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08, delayChildren: 0.1 } } }}
            className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24"
          >
            <div className="max-w-4xl">
              <motion.div variants={reveal} className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-red">
                <span className="h-px w-10 bg-accent-red" />
                Digital portfolio · 2026
              </motion.div>

              <motion.h1 variants={reveal} className="font-display text-display-md text-ink md:text-display-lg lg:text-display-xl">
                Building quiet,
                <br />
                <span className="italic text-accent-red">powerful systems.</span>
              </motion.h1>

              <motion.p variants={reveal} className="mt-9 max-w-2xl font-sans text-base leading-8 text-body md:text-lg">
                I&apos;m Alfa Rizi, a junior backend developer and software engineer focused on reliable APIs, distributed services, and practical AI integrations.
              </motion.p>

              <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-3">
                <motion.a href="#projects" className="btn-primary" whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }} transition={springSmooth}>
                  Explore my work <ArrowUpRight size={16} />
                </motion.a>
                <motion.a href="#contact" className="btn-secondary" whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }} transition={springSmooth}>
                  Let&apos;s talk
                </motion.a>
              </motion.div>

              <motion.div variants={reveal} className="mt-6 flex flex-wrap gap-4 text-xs text-muted">
                <button onClick={() => setCvModalOpen(true)} className="inline-flex min-h-10 items-center gap-2 rounded-full px-1 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"><Eye size={14} /> Preview CV</button>
                <button onClick={handleCopyEmail} className="inline-flex min-h-10 items-center gap-2 rounded-full px-1 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red" aria-live="polite">{copied ? <Check size={14} className="text-accent-red" /> : <Copy size={14} />}{copied ? "Email copied" : "Copy email"}</button>
                <button onClick={() => setTerminalOpen(true)} className="inline-flex min-h-10 items-center gap-2 rounded-full px-1 font-mono transition-colors hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"><Terminal size={14} /> Open CLI</button>
              </motion.div>
            </div>

            <motion.div variants={reveal} className="relative">
              <div className="rounded-[2rem] border border-hairline bg-surface-card/80 p-3 shadow-soft backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-hairline-soft bg-gradient-to-br from-surface-soft via-surface-card to-accent-gold/10 p-6 md:p-8">
                  <div className="flex items-end justify-between border-b border-hairline pb-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">A considered approach</p>
                      <p className="mt-3 font-display text-3xl italic text-ink">Form follows function.</p>
                    </div>
                    <span className="font-display text-4xl text-accent-gold/70">✦</span>
                  </div>

                  <div className="relative mt-8 space-y-3">
                    {focusAreas.map((area) => (
                      <div
                        key={area.number}
                        className="relative flex gap-4 rounded-2xl border border-hairline bg-white/55 p-4 transition-colors hover:border-accent-red/40"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-canvas">{area.number}</span>
                        <div><p className="font-heading text-title-sm text-ink">{area.title}</p><p className="mt-1 text-xs leading-5 text-muted">{area.detail}</p></div>
                      </div>
                    ))}
                  </div>

                  <div className="ornament-line mt-8 text-[10px]">Alfa Rizi · Bandung, Indonesia</div>
                  <div className="mt-5 flex flex-wrap gap-2">{['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RAG'].map((skill) => <span key={skill} className="rounded-full border border-hairline bg-white/70 px-2.5 py-1 font-mono text-[10px] text-body-strong">{skill}</span>)}</div>
                </div>
              </div>
              <motion.div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-accent-red/30 bg-accent-red px-4 py-3 text-white shadow-soft sm:block" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}><p className="font-mono text-[10px] uppercase tracking-wider opacity-75">Location</p><p className="mt-1 text-sm font-semibold">Bandung, ID</p></motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hairline pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{['Java', 'Python', 'PostgreSQL', 'Docker', 'React', 'REST APIs'].map((skill) => <span key={skill}>{skill}</span>)}</div>
          <div className="mt-8 flex flex-wrap items-center gap-5">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex min-h-10 items-center gap-2 rounded-full text-xs text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red" aria-label={link.label}><link.icon size={14} /> {link.label}</a>)}</div>
          <a href="#projects" className="mt-14 inline-flex items-center gap-2 font-display text-xl italic text-accent-red transition-transform hover:translate-x-2">See the selected work <ArrowDownRight size={17} /></a>
        </div>
      </section>

      {cvModalOpen && <CvPreviewModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />}
      {terminalOpen && <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />}
    </>
  );
}
