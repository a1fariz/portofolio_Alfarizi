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
  title: "Alfa Rizi — CV (Indonesia) | Junior Backend Developer",
  description:
    "CV profesional Alfa Rizi — Junior Backend Developer & Software Engineer. Java Spring Boot, React, Microservices, PostgreSQL.",
};

export default function CVIndonesia() {
  return (
    <div className="cv-page">
      <CVPrintBar lang="id" />
      <div className="cv-print-spacer" />

      <div className="cv-container">
        {/* ===== HEADER ===== */}
        <header className="cv-header">
          <h1>Alfa Rizi</h1>
          <p className="cv-title">
            Junior Backend Developer · Software Engineer
          </p>
          <div className="cv-contact-row">
            <span>Bandung Barat, Jawa Barat, Indonesia</span>
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
            <span>Portofolio: </span>
            <a
              href="https://alfariz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              alfariz.vercel.app
            </a>
          </div>
        </header>

        {/* ===== RINGKASAN PROFESIONAL ===== */}
        <div className="cv-summary">
          <strong>Backend Developer</strong> dan{" "}
          <strong>Software Engineer</strong> berorientasi hasil dengan
          pengalaman langsung membangun{" "}
          <strong>aplikasi web production-grade</strong> menggunakan Java Spring
          Boot, React, dan PostgreSQL. Merancang dan men-deploy{" "}
          <strong>arsitektur microservices</strong> dengan autentikasi JWT,
          role-based access control (RBAC), dan pipeline CI/CD. Berpengalaman
          dalam <strong>integrasi AI/LLM</strong> (RAG pipeline, Google Gemini)
          serta <strong>kepemimpinan tim</strong> dalam operasional IT. Terbuka
          untuk kesempatan full-time, kontrak, maupun remote.
        </div>

        {/* ===== PROYEK TEKNIS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Rocket size={14} className="text-primary" />
            <span>Proyek Teknis</span>
          </h2>

          {/* ApexGrid */}
          <div className="cv-project">
            <div className="cv-project-header">
              <h3 className="cv-project-title">
                ApexGrid — Platform Booking Tiket F1
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
            <span className="cv-project-status">Dalam Deployment</span>
            <p className="cv-project-desc">
              Aplikasi microservices production-ready dengan{" "}
              <strong>3 service Spring Boot independen</strong> (API Gateway,
              User Service, Race Service) melalui Spring Cloud Gateway.
              Mengimplementasikan autentikasi JWT dengan RBAC (USER/ADMIN),
              manajemen kuota real-time menggunakan trigger PostgreSQL, scheduler
              auto-expiry 30 menit, dan Admin Panel lengkap dengan operasi CRUD
              &amp; dashboard analitik. Frontend React 18 premium dengan UI
              glassmorphism dan dokumentasi API Swagger.
            </p>
            <p className="cv-project-highlight">
              ✦ Arsitektur Microservices + RBAC + Sistem Kuota Real-time
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
                StudyMate AI — Asisten Belajar Cerdas Berbasis RAG
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
            <span className="cv-project-status">Dalam Deployment</span>
            <p className="cv-project-desc">
              Pipeline{" "}
              <strong>RAG (Retrieval-Augmented Generation) asinkron</strong>{" "}
              berperforma tinggi untuk memproses PDF buku teks dan menghasilkan
              konten belajar yang dipersonalisasi. Membangun indeks pencarian
              semantik via ChromaDB &amp; sentence-transformers, integrasi
              Google Gemini 2.0 Flash untuk ringkasan otomatis, kuis, flashcard
              3D flip, dan rencana belajar dinamis. Dilengkapi sitasi per
              halaman via PyMuPDF, rate limiter (60 req/menit), autentikasi JWT
              dengan bcrypt, Docker Compose, dan{" "}
              <strong>CI/CD via GitHub Actions</strong>.
            </p>
            <p className="cv-project-highlight">
              ✦ Pipeline RAG + Orkestrasi AI + CI/CD Otomatis
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
                Finance Feasibility — Platform Analisis Investasi Berbasis AI
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
            <span className="cv-project-status">Selesai</span>
            <p className="cv-project-desc">
              Aplikasi web full-stack berbasis AI untuk studi kelayakan finansial
              dan analisis investasi. Menghitung metrik investasi kritis secara
              otomatis (<strong>NPV, IRR, ROI, Payback Period</strong>) dan
              terintegrasi dengan Gemini AI untuk insight strategis profesional.
              Dilengkapi autentikasi Firebase, fitur ekspor PDF, dan database
              Supabase PostgreSQL yang dikelola via Drizzle ORM.
            </p>
            <p className="cv-project-highlight">
              ✦ Engine NPV/IRR Otomatis + Analisis Strategis Gemini AI
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
              <h3 className="cv-project-title">
                Sistem Manajemen Keuangan
              </h3>
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
            <span className="cv-project-status">Selesai</span>
            <p className="cv-project-desc">
              Aplikasi web keuangan full-stack dengan autentikasi multi-role
              (BCrypt + Spring Security), operasi CRUD lengkap, dashboard
              keuangan real-time, skema PostgreSQL ternormalisasi, dan backend
              MVC dengan endpoint REST API yang bersih.
            </p>
            <p className="cv-project-highlight">
              ✦ Full-stack MVC + Sistem Autentikasi Multi-role
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
                Website Interaktif Universe
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
            <span className="cv-project-status">Selesai</span>
            <p className="cv-project-desc">
              Website interaktif bertema luar angkasa dengan animasi
              scroll-triggered, data astronomi live via integrasi REST API, dan
              toggle mode gelap/terang yang persisten.
            </p>
            <p className="cv-project-highlight">
              ✦ Animasi Interaktif + Integrasi API Pihak Ketiga
            </p>
            <div className="cv-tags">
              <span className="cv-tag">HTML5</span>
              <span className="cv-tag">CSS3</span>
              <span className="cv-tag">JavaScript</span>
              <span className="cv-tag">Astronomy API</span>
            </div>
          </div>
        </section>

        {/* ===== PENGALAMAN PROFESIONAL ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Briefcase size={14} className="text-primary" />
            <span>Pengalaman Profesional</span>
          </h2>

          <div className="cv-experience">
            <div className="cv-exp-header">
              <h3 className="cv-exp-role">
                Lead Intern — Operasional IT &amp; Bisnis
              </h3>
              <span className="cv-exp-period">2025 – Sekarang</span>
            </div>
            <p className="cv-exp-company">
              PT Resik Cemerlang (Pasim Group)
            </p>
            <ul className="cv-exp-list">
              <li>
                Memimpin <strong>tim 5 orang intern</strong> dalam operasional
                IT langsung, memastikan kepatuhan SLA dan kelancaran workflow
                harian
              </li>
              <li>
                Mengelola penanganan tiket SLA dan pemeliharaan laptop mingguan
                termasuk patching keamanan dan update antivirus
              </li>
              <li>
                Melakukan quality check terhadap{" "}
                <strong>ribuan spesifikasi alat kesehatan</strong> untuk akurasi
                data dan kepatuhan
              </li>
              <li>
                Menyampaikan laporan operasional mingguan dan analitik kepada{" "}
                <strong>manajemen senior</strong>
              </li>
            </ul>
          </div>

          <div className="cv-experience">
            <div className="cv-exp-header">
              <h3 className="cv-exp-role">Lead Intern — Hardware IT</h3>
              <span className="cv-exp-period">2024</span>
            </div>
            <p className="cv-exp-company">SMP Negeri 2 Batujajar</p>
            <ul className="cv-exp-list">
              <li>
                Mengelola siklus pemeliharaan hardware lengkap: diagnosis
                kerusakan, perbaikan komponen, dan servis printer
              </li>
              <li>
                Membangun sistem inventaris hardware &amp; log pemeliharaan,
                meningkatkan pelacakan aset
              </li>
              <li>
                <strong>Mengurangi waktu respons kerusakan berulang</strong>{" "}
                secara signifikan melalui proses troubleshooting sistematis
              </li>
            </ul>
          </div>
        </section>

        {/* ===== KEAHLIAN TEKNIS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Wrench size={14} className="text-primary" />
            <span>Keahlian Teknis</span>
          </h2>
          <div className="cv-skills-grid">
            <span className="cv-skill-label">Bahasa</span>
            <span className="cv-skill-items">
              Java, Python, JavaScript, C, C++, SQL
            </span>

            <span className="cv-skill-label">Backend</span>
            <span className="cv-skill-items">
              Spring Boot, Spring Security, Spring Cloud Gateway, Django,
              Express.js, RESTful APIs, Arsitektur Microservices
            </span>

            <span className="cv-skill-label">Frontend</span>
            <span className="cv-skill-items">
              React.js (18/19), HTML5, CSS3, TailwindCSS, Bootstrap, Thymeleaf
            </span>

            <span className="cv-skill-label">Database</span>
            <span className="cv-skill-items">
              PostgreSQL, Supabase, ChromaDB, Desain Skema Relasional, Drizzle
              ORM
            </span>

            <span className="cv-skill-label">AI / ML</span>
            <span className="cv-skill-items">
              LangChain, Google Gemini API, Pipeline RAG,
              Sentence-Transformers, Integrasi LLM
            </span>

            <span className="cv-skill-label">DevOps</span>
            <span className="cv-skill-items">
              Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven
            </span>

            <span className="cv-skill-label">Keamanan</span>
            <span className="cv-skill-items">
              Autentikasi JWT, BCrypt, RBAC, Firebase Auth, Spring Security
            </span>

            <span className="cv-skill-label">Konsep</span>
            <span className="cv-skill-items">
              OOP, Design Patterns, MVC, Desain RESTful API, Microservices,
              Agile
            </span>
          </div>
        </section>

        {/* ===== PENDIDIKAN ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <GraduationCap size={14} className="text-primary" />
            <span>Pendidikan</span>
          </h2>
          <div className="cv-education-header">
            <h3 className="cv-edu-degree">
              Diploma III (D3) Manajemen Informatika
            </h3>
            <span className="cv-edu-period">
              Sept 2024 – Mei 2027 (perkiraan)
            </span>
          </div>
          <p className="cv-edu-school">
            Universitas Nasional PASIM, Bandung
          </p>
          <p className="cv-edu-gpa">IPK: 3.6 / 4.0</p>
        </section>

        {/* ===== SERTIFIKASI ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <ScrollText size={14} className="text-primary" />
            <span>Sertifikasi</span>
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

        {/* ===== BAHASA & SOFT SKILLS ===== */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            <Globe size={14} className="text-primary" />
            <span>Bahasa &amp; Soft Skills</span>
          </h2>
          <div className="cv-lang-row" style={{ marginBottom: "12px" }}>
            <div className="cv-lang-item">
              <span className="cv-lang-name">Indonesia</span>
              <span className="cv-lang-level">— Native</span>
            </div>
            <div className="cv-lang-item">
              <span className="cv-lang-name">Inggris</span>
              <span className="cv-lang-level">— Professional Working</span>
            </div>
          </div>
          <div className="cv-tags">
            <span className="cv-tag">Kepemimpinan Tim</span>
            <span className="cv-tag">Problem Solving</span>
            <span className="cv-tag">Komunikasi Efektif</span>
            <span className="cv-tag">Adaptabilitas</span>
            <span className="cv-tag">Kolaborasi Lintas Fungsi</span>
          </div>
        </section>

        {/* ===== KETERSEDIAAN ===== */}
        <section className="cv-section" style={{ marginBottom: 0 }}>
          <h2 className="cv-section-title">
            <Pin size={14} className="text-primary" />
            <span>Ketersediaan</span>
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
              <span>Tersedia Segera</span>
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
              <span>Terbuka untuk Remote / Jakarta / Bandung</span>
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
              <span>Full-time / Kontrak / Part-time</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
