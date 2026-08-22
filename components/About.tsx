"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Download, MapPin, Globe, Briefcase, GraduationCap, BookOpen, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";
import { formalEducation, nonFormalEducation } from "@/data/education";

const CvPreviewModal = dynamic(() => import("./CvPreviewModal"), { ssr: false });

export default function About() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="scroll-mt-24 border-b border-hairline bg-canvas py-24 md:py-32">
        <div className="section-container">
          <ScrollReveal>
             <div className="mb-14 max-w-2xl">
               <span className="ornament-line mb-3 max-w-xs font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-red">
                 04 / Background
               </span>
               <h2 className="mb-5 font-display text-display-sm text-ink md:text-display-md">
                 A backend developer who cares about the whole system.
               </h2>

            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
            {/* Avatar Side */}
            <ScrollReveal direction="left">
              <div className="flex flex-col items-center md:items-start gap-6">
                {/* Avatar photo */}
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-hairline shadow-soft group bg-surface-soft">
                  <Image
                    src="/images/profile.jpg"
                    alt="Alfa Rizi Profile"
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Quick info */}
                <div className="space-y-3 text-xs font-mono text-body">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-accent-cyan" />
                    <span>West Bandung, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={13} className="text-accent-cyan" />
                    <span>Open to Remote / Jakarta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={13} className="text-accent-cyan" />
                    <span>Full-time / Contract / Remote</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Name & Role */}
                <div>
                  <h3 className="font-heading text-title-lg md:text-display-sm text-ink mb-1 font-bold">
                    Alfa Rizi
                  </h3>
                  <p className="font-sans text-base md:text-title-md text-primary font-semibold">
                    Junior Backend Developer · Software Engineer
                  </p>
                </div>

                {/* Bio */}
                <p className="font-sans text-base text-body leading-relaxed">
                  Informatics Management student focused on Backend Development
                  &amp; Software Engineering. Experienced in building web
                  applications with Java Spring Boot, PostgreSQL, and React, with a
                  strong grasp of RESTful APIs, microservices architecture, and
                  application security (JWT, RBAC). Proven experience leading teams
                  in live IT operations.
                </p>

                {/* Formal & Non-Formal Education */}
                <div className="space-y-4">
                  {/* Formal Education Card */}
                  <div className="bg-surface-card rounded-xl p-6 border border-border/40">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap size={18} className="text-primary" />
                      <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px]">
                        Formal Education
                      </h4>
                    </div>
                    <p className="font-sans text-base text-body-strong font-medium">
                      {formalEducation.degree}
                    </p>
                    <p className="font-sans text-sm text-muted mt-1">
                      {formalEducation.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-sm text-muted">
                      <span>{formalEducation.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-primary font-medium">GPA: {formalEducation.gpa}</span>
                    </div>
                  </div>

                  {/* Non-Formal Education Card */}
                  <div className="bg-surface-card rounded-xl p-6 border border-border/40">
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <BookOpen size={18} className="text-primary" />
                        <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px]">
                          Non-Formal Education
                        </h4>
                      </div>
                      <span className="text-xs badge-pill">{nonFormalEducation.period}</span>
                    </div>
                    <p className="font-sans text-base text-body-strong font-medium">
                      {nonFormalEducation.program}
                    </p>
                    <p className="font-sans text-sm text-muted mt-1 mb-4">
                      {nonFormalEducation.institution}
                    </p>

                    {/* Training Modules */}
                    <div className="space-y-3 pt-3 border-t border-border/40">
                      <p className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                        Training Modules & Timeline
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {nonFormalEducation.modules.map((mod, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col p-2.5 rounded-md bg-canvas/60 border border-border/30 text-xs"
                          >
                            <span className="font-medium text-body-strong">
                              {mod.title}
                            </span>
                            <span className="text-muted text-[11px] mt-0.5">
                              {mod.period}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-3">
                    Languages
                  </h4>
                   <div className="flex flex-wrap gap-2">

                    <span className="badge-pill">Indonesian (Native)</span>
                    <span className="badge-pill">English (Professional Working)</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setCvModalOpen(true)}
                    className="btn-primary gap-2"
                  >
                    <Eye size={16} />
                    Preview CV
                  </button>
                  <a
                    href="/cv/AlfaRizi_CV_English.pdf"
                    download="AlfaRizi_CV_English.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <Download size={16} />
                    CV (EN)
                  </a>
                  <a
                    href="/cv/AlfaRizi_CV_Indonesia.pdf"
                    download="AlfaRizi_CV_Indonesia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <Download size={16} />
                    CV (ID)
                  </a>
                  <a
                    href="https://github.com/a1fariz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alfa-rizi-65b483412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary gap-2"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CV Preview Modal */}
      {cvModalOpen && (
        <CvPreviewModal
          isOpen={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
      )}
    </>
  );
}
