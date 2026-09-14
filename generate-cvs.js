const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { cvHtmlTemplate } = require('./generate-cv-template');

const outputDir = path.join(__dirname, 'public', 'cv');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// ---------- Shared contact ----------
const contact = {
  name: 'Alfa Rizi',
  email: 'alfarizi.developer@gmail.com',
  github: 'https://github.com/a1fariz',
  portfolio: 'https://alfarizi.my.id',
};

const locationByLang = {
  en: 'West Bandung, West Java, Indonesia',
  id: 'Bandung Barat, Jawa Barat, Indonesia',
};

const baseLabels = {
  en: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    education: 'Education & Training',
  },
  id: {
    summary: 'Ringkasan Profesional',
    skills: 'Keahlian Teknis',
    experience: 'Pengalaman Kerja & Magang',
    education: 'Pendidikan & Pelatihan',
  },
};

// ---------- Shared experience (per language) ----------
const experience = {
  en: [
    {
      role: 'Lead Intern — IT & Business Operations',
      company: 'PT Resik Cemerlang (Pasim Group)',
      location: 'Bandung, Indonesia',
      period: '2025 – Present',
      bullets: [
        'Directed a 5-person intern team managing day-to-day IT support operations, hardware diagnostics, and workstation SLA ticket compliance.',
        'Enforced OS security patching, software configurations, and antivirus definition updates across corporate laptops.',
        'Validated technical specifications across thousands of medical device asset entries, ensuring database integrity and audit readiness.',
      ],
    },
    {
      role: 'Lead Intern — IT Hardware',
      company: 'SMP Negeri 2 Batujajar',
      location: 'West Bandung, Indonesia',
      period: '2024',
      bullets: [
        'Diagnosed and resolved hardware faults, network cabling issues, and printer servicing across school computer laboratories.',
        'Designed an inventory and maintenance logging workflow that reduced repeat-fault turnaround time significantly.',
      ],
    },
  ],
  id: [
    {
      role: 'Lead Intern — IT & Business Operations',
      company: 'PT Resik Cemerlang (Pasim Group)',
      location: 'Bandung, Indonesia',
      period: '2025 – Sekarang',
      bullets: [
        'Memimpin tim beranggotakan 5 intern dalam operasional dukungan teknis IT, diagnosa hardware, dan kepatuhan SLA tiket pemeliharaan.',
        'Mengelola instalasi patch keamanan OS, konfigurasi software, dan pembaruan definisi antivirus pada puluhan laptop operasional.',
        'Melakukan validasi spesifikasi teknis pada ribuan entri data inventaris alat medis guna menjamin akurasi dan kesiapan audit.',
      ],
    },
    {
      role: 'Lead Intern — IT Hardware',
      company: 'SMP Negeri 2 Batujajar',
      location: 'Bandung Barat, Indonesia',
      period: '2024',
      bullets: [
        'Mendiagnosis kerusakan komponen, perbaikan hardware, instalasi jaringan lokal, dan pemeliharaan printer laboratorium komputer.',
        'Merancang sistem pencatatan log inventaris dan perawatan hardware guna mempercepat penanganan masalah teknis berulang.',
      ],
    },
  ],
};

// ---------- Shared education (per language) ----------
const education = {
  en: [
    {
      institution: 'Universitas Nasional PASIM',
      degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.6 / 4.0',
      location: 'Bandung, Indonesia',
      period: 'Expected May 2027',
      bullets: [
        'PUB Intensive Technical Scholarship (2024 – Present): Logic & C, Data Structures, Relational Databases, Advanced Java Development, and React Development.',
      ],
    },
  ],
  id: [
    {
      institution: 'Universitas Nasional PASIM',
      degree: 'D3 Manajemen Informatika — IPK: 3.6 / 4.0',
      location: 'Bandung, Indonesia',
      period: 'Estimasi Mei 2027',
      bullets: [
        'Penerima Beasiswa Pelatihan Intensif PUB (2024 – Sekarang): Logika Pemrograman, Struktur Data, Database Relasional, Java Lanjutan, dan Pengembangan React.',
      ],
    },
  ],
};

// ---------- Role-specific content ----------
const roleContent = {
  // ===== 1. GENERAL SOFTWARE ENGINEER =====
  general: {
    en: {
      fileName: 'AlfaRizi_CV_EN.pdf',
      targetRole: 'Software Engineer',
      projectsTitle: 'Featured Engineering Projects',
      summary:
        'Software Engineer (Informatics Management D3 student, GPA 3.6/4.0) with proven experience engineering distributed microservices, enterprise modular monoliths, AI/RAG pipelines, and interactive web platforms. Strong technical mastery in Java (Quarkus 3.15, Spring Boot 3.2, Spring Cloud Gateway), TypeScript/JavaScript (Next.js 14/16, React 19), Python (FastAPI, ChromaDB), and PostgreSQL (PL/pgSQL triggers, views, Flyway), with Docker containerization and automated GitHub Actions CI/CD.',
      skills: [
        { category: 'Languages', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Systems', items: 'Quarkus 3.15 LTS, Spring Boot 3.2, Spring Cloud Gateway, FastAPI, Express.js, Double-Entry Escrow' },
        { category: 'Frontend Development', items: 'Next.js 14/16 (App Router), React 18/19, Tailwind CSS v4, Web Speech API, Web Audio API, Canvas API' },
        { category: 'Databases & Cache', items: 'PostgreSQL (Triggers, Views, Functions), Redis 7, Flyway Migrations, Drizzle ORM, ChromaDB' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), ArchUnit, Testcontainers, Git, Linux CLI, OpenAPI' },
      ],
      projects: [
        {
          title: 'ReLoop — Enterprise Circular-Commerce Platform & Escrow Architecture',
          tech: 'Java 17, Quarkus 3.15 LTS, Next.js 14, PostgreSQL 16, Redis 7',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Architected a Quarkus 3.15 modular monolith across 25 bounded contexts with ArchUnit boundary verification and transactional outbox worker.',
            'Engineered a double-entry escrow ledger (DR=CR) and 15-minute anti-hoarding checkout leases with pessimistic locks (SELECT ... FOR UPDATE).',
            'Integrated Next.js 14 frontend with TanStack Query and Redis catalog caching, achieving low latency and zero inventory race conditions.',
          ],
        },
        {
          title: 'ApexGrid — F1 Race Ticket Reservation & Microservices Platform',
          tech: 'Java 17, Spring Boot 3.2, Spring Cloud Gateway, PostgreSQL, React 18, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Architected a 3-service distributed system (Gateway, User, Race) with Spring Cloud Gateway and stateless JWT RBAC security.',
            'Synchronized ticket inventory via PostgreSQL PL/pgSQL triggers with an automated 30-minute reservation expiry worker.',
            'Built an interactive React 18 admin analytics panel with OpenAPI/Swagger docs; containerized with Docker Compose.',
          ],
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Document Knowledge Assistant',
          tech: 'Python 3.12, FastAPI, ChromaDB, Google Gemini 2.0 Flash, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/StudyMateAI',
          bullets: [
            'Built an asynchronous RAG pipeline parsing textbook PDFs via PyMuPDF with ChromaDB vector search and exact page citations.',
            'Orchestrated Gemini 2.0 Flash for automated summaries, quizzes, and 3D flashcards; enforced a 60 req/min token-bucket rate limiter.',
          ],
        },
        {
          title: 'Vanguard IELTS — Academic Preparation & SRS Platform',
          tech: 'React 19, TypeScript, Vite, Tailwind CSS v4, Web Speech API',
          year: '2026',
          demo: 'https://vanguard-ielts.vercel.app',
          github: 'https://github.com/a1fariz/Vanguard-IELTS',
          bullets: [
            'Developed a 4-skill IELTS preparation suite (Listening, Reading, Writing, Speaking) covering CEFR A1 to C1 proficiency levels.',
            'Implemented a SuperMemo-inspired Spaced Repetition (SRS) vocabulary engine and Shadowing Studio with native Web Speech synthesis.',
          ],
        },
      ],
    },
    id: {
      fileName: 'AlfaRizi_CV_ID.pdf',
      targetRole: 'Software Engineer',
      projectsTitle: 'Proyek Rekayasa Perangkat Lunak Unggulan',
      summary:
        'Software Engineer (mahasiswa D3 Manajemen Informatika, IPK 3.6/4.0) berpengalaman membangun arsitektur modular monolith enterprise, microservices terdistribusi, pipeline AI/RAG, dan aplikasi web interaktif. Menguasai secara mendalam Java (Quarkus 3.15, Spring Boot 3.2, Spring Cloud Gateway), TypeScript/JavaScript (Next.js 14/16, React 19), Python (FastAPI, ChromaDB), dan PostgreSQL (PL/pgSQL triggers, views, Flyway), didukung containerisasi Docker dan CI/CD GitHub Actions.',
      skills: [
        { category: 'Bahasa Pemrograman', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Sistem', items: 'Quarkus 3.15 LTS, Spring Boot 3.2, Spring Cloud Gateway, FastAPI, Express.js, Double-Entry Escrow' },
        { category: 'Frontend', items: 'Next.js 14/16 (App Router), React 18/19, Tailwind CSS v4, Web Speech API, Web Audio API, Canvas API' },
        { category: 'Database & Caching', items: 'PostgreSQL (Triggers, Views, Functions), Redis 7, Migrasi Flyway, Drizzle ORM, ChromaDB' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), ArchUnit, Testcontainers, Git, Linux CLI, OpenAPI' },
      ],
      projects: [
        {
          title: 'ReLoop — Platform Circular Commerce Enterprise & Arsitektur Escrow',
          tech: 'Java 17, Quarkus 3.15 LTS, Next.js 14, PostgreSQL 16, Redis 7',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Membangun modular monolith Quarkus 3.15 LTS dengan 25 bounded context, verifikasi arsitektur ArchUnit, dan outbox worker transactional.',
            'Merekayasa buku besar escrow double-entry seimbang (DR=CR) dan sewa checkout anti-hoarding 15 menit berkunci baris (SELECT ... FOR UPDATE).',
            'Mengintegrasikan frontend Next.js 14 dengan TanStack Query dan caching katalog Redis, memastikan latensi rendah tanpa race condition.',
          ],
        },
        {
          title: 'ApexGrid — Platform Pemesanan Tiket Balap F1',
          tech: 'Java 17, Spring Boot 3.2, Spring Cloud Gateway, PostgreSQL, React 18, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Merancang sistem 3 microservices terdistribusi (Gateway, User, Race) dengan Spring Cloud Gateway dan keamanan JWT RBAC.',
            'Mengembangkan sinkronisasi kuota kursi real-time via trigger database PostgreSQL (PL/pgSQL) dan pembatalan otomatis 30 menit.',
            'Membangun panel analitik admin interaktif dengan React 18 & Tailwind CSS; diorkestrasi menggunakan Docker Compose.',
          ],
        },
        {
          title: 'StudyMate AI — Asisten Belajar Dokumen Berbasis RAG Asinkron',
          tech: 'Python 3.12, FastAPI, ChromaDB, Google Gemini 2.0 Flash, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/StudyMateAI',
          bullets: [
            'Membangun pipeline RAG asinkron untuk ekstraksi buku teks PDF via PyMuPDF dengan pencarian vektor ChromaDB dan sitasi halaman akurat.',
            'Mengorkestrasi Gemini 2.0 Flash untuk ringkasan dan flashcard interaktif; mengimplementasikan rate limiter 60 req/menit.',
          ],
        },
        {
          title: 'Vanguard IELTS — Platform Persiapan IELTS Akademik & SRS',
          tech: 'React 19, TypeScript, Vite, Tailwind CSS v4, Web Speech API',
          year: '2026',
          demo: 'https://vanguard-ielts.vercel.app',
          github: 'https://github.com/a1fariz/Vanguard-IELTS',
          bullets: [
            'Mengembangkan aplikasi persiapan 4 skill resmi IELTS (Listening, Reading, Writing, Speaking) mencakup level CEFR A1 hingga C1.',
            'Mengimplementasikan mesin Spaced Repetition (SRS) berbasis SuperMemo serta Shadowing Studio bersintesis Web Speech API native.',
          ],
        },
      ],
    },
  },

  // ===== 2. BACKEND DEVELOPER =====
  backend: {
    en: {
      fileName: 'AlfaRizi_CV_Backend_EN.pdf',
      targetRole: 'Backend Developer',
      projectsTitle: 'Featured Backend Projects',
      summary:
        'Backend Developer specializing in Java microservices, enterprise modular monoliths, concurrent database design, and robust asynchronous pipelines. Extensive hands-on experience with Quarkus 3.15 LTS, Spring Boot 3.2, and Spring Cloud Gateway, backed by deep PostgreSQL mastery (PL/pgSQL triggers, views, Flyway migrations, pessimistic row locking). Proficient in double-entry escrow accounting, Redis caching, Python FastAPI, Docker, and GitHub Actions CI/CD.',
      skills: [
        { category: 'Languages', items: 'Java 17, Python 3.12, SQL, JavaScript (Node.js), C' },
        { category: 'Frameworks & Architectures', items: 'Quarkus 3.15 LTS, Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, FastAPI, Express.js' },
        { category: 'Databases & Persistence', items: 'PostgreSQL, Redis 7, PL/pgSQL (Triggers, Views, Functions), Flyway, Drizzle ORM, Hibernate, ChromaDB' },
        { category: 'Security & Systems Logic', items: 'Double-Entry Accounting Ledger, Pessimistic Row Locking, JWT (Rotation), RBAC, BCrypt, Rate Limiting' },
        { category: 'DevOps & Testing', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), ArchUnit, Testcontainers, JUnit 5, Postman, Linux CLI' },
      ],
      projects: [
        {
          title: 'ReLoop — Enterprise Circular-Commerce Backend & Escrow Engine',
          tech: 'Java 17, Quarkus 3.15 LTS, PostgreSQL 16, Redis 7, Flyway',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Architected an enterprise modular monolith on Quarkus 3.15 LTS across 25 bounded contexts with ArchUnit boundary verification.',
            'Engineered balanced double-entry escrow accounting (DR=CR) for platform commissions, seller payouts, and arbitrated disputes.',
            'Implemented anti-hoarding checkout leases using pessimistic row locking (SELECT ... FOR UPDATE) and PostgreSQL partial unique index.',
            'Built an asynchronous transactional outbox dispatcher (FOR UPDATE SKIP LOCKED) and Redis catalog cache layer.',
          ],
        },
        {
          title: 'ApexGrid — F1 Race Ticket Booking Microservices Backend',
          tech: 'Java 17, Spring Boot 3.2, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Engineered a distributed 3-service backend (API Gateway, User Service, Race Service) with Spring Cloud Gateway and JWT RBAC filters.',
            'Guaranteed zero quota race conditions via PostgreSQL PL/pgSQL triggers and automated 30-minute booking cancellation workers.',
            'Implemented automated PDF ticket generation with embedded QR codes (ZXing & iText) and asynchronous email notification dispatch.',
          ],
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Backend Engine',
          tech: 'Python 3.12, FastAPI, ChromaDB, Sentence-Transformers, PyMuPDF',
          year: '2026',
          github: 'https://github.com/a1fariz/StudyMateAI',
          bullets: [
            'Designed an asynchronous textbook parsing API using FastAPI, PyMuPDF citation extraction, and LangChain splitters.',
            'Implemented semantic vector similarity search via ChromaDB embeddings and connected Google Gemini 2.0 Flash for grounded content.',
            'Built token-bucket rate limiting (60 req/min) and configured GitHub Actions CI/CD workflows executing Ruff and Pytest async suites.',
          ],
        },
        {
          title: 'Finance Management System (FinanceAll) — Spring Boot MVC',
          tech: 'Java 17, Spring Boot 3.2, Spring Security, PostgreSQL, Flyway',
          year: '2026',
          github: 'https://github.com/a1fariz/financeall_project_java_alfariz',
          bullets: [
            'Engineered a personal finance application using Spring Boot 3.2, Spring Data JPA, and Flyway version-controlled migrations.',
            'Configured Spring Security 6 session authentication, BCrypt encryption, and financial calculation engines (4% Rule, debt payoff).',
          ],
        },
      ],
    },
    id: {
      fileName: 'AlfaRizi_CV_Backend_ID.pdf',
      targetRole: 'Backend Developer',
      projectsTitle: 'Proyek Backend Unggulan',
      summary:
        'Backend Developer dengan spesialisasi pada microservices Java, modular monolith enterprise, perancangan database konkruen, dan pipeline asinkron andal. Berpengalaman langsung dengan Quarkus 3.15 LTS, Spring Boot 3.2, dan Spring Cloud Gateway, didukung keahlian mendalam PostgreSQL (PL/pgSQL triggers, views, migrasi Flyway, pessimistic row locking). Menguasai akuntansi escrow double-entry, caching Redis, Python FastAPI, Docker, dan CI/CD GitHub Actions.',
      skills: [
        { category: 'Bahasa Pemrograman', items: 'Java 17, Python 3.12, SQL, JavaScript (Node.js), C' },
        { category: 'Framework & Arsitektur', items: 'Quarkus 3.15 LTS, Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, FastAPI, Express.js' },
        { category: 'Database & Persistensi', items: 'PostgreSQL, Redis 7, PL/pgSQL (Triggers, Views, Functions), Flyway, Drizzle ORM, Hibernate, ChromaDB' },
        { category: 'Keamanan & Logika Sistem', items: 'Buku Besar Double-Entry, Pessimistic Row Locking, JWT (Rotasi Token), RBAC, BCrypt, Rate Limiting' },
        { category: 'DevOps & Pengujian', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), ArchUnit, Testcontainers, JUnit 5, Postman, Linux CLI' },
      ],
      projects: [
        {
          title: 'ReLoop — Backend Circular Commerce Enterprise & Mesin Escrow',
          tech: 'Java 17, Quarkus 3.15 LTS, PostgreSQL 16, Redis 7, Flyway',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Merancang modular monolith enterprise pada Quarkus 3.15 LTS mencakup 25 bounded context dengan pengujian arsitektur ArchUnit.',
            'Merekayasa akuntansi escrow double-entry seimbang (DR=CR) untuk komisi platform, pencairan dana penjual, dan sengketa.',
            'Mengimplementasikan sewa checkout anti-hoarding berkunci pesimis (SELECT ... FOR UPDATE) dan partial unique index PostgreSQL.',
            'Membangun worker dispatcher transactional outbox asinkron (FOR UPDATE SKIP LOCKED) dan caching bertingkat dengan Redis.',
          ],
        },
        {
          title: 'ApexGrid — Backend Microservices Pemesanan Tiket Balap F1',
          tech: 'Java 17, Spring Boot 3.2, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Merekayasa backend 3 service terdistribusi (API Gateway, User Service, Race Service) dengan Spring Cloud Gateway dan filter JWT RBAC.',
            'Menjamin penguncian inventaris kursi bebas race condition melalui trigger database PostgreSQL PL/pgSQL dan scheduler pembatalan 30 menit.',
            'Mengembangkan generator tiket PDF otomatis berkode QR (ZXing & iText) serta pelacakan notifikasi email asinkron.',
          ],
        },
        {
          title: 'StudyMate AI — Mesin Backend RAG Asinkron',
          tech: 'Python 3.12, FastAPI, ChromaDB, Sentence-Transformers, PyMuPDF',
          year: '2026',
          github: 'https://github.com/a1fariz/StudyMateAI',
          bullets: [
            'Merancang REST API asinkron untuk retrieval dokumen menggunakan FastAPI, ekstraksi sitasi PyMuPDF, dan splitter LangChain.',
            'Mengimplementasikan pencarian kesamaan vektor semantik via ChromaDB dan menghubungkan Google Gemini 2.0 Flash.',
            'Membangun rate limiter token-bucket (60 req/menit) dan pipeline CI/CD GitHub Actions dengan pengujian Pytest async.',
          ],
        },
        {
          title: 'Finance Management System (FinanceAll) — Spring Boot MVC',
          tech: 'Java 17, Spring Boot 3.2, Spring Security, PostgreSQL, Flyway',
          year: '2026',
          github: 'https://github.com/a1fariz/financeall_project_java_alfariz',
          bullets: [
            'Membangun aplikasi web keuangan dengan Spring Boot 3.2, Spring Data JPA, dan evolusi skema database versioned via migrasi Flyway.',
            'Mengonfigurasi Spring Security 6, hashing BCrypt, dan algoritma kalkulasi finansial (Aturan FI 4%, jadwal pelunasan hutang).',
          ],
        },
      ],
    },
  },

  // ===== 3. FULL-STACK DEVELOPER =====
  fullstack: {
    en: {
      fileName: 'AlfaRizi_CV_FullStack_EN.pdf',
      targetRole: 'Full-Stack Developer',
      projectsTitle: 'Featured Full-Stack Projects',
      summary:
        'Full-Stack Developer experienced delivering complete, responsive web applications and high-throughput backends. Proven ability pairing modern frontend frameworks (React 19, Next.js 14/16 App Router, Vite, Tailwind CSS v4) with enterprise backend architectures (Quarkus 3.15, Spring Boot 3.2 microservices, Express.js). Strong focus on interactive UI states, Web Audio/Speech APIs, transactional database integrity on PostgreSQL, and automated CI/CD deployment.',
      skills: [
        { category: 'Frontend Development', items: 'Next.js 14/16, React 18/19, TypeScript, Tailwind CSS v4, Web Speech API, Web Audio API, Canvas API' },
        { category: 'Backend Engineering', items: 'Quarkus 3.15 LTS, Java 17, Spring Boot 3.2, Spring Cloud Gateway, Express.js, FastAPI' },
        { category: 'Databases & Caching', items: 'PostgreSQL, Redis 7, PL/pgSQL Triggers & Views, Drizzle ORM, Flyway Migrations, ChromaDB' },
        { category: 'Security & State', items: 'JWT Authentication, Double-Entry Escrow, Anti-Hoarding Leases, RBAC, TanStack Query, BCrypt' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Vite, Postman, Linux CLI, OpenAPI' },
      ],
      projects: [
        {
          title: 'ReLoop — Enterprise Circular Commerce Platform',
          tech: 'Next.js 14, Quarkus 3.15 LTS, TypeScript, PostgreSQL, Redis, TailwindCSS',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Built an end-to-end circular electronics marketplace: Next.js 14 (App Router) client backed by Quarkus 3.15 modular monolith.',
            'Implemented optimistic UI updates via TanStack Query, live checkout lease countdowns, and double-entry escrow dashboard.',
            'Engineered anti-hoarding checkout leases with pessimistic locks and Redis catalog caching for instant page transitions.',
          ],
        },
        {
          title: 'Arte — Classical Art Bureau & Interactive Curatorial Archive',
          tech: 'React 19, Vite, Tailwind CSS, The Met API, Framer Motion, Web Audio API',
          year: '2026',
          demo: 'https://www.arte.my.id/',
          github: 'https://github.com/a1fariz/arte',
          bullets: [
            'Developed an interactive art exhibition SPA with 360° circular orbit gallery, infinite marquee, and dual Curator/Visitor roles.',
            'Engineered accessible exhibition CRUD with focus-trapped dialogs, localStorage persistence, and synthetic Web Audio API feedback.',
            'Integrated dynamic bilingual (EN/ID) translation and optimized viewport rendering with IntersectionObserver.',
          ],
        },
        {
          title: 'Vanguard IELTS — Academic Preparation & SRS Platform',
          tech: 'React 19, TypeScript, Vite, Tailwind CSS v4, Web Speech API, SRS Engine',
          year: '2026',
          demo: 'https://vanguard-ielts.vercel.app',
          github: 'https://github.com/a1fariz/Vanguard-IELTS',
          bullets: [
            'Built a comprehensive 4-skill IELTS preparation web platform covering CEFR A1 to C1 with diagnostic placement drills.',
            'Engineered a SuperMemo-inspired Spaced Repetition (SRS) vocabulary engine, persistent Mistake Bank, and Daily Adventure quests.',
            'Implemented Shadowing Studio leveraging browser-native Web Speech API audio modeling for speech pronunciation practice.',
          ],
        },
        {
          title: 'ApexGrid — F1 Race Ticket Booking Platform',
          tech: 'React 18, Spring Boot Microservices, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Delivered a full-stack platform with 3 Spring Boot microservices, centralized API Gateway, and glassmorphic React 18 frontend.',
            'Built real-time seat reservation with instant quota synchronization via PostgreSQL triggers and interactive admin analytics.',
          ],
        },
      ],
    },
    id: {
      fileName: 'AlfaRizi_CV_FullStack_ID.pdf',
      targetRole: 'Full-Stack Developer',
      projectsTitle: 'Proyek Full-Stack Unggulan',
      summary:
        'Full-Stack Developer berpengalaman merilis aplikasi web interaktif responsif dipadukan dengan backend throughput tinggi. Terbukti memadukan frontend modern (React 19, Next.js 14/16 App Router, Vite, Tailwind CSS v4) dengan arsitektur backend enterprise (Quarkus 3.15, microservices Spring Boot 3.2, Express.js). Fokus kuat pada interaktivitas UI dinamis, Web Audio/Speech API, integritas database transaksional PostgreSQL, dan otomasi deployment CI/CD.',
      skills: [
        { category: 'Pengembangan Frontend', items: 'Next.js 14/16, React 18/19, TypeScript, Tailwind CSS v4, Web Speech API, Web Audio API, Canvas API' },
        { category: 'Rekayasa Backend', items: 'Quarkus 3.15 LTS, Java 17, Spring Boot 3.2, Spring Cloud Gateway, Express.js, FastAPI' },
        { category: 'Database & Caching', items: 'PostgreSQL, Redis 7, PL/pgSQL Triggers & Views, Drizzle ORM, Migrasi Flyway, ChromaDB' },
        { category: 'Keamanan & State', items: 'Autentikasi JWT, Double-Entry Escrow, Sewa Anti-Hoarding, RBAC, TanStack Query, BCrypt' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Vite, Postman, Linux CLI, OpenAPI' },
      ],
      projects: [
        {
          title: 'ReLoop — Platform Circular Commerce Enterprise',
          tech: 'Next.js 14, Quarkus 3.15 LTS, TypeScript, PostgreSQL, Redis, TailwindCSS',
          year: '2026',
          demo: 'https://reloop.biz.id',
          github: 'https://github.com/a1fariz/ReLoop',
          bullets: [
            'Membangun marketplace elektronik sirkular end-to-end: frontend Next.js 14 didukung modular monolith Quarkus 3.15 LTS.',
            'Mengimplementasikan pembaruan UI optimistik via TanStack Query, timer sewa checkout, dan dashboard escrow double-entry.',
            'Merekayasa sewa checkout anti-hoarding berkunci baris pesimis dan caching katalog Redis untuk transisi halaman instan.',
          ],
        },
        {
          title: 'Arte — Biro Seni Klasik & Arsip Kuratorial Interaktif',
          tech: 'React 19, Vite, Tailwind CSS, The Met API, Framer Motion, Web Audio API',
          year: '2026',
          demo: 'https://www.arte.my.id/',
          github: 'https://github.com/a1fariz/arte',
          bullets: [
            'Mengembangkan platform kurasi pameran seni interaktif dengan galeri orbit sirkular 360° dan peran ganda Kurator/Pengunjung.',
            'Merekayasa sistem CRUD pameran aksesibel dengan focus trapping, persistensi localStorage, dan feedback sintetik Web Audio API.',
            'Mengintegrasikan lokalisasi bilingual dinamis (EN/ID) serta optimasi rendering viewport berbasis IntersectionObserver.',
          ],
        },
        {
          title: 'Vanguard IELTS — Platform Persiapan IELTS Akademik & SRS',
          tech: 'React 19, TypeScript, Vite, Tailwind CSS v4, Web Speech API, SRS Engine',
          year: '2026',
          demo: 'https://vanguard-ielts.vercel.app',
          github: 'https://github.com/a1fariz/Vanguard-IELTS',
          bullets: [
            'Membangun platform persiapan akademik IELTS komprehensif level CEFR A1–C1 dengan 4 laboratorium keahlian resmi.',
            'Merekayasa mesin retensi kosakata Spaced Repetition (SRS) berbasis SuperMemo, Mistake Bank, dan quest petualangan harian.',
            'Mengembangkan Shadowing Studio dengan sintesis audio Web Speech API native browser untuk latihan pelafalan ujaran.',
          ],
        },
        {
          title: 'ApexGrid — Platform Pemesanan Tiket Balap F1',
          tech: 'React 18, Spring Boot Microservices, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          github: 'https://github.com/a1fariz/ApexGrid',
          bullets: [
            'Merilis platform full-stack lengkap: 3 microservices Spring Boot, API Gateway terpusat, dan antarmuka glassmorphic React 18.',
            'Membangun sistem reservasi kursi real-time dengan sinkronisasi kuota instan via database trigger dan dashboard analitik admin.',
          ],
        },
      ],
    },
  },
};

// ---------- Assemble final CV list ----------
const cvDataList = Object.entries(roleContent).flatMap(([, langs]) =>
  ['en', 'id'].map((lang) => ({
    fileName: langs[lang].fileName,
    data: {
      ...contact,
      location: locationByLang[lang],
      labels: {
        ...baseLabels[lang],
        projects: langs[lang].projectsTitle,
      },
      summary: langs[lang].summary,
      skills: langs[lang].skills,
      projects: langs[lang].projects,
      experience: experience[lang],
      education: education[lang],
    },
  }))
);

async function generateAllPdfs() {
  console.log('Launching browser via Playwright...');
  const browser = await chromium.launch({ headless: true });

  for (const item of cvDataList) {
    const htmlContent = cvHtmlTemplate(item.data);
    const tempHtmlPath = path.join(__dirname, `temp_${item.fileName}.html`);
    fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

    const page = await browser.newPage();
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle' });

    const outputPath = path.join(outputDir, item.fileName);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.28in',
        bottom: '0.28in',
        left: '0.42in',
        right: '0.42in',
      },
    });

    // Check page count by reading generated PDF
    const pdfBuffer = fs.readFileSync(outputPath);
    const pdfString = pdfBuffer.toString('latin1');
    const pageMatches = pdfString.match(/\/Type\s*\/Page\b/g);
    const pageCount = pageMatches ? pageMatches.length : 1;

    console.log(`Generated: ${item.fileName} (${pageCount} page${pageCount > 1 ? 's' : ''})`);
    await page.close();
    fs.unlinkSync(tempHtmlPath);
  }

  await browser.close();
  console.log('All PDF resumes generated successfully!');
}

generateAllPdfs().catch((err) => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
