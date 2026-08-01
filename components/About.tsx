"use client";

import { useState } from "react";
import { Download, MapPin, Globe, Briefcase, GraduationCap, BookOpen, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";
import { formalEducation, nonFormalEducation } from "@/data/education";
import CvPreviewModal from "./CvPreviewModal";

export default function About() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-section bg-canvas">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-serif text-display-md md:text-display-lg text-ink text-center mb-16">
              About Me
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
            {/* Avatar Side */}
            <ScrollReveal direction="left">
              <div className="flex flex-col items-center md:items-start gap-6">
                {/* Avatar circle */}
                <div className="w-40 h-40 rounded-full bg-surface-card flex items-center justify-center border border-border/50 shadow-inner">
                  <span className="font-serif text-display-md text-ink">AR</span>
                </div>

                {/* Quick info */}
                <div className="space-y-3 text-sm font-sans text-muted">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-primary" />
                    <span>West Bandung, West Java, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-primary" />
                    <span>Open to Remote / Jakarta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-primary" />
                    <span>Part-time / Contract / Full-time</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {/* Name & Role */}
                <div>
                  <h3 className="font-serif text-title-lg md:text-display-md text-ink mb-2">
                    Alfa Rizi
                  </h3>
                  <p className="font-sans text-title-md md:text-title-lg text-body-strong">
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
                  <div className="bg-surface-card rounded-lg p-6 border border-border/40">
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
                  <div className="bg-surface-card rounded-lg p-6 border border-border/40">
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
                  <div className="flex gap-4">
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
      <CvPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </>
  );
}
