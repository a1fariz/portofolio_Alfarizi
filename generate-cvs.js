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
  id: 'Bandung Barat, Jawa Barat',
};

const baseLabels = {
  en: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    education: 'Education & Training'
  },
  id: {
    summary: 'Ringkasan Profesional',
    skills: 'Keahlian Teknis',
    experience: 'Pengalaman Kerja & Magang',
    education: 'Pendidikan & Pelatihan'
  }
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
        'Directed a 5-person intern team managing day-to-day IT support operations, hardware diagnostics, and workstation availability.',
        'Enforced SLA ticket resolution, executing security patching, software configurations, and antivirus definition updates across laptops.',
        'Conducted quality control and data validation across thousands of medical device specification records to ensure database accuracy.',
        'Prepared structured weekly operational health and incident summary reports for senior management review.'
      ]
    },
    {
      role: 'Lead Intern — IT Hardware',
      company: 'SMP Negeri 2 Batujajar',
      location: 'West Bandung, Indonesia',
      period: '2024',
      bullets: [
        'Diagnosed and resolved hardware faults, network cabling errors, and printer issues across school computer laboratories.',
        'Established a physical hardware inventory and maintenance tracking log that reduced repeat-fault turnaround time.'
      ]
    }
  ],
  id: [
    {
      role: 'Lead Intern — IT & Business Operations',
      company: 'PT Resik Cemerlang (Pasim Group)',
      location: 'Bandung, Indonesia',
      period: '2025 – Sekarang',
      bullets: [
        'Memimpin tim beranggotakan 5 intern dalam mendukung operasional teknis harian dan kepatuhan SLA tiket pemeliharaan perangkat.',
        'Mengelola pemeliharaan rutin, instalasi patch keamanan OS, dan update definisi antivirus pada puluhan laptop operasional.',
        'Melakukan validasi kualitas data teknis pada ribuan entri spesifikasi alat medis guna memastikan akurasi inventaris.',
        'Menyusun laporan operasional dan penanganan insiden mingguan untuk manajemen senior.'
      ]
    },
    {
      role: 'Lead Intern — IT Hardware',
      company: 'SMP Negeri 2 Batujajar',
      location: 'Bandung Barat, Indonesia',
      period: '2024',
      bullets: [
        'Melakukan diagnosis kerusakan komponen, perbaikan hardware, konfigurasi jaringan lokal, dan perawatan printer di laboratorium komputer.',
        'Merancang sistem pencatatan log inventaris dan perawatan hardware guna mempercepat penanganan masalah teknis berulang.'
      ]
    }
  ]
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
        'PUB Intensive Technical Scholarship (2024 – Present): Logic & C, Data Structures, Relational Databases, Advanced Java Development, and React Development.'
      ]
    }
  ],
  id: [
    {
      institution: 'Universitas Nasional PASIM',
      degree: 'D3 Manajemen Informatika — IPK: 3.6 / 4.0',
      location: 'Bandung, Indonesia',
      period: 'Estimasi Mei 2027',
      bullets: [
        'Beasiswa Pelatihan Intensif PUB (Pemberdayaan Umat Berkelanjutan) (2024 – Sekarang): Logika Pemrograman, Struktur Data, Database Relasional, Java Lanjutan, dan Pengembangan React.'
      ]
    }
  ]
};

// ---------- Role-specific content ----------
const roleContent = {
  // ===== 1. GENERAL SOFTWARE ENGINEER =====
  general: {
    en: {
      fileName: 'AlfaRizi_CV_EN.pdf',
      targetRole: 'Software Engineer',
      projectsTitle: 'Featured Engineering Projects',
      summary: 'Software Engineer (Informatics Management D3 student, GPA 3.6/4.0) with practical experience delivering distributed microservices, AI-powered applications, and production-ready web platforms end to end. Strong technical foundation in Java (Spring Boot 3, Spring Security, Spring Cloud Gateway), TypeScript/JavaScript (React, Next.js, Express), Python (FastAPI), and PostgreSQL (PL/pgSQL triggers, views, Flyway), with Docker containerization and automated GitHub Actions CI/CD workflows.',
      skills: [
        { category: 'Languages', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Frontend Development', items: 'React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Canvas API, Web Speech API' },
        { category: 'Databases & ORM', items: 'PostgreSQL (PL/pgSQL Triggers, Views), Drizzle ORM, Flyway, Hibernate, ChromaDB, SQLite' },
        { category: 'DevOps & Quality', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Platform',
          tech: 'Java 17, Spring Boot, React, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Architected a 3-service distributed system (API Gateway, User Service, Race Service) using Spring Boot 3.2 and Spring Cloud Gateway.',
            'Implemented stateless JWT authentication with refresh token rotation and RBAC (USER/ADMIN) enforced across service levels.',
            'Built real-time quota validation using PostgreSQL PL/pgSQL triggers and automated 30-minute booking cancellations via Spring @Scheduled.',
            'Developed an admin dashboard and race booking UI in React 18 with Tailwind CSS; containerized the complete stack using Docker Compose.'
          ]
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Document Assistant',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Engineered an asynchronous RAG pipeline using FastAPI, PyMuPDF, and LangChain splitters to index PDF textbooks with verified page citations.',
            'Implemented semantic search via Sentence Transformers (all-MiniLM-L6-v2) embeddings indexed into persistent ChromaDB collections.',
            'Orchestrated prompt pipelines with an LLM gateway to generate structured summaries, multi-choice quizzes, and interactive flashcards.',
            'Configured automated CI/CD via GitHub Actions executing Ruff linting, Pytest async suites, and pip-audit vulnerability checks.'
          ]
        },
        {
          title: 'Finance Feasibility — AI-Assisted Investment Analysis',
          tech: 'React 19, Express.js, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed an investment appraisal application calculating DCF, NPV, IRR, ROI, and Payback Period with automated Gemini AI evaluation.',
            'Built a type-safe REST API in Express.js with PostgreSQL and Drizzle ORM, secured via Firebase Admin auth and rate limiting.',
            'Constructed interactive financial visualization charts in React 19 using Recharts and implemented client-side Excel (XLSX) report export.'
          ]
        },
        {
          title: 'Renshuu — Interactive Japanese Learning Platform',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Built a language learning platform covering Kana, Kanji (KanjiVG SVG stroke data), Vocabulary, and JLPT N4 Grammar.',
            'Created an interactive HTML5 Canvas character tracing pad and integrated native browser Web Speech API (ja-JP) for audio playback.',
            'Implemented a Spaced Repetition (SRS) review queue and offline-first LocalStorage state management with JSON backup/restore.'
          ]
        }
      ]
    },
    id: {
      fileName: 'AlfaRizi_CV_ID.pdf',
      targetRole: 'Software Engineer',
      projectsTitle: 'Proyek Rekayasa Perangkat Lunak Unggulan',
      summary: 'Software Engineer (mahasiswa D3 Manajemen Informatika, IPK 3.6/4.0) dengan pengalaman praktis membangun microservices terdistribusi, aplikasi berbasis AI, dan aplikasi web siap produksi secara menyeluruh. Menguasai fondasi teknis kuat pada Java (Spring Boot 3, Spring Security, Spring Cloud Gateway), TypeScript/JavaScript (React, Next.js, Express), Python (FastAPI), dan PostgreSQL (PL/pgSQL triggers, views, Flyway), serta containerisasi Docker dan otomasi CI/CD dengan GitHub Actions.',
      skills: [
        { category: 'Bahasa Pemrograman', items: 'Java 17, TypeScript, JavaScript (ES6+), Python 3.12, SQL, C' },
        { category: 'Backend & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Frontend', items: 'React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Canvas API, Web Speech API' },
        { category: 'Database & ORM', items: 'PostgreSQL (Triggers, Functions, Views), Drizzle ORM, Flyway Migrations, Hibernate, ChromaDB, SQLite' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — Platform Pemesanan Tiket Balap F1',
          tech: 'Java 17, Spring Boot, React, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Merancang arsitektur microservices terdistribusi dengan 3 service independen (API Gateway, User Service, Race Service) menggunakan Spring Boot 3.2 dan Spring Cloud Gateway.',
            'Mengimplementasikan autentikasi JWT stateless dengan refresh token dan kontrol akses berbasis peran (RBAC USER/ADMIN).',
            'Membangun logika sinkronisasi kuota tiket secara real-time menggunakan database trigger PostgreSQL (PL/pgSQL) dan penjadwal pembatalan otomatis 30 menit (@Scheduled).',
            'Mengembangkan antarmuka katalog balapan dan panel admin interaktif menggunakan React 18 dan Tailwind CSS; di-containerize dengan Docker Compose.'
          ]
        },
        {
          title: 'StudyMate AI — Asisten Belajar Dokumen Berbasis RAG',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Membangun pipeline RAG asynchronous menggunakan FastAPI, PyMuPDF, dan LangChain text splitter untuk ekstraksi buku teks PDF lengkap dengan sitasi halaman otomatis.',
            'Mengimplementasikan pencarian kesamaan semantik menggunakan embedding Sentence Transformers (all-MiniLM-L6-v2) yang disimpan dalam vector store ChromaDB.',
            'Mengintegrasikan LLM client untuk menghasilkan ringkasan terstruktur, kuis pilihan ganda, dan flashcard interaktif yang terverifikasi dari dokumen.',
            'Membangun pipeline CI/CD GitHub Actions untuk linting Ruff, pengujian Pytest async, dan audit keamanan dependensi.'
          ]
        },
        {
          title: 'Finance Feasibility — Platform Analisis Kelayakan Investasi AI',
          tech: 'React 19, Express, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Mengembangkan aplikasi analisis investasi yang mengotomatisasi perhitungan NPV, IRR, ROI, dan Payback Period dari input parameter pengguna.',
            'Mengintegrasikan Google Gemini AI untuk analisis kelayakan otomatis dan penilaian risiko finansial.',
            'Membangun REST API berbasis Express.js dan Drizzle ORM pada database PostgreSQL dengan keamanan Firebase Admin auth dan rate limiting.',
            'Merancang dashboard visualisasi interaktif di React 19 menggunakan Recharts dan fitur ekspor laporan ke format Excel (XLSX).'
          ]
        },
        {
          title: 'Renshuu — Platform Pembelajaran Bahasa Jepang Interaktif',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Mengembangkan aplikasi web edukasi mencakup materi Kana, Kanji (data stroke SVG KanjiVG), Kosakata, dan Tata Bahasa JLPT N4.',
            'Membangun kanvas penulisan interaktif (HTML5 Canvas) dan animasi visual urutan goresan karakter.',
            'Mengintegrasikan Web Speech API native browser (ja-JP) untuk pelafalan audio tanpa server serta mengimplementasikan algoritma Spaced Repetition (SRS).'
          ]
        }
      ]
    }
  },

  // ===== 2. BACKEND DEVELOPER =====
  backend: {
    en: {
      fileName: 'AlfaRizi_CV_Backend_EN.pdf',
      targetRole: 'Backend Developer',
      projectsTitle: 'Featured Backend Projects',
      summary: 'Backend Developer focused on Java Spring Boot microservices, secure RESTful APIs, and database-driven architectures. Proven experience building 3-service distributed systems with Spring Boot 3.2, Spring Security 6, and Spring Cloud Gateway, backed by deep PostgreSQL expertise (PL/pgSQL triggers, views, Flyway migrations). Also productive in Python (FastAPI), JWT/RBAC security implementation, Docker containerization, and automated CI/CD pipelines.',
      skills: [
        { category: 'Languages', items: 'Java 17, Python 3.12, SQL, JavaScript (Node.js), C' },
        { category: 'Frameworks & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Databases & Migrations', items: 'PostgreSQL, PL/pgSQL (Triggers, Views, Functions), Flyway, Drizzle ORM, Hibernate, ChromaDB, SQLite' },
        { category: 'Security & Auth', items: 'JWT (Access & Refresh Tokens), RBAC, BCrypt, Rate Limiting, CORS, Helmet' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Backend',
          tech: 'Java 17, Spring Boot, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Architected a 3-tier Spring Boot microservices backend comprising an API Gateway, User Service, and Race Ticket Service via Spring Cloud Gateway.',
            'Secured inter-service routing and REST endpoints using JWT authentication, refresh token rotation, and Spring Security RBAC (USER/ADMIN).',
            'Engineered concurrency-safe ticket inventory management via custom PostgreSQL PL/pgSQL triggers (update_race_quota) and Spring @Scheduled workers.',
            'Developed automated PDF ticket generation with embedded QR codes (ZXing & iText) and asynchronous email notification tracking.',
            'Containerized the gateway, services, and database using Docker Compose with robust health checks and network isolation.'
          ]
        },
        {
          title: 'StudyMate AI — Asynchronous RAG Backend Engine',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers, PyMuPDF',
          year: '2026',
          bullets: [
            'Designed an asynchronous document retrieval and study assistant API using FastAPI, PyMuPDF, and LangChain text splitters.',
            'Implemented semantic vector similarity search by embedding document chunks with Sentence Transformers (all-MiniLM-L6-v2) into ChromaDB.',
            'Connected an OpenAI-compatible LLM gateway to generate grounded study materials with verified [Page X] citations.',
            'Built a token-bucket IP rate limiter (60 req/min) and configured a GitHub Actions CI/CD workflow running Ruff, Pytest async, and pip-audit.'
          ]
        },
        {
          title: 'Finance Management System (FinanceAll) — Spring Boot MVC',
          tech: 'Java 17, Spring Boot, Spring Security, PostgreSQL, Flyway',
          year: '2026',
          bullets: [
            'Engineered a robust personal finance web application using Spring Boot 3.2, Spring Data JPA, and PostgreSQL.',
            'Implemented complete database version control and schema evolution using Flyway migrations (V1__init_schema.sql).',
            'Configured Spring Security 6 with session-based authentication, BCrypt encryption, and role-based endpoint authorization.',
            'Created service layers calculating debt payoff schedules, emergency fund milestones, and financial health scores.'
          ]
        },
        {
          title: 'Finance Feasibility — REST API & Financial Modeling Backend',
          tech: 'Node.js, Express.js, TypeScript, PostgreSQL, Drizzle ORM',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed a high-performance REST API using Express.js and TypeScript, bundled with esbuild and managed via Drizzle ORM on PostgreSQL.',
            'Implemented financial valuation algorithms for automated Net Present Value (NPV), IRR, ROI, and Payback Period computation.',
            'Integrated Firebase Admin token verification middleware and connected Google Gemini API for strategic report generation.'
          ]
        }
      ]
    },
    id: {
      fileName: 'AlfaRizi_CV_Backend_ID.pdf',
      targetRole: 'Backend Developer',
      projectsTitle: 'Proyek Backend Unggulan',
      summary: 'Backend Developer dengan fokus pada microservices Java Spring Boot, RESTful API yang aman, dan arsitektur berbasis database. Terbukti membangun sistem terdistribusi 3 service menggunakan Spring Boot 3.2, Spring Security 6, dan Spring Cloud Gateway, didukung keahlian mendalam PostgreSQL (PL/pgSQL triggers, views, migrasi Flyway). Juga produktif menggunakan Python (FastAPI), implementasi keamanan JWT/RBAC, containerisasi Docker, dan pipeline CI/CD otomatis.',
      skills: [
        { category: 'Bahasa Pemrograman', items: 'Java 17, Python 3.12, SQL, JavaScript (Node.js), C' },
        { category: 'Framework & Microservices', items: 'Spring Boot 3.2, Spring Cloud Gateway, Spring Security 6, Spring Data JPA, FastAPI, Express.js' },
        { category: 'Database & Migrasi', items: 'PostgreSQL, PL/pgSQL (Triggers, Views, Functions), Flyway, Drizzle ORM, Hibernate, ChromaDB, SQLite' },
        { category: 'Keamanan & Autentikasi', items: 'JWT (Access & Refresh Tokens), RBAC, BCrypt, Rate Limiting, CORS, Helmet' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Postman, Linux CLI, OpenAPI/Swagger' }
      ],
      projects: [
        {
          title: 'ApexGrid — Backend Pemesanan Tiket Balap F1',
          tech: 'Java 17, Spring Boot, Spring Cloud Gateway, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Merancang backend microservices Spring Boot 3 tingkat tiga (API Gateway, User Service, Race Ticket Service) melalui Spring Cloud Gateway.',
            'Mengamankan routing antar-service dan endpoint REST menggunakan autentikasi JWT, rotasi refresh token, dan RBAC Spring Security (USER/ADMIN).',
            'Merekayasa manajemen inventaris tiket yang aman dari konkurensi melalui trigger PostgreSQL PL/pgSQL kustom (update_race_quota) dan worker Spring @Scheduled.',
            'Mengembangkan pembuatan tiket PDF otomatis dengan kode QR tertanam (ZXing & iText) serta pelacakan notifikasi email asinkron.',
            'Meng-containerize gateway, service, dan database menggunakan Docker Compose dengan health checks dan isolasi jaringan.'
          ]
        },
        {
          title: 'StudyMate AI — Mesin Backend RAG Asinkron',
          tech: 'Python, FastAPI, ChromaDB, Sentence-Transformers, PyMuPDF',
          year: '2026',
          bullets: [
            'Merancang API asisten belajar dan retrieval dokumen asinkron menggunakan FastAPI, PyMuPDF, dan LangChain text splitters.',
            'Mengimplementasikan pencarian kesamaan vektor semantik dengan embedding Sentence Transformers (all-MiniLM-L6-v2) ke dalam ChromaDB.',
            'Menghubungkan LLM gateway kompatibel OpenAI untuk menghasilkan materi belajar grounded dengan sitasi terverifikasi [Halaman X].',
            'Membangun IP rate limiter token-bucket (60 req/menit) dan workflow GitHub Actions CI/CD yang menjalankan Ruff, Pytest async, dan pip-audit.'
          ]
        },
        {
          title: 'Finance Management System (FinanceAll) — Spring Boot MVC',
          tech: 'Java 17, Spring Boot, Spring Security, PostgreSQL, Flyway',
          year: '2026',
          bullets: [
            'Membangun aplikasi web keuangan pribadi yang tangguh menggunakan Spring Boot 3.2, Spring Data JPA, dan PostgreSQL.',
            'Mengimplementasikan version control database dan evolusi skema secara lengkap menggunakan migrasi Flyway (V1__init_schema.sql).',
            'Mengonfigurasi Spring Security 6 dengan autentikasi berbasis session, enkripsi BCrypt, dan otorisasi endpoint berbasis peran.',
            'Membuat service layer untuk menghitung jadwal pelunasan hutang, milestone dana darurat, dan skor kesehatan finansial.'
          ]
        },
        {
          title: 'Finance Feasibility — REST API & Backend Pemodelan Finansial',
          tech: 'Node.js, Express.js, TypeScript, PostgreSQL, Drizzle ORM',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Mengembangkan REST API berperforma tinggi menggunakan Express.js dan TypeScript, dibundel esbuild dan dikelola via Drizzle ORM pada PostgreSQL.',
            'Mengimplementasikan algoritma valuasi finansial untuk komputasi otomatis Net Present Value (NPV), IRR, ROI, dan Payback Period.',
            'Mengintegrasikan middleware verifikasi token Firebase Admin dan Google Gemini API untuk generasi laporan strategis.'
          ]
        }
      ]
    }
  },

  // ===== 3. FULL-STACK DEVELOPER =====
  fullstack: {
    en: {
      fileName: 'AlfaRizi_CV_FullStack_EN.pdf',
      targetRole: 'Full-Stack Developer',
      projectsTitle: 'Featured Full-Stack Projects',
      summary: 'Full-Stack Developer experienced shipping complete web products — React 18/19 and Next.js frontends paired with Spring Boot 3, FastAPI, and Node.js/Express backends on PostgreSQL. Adept at designing secure REST APIs, relational database schemas, and responsive user interfaces within Docker-based CI/CD workflows.',
      skills: [
        { category: 'Frontend Development', items: 'TypeScript, JavaScript (ES6+), React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Recharts' },
        { category: 'Backend Engineering', items: 'Java 17 (Spring Boot 3.2, Spring Cloud Gateway, Spring Security), Python 3.12 (FastAPI), Node.js, Express.js' },
        { category: 'Databases & ORM', items: 'PostgreSQL, PL/pgSQL Triggers & Views, Drizzle ORM, Spring Data JPA, ChromaDB, SQLite' },
        { category: 'Security & Auth', items: 'JWT Authentication, Firebase Auth, RBAC, BCrypt, Rate Limiting, CORS' },
        { category: 'DevOps & Tooling', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Vite, esbuild, Postman' }
      ],
      projects: [
        {
          title: 'ApexGrid — F1 Race Ticket Booking Platform',
          tech: 'React 18, Spring Boot Microservices, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Built a full-stack platform featuring 3 Spring Boot microservices (Gateway, User, Race) and a React 18 single-page application.',
            'Implemented stateless JWT auth with refresh tokens, BCrypt password hashing, and user/admin role-based access control.',
            'Designed database triggers in PostgreSQL for real-time ticket quota updates and automated background task expiration.',
            'Created an administrative dashboard with interactive CRUD management and public race scheduling with real-time seat availability.',
            'Orchestrated the entire multi-service system and PostgreSQL database using Docker Compose.'
          ]
        },
        {
          title: 'Finance Feasibility — AI Investment Analysis Application',
          tech: 'React 19, Express, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Developed a complete financial feasibility web app calculating NPV, IRR, ROI, and Payback Period from dynamic user inputs.',
            'Integrated Google Gemini AI to analyze DCF data models and provide automated risk/feasibility narrative reports.',
            'Built a type-safe backend in Express.js with Drizzle ORM and PostgreSQL, secured with Firebase Auth and Helmet.',
            'Implemented real-time dynamic charts using Recharts and client-side data export to Excel (XLSX).'
          ]
        },
        {
          title: 'Renshuu — Japanese Language Learning Platform',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Developed a comprehensive educational web app covering Kana, Kanji (KanjiVG SVG), Vocabulary, and JLPT N4 Grammar.',
            'Built an interactive HTML5 Canvas drawing pad for character stroke practice and integrated native Web Speech API audio.',
            'Engineered a client-side Spaced Repetition System (SRS) scheduler with review queues and JSON data backup/restore.'
          ]
        },
        {
          title: 'StudyMate AI — RAG Study Assistant',
          tech: 'FastAPI, React/TypeScript, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Built an end-to-end study assistant ingesting PDF documents to generate AI-assisted summaries, quizzes, and 3D flashcards.',
            'Implemented semantic search via ChromaDB vector embeddings and built a responsive UI connecting to a FastAPI backend.',
            'Automated testing and code validation using GitHub Actions CI/CD pipelines.'
          ]
        }
      ]
    },
    id: {
      fileName: 'AlfaRizi_CV_FullStack_ID.pdf',
      targetRole: 'Full-Stack Developer',
      projectsTitle: 'Proyek Full-Stack Unggulan',
      summary: 'Full-Stack Developer berpengalaman merilis produk web secara menyeluruh — frontend React 18/19 dan Next.js dipadukan dengan backend Spring Boot 3, FastAPI, dan Node.js/Express di atas PostgreSQL. Terampil merancang REST API yang aman, skema database relasional, serta antarmuka pengguna responsif dalam alur kerja CI/CD berbasis Docker.',
      skills: [
        { category: 'Frontend', items: 'TypeScript, JavaScript (ES6+), React 18/19, Next.js 16 (App Router), HTML5, CSS3, Tailwind CSS, Recharts' },
        { category: 'Backend', items: 'Java 17 (Spring Boot 3.2, Spring Cloud Gateway, Spring Security), Python 3.12 (FastAPI), Node.js, Express.js' },
        { category: 'Database & ORM', items: 'PostgreSQL, PL/pgSQL Triggers & Views, Drizzle ORM, Spring Data JPA, ChromaDB, SQLite' },
        { category: 'Keamanan & Autentikasi', items: 'JWT Authentication, Firebase Auth, RBAC, BCrypt, Rate Limiting, CORS' },
        { category: 'DevOps & Tools', items: 'Docker, Docker Compose, GitHub Actions (CI/CD), Git, Maven, Vite, esbuild, Postman' }
      ],
      projects: [
        {
          title: 'ApexGrid — Platform Pemesanan Tiket Balap F1',
          tech: 'React 18, Spring Boot Microservices, PostgreSQL, Docker',
          year: '2026',
          bullets: [
            'Membangun platform full-stack dengan 3 microservices Spring Boot (Gateway, User, Race) dan aplikasi single-page React 18.',
            'Mengimplementasikan autentikasi JWT stateless dengan refresh token, hashing password BCrypt, dan kontrol akses berbasis peran user/admin.',
            'Merancang trigger database PostgreSQL untuk pembaruan kuota tiket real-time dan kedaluwarsa tugas latar belakang otomatis.',
            'Membuat dashboard administratif dengan manajemen CRUD interaktif dan penjadwalan balapan publik dengan ketersediaan kursi real-time.',
            'Mengorkestrasi seluruh sistem multi-service dan database PostgreSQL menggunakan Docker Compose.'
          ]
        },
        {
          title: 'Finance Feasibility — Aplikasi Analisis Investasi Berbasis AI',
          tech: 'React 19, Express, PostgreSQL, Drizzle ORM, Gemini',
          year: '2026',
          demo: 'https://finance-feasibility.alfarizi.my.id',
          github: 'https://github.com/a1fariz/finance-feasibility',
          bullets: [
            'Mengembangkan aplikasi web kelayakan finansial lengkap yang menghitung NPV, IRR, ROI, dan Payback Period dari input dinamis pengguna.',
            'Mengintegrasikan Google Gemini AI untuk menganalisis model data DCF dan menyusun laporan naratif risiko/kelayakan otomatis.',
            'Membangun backend type-safe Express.js dengan Drizzle ORM dan PostgreSQL, diamankan dengan Firebase Auth dan Helmet.',
            'Mengimplementasikan grafik dinamis real-time menggunakan Recharts dan ekspor data sisi klien ke Excel (XLSX).'
          ]
        },
        {
          title: 'Renshuu — Platform Pembelajaran Bahasa Jepang',
          tech: 'Next.js 16, React 19, TypeScript, Canvas API, Web Speech API',
          year: '2026',
          demo: 'https://renshuu.alfarizi.my.id',
          github: 'https://github.com/a1fariz/renshuu',
          bullets: [
            'Mengembangkan aplikasi web edukasi komprehensif mencakup Kana, Kanji (KanjiVG SVG), Kosakata, dan Tata Bahasa JLPT N4.',
            'Membangun pad gambar HTML5 Canvas interaktif untuk latihan goresan karakter dan mengintegrasikan audio Web Speech API native.',
            'Merekayasa penjadwal Spaced Repetition System (SRS) sisi klien dengan antrean review serta backup/restore data JSON.'
          ]
        },
        {
          title: 'StudyMate AI — Asisten Belajar Berbasis RAG',
          tech: 'FastAPI, React/TypeScript, ChromaDB, Sentence-Transformers',
          year: '2026',
          bullets: [
            'Membangun asisten belajar end-to-end yang mengolah dokumen PDF menjadi ringkasan berbantuan AI, kuis, dan flashcard 3D.',
            'Mengimplementasikan pencarian semantik melalui embedding vektor ChromaDB dan membangun UI responsif yang terhubung ke backend FastAPI.',
            'Mengotomatisasi pengujian dan validasi kode menggunakan pipeline CI/CD GitHub Actions.'
          ]
        }
      ]
    }
  }
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
        projects: langs[lang].projectsTitle
      },
      summary: langs[lang].summary,
      skills: langs[lang].skills,
      projects: langs[lang].projects,
      experience: experience[lang],
      education: education[lang]
    }
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
        top: '0.35in',
        bottom: '0.35in',
        left: '0.45in',
        right: '0.45in'
      }
    });

    console.log(`Generated: ${outputPath}`);
    await page.close();
    fs.unlinkSync(tempHtmlPath);
  }

  await browser.close();
  console.log('All PDF resumes generated successfully!');
}

generateAllPdfs().catch(err => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
