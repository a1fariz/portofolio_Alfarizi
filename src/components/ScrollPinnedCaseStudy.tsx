"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { REAL_PROJECTS, RealProject } from "@/data/realPortfolio";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function ScrollPinnedCaseStudy({
  onSelectProject,
}: {
  onSelectProject: (project: RealProject) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const imgWrapper = card.querySelector(".unmask-wrapper");
      const imgInner = card.querySelector(".inner-visual");

      if (imgWrapper && imgInner) {
        gsap.fromTo(
          imgWrapper,
          { clipPath: "inset(100% 0% 0% 0%)", scale: 0.96, opacity: 0.2 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        gsap.fromTo(
          imgInner,
          { scale: 1.25, y: -20 },
          {
            scale: 1.0,
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Pinned Details */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 self-start pt-4"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                02 / Architectural Deep Dive
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] uppercase leading-none">
                System <br />
                <span className="font-serif italic font-normal text-neutral-500">
                  Deconstruction.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Every system is engineered for resilience: Spring Boot 3 microservices with PostgreSQL trigger quotas, asynchronous RAG vectors via ChromaDB, and native zero-dependency clients.
            </p>

            {/* Live Metrics Matrix */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-black/10">
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-neutral-500 block">Production Services</span>
                <span className="text-black text-base font-bold mt-1 block">3+ Services</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-neutral-500 block">Technical Projects</span>
                <span className="text-black text-base font-bold mt-1 block">7+ Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-neutral-500 block">System Concurrency</span>
                <span className="text-black text-base font-bold mt-1 block">ACID Locking</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5">
                <span className="text-neutral-500 block">Certifications</span>
                <span className="text-black text-base font-bold mt-1 block">7+ Verified</span>
              </div>
            </div>

            <div className="pt-4">
              <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest block mb-2">
                Core Stack Arsenal
              </span>
              <div className="flex flex-wrap gap-2">
                {["Java 17", "Spring Boot 3.2", "PostgreSQL", "React 19", "Python", "LangChain", "Docker", "Flyway"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-white border border-black/5 text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Vertically Scrolling Case Visuals */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-20 lg:space-y-24">
            {REAL_PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                onClick={() => onSelectProject(project)}
                data-cursor="CASE STUDY"
                className="group cursor-pointer space-y-5 sm:space-y-6 bg-white p-5 sm:p-8 rounded-3xl border border-black/5 hover:border-black/20 transition-all shadow-sm"
              >
                {/* Header Info */}
                <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
                  <div>
                    <span className="font-mono text-xs text-neutral-500 uppercase">
                      Case 0{idx + 1} — {project.category}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-[#141414] uppercase mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-full border border-black/10 group-hover:border-black group-hover:bg-[#141414] group-hover:text-[#f4f3ef] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Animated Unmask Visual Card */}
                <div className="unmask-wrapper relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-200 border border-black/5 will-change-transform">
                  <div className="inner-visual relative w-full h-full will-change-transform">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                  </div>
                </div>

                {/* Narrative & Flow summary */}
                <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Architectural highlights */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#f4f3ef] border border-black/5 space-y-1.5 sm:space-y-2 font-mono text-xs">
                  <div className="text-neutral-500 uppercase flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-black" />
                    <span>Architecture Execution Pattern</span>
                  </div>
                  <div className="text-neutral-800 text-[11px] sm:text-xs">
                    {project.architecture.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
