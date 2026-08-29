"use client";

import { useState, useEffect } from "react";
import MagneticButton from "@/components/MagneticButton";
import { Menu, X, ArrowUpRight, Terminal as TerminalIcon, FileText, Volume2, VolumeX } from "lucide-react";
import { sounds } from "@/lib/sound";

export default function Header({
  onOpenContact,
  onOpenCV,
}: {
  onOpenContact: () => void;
  onOpenCV: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sounds.getMuted());
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home,", href: "#home" },
    { label: "Projects,", href: "#projects" },
    { label: "Capabilities,", href: "#services" },
    { label: "Credentials,", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    sounds.playClick();
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 90; // account for fixed header height
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#f4f3ef]/90 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Brand (Alfa Rizi) */}
          <a
            href="#"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-2 font-mono text-sm tracking-tight text-[#141414] uppercase group"
            data-cursor="TOP"
          >
            <span className="w-2 h-2 rounded-full bg-[#141414] group-hover:scale-125 transition-transform" />
            <span className="font-bold">Alfa Rizi</span>
            <span className="text-neutral-500 hidden sm:inline">/ Software Engineer</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-neutral-600">
            {links.map((link) => (
              <MagneticButton
                key={link.label}
                href={link.href}
                onClick={(e: any) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 hover:text-black transition-colors"
              >
                <span>{link.label}</span>
              </MagneticButton>
            ))}
          </nav>

          {/* Action CTAs: CV, Audio Toggle, and Contact */}
          <div className="flex items-center gap-2.5">
            {/* Resume CV Modal Trigger */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenCV();
              }}
              data-cursor="RESUME"
              className="px-3.5 py-2 rounded-full border border-black/10 hover:border-black bg-white hover:bg-black hover:text-white transition-all font-mono text-xs flex items-center gap-1.5 shadow-sm"
              title="Download CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume CV</span>
            </button>

            {/* Audio Feedback Toggle */}
            <button
              onClick={() => {
                const muted = sounds.toggleMute();
                setIsMuted(muted);
              }}
              className="p-2 rounded-full border border-black/10 hover:border-black bg-white text-neutral-600 hover:text-black transition-all shadow-sm"
              title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <MagneticButton
              onClick={() => {
                sounds.playClick();
                onOpenContact();
              }}
              cursorText="CONTACT"
              className="px-4 py-2.5 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileOpen(!mobileOpen);
              }}
              className="md:hidden p-2 text-[#141414]"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#f4f3ef] flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Navigation
            </span>
            <nav className="flex flex-col space-y-4">
              {links.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="text-3xl font-light tracking-tight text-black flex items-center justify-between border-b border-black/5 pb-3"
                >
                  <span>{link.label.replace(",", "")}</span>
                  <span className="font-mono text-xs text-neutral-400">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-black/10">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenCV();
              }}
              className="w-full py-3 bg-white border border-black/10 rounded-full font-mono text-xs uppercase font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume CV</span>
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold rounded-full"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
