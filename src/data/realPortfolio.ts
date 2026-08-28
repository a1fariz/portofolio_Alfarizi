export interface RealProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Java / Backend" | "AI & RAG" | "Full-Stack Web" | "C Systems";
  stack: string[];
  year: string;
  status: string;
  github?: string;
  demo?: string;
  image: string;
  description: string;
  highlight: string;
  architecture: {
    summary: string;
    flow: string[];
    components: { title: string; desc: string }[];
  };
  metrics: string[];
}

export const REAL_PROJECTS: RealProject[] = [
  {
    id: "apexgrid",
    title: "ApexGrid",
    subtitle: "F1 Race Ticket Reservation & Microservices Platform",
    category: "Java / Backend",
    stack: ["Java 17", "Spring Boot 3.2", "Spring Cloud Gateway", "PostgreSQL", "React 18", "Docker", "JWT", "TailwindCSS"],
    year: "2026",
    status: "In Deployment & Maintenance",
    github: "https://github.com/a1fariz/ApexGrid",
    image: "/images/projects/apexgrid.png",
    description: "Production-ready distributed microservices platform featuring 3 independent Spring Boot services (API Gateway, User Service, Race Service) orchestrated via Spring Cloud Gateway. Real-time race ticket inventory synchronized through PostgreSQL database triggers, a 30-minute auto-expiry reservation scheduler, shared RBAC security (USER/ADMIN), Swagger UI, and a full Admin Panel with analytics dashboard via database views.",
    highlight: "Microservices architecture + RBAC + real-time quota system",
    architecture: {
      summary: "Distributed microservices system designed for high concurrency with zero quota race conditions and centralized JWT gateway validation.",
      flow: [
        "React 18 Glassmorphic UI Client",
        "Spring Cloud Gateway (Centralized Routing & JWT Filter)",
        "Microservices (User Service / Race Ticket Service)",
        "PostgreSQL DB Triggers & 30-Min Auto-Expiry Scheduler",
      ],
      components: [
        { title: "Spring Cloud Gateway", desc: "Handles centralized routing, rate limiting, and RBAC token evaluation." },
        { title: "Quota & Race Service", desc: "High-concurrency ticket booking engine powered by PostgreSQL triggers for real-time inventory management." },
        { title: "Analytics & Views", desc: "Complex PostgreSQL DB views feed real-time sales and reservation metrics to the React Admin Panel." },
      ],
    },
    metrics: ["3 Independent Microservices", "< 40ms Gateway Response", "100% ACID Seat Locking"],
  },
  {
    id: "studymate-ai",
    title: "StudyMate AI",
    subtitle: "Intelligent RAG-Based Educational Knowledge Assistant",
    category: "AI & RAG",
    stack: ["Python", "LangChain", "ChromaDB", "Google Gemini 2.0 Flash", "PyMuPDF", "Docker", "JWT", "GitHub Actions"],
    year: "2026",
    status: "In Deployment & Maintenance",
    github: "https://github.com/a1fariz/StudyMateAI",
    image: "/images/projects/studymate-ai.png",
    description: "High-performance asynchronous RAG pipeline processing academic textbook PDFs and generating personalized study content. Semantic search index via ChromaDB & sentence-transformers, Google Gemini 2.0 Flash orchestration (summaries, quizzes, 3D flip flashcards, dynamic study plans), page-specific citations via PyMuPDF, rate limiter (60 req/min), JWT auth with bcrypt, and automated CI/CD deployment via GitHub Actions.",
    highlight: "RAG pipeline + AI integration + CI/CD",
    architecture: {
      summary: "Asynchronous Retrieval-Augmented Generation (RAG) system utilizing vector embeddings, semantic search, and LLM orchestration with automated CI/CD deployment.",
      flow: [
        "PDF Upload & PyMuPDF Citation Extraction",
        "Chunking & Embeddings via sentence-transformers",
        "ChromaDB Vector Store Query & Similarity Retrieval",
        "Google Gemini 2.0 Flash Context Injection & Response Generation",
      ],
      components: [
        { title: "PyMuPDF Ingestion", desc: "Extracts textual content, page numbers, and metadata from academic PDF textbooks." },
        { title: "ChromaDB Vector Store", desc: "Indexes document chunks locally for lightning-fast cosine similarity vector searches." },
        { title: "Gemini 2.0 Flash Engine", desc: "Orchestrates prompts for automated summaries, interactive quizzes, and 3D flashcards." },
      ],
    },
    metrics: ["60 req/min Rate Limiting", "Page-level Citation Accuracy", "Docker Compose + CI/CD"],
  },
  {
    id: "renshuu",
    title: "Renshuu",
    subtitle: "Interactive Japanese Learning & Spaced Repetition (SRS)",
    category: "Full-Stack Web",
    stack: ["JavaScript", "HTML5 Canvas", "CSS3", "Web Speech API", "SVG KanjiVG", "SRS Algorithm", "LocalStorage"],
    year: "2026",
    status: "Completed",
    github: "https://github.com/a1fariz/renshuu",
    demo: "https://renshuu.alfarizi.my.id/",
    image: "/images/projects/renshuu.png",
    description: "Modern interactive Japanese learning platform covering Phase 0 (Hiragana & Katakana) up to JLPT N4 (Kanji, Vocabulary, Grammar). Features spaced repetition practice (SRS), interactive SVG stroke order animations with KanjiVG, HTML5 canvas handwriting tracing, native Web Speech API audio pronunciation, structured daily reviews, and offline-first JSON progress backup/restore.",
    highlight: "Spaced repetition (SRS) + Stroke order animations + Web Speech API",
    architecture: {
      summary: "Client-side interactive educational web application integrating native Web Speech API, HTML5 Canvas/SVG vector animations, and local Spaced Repetition (SRS) state persistence.",
      flow: [
        "Curriculum Routing (Kana, Kanji, Vocab, Grammar)",
        "Spaced Repetition (SRS) Scheduling & Daily Review Queue Engine",
        "Interactive Visualizer (SVG Stroke Animation & Canvas Tracing Pad)",
        "Native Web Speech Audio Playback (`ja-JP`) & LocalStorage State Sync",
      ],
      components: [
        { title: "Kana & Kanji Stroke Engine", desc: "Vector SVG stroke animations and HTML5 canvas pad for tactile handwriting practice." },
        { title: "Spaced Repetition (SRS) Engine", desc: "Automated retention algorithm managing intervals, review queues, and mastery levels." },
        { title: "Speech & Audio Synthesizer", desc: "Native browser Web Speech API (`ja-JP`) for instant, serverless Japanese audio synthesis." },
      ],
    },
    metrics: ["100% Offline-First Architecture", "Native Web Speech API", "Zero External Dependencies"],
  },
  {
    id: "finance-feasibility",
    title: "Finance Feasibility",
    subtitle: "AI-Powered Investment Analysis & Feasibility Platform",
    category: "Full-Stack Web",
    stack: ["React 19", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Firebase Auth", "Google Gemini", "TailwindCSS"],
    year: "2026",
    status: "Completed",
    github: "https://github.com/a1fariz/finance-feasibility",
    demo: "https://finance-feasibility.alfarizi.my.id/",
    image: "/images/projects/finance-feasibility.png",
    description: "Full-stack AI-powered web application for conducting financial feasibility studies and investment analysis. Automatically calculates critical investment metrics (NPV, IRR, ROI, Payback Period) and integrates with Google Gemini for professional strategic insights. Features secure Firebase authentication, PDF/Excel export capabilities, and PostgreSQL database managed via Drizzle ORM.",
    highlight: "Automatic NPV/IRR engine + Gemini AI strategic analysis",
    architecture: {
      summary: "Full-stack client-server architecture with React 19 frontend, Express.js backend, PostgreSQL with Drizzle ORM, Firebase Authentication, and Google Gemini AI integration.",
      flow: [
        "React 19 Client UI & Financial Parameter Inputs",
        "Express Backend API (Auth Token Verification & Rate Limiting)",
        "Financial Calculations Engine (NPV, IRR, ROI, Payback Period)",
        "Google Gemini API & PostgreSQL Database (via Drizzle ORM)",
      ],
      components: [
        { title: "React 19 Frontend", desc: "Interactive dashboard built with Vite, Tailwind CSS v4, Recharts, and Motion for real-time calculation visualization." },
        { title: "Express.js API Server", desc: "REST API server handling security via Helmet, CORS, and Express Rate Limit." },
        { title: "AI & Valuation Engine", desc: "Automated NPV/IRR formulas paired with Google Gemini AI for automated strategic insights generation." },
      ],
    },
    metrics: ["Instant Multi-Scenario Modeling", "Excel / PDF Vector Export", "Type-Safe Drizzle ORM"],
  },
  {
    id: "finance-management",
    title: "Finance Management System",
    subtitle: "Full-Stack Enterprise Financial Dashboard & MVC",
    category: "Java / Backend",
    stack: ["Java 17", "Spring Boot 3.2", "Spring Security", "Thymeleaf", "PostgreSQL", "Flyway", "Docker"],
    year: "2026",
    status: "Completed",
    github: "https://github.com/a1fariz/financeall_project_java_alfariz",
    image: "/images/projects/finance-management.png",
    description: "Full-stack finance web application with multi-role authentication (BCrypt + Spring Security), complete CRUD operations, real-time financial dashboard, Flyway database migrations, normalised PostgreSQL schema, and MVC backend with clean REST API endpoints.",
    highlight: "Full-stack MVC + multi-role auth + Flyway migrations",
    architecture: {
      summary: "Monolithic Spring Boot 3 MVC architecture with Spring Security, Thymeleaf server-side rendering, Flyway schema migrations, and PostgreSQL database.",
      flow: [
        "Client HTTP Request & Thymeleaf SSR Views",
        "Spring Security Filter Chain & Session Auth",
        "Spring MVC Controller & Business Service Layer",
        "Spring Data JPA & PostgreSQL DB (Flyway Managed)",
      ],
      components: [
        { title: "Spring Security Layer", desc: "Role-based authorization and BCrypt-hashed credential protection." },
        { title: "Flyway Migration", desc: "Deterministic database versioning and automated schema evolutions." },
        { title: "PostgreSQL Schema", desc: "Normalized relational structure with ACID transaction integrity." },
      ],
    },
    metrics: ["Normalized PostgreSQL Schema", "Flyway Version-Controlled DB", "Multi-Role RBAC"],
  },
  {
    id: "universe-interactive",
    title: "Universe Interactive (Solar Explorer)",
    subtitle: "Astronomy Calculation & Planetary Physics Engine",
    category: "Full-Stack Web",
    stack: ["HTML5", "CSS3", "JavaScript", "Astronomy API", "NASA Data"],
    year: "2026",
    status: "Completed",
    github: "https://github.com/a1fariz/projek-website-your-age-other-planet",
    demo: "https://solar-explorer.alfarizi.my.id",
    image: "/images/projects/universe-interactive.png",
    description: "Space-themed interactive website with scroll-triggered animations, planetary age calculation across all solar system bodies based on authentic NASA orbital velocities, live astronomy data via REST API, and persistent dark/light mode toggle.",
    highlight: "Interactive animation + Planetary Physics + Astronomy API",
    architecture: {
      summary: "Client-side physics simulator computing planetary rotational velocity and orbital period conversions with live astronomy API data.",
      flow: [
        "User Birthdate Input",
        "Orbital Mechanics Calculation Matrix",
        "Dynamic Canvas Starfield & Planet Render Loop",
        "Planetary Age & Next Birthday Countdown Output",
      ],
      components: [
        { title: "Orbital Mechanics Engine", desc: "Precise NASA orbital ratio calculations for Mercury through Pluto." },
        { title: "Visualizer & Canvas", desc: "Procedurally generated HTML5 starfield particle effect." },
      ],
    },
    metrics: ["Accurate NASA Orbital Math", "Pure Vanilla JS Performance", "Zero Framework Overhead"],
  },
  {
    id: "alpay-wallet",
    title: "ALPAY — E-Wallet System",
    subtitle: "Console-Based Digital Wallet in Pure C",
    category: "C Systems",
    stack: ["C Language", "Flat File Handling (.txt)", "RBAC Security", "CLI Architecture"],
    year: "2026",
    status: "Completed",
    github: "https://github.com/a1fariz/ALPAY-E-Wallet",
    image: "/images/projects/alpay-wallet.png",
    description: "Terminal-based digital e-wallet system developed in C implementing a secure two-role RBAC (Admin & User) system, complete financial transaction flow (balance transfer, top-up, withdrawal, transaction history), and persistent data management using flat files (.txt) without external database dependencies.",
    highlight: "Digital wallet transactions + RBAC security + File Handling (.txt)",
    architecture: {
      summary: "Low-level procedural system in C managing memory-efficient record locks, authentication state, and sequential transaction logging via flat files.",
      flow: [
        "Terminal CLI Menu & Credential Authentication",
        "RBAC Access Verification (Admin / User)",
        "Balance Calculation & Transaction Ledger Processing",
        "Flat File (.txt) Atomic Write & Persistence",
      ],
      components: [
        { title: "Auth & RBAC Matrix", desc: "Credential hashing and session role enforcement directly in C structs." },
        { title: "Flat File Storage Engine", desc: "Custom file stream parser for deterministic balance and history serialization." },
      ],
    },
    metrics: ["Zero External Database Dependencies", "Sub-Millisecond CLI Execution", "Thread-Safe File Writes"],
  },
];

export const TECH_CAPABILITIES = [
  {
    category: "Backend & Systems",
    items: ["Java 17 / Spring Boot 3.2", "Spring Cloud Gateway (Microservices)", "Spring Security & BCrypt", "PostgreSQL & Drizzle ORM", "Docker & CI/CD Pipelines"],
  },
  {
    category: "AI & Vector Search",
    items: ["RAG Architecture", "LangChain & ChromaDB", "Google Gemini 2.0 Flash", "PyMuPDF Ingestion", "sentence-transformers"],
  },
  {
    category: "Frontend & Motion",
    items: ["React 19 & Next.js", "Tailwind CSS & TypeScript", "GSAP 3 + ScrollTrigger", "Three.js WebGL Shaders", "Lenis Smooth Scrolling"],
  },
  {
    category: "Engineering Principles",
    items: ["RESTful API Architecture", "JWT & Role-Based Access Control (RBAC)", "PostgreSQL ACID Triggers", "Offline-First State Persistence", "Clean Code & SOLID Design"],
  },
];

export const STATS = [
  { value: "3+", label: "Production Services", note: "Spring Boot Microservices & LangChain RAG" },
  { value: "7+", label: "Technical Projects", note: "Backend, AI, Web & C CLI Systems" },
  { value: "7+", label: "Verified Certifications", note: "U. Michigan, HarvardX, IBM, edX, ASU" },
  { value: "100%", label: "Code Rigor", note: "ACID Transactions & Automated Testing" },
];

export const CERTIFICATIONS = [
  { title: "Python for Everybody Specialization", issuer: "University of Michigan", year: "2026" },
  { title: "Programming for Data Science", issuer: "HarvardX", year: "2025" },
  { title: "Certified Entry-Level Python Programmer", issuer: "HarvardX", year: "2025" },
  { title: "Introduction to Cloud Computing", issuer: "IBM", year: "2026" },
  { title: "English Communication Skill", issuer: "Arizona State University", year: "2026" },
  { title: "Cybersecurity Fundamentals", issuer: "RIT", year: "2025" },
  { title: "Introduction to Cybersecurity", issuer: "edX", year: "2025" },
];

export const EXPERIENCE_RECORDS = [
  {
    role: "Lead Intern — IT & Business Operations",
    org: "PT Resik Cemerlang",
    period: "2025 – Present",
    desc: "Directed a 5-person intern team in live IT operations. Managed SLA ticket handling, weekly laptop maintenance (security patching, antivirus), and medical device specification quality control. Delivered weekly operational reports to senior management.",
  },
  {
    role: "Lead Intern — IT Hardware",
    org: "SMP Negeri 2 Batujajar",
    period: "2024",
    desc: "Executed full hardware maintenance cycles (fault diagnosis, component repair, printer servicing). Established hardware inventory & maintenance log system, reducing repeat-fault response time significantly.",
  },
];

export const ORGANIZATIONS = [
  {
    role: "Academic Staff",
    org: "HIMAMI (Informatics Student Association)",
    period: "2024 – Present",
    desc: "Coordinated academic development programs, peer-to-peer coding tutorials, and tech workshops for software engineering students.",
  },
  {
    role: "Master of Ceremony (MC) — Orientation",
    org: "Student Community Organization",
    period: "2025",
    desc: "Hosted official orientation ceremonies for incoming members, coordinating event rundowns and stage dynamics.",
  },
];
