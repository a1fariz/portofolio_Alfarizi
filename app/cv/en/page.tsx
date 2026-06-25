import type { Metadata } from "next";
import "../cv-styles.css";
import CVPrintBar from "@/app/cv/CVPrintBar";
import {
  Rocket,
  Briefcase,
  Wrench,
  GraduationCap,
  ScrollText,
  Globe,
  Pin,
  Terminal,
  BarChart3,
  Code,
  Cloud,
  MessageSquare,
  Shield,
  Lock,
  Clock,
  Unlock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alfa Rizi — CV (English) | Junior Backend Developer",
  description:
    "Professional CV of Alfa Rizi — Junior Backend Developer & Software Engineer. Java Spring Boot, React, Microservices, PostgreSQL.",
};

export default function CVEnglish() {
  return (
    <div className="cv-page">
      <CVPrintBar lang="en" />
      <div className="cv-print-spacer" />

      <div className="cv-container">
        {/* ===== HEADER ===== */}
        <header className="cv-header">
          <h1>Alfa Rizi</h1>
          <p className="cv-title">
            Junior Backend Developer · Software Engineer
          </p>
          <div className="cv-contact-row">
            <span>West Bandung, West Java, Indonesia</span>
            <span className="separator">·</span>
            <a href="mailto:alfarizi.developer@gmail.com">
              alfarizi.developer@gmail.com
            </a>
            <span className="separator">·</span>
            <a
              href="https://linkedin.com/in/alfa-rizi"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alfa-rizi
            </a>
            <span className="separator">·</span>
            <a
              href="https://github.com/a1fariz"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/a1fariz
            </a>
            <span className="separator">·</span>
            <a
              href="https://id.jobstreet.com/id/profiles/alfa-rizi-1lxtyz97xN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jobstreet
            </a>
          </div>
          <div className="cv-portfolio-badge">
            <Globe size={12} className="inline mr-1" />
            <span>Portfolio: </span>
            <a
              href="https://alfariz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              alfariz.vercel.app
            </a>
          </div>
        </header>

        {/* ===== PROFESSIONAL SUMMARY ===== */}
        <div className="cv-summary">
          Results-driven <strong>Backend Developer</strong> and{" "}
          <strong>Software Engineer</strong> with hands-on experience building{" "}
          <strong>production-grade web applications</strong> using Java Spring
          Boot, React, and PostgreSQL. Designed and deployed{" "}
          <strong>microservices architectures</strong> with JWT authentication,
          role-based access control (RBAC), and CI/CD pipelines. Experienced in{" "}
          <strong>AI/LLM integration</strong> (RAG pipelines, Google Gemini) and{" "}
          <strong>team leadership</strong> in live IT operations. Open to
          full-time, contract, or remote opportunities.
        </div>

        {/* ===== TECHNICAL PROJECTS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Rocket size={14} className="text-primary" />
            <span>Technical Projects</span>
          </h2>

          {/* ApexGrid */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">
                ApexGrid — F1 Race Ticket Booking Platform
              </h3>
              <div className="cv-project-links">
                <a
                  href="https://github.com/a1fariz/ApexGrid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
              </div>
            </div>
            <span className="cv-project-status">In Deployment</span>
            <p className="cv-project-desc">
              Production-ready microservices application with{" "}
              <strong>3 independent Spring Boot services</strong> (API Gateway,
              User Service, Race Service) orchestrated via Spring Cloud Gateway.
              Implemented JWT authentication with RBAC (USER/ADMIN), real-time
              quota management using PostgreSQL triggers, 30-minute auto-expiry
              scheduler, and full Admin Panel with CRUD operations &amp;
              analytics dashboard via database views. Premium React 18 frontend
              with glassmorphism UI and Swagger API documentation.
            </p>
            <p className="cv-project-highlight">
              ✦ Microservices architecture + RBAC + real-time quota system
            </p>
            <div className="cv-tags">
              <span className="cv-tag">Java 17</span>
              <span className="cv-tag">Spring Boot 3.2</span>
              <span className="cv-tag">Spring Cloud Gateway</span>
              <span className="cv-tag">React 18</span>
              <span className="cv-tag">PostgreSQL</span>
              <span className="cv-tag">JWT</span>
              <span className="cv-tag">Docker</span>
            </div>
          </div>

          {/* StudyMate AI */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">
                StudyMate AI — Intelligent RAG-Based Study Assistant
              </h3>
              <div className="cv-project-links">
                <a
                  href="https://github.com/a1fariz/StudyMateAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
              </div>
            </div>
            <span className="cv-project-status">In Deployment</span>
            <p className="cv-project-desc">
              High-performance asynchronous{" "}
              <strong>RAG (Retrieval-Augmented Generation) pipeline</strong> for
              processing textbook PDFs and generating personalized study content.
              Built semantic search index via ChromaDB &amp;
              sentence-transformers, integrated Google Gemini 2.0 Flash for
              automated summaries, quizzes, 3D flip flashcards, and dynamic
              study plans. Features page-specific citations via PyMuPDF, rate
              limiter (60 req/min), JWT authentication with bcrypt, Docker
              Compose, and <strong>CI/CD via GitHub Actions</strong>.
            </p>
            <p className="cv-project-highlight">
              ✦ RAG pipeline + AI orchestration + automated CI/CD
            </p>
            <div className="cv-tags">
              <span className="cv-tag">Python</span>
              <span className="cv-tag">LangChain</span>
              <span className="cv-tag">ChromaDB</span>
              <span className="cv-tag">Gemini 2.0 Flash</span>
              <span className="cv-tag">Docker</span>
              <span className="cv-tag">GitHub Actions</span>
            </div>
          </div>

          {/* Finance Feasibility */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">
                Finance Feasibility — AI-Powered Investment Analysis Platform
              </h3>
              <div className="cv-project-links">
                <a
                  href="https://github.com/a1fariz/finance-feasibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
                <a
                  href="https://finance-feasibility.alfarizi.my.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live Demo
                </a>
              </div>
            </div>
            <span className="cv-project-status">Completed</span>
            <p className="cv-project-desc">
              Full-stack AI-powered web application for conducting financial
              feasibility studies. Automatically calculates critical investment
              metrics (<strong>NPV, IRR, ROI, Payback Period</strong>) and
              integrates with Gemini AI for professional strategic insights.
              Features secure Firebase authentication, PDF export capabilities,
              and Supabase PostgreSQL database managed via Drizzle ORM.
            </p>
            <p className="cv-project-highlight">
              ✦ Automatic NPV/IRR engine + Gemini AI strategic analysis
            </p>
            <div className="cv-tags">
              <span className="cv-tag">React 19</span>
              <span className="cv-tag">Node.js</span>
              <span className="cv-tag">Express</span>
              <span className="cv-tag">PostgreSQL</span>
              <span className="cv-tag">Firebase Auth</span>
              <span className="cv-tag">Gemini AI</span>
            </div>
          </div>

          {/* Finance Management */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">Finance Management System</h3>
              <div className="cv-project-links">
                <a
                  href="https://github.com/a1fariz/financeall_project_java_alfariz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
              </div>
            </div>
            <span className="cv-project-status">Completed</span>
            <p className="cv-project-desc">
              Full-stack finance web application with multi-role authentication
              (BCrypt + Spring Security), complete CRUD operations, real-time
              financial dashboard, normalized PostgreSQL schema, and MVC backend
              with clean REST API endpoints.
            </p>
            <p className="cv-project-highlight">
              ✦ Full-stack MVC + multi-role authentication system
            </p>
            <div className="cv-tags">
              <span className="cv-tag">Java</span>
              <span className="cv-tag">Spring Boot</span>
              <span className="cv-tag">Spring Security</span>
              <span className="cv-tag">Thymeleaf</span>
              <span className="cv-tag">PostgreSQL</span>
            </div>
          </div>

          {/* Universe Interactive */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">
                Universe Interactive Website
              </h3>
              <div className="cv-project-links">
                <a
                  href="https://github.com/a1fariz/projek-website-your-age-other-planet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
                <a
                  href="https://solar-explorer.alfarizi.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live Demo
                </a>
              </div>
            </div>
            <span className="cv-project-status">Completed</span>
            <p className="cv-project-desc">
              Space-themed interactive website with scroll-triggered animations,
              live astronomy data via REST API integration, and persistent
              dark/light mode toggle.
            </p>
            <p className="cv-project-highlight">
              ✦ Interactive animation + third-party API integration
            </p>
            <div className="cv-tags">
              <span className="cv-tag">HTML5</span>
              <span className="cv-tag">CSS3</span>
              <span className="cv-tag">JavaScript</span>
              <span className="cv-tag">Astronomy API</span>
            </div>
          </div>
        </section>

        {/* ===== PROFESSIONAL EXPERIENCE ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Briefcase size={14} className="text-primary" />
            <span>Professional Experience</span>
          </h2>

          <div className="cv-experience">
            <div className="cv-exp-header">
              <h3 className="cv-exp-role">
                Lead Intern — IT &amp; Business Operations
              </h3>
              <span className="cv-exp-period">2025 – Present</span>
            </div>
            <p className="cv-exp-company">
              PT Resik Cemerlang (Pasim Group)
            </p>
            <ul className="cv-exp-list">
              <li>
                Directed a <strong>5-person intern team</strong> in live IT
                operations, ensuring SLA compliance and smooth daily workflows
              </li>
              <li>
                Managed SLA ticket handling and weekly laptop maintenance
                including security patching and antivirus updates
              </li>
              <li>
                Quality-checked <strong>thousands of medical device specifications</strong> for
                data accuracy and compliance
              </li>
              <li>
                Delivered weekly operational reports and analytics to{" "}
                <strong>senior management</strong>
              </li>
            </ul>
          </div>

          <div className="cv-experience">
            <div className="cv-exp-header">
              <h3 className="cv-exp-role">Lead Intern — IT Hardware</h3>
              <span className="cv-exp-period">2024</span>
            </div>
            <p className="cv-exp-company">SMP Negeri 2 Batujajar</p>
            <ul className="cv-exp-list">
              <li>
                Managed full hardware maintenance cycle: fault diagnosis,
                component repair, and printer servicing
              </li>
              <li>
                Established a hardware inventory &amp; maintenance log system,
                improving asset tracking
              </li>
              <li>
                <strong>Reduced repeat-fault response time</strong>{" "}
                significantly through systematic troubleshooting processes
              </li>
            </ul>
          </div>
        </section>

        {/* ===== TECHNICAL SKILLS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Wrench size={14} className="text-primary" />
            <span>Technical Skills</span>
          </h2>
          <div className="cv-skills-grid">
            <span className="cv-skill-label">Languages</span>
            <span className="cv-skill-items">
              Java, Python, JavaScript, C, C++, SQL
            </span>

            <span className="cv-skill-label">Backend</span>
            <span className="cv-skill-items">
              Spring Boot, Spring Security, Spring Cloud Gateway, Django,
              Express.js, RESTful APIs, Microservices Architecture
            </span>

            <span className="cv-skill-label">Frontend</span>
            <span className="cv-skill-items">
              React.js (18/19), HTML5, CSS3, TailwindCSS, Bootstrap, Thymeleaf
            </span>

            <span className="cv-skill-label">Databases</span>
            <span className="cv-skill-items">
              PostgreSQL, Supabase, ChromaDB, Relational Schema Design, Drizzle
              ORM
            </span>

            <span className="cv-skill-label">AI / ML</span>
            <span className="cv-skill-items">
              LangChain, Google Gemini API, RAG Pipelines,
              Sentence-Transformers, LLM Integration
            </span>

            <span className="cv-skill-label">DevOps</span>
            <span className="cv-skill-items">
              Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven
            </span>

            <span className="cv-skill-label">Security</span>
            <span className="cv-skill-items">
              JWT Authentication, BCrypt, RBAC, Firebase Auth, Spring Security
            </span>

            <span className="cv-skill-label">Concepts</span>
            <span className="cv-skill-items">
              OOP, Design Patterns, MVC, RESTful API Design, Microservices,
              Agile
            </span>
          </div>
        </section>

        {/* ===== EDUCATION ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <GraduationCap size={14} className="text-primary" />
            <span>Education</span>
          </h2>
          <div className="cv-education-header">
            <h3 className="cv-edu-degree">
              Associate Degree in Informatics Management (D3)
            </h3>
            <span className="cv-edu-period">Sept 2024 – May 2027 (expected)</span>
          </div>
          <p className="cv-edu-school">
            Universitas Nasional PASIM, Bandung
          </p>
          <p className="cv-edu-gpa">GPA: 3.6 / 4.0</p>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <ScrollText size={14} className="text-primary" />
            <span>Certifications</span>
          </h2>
          <div className="cv-cert-grid">
            <div className="cv-cert-item">
              <Terminal size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Python for Everybody Specialization
                </span>
                <br />
                <span className="cv-cert-institution">
                  University of Michigan · 2026
                </span>
              </div>
            </div>
            <div className="cv-cert-item">
              <BarChart3 size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Programming for Data Science
                </span>
                <br />
                <span className="cv-cert-institution">HarvardX · 2025</span>
              </div>
            </div>
            <div className="cv-cert-item">
              <Code size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Certified Entry-Level Python Programmer
                </span>
                <br />
                <span className="cv-cert-institution">HarvardX · 2025</span>
              </div>
            </div>
            <div className="cv-cert-item">
              <Cloud size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Introduction to Cloud Computing
                </span>
                <br />
                <span className="cv-cert-institution">IBM · 2026</span>
              </div>
            </div>
            <div className="cv-cert-item">
              <MessageSquare size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  English Communication Skill
                </span>
                <br />
                <span className="cv-cert-institution">
                  Arizona State University · 2026
                </span>
              </div>
            </div>
            <div className="cv-cert-item">
              <Shield size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Cybersecurity Fundamentals
                </span>
                <br />
                <span className="cv-cert-institution">RIT · 2025</span>
              </div>
            </div>
            <div className="cv-cert-item">
              <Lock size={14} className="text-primary shrink-0 mt-0.5" />
              <div>
                <span className="cv-cert-title">
                  Introduction to Cybersecurity
                </span>
                <br />
                <span className="cv-cert-institution">edX · 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LANGUAGES & SOFT SKILLS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Globe size={14} className="text-primary" />
            <span>Languages &amp; Soft Skills</span>
          </h2>
          <div className="cv-lang-row" style={{ marginBottom: "12px" }}>
            <div className="cv-lang-item">
              <span className="cv-lang-name">Indonesian</span>
              <span className="cv-lang-level">— Native</span>
            </div>
            <div className="cv-lang-item">
              <span className="cv-lang-name">English</span>
              <span className="cv-lang-level">— Professional Working</span>
            </div>
          </div>
          <div className="cv-tags">
            <span className="cv-tag">Team Leadership</span>
            <span className="cv-tag">Problem Solving</span>
            <span className="cv-tag">Effective Communication</span>
            <span className="cv-tag">Adaptability</span>
            <span className="cv-tag">Cross-functional Collaboration</span>
          </div>
        </section>

        {/* ===== AVAILABILITY ===== */}
        <section className="cv-section" style={{ marginBottom: 0 }}>
          <h2 className="cv-section-title">
            <Pin size={14} className="text-primary" />
            <span>Availability</span>
          </h2>
          <div className="cv-tags" style={{ gap: "8px" }}>
            <span
              className="cv-tag inline-flex items-center gap-1.5"
              style={{
                background: "var(--cv-accent-light)",
                color: "var(--cv-accent)",
                fontWeight: 600,
                border: "1px solid var(--cv-accent)",
              }}
            >
              <Clock size={12} />
              <span>Available Immediately</span>
            </span>
            <span
              className="cv-tag inline-flex items-center gap-1.5"
              style={{
                background: "var(--cv-accent-light)",
                color: "var(--cv-accent)",
                fontWeight: 600,
                border: "1px solid var(--cv-accent)",
              }}
            >
              <Unlock size={12} />
              <span>Open to Remote / Jakarta / Bandung</span>
            </span>
            <span
              className="cv-tag inline-flex items-center gap-1.5"
              style={{
                background: "var(--cv-accent-light)",
                color: "var(--cv-accent)",
                fontWeight: 600,
                border: "1px solid var(--cv-accent)",
              }}
            >
              <Briefcase size={12} />
              <span>Full-time / Contract / Part-time</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
