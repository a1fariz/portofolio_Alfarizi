"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveProjectIndex from "@/components/InteractiveProjectIndex";
import ScrollPinnedCaseStudy from "@/components/ScrollPinnedCaseStudy";
import PerformanceBenchmarkDiff from "@/components/PerformanceBenchmarkDiff";
import SystemPayloadInspector from "@/components/SystemPayloadInspector";
import ServicesSection from "@/components/ServicesSection";
import RecognitionAndOfficesSection from "@/components/RecognitionAndOfficesSection";
import CinematicPreloader from "@/components/CinematicPreloader";
import Footer from "@/components/Footer";
import { RealProject } from "@/data/realPortfolio";
import { sounds } from "@/lib/sound";

const WebGLParticleField = dynamic(() => import("@/components/WebGLParticleField"), { ssr: false });
const ProjectModal = dynamic(() => import("@/components/ProjectModal"), { ssr: false });
const ContactModal = dynamic(() => import("@/components/ContactModal"), { ssr: false });
const CvDownloadModal = dynamic(() => import("@/components/CvDownloadModal"), { ssr: false });

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<RealProject | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState<string>("");
  const [loaded, setLoaded] = useState(false);
  const [showParticleField, setShowParticleField] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches) return;

    const show = () => setShowParticleField(true);
    const idleId = window.requestIdleCallback?.(show, { timeout: 3000 });
    const timeoutId = idleId === undefined ? window.setTimeout(show, 3000) : undefined;

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  const handleOpenContact = (context?: string) => {
    if (context) setInquiryContext(context);
    setIsContactOpen(true);
  };

  const handleExploreProjects = () => {
    sounds.playClick();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      {/* Cinematic Initial Shutter Preloader */}
      {!loaded && <CinematicPreloader onComplete={() => setLoaded(true)} />}

        {/* 3D WebGL Background Particle Shader */}
        {showParticleField && <WebGLParticleField />}

      {/* GSAP QuickTo Magnetic Cursor */}
      <CustomCursor />

      <main className="relative z-10 min-h-screen bg-[#f4f3ef] text-[#141414] selection:bg-[#141414] selection:text-[#f4f3ef]">
        {/* Navigation Bar with Clean CV & Contact triggers */}
        <Header
          onOpenContact={() => handleOpenContact("General Inquiry")}
          onOpenCV={() => setIsCvOpen(true)}
        />

        {/* Step 2: Hero Section & Line-by-line GSAP Reveal */}
        <HeroSection
          onExploreProjects={handleExploreProjects}
          onOpenContact={() => handleOpenContact("Hero Collaboration")}
          isReady={loaded}
        />

        {/* Step 3: Interactive Project Index (Floating Cursor Trail) */}
        <InteractiveProjectIndex
          onSelectProject={(p) => {
            sounds.playClick();
            setSelectedProject(p);
          }}
        />

        {/* Step 4: Scroll-Pinned Case Study Deep Dive */}
        <ScrollPinnedCaseStudy
          onSelectProject={(p) => {
            sounds.playClick();
            setSelectedProject(p);
          }}
        />

        {/* Performance Benchmark Matrix & Optimization Diff */}
        <PerformanceBenchmarkDiff />

        {/* Live API & Payload Sandbox Inspector */}
        <SystemPayloadInspector />

        {/* Step 5: Engineering Stack & Capabilities */}
        <ServicesSection
          onSelectService={(service) => handleOpenContact(`Service: ${service}`)}
        />

        {/* Step 6: Accreditations, Roles & Availability */}
        <RecognitionAndOfficesSection />

        {/* Editorial Footer */}
        <Footer onOpenContact={() => handleOpenContact("Footer Collaboration")} />

        {/* Project Details Lightbox Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenInquiry={(projectName) =>
              handleOpenContact(`Project Inquiry: ${projectName}`)
            }
          />
        )}

        {/* Multi-Track Resume CV Selector Modal */}
        {isCvOpen && <CvDownloadModal isOpen onClose={() => setIsCvOpen(false)} />}

        {/* Contact Modal */}
        {isContactOpen && (
          <ContactModal
            isOpen
            onClose={() => {
              setIsContactOpen(false);
              setInquiryContext("");
            }}
            initialProject={inquiryContext}
          />
        )}
      </main>
    </SmoothScrollProvider>
  );
}
