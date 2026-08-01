import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectCover } from "@/lib/projectCover";
import { GithubIcon } from "@/components/BrandIcons";
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
      <div className="section-container py-16 md:py-24 max-w-3xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="text-link inline-flex items-center gap-1.5 text-sm mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Cover band */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-surface-dark mb-8">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
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
              <span className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-wider text-on-dark-soft/70">
                {project.category ?? "Project"}
              </span>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="badge-coral inline-block">{project.status}</span>
          {project.category && (
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              {project.category}
            </span>
          )}
        </div>

        <h1 className="font-serif text-display-sm md:text-display-md text-ink mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="font-sans text-base text-body leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="font-sans text-sm text-primary font-medium mb-6">
          ✦ {project.highlight}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="badge-pill text-[13px]">
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
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Layers size={22} />
              </div>
              <div>
                <span className="text-xs font-sans uppercase font-medium text-primary tracking-wider">
                  System Architecture
                </span>
                <h2 className="font-serif text-title-md md:text-title-lg text-ink">
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
