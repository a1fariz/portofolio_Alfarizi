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
  linkedin: 'https://www.linkedin.com/in/alfa-rizi-65b483412',
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
    certifications: 'Certifications & Credentials',
  },
  id: {
    summary: 'Ringkasan Profesional',
    skills: 'Keahlian Teknis',
    experience: 'Pengalaman Kerja & Magang',
    education: 'Pendidikan & Pelatihan',
    certifications: 'Sertifikasi & Kredensial',
  },
};

// ---------- Shared experience (per language) ----------
const experience = {
  en: [
    {
      role: 'Lead Intern — IT & Business Operations',
      company: 'PT Resika Cemerlang (Pasim Group)',
      location: 'Bandung, Indonesia',
      period: '2025 – Sep 2026',
      bullets: [
        'Directed a 5-person intern team managing day-to-day IT support operations, hardware diagnostics, and workstation SLA ticket compliance.',
        'Enforced OS security patching, software configurations, and antivirus definition updates across corporate laptops.',
        'Validated technical specifications across thousands of medical device asset entries, ensuring database integrity and audit readiness.',
      ],
    },
  ],
  id: [
    {
      role: 'Lead Intern — IT & Business Operations',
      company: 'PT Resika Cemerlang (Pasim Group)',
      location: 'Bandung, Indonesia',
      period: '2025 – September 2026',
      bullets: [
        'Memimpin tim beranggotakan 5 intern dalam operasional dukungan teknis IT, diagnosa hardware, dan kepatuhan SLA tiket pemeliharaan.',
        'Mengelola instalasi patch keamanan OS, konfigurasi software, dan pembaruan definisi antivirus pada puluhan laptop operasional.',
        'Melakukan validasi spesifikasi teknis pada ribuan entri data inventaris alat medis guna menjamin akurasi dan kesiapan audit.',
      ],
    },
  ],
};

// ---------- Shared education (per language) ----------
const education = {
  en: [
    {
      institution: 'Universitas Nasional PASIM',
      degree: 'Associate Degree in Informatics Management (D3) — GPA: 3.78 / 4.00',
      location: 'Bandung, Indonesia',
      period: 'Currently writing final project',
      bullets: [
        'PUB Intensive Technical Scholarship (2024 – Present): Logic & C, Data Structures, Relational Databases, Advanced Java Development, and React Development.',
        'Intensive React Front-End Development Training (Sep 2026); Fundamental Back-End Programming with Java and Git & GitHub Training (Jan 2026).',
        'Web Programming Training (Aug 2025); Database and Data Structure Training (May 2025).',
      ],
    },
  ],
  id: [
    {
      institution: 'Universitas Nasional PASIM',
      degree: 'D3 Manajemen Informatika — IPK: 3.78 / 4.00',
      location: 'Bandung, Indonesia',
      period: 'Sedang menyusun tugas akhir',
      bullets: [
        'Penerima Beasiswa Pelatihan Intensif PUB (2024 – Sekarang): Logika Pemrograman, Struktur Data, Database Relasional, Java Lanjutan, dan Pengembangan React.',
        'Pelatihan Intensif React Front-End (Sep 2026); Fundamental Back-End Programming dengan Java dan Git & GitHub (Jan 2026).',
        'Pelatihan Web Programming (Agu 2025); Database dan Struktur Data (Mei 2025).',
      ],
    },
  ],
};

// ---------- Shared certifications (per language) ----------
const certifications = {
  en: [
    { title: 'Python for Everybody Specialization', issuer: 'University of Michigan', year: '2026' },
    { title: 'Programming for Data Science with Python', issuer: 'HarvardX', year: '2025' },
    { title: 'Certified Entry-Level Python Programmer (PCEP)', issuer: 'Python Institute', year: '2025' },
    { title: 'Introduction to Cloud Computing', issuer: 'IBM', year: '2026' },
  ],
  id: [
    { title: 'Spesialisasi Python for Everybody', issuer: 'University of Michigan', year: '2026' },
    { title: 'Programming for Data Science with Python', issuer: 'HarvardX', year: '2025' },
    { title: 'Certified Entry-Level Python Programmer (PCEP)', issuer: 'Python Institute', year: '2025' },
    { title: 'Pengenalan Cloud Computing', issuer: 'IBM', year: '2026' },
  ],
};

// One project catalog keeps implementation facts consistent across role tracks.
// Each track chooses its own ordering, emphasis, and project-specific bullets.
const projectCatalog = {
  catat: {
    title: 'Catat Uang - Offline-First Personal Finance',
    tech: 'Go, PostgreSQL, Flutter / Dart, SQLite',
    year: '2026',
    github: 'https://github.com/a1fariz/CatatUang',
    bullets: [
      'Built a Go API with account-scoped financial records, revocable sessions, version checks, and idempotent bill payments.',
      'Implemented opt-in transaction/bill sync through persistent SQLite outboxes, conflict review, encrypted backups, and account recovery.',
      'Recorded backend PostgreSQL/race and Android emulator CI passed on 27 Oct 2026; public production release remains pending.',
    ],
  },
  reloop: {
    title: 'ReLoop - Circular Commerce & Escrow',
    tech: 'Java 17, Quarkus, PostgreSQL, Redis, Next.js',
    year: '2026',
    github: 'https://github.com/a1fariz/ReLoop',
    demo: 'https://reloop.biz.id',
    bullets: [
      'Developed a modular monolith with ArchUnit boundary checks, double-entry escrow journals, and a transactional outbox worker.',
      'Used pessimistic row locks, a partial unique index, and 15-minute checkout leases to coordinate access to inventory.',
      'Integrated the Next.js client with TanStack Query, checkout countdowns, and Redis-backed catalog caching.',
    ],
  },
  apex: {
    title: 'ApexGrid - Race Ticket Reservation',
    tech: 'Java, Spring Boot, Spring Cloud Gateway, PostgreSQL, React',
    year: '2026',
    github: 'https://github.com/a1fariz/ApexGrid',
    bullets: [
      'Built gateway, user, and race-ticket services with JWT/RBAC and a React administration interface.',
      'Implemented PostgreSQL inventory triggers and a worker that expires unpaid reservations after 30 minutes.',
      'Added PDF tickets with QR codes, API documentation, and Docker Compose configuration.',
    ],
  },
  study: {
    title: 'StudyMate AI - RAG Study Assistant',
    tech: 'Python, FastAPI, ChromaDB, PyMuPDF, Gemini',
    year: '2026',
    github: 'https://github.com/a1fariz/StudyMateAI',
    bullets: [
      'Implemented PDF extraction, chunking, vector indexing, and retrieval with source-page citations for generated answers.',
      'Integrated Gemini for summaries, quizzes, flashcards, and study plans; added authentication, rate limiting, and automated checks.',
    ],
  },
  arte: {
    title: 'Arte - Interactive Art Archive',
    tech: 'React, Vite, Tailwind CSS, The Met API, Web Audio API',
    year: '2026',
    github: 'https://github.com/a1fariz/arte',
    demo: 'https://www.arte.my.id/',
    bullets: [
      'Built interactive art galleries, catalog search/filtering, and Curator/Visitor interface flows using The Met collection API.',
      'Implemented validated curation forms, focus-trapped dialogs, localStorage persistence, bilingual content, and browser audio feedback.',
    ],
  },
  ielts: {
    title: 'Vanguard IELTS - Practice & Vocabulary Review',
    tech: 'React, TypeScript, Vite, Tailwind CSS, Web Speech API',
    year: '2026',
    github: 'https://github.com/a1fariz/Vanguard-IELTS',
    demo: 'https://vanguard-ielts.alfarizi.my.id',
    bullets: [
      'Developed listening, reading, writing, and speaking practice interfaces with progress and mistake-review flows.',
      'Implemented spaced-repetition vocabulary review and a shadowing studio using browser speech synthesis.',
    ],
  },
  finance: {
    title: 'Finance Feasibility - Valuation & AI Reports',
    tech: 'React, Express, PostgreSQL, Drizzle ORM, Gemini',
    year: '2026',
    github: 'https://github.com/a1fariz/finance-feasibility',
    demo: 'https://finance-feasibility.alfarizi.my.id',
    bullets: [
      'Built investment-scenario interfaces and calculations for NPV, IRR, ROI, and payback period.',
      'Integrated Gemini-generated report narratives with a React client, Express API, PostgreSQL persistence, and Firebase authentication.',
    ],
  },
  financeall: {
    title: 'FinanceAll - Personal Finance MVC',
    tech: 'Java, Spring Boot, Thymeleaf, PostgreSQL, Flyway',
    year: '2026',
    github: 'https://github.com/a1fariz/financeall_project_java_alfariz',
    bullets: [
      'Built Spring MVC finance flows for transactions, savings goals, and a financial dashboard backed by PostgreSQL.',
      'Implemented role-based account flows, BCrypt password hashing, and versioned schema changes with Flyway.',
    ],
  },
};

function project(id, overrides = {}) {
  return { ...projectCatalog[id], ...overrides };
}

const backendSkills = [
  { category: 'Languages', items: 'Go, Java, SQL; additional Python and TypeScript experience' },
  { category: 'API Development', items: 'net/http, pgx, Quarkus, Spring Boot, Spring Cloud Gateway, OpenAPI' },
  { category: 'Data & Consistency', items: 'PostgreSQL, SQLite, Redis, Flyway, database transactions, row locks, idempotency' },
  { category: 'Auth & Verification', items: 'Argon2id / BCrypt, revocable sessions, JWT / RBAC, race detection, integration tests' },
  { category: 'Delivery & Tools', items: 'Docker, GitHub Actions, JUnit, ArchUnit, Testcontainers, Git, IntelliJ IDEA' },
];

const webSkills = [
  { category: 'Web Development', items: 'TypeScript, JavaScript, React, Next.js App Router, Vite, Tailwind CSS' },
  { category: 'UI & State', items: 'Responsive layouts, validated forms, focus management, TanStack Query, localStorage' },
  { category: 'Browser APIs', items: 'Web Speech, Web Audio, Canvas, IntersectionObserver, REST API integration' },
  { category: 'Additional Clients', items: 'Flutter / Dart, SQLite, offline state and synchronization interfaces' },
  { category: 'Tools', items: 'Git, npm, Docker, GitHub Actions, browser inspection' },
];

const softwareSkills = [
  { category: 'Languages', items: 'Go, Java, TypeScript / JavaScript, Python, Dart, SQL' },
  { category: 'Backend & Data', items: 'net/http, pgx, Quarkus, Spring Boot, FastAPI, PostgreSQL, SQLite, Redis' },
  { category: 'Web & Mobile', items: 'React, Next.js, Vite, Tailwind CSS, Flutter, REST API integration' },
  { category: 'AI Applications', items: 'RAG, ChromaDB, Gemini integration, PyMuPDF, vector search' },
  { category: 'Verification & Tools', items: 'Integration tests, Go race detector, JUnit, ArchUnit, Docker, GitHub Actions, Git' },
];

const roleContent = {
  general: {
    fileName: 'Alfarizi_CV_Software_Engineer.pdf',
    alias: 'Alfarizi_Software.pdf',
    targetRole: 'Software Developer',
    projectsTitle: 'Selected Software Projects',
    summary: 'Software developer with project experience across Go/Java APIs, React/Next.js web interfaces, Flutter mobile applications, and Python AI integrations. Focused on clear application flows, database consistency, and automated verification. D3 Informatics Management student at Universitas Nasional PASIM, GPA 3.78/4.00; currently writing final project.',
    skills: softwareSkills,
    projects: [project('catat'), project('reloop', { bullets: projectCatalog.reloop.bullets.slice(0, 2) }), project('arte'), project('study')],
  },
  backend: {
    fileName: 'Alfarizi_Junior_Backend_EN.pdf',
    targetRole: 'Junior Backend Developer | Go & Java',
    projectsTitle: 'Selected Backend Projects',
    summary: 'Junior backend developer building Go and Java APIs with PostgreSQL. Project work includes account isolation, revocable sessions, idempotent payments, versioned synchronization, and database integration tests. D3 Informatics Management student; currently writing final project.',
    skills: backendSkills,
    projects: [project('catat'), project('reloop'), project('apex')],
  },
  java: {
    fileName: 'Alfarizi_CV_Java_Backend.pdf',
    alias: 'Alfarizi_Java.pdf',
    targetRole: 'Java Backend Developer',
    projectsTitle: 'Selected Java & Database Projects',
    summary: 'Java backend developer with Quarkus and Spring Boot project experience: modular service boundaries, JWT/RBAC, double-entry journal logic, inventory coordination, and PostgreSQL schema migrations. Additional Go API and Flutter experience. D3 Informatics Management student; currently writing final project.',
    skills: [
      { category: 'Java Backend', items: 'Java 17, Quarkus, Spring Boot, Spring Cloud Gateway, Hibernate / JPA' },
      { category: 'Database Engineering', items: 'PostgreSQL, Flyway, SQL triggers/views, row locks, Redis, transactional outbox' },
      { category: 'Verification', items: 'JUnit, ArchUnit, Testcontainers, API integration testing' },
      { category: 'Additional Stack', items: 'Go, net/http, pgx, Flutter / Dart, SQLite' },
      { category: 'Tools', items: 'Docker, Docker Compose, GitHub Actions, Git, IntelliJ IDEA, OpenAPI' },
    ],
    projects: [project('reloop'), project('apex'), project('financeall'), project('catat', { bullets: [projectCatalog.catat.bullets[0], projectCatalog.catat.bullets[2]] })],
  },
  fullstack: {
    fileName: 'Alfarizi_CV_Full_Stack_Developer.pdf',
    alias: 'Alfarizi_FullStack.pdf',
    targetRole: 'Full-Stack Developer',
    projectsTitle: 'Selected Full-Stack Projects',
    summary: 'Full-stack developer connecting React/Next.js interfaces with Java, Go, and Express APIs. Project experience includes account flows, financial dashboards, database migrations, client state, and offline synchronization. D3 Informatics Management student; currently writing final project.',
    skills: [
      ...webSkills.slice(0, 2),
      { category: 'APIs & Data', items: 'Java / Quarkus / Spring Boot, Go / net/http, Express, PostgreSQL, Redis, SQLite' },
      { category: 'Application Flows', items: 'Authentication, authorization, optimistic UI, transactions, Flutter offline synchronization' },
      { category: 'Delivery', items: 'Docker Compose, GitHub Actions, Git, OpenAPI, integration testing' },
    ],
    projects: [project('reloop'), project('apex', { bullets: projectCatalog.apex.bullets.slice(0, 2) }), project('finance'), project('catat', { bullets: projectCatalog.catat.bullets.slice(0, 2) })],
  },
  frontend: {
    fileName: 'Alfarizi_Frontend.pdf',
    targetRole: 'Frontend Developer',
    projectsTitle: 'Selected Interface & Client Projects',
    summary: 'Frontend developer building React, Next.js, and TypeScript interfaces, with additional Flutter experience. Implemented catalog filtering, validated forms, keyboard-focus handling, client state, browser audio/speech features, and offline account/sync flows. D3 Informatics Management student; currently writing final project.',
    skills: webSkills,
    projects: [
      project('arte'),
      project('ielts'),
      project('reloop', { tech: 'Next.js, TypeScript, TanStack Query, Tailwind CSS', bullets: [
        'Connected marketplace views to a Quarkus API using TanStack Query and a shared client authentication flow.',
        'Built checkout lease countdowns, optimistic client updates, and dashboard views for commerce and escrow data.',
      ] }),
      project('catat', { tech: 'Flutter / Dart, SQLite, REST API integration', bullets: [
        'Developed offline transaction/bill screens, local reminders, and optional account interfaces in Flutter.',
        'Built sync consent, conflict-review, recovery, and encrypted-backup flows while keeping local finance usable without signing in.',
      ] }),
    ],
  },
  ai: {
    fileName: 'Alfarizi_CV_AI_Python.pdf',
    alias: 'Alfarizi_AI.pdf',
    targetRole: 'Software Developer | Python & AI Applications',
    projectsTitle: 'Selected AI Applications & API Projects',
    summary: 'Software developer focused on Python/FastAPI services and practical AI integrations. Built document ingestion and retrieval flows, vector search, source-page citations, and Gemini-powered study/report tools. Additional Go/Java and full-stack project experience. D3 Informatics Management student; currently writing final project.',
    skills: [
      { category: 'Python & APIs', items: 'Python, FastAPI, asynchronous request handling, authentication, rate limiting' },
      { category: 'AI Applications', items: 'RAG, ChromaDB, sentence-transformers, PyMuPDF, Gemini API integration' },
      { category: 'Data & Web', items: 'SQL, PostgreSQL, SQLite, React, TypeScript, Express' },
      { category: 'Verification & Tools', items: 'Pytest, Ruff, Docker, GitHub Actions, Git; Go backend integration testing' },
    ],
    projects: [project('study'), project('finance'), project('catat', { title: 'Catat Uang - Additional Backend Engineering', bullets: [projectCatalog.catat.bullets[0], projectCatalog.catat.bullets[2]] })],
  },
  master: {
    fileName: 'Alfarizi_Master_Resume.pdf',
    targetRole: 'Software Developer | Backend, Web, Mobile & AI Applications',
    projectsTitle: 'Selected Development Portfolio',
    summary: 'Software developer with hands-on project experience across backend APIs, web interfaces, Flutter mobile applications, and AI integrations. Works with Go, Java, TypeScript, Python, Dart, and relational databases. D3 Informatics Management student at Universitas Nasional PASIM, GPA 3.78/4.00; currently writing final project.',
    skills: softwareSkills,
    projects: ['catat', 'reloop', 'apex', 'study', 'arte', 'ielts'].map(id => project(id, { bullets: projectCatalog[id].bullets.slice(0, 2) })),
  },
  mobile: {
    fileName: 'Alfarizi_Mobile.pdf',
    targetRole: 'Junior Flutter / Mobile Developer',
    projectsTitle: 'Selected Mobile Application',
    summary: 'Junior mobile developer building Flutter/Dart applications with SQLite persistence and Go API integration. Implemented offline finance screens, optional accounts, explicit synchronization, local reminders, encrypted backups, and recovery interfaces. D3 Informatics Management student; currently writing final project.',
    skills: [
      { category: 'Mobile Development', items: 'Flutter, Dart, asynchronous UI state, forms, REST API integration' },
      { category: 'Offline Data', items: 'SQLite / sqflite, persistent outboxes, idempotent retries, conflict and dataset recovery' },
      { category: 'Platform Integration', items: 'Session storage, encrypted file backups, local reminder scheduling' },
      { category: 'Verification', items: 'Flutter unit/widget tests, Android emulator integration tests, GitHub Actions' },
      { category: 'Additional Stack', items: 'Go, net/http, pgx, PostgreSQL, Git, Android development builds' },
    ],
    projects: [project('catat', { tech: 'Flutter / Dart, SQLite, Go API, Android', bullets: [
      'Implemented transaction/bill entry, financial lists, payment history, settings, and local reminders with SQLite persistence.',
      'Kept finance flows usable offline and without an account; added explicit account linking and manual synchronization.',
      'Persisted sync outboxes and built conflict review, dataset recovery, password recovery, and session-management interfaces.',
      'Added encrypted backup/restore flows and verified local storage/account behavior with unit, widget, and Android emulator tests.',
      'Produced a development APK. Production signing, real-device acceptance, store release, and iOS builds remain pending.',
    ] })],
  },
  support: {
    fileName: 'Alfarizi_ITSupport.pdf',
    targetRole: 'IT Support / Technical Operations',
    projectsTitle: 'Additional Technical Project',
    experienceFirst: true,
    summary: 'IT support and technical operations candidate with internship experience at PT Resika Cemerlang (Pasim Group). Coordinated a five-person intern team, supported workstation maintenance and hardware diagnostics, and validated medical-device asset records. Also develops software projects. D3 Informatics Management student; currently writing final project.',
    skills: [
      { category: 'Workstation Support', items: 'Hardware diagnostics, OS security patching, software configuration, antivirus updates' },
      { category: 'Operations', items: 'Support-ticket handling, team coordination, maintenance follow-up' },
      { category: 'Data Quality', items: 'Technical specification checks, asset-record validation, database integrity review' },
      { category: 'Additional Technical Skills', items: 'SQL, Git, Linux CLI; Go / Java / Flutter application development' },
    ],
    projects: [project('catat', { bullets: [
      'Built an offline finance application and Go API, working with local storage, account flows, and application troubleshooting.',
      'Documented setup, verification results, backup/restore procedures, and release prerequisites for project review.',
    ] })],
  },
};

const cvDataList = Object.values(roleContent).map(content => ({
  fileName: content.fileName,
  alias: content.alias,
  data: {
    ...contact,
    targetRole: content.targetRole,
    experienceFirst: content.experienceFirst,
    location: locationByLang.en,
    labels: { ...baseLabels.en, projects: content.projectsTitle },
    summary: content.summary,
    skills: content.skills,
    projects: content.projects,
    experience: experience.en,
    education: education.en,
    certifications: certifications.en,
  },
}));

async function generateAllPdfs() {
  console.log('Launching browser via Playwright...');
  const launchOptions = { headless: true };
  if (process.env.CHROME_PATH) launchOptions.executablePath = process.env.CHROME_PATH;
  else if (process.platform === 'win32' && fs.existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe')) {
    launchOptions.executablePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  }
  const browser = await chromium.launch(launchOptions);
  try {
    for (const item of cvDataList) {
      const page = await browser.newPage();
      try {
        await page.setContent(cvHtmlTemplate(item.data), { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        const outputPath = path.join(outputDir, item.fileName);
        const pdfBuffer = await page.pdf({
          path: outputPath,
          format: 'A4',
          printBackground: true,
          margin: { top: '0.28in', bottom: '0.28in', left: '0.42in', right: '0.42in' },
        });
        const pageCount = (pdfBuffer.toString('latin1').match(/\/Type\s*\/Page\b/g) || []).length;
        if (pageCount !== 1) throw new Error(`${item.fileName}: expected one page, generated ${pageCount}`);
        if (item.alias) fs.copyFileSync(outputPath, path.join(outputDir, item.alias));
        console.log(`Generated: ${item.fileName} (${pageCount} page)`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
  console.log('All nine role-specific resumes and four legacy aliases generated successfully.');
}

generateAllPdfs().catch(err => {
  console.error('Error generating PDFs:', err);
  process.exitCode = 1;
});
