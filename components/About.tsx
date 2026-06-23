"use client";

import { Mail, Download, MapPin, Globe, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-section bg-canvas">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="font-serif text-display-lg text-ink text-center mb-16">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          {/* Avatar Side */}
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Avatar circle */}
              <div className="w-40 h-40 rounded-full bg-surface-card flex items-center justify-center">
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
                <h3 className="font-serif text-display-md text-ink mb-2">
                  Alfa Rizi
                </h3>
                <p className="font-sans text-title-lg text-body-strong">
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

              {/* Education */}
              <div className="bg-surface-card rounded-lg p-6">
                <h4 className="font-sans text-xs font-medium text-muted uppercase tracking-[1.5px] mb-3">
                  Education
                </h4>
                <p className="font-sans text-base text-body-strong font-medium">
                  Associate Degree in Informatics Management
                </p>
                <p className="font-sans text-sm text-muted">
                  Universitas Nasional PASIM, Bandung
                </p>
                <p className="font-sans text-sm text-muted">
                  Sept 2024 – May 2027 (expected) · GPA: 3.6/4.0
                </p>
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
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/cv/AlfaRizi_CV_English.pdf"
                  download
                  className="btn-primary gap-2"
                >
                  <Download size={16} />
                  Download CV
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
                  href="https://linkedin.com/in/alfa-rizi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:alfarizi.developer@gmail.com"
                  className="btn-secondary gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
