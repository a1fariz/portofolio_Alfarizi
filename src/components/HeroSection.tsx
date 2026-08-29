"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import SpinningBadge from "@/components/SpinningBadge";
import MagneticButton from "@/components/MagneticButton";

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
  const bannerWrapperRef = useRef<HTMLDivElement>(null);
  const bannerImgRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReady) return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // 1. Initial Load Reveal (Awwwards Masked Slide Up)
    const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" } });

    gsap.set([title1Ref.current, title2Ref.current], { yPercent: 120, opacity: 0 });
    gsap.set(bannerWrapperRef.current, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 });
    gsap.set(descRef.current, { opacity: 0, y: 30 });

    tl.to([title1Ref.current, title2Ref.current], {
      yPercent: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.1,
    })
      .to(
        bannerWrapperRef.current,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
        },
        "-=1.1"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.9"
      );

    // 2. Continuous Scroll Effect (Kononenko Parallax & Mask Wipe on Scroll)
    if (bannerWrapperRef.current && bannerImgRef.current && heroRef.current) {
      gsap.to(bannerImgRef.current, {
        yPercent: 20,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle mask collapse when scrolling out
      gsap.to(bannerWrapperRef.current, {
        y: -40,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
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
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5"
    >
      {/* Top Editorial Header & Spinning Badge */}
      <div className="max-w-[1440px] mx-auto w-full pt-4 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div className="space-y-1">
            <div className="overflow-hidden">
              <h1
                ref={title1Ref}
                className="text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal tracking-[-0.04em] text-[#141414] leading-[0.92]"
              >
                Alfa Rizi
              </h1>
            </div>
            <div className="overflow-hidden">
              <span
                ref={title2Ref}
                className="text-3xl sm:text-6xl md:text-7xl lg:text-[6rem] text-neutral-500 font-light tracking-[-0.04em] block leading-[0.95]"
              >
                Software Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 self-start md:self-end">
            <div className="text-right hidden sm:block font-mono text-xs text-neutral-500 space-y-1">
              <p>Systematic Clarity &amp; Creativity</p>
              <p className="text-black font-semibold">Java 17 · Spring Boot 3 · LangChain RAG</p>
            </div>
            <SpinningBadge text="• ALFA RIZI • SOFTWARE ENGINEER • 2026 • " size="md" />
          </div>
        </div>

        {/* Big Full-Bleed Parallax Banner like Kononenko */}
        <div
          ref={bannerWrapperRef}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-neutral-200 border border-black/5 shadow-md will-change-transform"
        >
          <div ref={bannerImgRef} className="relative w-full h-[120%] -top-[10%] will-change-transform">
            <Image
              src="/images/projects/apexgrid.png"
              alt="Alfa Rizi Showcase Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          </div>

          {/* Banner Meta Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white font-mono text-xs">
            <div className="space-y-1 drop-shadow-md">
              <span className="text-[10px] text-neutral-300 uppercase tracking-widest block">
                Featured Architecture Case
              </span>
              <h2 className="text-base sm:text-xl font-bold uppercase tracking-tight text-white">
                ApexGrid — High-Concurrency Ticket Platform
              </h2>
            </div>

            <button
              onClick={onExploreProjects}
              className="px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#141414] hover:text-white transition-all shadow-lg flex items-center gap-2"
            >
              <span>Explore Cases</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Kononenko 3-Column Editorial Descriptor */}
        <div
          ref={descRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 font-sans text-sm text-neutral-600 border-t border-black/10"
        >
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block">
              01 / Distributed Microservices
            </span>
            <p className="leading-relaxed font-light">
              Spring Cloud Gateway routing, BCrypt JWT authorization filter, PostgreSQL trigger quota locking, and 30-min auto-expiry scheduling.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block">
              02 / AI &amp; Vector Intelligence
            </span>
            <p className="leading-relaxed font-light">
              Asynchronous RAG document pipelines, ChromaDB cosine vector search indexing, and Google Gemini 2.0 Flash prompt orchestration.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block">
              03 / Creative Motion Client
            </span>
            <p className="leading-relaxed font-light">
              Lenis buttery smooth scrolling, GSAP 3 scroll-triggered clip-path unmasking, and WebGL Three.js interactive visual computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
