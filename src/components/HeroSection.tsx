"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import SpinningBadge from "@/components/SpinningBadge";
import Interactive3DMonolith from "@/components/Interactive3DMonolith";

export default function HeroSection({
  onExploreProjects,
  onOpenContact,
  isReady = true,
}: {
  onExploreProjects: () => void;
  onOpenContact: () => void;
  isReady?: boolean;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReady) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lines = [line1Ref.current, line2Ref.current, line3Ref.current];

    // Initial state
    gsap.set(lines, {
      yPercent: 110,
      rotate: 2,
      filter: "blur(10px)",
      opacity: 0,
    });

    gsap.set(sublineRef.current, { opacity: 0, y: 24 });
    gsap.set(ctaRef.current, { opacity: 0, y: 24 });
    gsap.set(borderRef.current, { scaleX: 0 });

    const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" } });

    tl.to(borderRef.current, {
      scaleX: 1,
      duration: 1.1,
      ease: "power3.inOut",
    })
      .to(
        lines,
        {
          yPercent: 0,
          rotate: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.3,
          stagger: 0.08,
        },
        "-=0.5"
      )
      .to(
        sublineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.7"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.6"
      );

    // Scroll Parallax Fade Out on Hero content
    if (heroRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        y: -60,
        opacity: 0.15,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }

    return () => {
      tl.kill();
    };
  }, [isReady]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5 overflow-hidden"
    >
      {/* Top Kinetic Border */}
      <div
        ref={borderRef}
        className="absolute top-24 left-6 right-6 md:left-12 md:right-12 h-[1px] bg-black/10 kinetic-border"
      />

      {/* Top Metadata Header */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-wrap items-center justify-between gap-4 pt-6 font-mono text-xs text-neutral-600">
        <div className="flex items-center gap-3 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#141414] animate-ping" />
          <span>Alfa Rizi — Junior Backend Developer &amp; Software Engineer</span>
        </div>
        <div className="tracking-widest uppercase text-neutral-500 hidden sm:block">
          JAVA 17 · SPRING BOOT · RAG AI · POSTGRESQL · NEXT.JS
        </div>
      </div>

      {/* Main Editorial Typography Reveal */}
      <div ref={contentRef} className="max-w-[1440px] mx-auto w-full my-auto py-12 space-y-8 will-change-transform">
        <div className="space-y-1">
          {/* Line 1 */}
          <div className="overflow-hidden">
            <div
              ref={line1Ref}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-[6.4rem] font-bold tracking-[-0.04em] leading-[0.92] text-[#141414] uppercase will-change-transform"
            >
              BUILDING QUIET,
            </div>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <div
              ref={line2Ref}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-[6.4rem] font-bold tracking-[-0.04em] leading-[0.92] text-[#141414] uppercase will-change-transform"
            >
              POWERFUL SYSTEMS &amp;
            </div>
          </div>

          {/* Line 3 with Serif Accent */}
          <div className="overflow-hidden">
            <div
              ref={line3Ref}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-[6.4rem] font-bold tracking-[-0.04em] leading-[0.92] uppercase will-change-transform text-[#141414]"
            >
              RELIABLE{" "}
              <span className="font-serif italic font-normal text-neutral-500">
                Architectures.
              </span>
            </div>
          </div>
        </div>

        {/* Subline and Interaction Grid */}
        <div
          ref={sublineRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:items-end pt-4 border-t border-black/10"
        >
          <div className="lg:col-span-7 space-y-4">
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
              I&apos;m Alfa Rizi, focused on reliable APIs, distributed services (Spring Boot),
              asynchronous RAG pipelines (LangChain), and practical AI integrations.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap justify-start lg:justify-end items-center gap-4 sm:gap-6">
            <Interactive3DMonolith />
            <SpinningBadge text="• ALFA RIZI • BACKEND & AI • PORTFOLIO • " size="md" />
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
          <MagneticButton
            onClick={onExploreProjects}
            cursorText="PROJECTS"
            className="px-8 py-4 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center gap-3"
          >
            <span>Explore 7+ Systems</span>
            <Code2 className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            onClick={onOpenContact}
            cursorText="LET'S TALK"
            className="px-8 py-4 rounded-full border border-black/15 text-[#141414] font-mono text-xs uppercase tracking-widest hover:bg-black/5 hover:border-black transition-all flex items-center gap-2"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-black/10 font-mono text-xs text-neutral-600">
        <div>
          <span className="text-[10px] uppercase block text-neutral-500">Core Runtime</span>
          <span className="text-black mt-0.5 block font-medium">Java 17 / Spring · Python</span>
        </div>
        <div>
          <span className="text-[10px] uppercase block text-neutral-500">Motion Layer</span>
          <span className="text-black mt-0.5 block font-medium">GSAP 3 · Three.js · Lenis</span>
        </div>
        <div>
          <span className="text-[10px] uppercase block text-neutral-500">Location</span>
          <span className="text-black mt-0.5 block font-medium">Bandung, ID / Remote</span>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={onExploreProjects}
            className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
