import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectCover } from "@/lib/projectCover";
import { GithubIcon } from "@/components/BrandIcons";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ArchitectureDetails from "@/components/ArchitectureDetails";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return { title: "Project Not Found — Alfa Rizi" };
  }

  const title = `${project.title} — Alfa Rizi`;
  const description = project.description.slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://alfarizi.my.id/projects/${project.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const cover = getProjectCover(project.category);
  const CoverIcon = cover.icon;

  return (
<main className="min-h-screen bg-canvas">
      <ScrollProgress />
      <Navbar />
      <div className="section-container max-w-4xl py-28 md:py-36">

        {/* Back link */}
        <Link
          href="/#projects"
           className="text-link mb-10 inline-flex items-center gap-1.5 text-sm"

        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Cover band */}
         <div className="relative mb-10 aspect-video overflow-hidden border border-hairline bg-surface-dark">

          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          ) : (
            <div
              className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${cover.gradient}`}
            >
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  color: "var(--color-primary, #cc785c)",
                }}
              />
              <CoverIcon
                size={56}
                strokeWidth={1.5}
                className="relative text-primary"
              />
              <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-wider text-muted/80">
                {project.category ?? "Project"}
              </span>
            </div>
          )}
        </div>

        {/* Header */}
         <div className="mb-5 flex flex-wrap items-center gap-3">

          <span className="badge-coral inline-block">{project.status}</span>
          {project.category && (
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              {project.category}
            </span>
          )}
        </div>

         <h1 className="mb-5 max-w-3xl font-heading text-display-sm leading-tight text-ink md:text-display-md">

          {project.title}
        </h1>

         <p className="mb-5 max-w-3xl font-sans text-sm leading-7 text-body md:text-base">

          {project.description}
        </p>

         <p className="mb-8 flex items-start gap-2 font-sans text-sm font-medium text-accent-cyan">
           <span className="font-bold text-primary">↳</span> {project.highlight}

        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="badge-pill text-[12px]">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

        {/* Architecture (only when present) */}
        {project.architecture && (
          <section className="border-t border-hairline pt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-glow-sm">
                <Layers size={20} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase font-medium text-accent-cyan tracking-wider">
                  System Architecture
                </span>
                <h2 className="font-heading text-title-md md:text-title-lg text-ink font-semibold">
                  Technical Breakdown
                </h2>
              </div>
            </div>
            <ArchitectureDetails architecture={project.architecture} />
          </section>
        )}
      </div>
    </main>
  );
}
