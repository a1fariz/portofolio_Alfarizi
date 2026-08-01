"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, Briefcase, MapPin, Unlock, Clock, Copy, Check, Eye, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import CvPreviewModal from "./CvPreviewModal";
import TerminalModal from "./TerminalModal";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/a1fariz",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alfa-rizi-65b483412",
    icon: LinkedinIcon,
  },
  {
    label: "Jobstreet",
    href: "https://id.jobstreet.com/id/profiles/alfa-rizi-1lxtyz97xN",
    icon: Briefcase,
  },
  {
    label: "Email",
    href: "mailto:alfarizi.developer@gmail.com",
    icon: Mail,
  },
];

const badges = [
  { icon: MapPin, text: "West Bandung, Indonesia" },
  { icon: Unlock, text: "Open to Remote / Jakarta" },
  { icon: Clock, text: "Available Immediately" },
];

const WavingHand = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block w-8 h-8 md:w-10 lg:w-12 ml-2 text-primary animate-bounce-slow align-middle"
    style={{ transformOrigin: "bottom right" }}
  >
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M6 14a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3" />
  </svg>
);

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alfarizi.developer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 grid-pattern overflow-hidden"
      >
        {/* Subtle gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-surface-card/40 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto py-8 md:py-16">
          {/* Pulsating Glowing Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Hire · Full-Time / Remote / Contract</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-ink mb-6">
            Hi, I&apos;m Alfa Rizi <WavingHand />
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-title-md md:text-title-lg text-body-strong mb-4">
            Junior Backend Developer · Software Engineer
          </p>

          {/* Description */}
          <p className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            Informatics Management student focused on Backend Development &amp;
            Software Engineering. Experienced in building web applications with
            Java Spring Boot, PostgreSQL, and React, with a strong grasp of
            RESTful APIs, microservices architecture, and application security.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-2 bg-surface-card text-ink font-sans text-sm font-medium px-4 py-2 rounded-pill"
              >
                <badge.icon size={14} className="text-primary" />
                <span>{badge.text}</span>
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <button
              onClick={() => setCvModalOpen(true)}
              className="btn-secondary gap-2"
            >
              <Eye size={16} />
              Preview CV
            </button>
            <button
              onClick={handleCopyEmail}
              className="btn-secondary gap-2 transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
            <button
              onClick={() => setTerminalOpen(true)}
              className="btn-secondary gap-2 font-mono text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60"
            >
              <Terminal size={16} />
              CLI Shell
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link inline-flex items-center gap-1.5 text-sm"
                aria-label={link.label}
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.a
            href="#projects"
            className="inline-flex flex-col items-center text-muted-soft hover:text-muted transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to projects"
          >
            <span className="text-xs font-sans mb-1">Scroll down</span>
            <ChevronDown size={20} />
          </motion.a>
        </div>
      </section>

      {/* CV Preview Modal */}
      <CvPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
