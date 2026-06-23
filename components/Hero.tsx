"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/a1fariz",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alfa-rizi",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:alfarizi.developer@gmail.com",
    icon: Mail,
  },
];

const badges = [
  { emoji: "📍", text: "West Bandung, Indonesia" },
  { emoji: "🔓", text: "Open to Remote / Jakarta" },
  { emoji: "⏰", text: "Available Immediately" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 grid-pattern overflow-hidden"
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-surface-card/40 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto py-section">
        {/* Headline */}
        <motion.h1
          className="font-serif text-display-xl text-ink mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m Alfa Rizi 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-sans text-title-lg text-body-strong mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Junior Backend Developer · Software Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          className="font-sans text-base text-muted leading-relaxed mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Informatics Management student focused on Backend Development &amp;
          Software Engineering. Experienced in building web applications with
          Java Spring Boot, PostgreSQL, and React, with a strong grasp of
          RESTful APIs, microservices architecture, and application security.
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 bg-surface-card text-ink font-sans text-sm font-medium px-4 py-2 rounded-pill"
            >
              <span>{badge.emoji}</span>
              <span>{badge.text}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/cv/AlfaRizi_CV_English.pdf" download className="btn-secondary gap-2">
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
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
        </motion.div>

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
  );
}
