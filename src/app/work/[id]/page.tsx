import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { REAL_PROJECTS } from "@/data/realPortfolio";
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink, Cpu } from "lucide-react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return REAL_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = REAL_PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Architecture & Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Alfa Rizi Software Portfolio`,
      description: project.subtitle,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = REAL_PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next project in catalog
  const currentIndex = REAL_PROJECTS.findIndex((p) => p.id === id);
  const nextProject = REAL_PROJECTS[(currentIndex + 1) % REAL_PROJECTS.length];

  return (
    <SmoothScrollProvider>
      <CustomCursor />

      <main className="min-h-screen bg-[#f4f3ef] text-[#141414] selection:bg-[#141414] selection:text-[#f4f3ef] pb-24">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 bg-[#f4f3ef]/90 backdrop-blur-md border-b border-black/5 py-6 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <Link
              href="/#projects"
              data-cursor="BACK"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Index</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-neutral-400 hidden sm:inline">
                Case 0{currentIndex + 1} / 0{REAL_PROJECTS.length}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-black/5 font-mono text-[10px] uppercase font-bold text-black">
                {project.category}
              </span>
            </div>
          </div>
        </header>

        {/* Project Header Hero */}
        <section className="pt-16 pb-12 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 uppercase">
                <span>{project.year}</span>
                <span>·</span>
                <span>{project.status}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#141414] uppercase leading-[0.95]">
                {project.title}
              </h1>

              <p className="text-lg sm:text-2xl text-neutral-600 font-light max-w-3xl">
                {project.subtitle}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-black/10">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-white border border-black/5 text-neutral-700 px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Full-Bleed High Res Image */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-200 border border-black/5 shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-black/10 pb-8">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white border border-black/10 hover:border-black font-mono text-xs uppercase font-bold text-black flex items-center gap-2 transition-all shadow-sm"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase font-bold flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Platform</span>
                  </a>
                )}
              </div>

              <div className="font-mono text-xs text-neutral-500">
                ↳ {project.highlight}
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Architecture Breakdown */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Narrative Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Engineering Scope
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-black uppercase">
                  Problem &amp; System Purpose
                </h2>
              </div>

              <p className="text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-black/5 font-mono text-xs shadow-sm space-y-1"
                  >
                    <span className="text-neutral-400 block text-[10px] uppercase">Specification</span>
                    <span className="text-black font-bold block">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architecture Flow & Components */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                  <Cpu className="w-5 h-5 text-black shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-black uppercase">
                      Architecture Blueprint
                    </h3>
                    <p className="font-mono text-xs text-neutral-500">
                      {project.architecture.summary}
                    </p>
                  </div>
                </div>

                {/* Flow Sequence */}
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block">
                    Execution Data Pipeline
                  </span>
                  <div className="space-y-2 font-mono text-xs text-neutral-600">
                    {project.architecture.flow.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#f4f3ef] border border-black/5 flex items-start gap-3"
                      >
                        <span className="text-black font-bold">0{idx + 1}.</span>
                        <span className="break-words">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subsystem Components */}
                <div className="space-y-3 pt-2 border-t border-black/5">
                  <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block">
                    Subsystem Decomposition
                  </span>
                  <div className="space-y-3 font-mono text-xs">
                    {project.architecture.components.map((comp, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-black font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{comp.title}</span>
                        </div>
                        <p className="text-neutral-600 font-light pl-3">
                          {comp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Footer Bar */}
        <section className="pt-20 px-6 md:px-12 border-t border-black/10 mt-12">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Next Production Case
              </span>
              <h3 className="text-3xl sm:text-5xl font-bold text-black uppercase mt-1">
                {nextProject.title}
              </h3>
              <p className="font-mono text-xs text-neutral-600">
                {nextProject.subtitle}
              </p>
            </div>

            <Link
              href={`/work/${nextProject.id}`}
              data-cursor="NEXT"
              className="px-8 py-4 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-md"
            >
              <span>Explore Next Case</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
