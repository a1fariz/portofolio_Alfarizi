"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal as TerminalIcon } from "lucide-react";

const TerminalModal = dynamic(() => import("./TerminalModal"), { ssr: false });

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Organizations", href: "#organizations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
       <a href="#main-content" className="skip-to-content">

        Skip to content
      </a>
       <nav
          className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-canvas/85 px-4 backdrop-blur-xl transition-all duration-300"


        role="navigation"
        aria-label="Main navigation"
      >
         <div className="section-container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#home"
            className="font-heading text-base font-bold text-ink tracking-tight hover:text-primary transition-colors flex items-center gap-2 group"
          >
             <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ink bg-ink font-display text-sm font-semibold text-canvas transition-transform group-hover:rotate-[-6deg]">

              AR
            </div>
            <span className="hidden sm:inline font-semibold">Alfa Rizi</span>
          </a>

          {/* Desktop Nav Links */}
             <ul className="hidden items-center gap-6 md:flex">

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href} className="relative">
                   <a
                     href={link.href}
                     aria-current={isActive ? "true" : undefined}
                     className={`relative block py-2.5 font-sans text-xs font-medium transition-all duration-200 ${

                       isActive
                         ? "text-accent-red font-semibold"
                         : "text-muted hover:text-ink"

                    }`}
                  >
                    {link.label}
                  </a>
                   {isActive && <span className="absolute bottom-0 left-0 right-0 h-px bg-accent-red" />}

                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => setTerminalOpen(true)}
               className="flex items-center gap-1.5 rounded-full border border-accent-red/30 bg-accent-red/5 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-red transition-all hover:border-accent-red/60 hover:bg-accent-red/10"

              title="Open CLI Terminal Mode"
              aria-label="Open CLI Terminal"
            >
              <TerminalIcon size={12} />
              <span>CLI</span>
            </button>
             <a href="#contact" className="btn-primary !min-h-9 !px-4 !py-1.5 !text-xs">

              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTerminalOpen(true)}
               className="flex items-center gap-1 rounded-full border border-accent-red/30 bg-accent-red/5 px-2 py-1 font-mono text-[11px] text-accent-red"

              aria-label="CLI Mode"
            >
              <TerminalIcon size={12} />
              <span>CLI</span>
            </button>
            <button
               className="min-h-10 min-w-10 inline-flex items-center justify-center text-ink p-1.5 rounded-full hover:bg-surface-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
               aria-controls="mobile-navigation"

              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
             id="mobile-navigation"
              className="fixed inset-0 z-40 flex flex-col items-center justify-start overflow-y-auto bg-canvas/95 py-24 backdrop-blur-xl md:hidden"

             role="navigation"
             aria-label="Mobile navigation"

          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-2xl font-semibold transition-colors ${
                      isActive ? "text-primary" : "text-ink hover:text-primary"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="flex flex-col items-center gap-3 mt-6">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setTerminalOpen(true);
                  }}
                   className="btn-secondary gap-2 border-primary/40 font-mono text-primary"

                >
                  <TerminalIcon size={16} />
                  Open Terminal CLI
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal CLI Modal */}
      {terminalOpen && (
        <TerminalModal
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
        />
      )}
    </>
  );
}
