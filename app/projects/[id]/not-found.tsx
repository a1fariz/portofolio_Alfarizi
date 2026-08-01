import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center">
      <div className="section-container text-center max-w-md">
        <p className="font-mono text-sm text-primary uppercase tracking-wider mb-3">
          404
        </p>
        <h1 className="font-serif text-display-sm md:text-display-md text-ink mb-4">
          Project Not Found
        </h1>
        <p className="font-sans text-base text-muted mb-8">
          The project you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link href="/#projects" className="btn-primary inline-flex gap-2">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
