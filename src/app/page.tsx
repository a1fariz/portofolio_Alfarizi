import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import {
  REAL_PROJECTS,
  TECH_CAPABILITIES,
  EDUCATION_RECORDS,
  EXPERIENCE_RECORDS,
  ORGANIZATIONS,
  CERTIFICATIONS,
} from "@/data/realPortfolio";
import { cvVariants } from "@/data/cv";
import Reveal from "@/components/Reveal";
import SpinningBadge from "@/components/SpinningBadge";

const EMAIL = "alfarizi.developer@gmail.com";
const GITHUB = "https://github.com/a1fariz";
const LINKEDIN = "https://www.linkedin.com/in/alfa-rizi-65b483412";

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f4f3ef]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold uppercase tracking-widest">
          Alfa Rizi
        </a>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider sm:gap-6">
          <a href="#projects" className="hidden text-neutral-600 transition-colors hover:text-black sm:inline">Projects</a>
          <a href="#about" className="hidden text-neutral-600 transition-colors hover:text-black sm:inline">About</a>
          <a href={`mailto:${EMAIL}`} className="text-neutral-600 transition-colors hover:text-black">Contact</a>
          <a
            href={cvVariants[0].paths.en}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#141414] px-4 py-1.5 font-bold text-[#f4f3ef] transition-colors hover:bg-neutral-800"
          >
            <FileText className="h-3.5 w-3.5" />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="fade-up font-mono text-xs uppercase tracking-widest text-neutral-500" style={{ animationDelay: "0.1s" }}>
        Junior Backend Developer · Software Engineer
      </p>

      <h1 className="mt-6 text-[clamp(2.6rem,9vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
        <span className="mask-line">
          <span style={{ animationDelay: "0.15s" }}>Building quiet,</span>
        </span>
        <span className="mask-line">
          <span style={{ animationDelay: "0.27s" }}>powerful systems</span>
        </span>
        <span className="mask-line">
          <span style={{ animationDelay: "0.39s" }}>
            <span className="text-neutral-500 italic normal-case">&amp; reliable</span> architectures.
          </span>
        </span>
      </h1>

      <div className="draw-line mt-8 border-t border-black/10 pt-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="fade-up max-w-md text-base font-light leading-relaxed text-neutral-700 sm:text-lg" style={{ animationDelay: "0.55s" }}>
            I&apos;m Alfa Rizi — focused on reliable APIs, distributed services
            (Spring Boot), asynchronous RAG pipelines (LangChain), and practical
            AI integrations.
          </p>
          <div className="fade-up" style={{ animationDelay: "0.65s" }}>
            <SpinningBadge />
          </div>
        </div>

        <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.75s" }}>
          <a
            href="#projects"
            className="rounded-full bg-[#141414] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#f4f3ef] transition-colors hover:bg-neutral-800"
          >
            View Projects
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:border-black"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-24">
      <Reveal>
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">Projects</h2>
          <span className="font-mono text-xs text-neutral-500">01 — {String(REAL_PROJECTS.length).padStart(2, "0")}</span>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {REAL_PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 80}>
            <Link
              href={`/work/${project.id}`}
              className="group block h-full rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-bold tracking-tight">{project.title}</h3>
                  <span className="font-mono text-[10px] uppercase text-neutral-400">{project.year}</span>
                </div>
                <p className="mt-1 text-sm font-light text-neutral-600">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#f4f3ef] px-2.5 py-0.5 font-mono text-[10px] text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <Reveal>
        <div className="mb-10 border-b border-black/10 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">Capabilities</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {TECH_CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.category} delay={(i % 2) * 80}>
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest">{cap.category}</h3>
              <ul className="mt-3 space-y-1.5 text-sm font-light text-neutral-700">
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-24">
      <Reveal>
        <div className="mb-10 border-b border-black/10 pb-4">
          <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">About</h2>
        </div>
      </Reveal>
      <div className="space-y-12">
        <Reveal>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Education &amp; Training</h3>
            <div className="mt-4 space-y-6">
              {EDUCATION_RECORDS.map((rec) => (
                <div key={rec.title} className="grid gap-1 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-xs text-neutral-400">{rec.period}</span>
                  <div>
                    <p className="font-bold">{rec.title} · {rec.org}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-600">{rec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Experience</h3>
            <div className="mt-4 space-y-6">
              {EXPERIENCE_RECORDS.map((rec) => (
                <div key={rec.role} className="grid gap-1 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-xs text-neutral-400">{rec.period}</span>
                  <div>
                    <p className="font-bold">{rec.role} · {rec.org}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-600">{rec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Organizations</h3>
            <div className="mt-4 space-y-6">
              {ORGANIZATIONS.map((org) => (
                <div key={org.role} className="grid gap-1 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-xs text-neutral-400">{org.period}</span>
                  <div>
                    <p className="font-bold">{org.role} · {org.org}</p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-600">{org.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest">Certifications</h3>
            <ul className="mt-4 space-y-2">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="grid gap-1 sm:grid-cols-[160px_1fr]">
                  <span className="font-mono text-xs text-neutral-400">{cert.year}</span>
                  <span className="text-sm font-light">
                    {cert.title} — <span className="text-neutral-500">{cert.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">Let&apos;s talk.</h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 inline-block font-mono text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            {EMAIL}
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="text-neutral-600 transition-colors hover:text-black">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-neutral-600 transition-colors hover:text-black">
              LinkedIn
            </a>
            {cvVariants.map((cv) => (
              <a
                key={cv.id}
                href={cv.paths.en}
                className="text-neutral-600 transition-colors hover:text-black"
              >
                CV — {cv.label}
              </a>
            ))}
          </div>
          <p className="mt-16 font-mono text-xs text-neutral-400">
            © {new Date().getFullYear()} Alfa Rizi. Built with Next.js.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Capabilities />
        <About />
      </main>
      <Footer />
    </div>
  );
}
