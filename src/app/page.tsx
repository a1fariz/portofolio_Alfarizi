"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import WebGLParticleField from "@/components/WebGLParticleField";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveProjectIndex from "@/components/InteractiveProjectIndex";
import ScrollPinnedCaseStudy from "@/components/ScrollPinnedCaseStudy";
import PerformanceBenchmarkDiff from "@/components/PerformanceBenchmarkDiff";
import SystemPayloadInspector from "@/components/SystemPayloadInspector";
import ServicesSection from "@/components/ServicesSection";
import RecognitionAndOfficesSection from "@/components/RecognitionAndOfficesSection";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import CvDownloadModal from "@/components/CvDownloadModal";
import CinematicPreloader from "@/components/CinematicPreloader";
import Footer from "@/components/Footer";
import { RealProject } from "@/data/realPortfolio";
import { sounds } from "@/lib/sound";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<RealProject | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

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
      <WebGLParticleField />

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
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenInquiry={(projectName) =>
            handleOpenContact(`Project Inquiry: ${projectName}`)
          }
        />

        {/* Multi-Track Resume CV Selector Modal */}
        <CvDownloadModal
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
        />

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => {
            setIsContactOpen(false);
            setInquiryContext("");
          }}
          initialProject={inquiryContext}
        />
      </main>
    </SmoothScrollProvider>
  );
}
