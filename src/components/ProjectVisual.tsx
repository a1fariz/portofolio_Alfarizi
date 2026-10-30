import Image from "next/image";
import type { RealProject } from "@/data/realPortfolio";

export default function ProjectVisual({ project, priority = false }: { project: RealProject; priority?: boolean }) {
  if (project.screenshots?.length && project.mediaLayout !== "landscape") {
    return (
      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-[#eee4da] px-3 sm:gap-4 sm:px-6">
        {project.screenshots.map((shot, index) => (
          <div key={shot.src} className="relative h-[88%] min-w-0 flex-1">
            <Image src={shot.src} alt={shot.alt} fill priority={priority && index === 0} sizes="(max-width: 640px) 30vw, 360px" className="object-contain" />
          </div>
        ))}
      </div>
    );
  }

  return <Image src={project.image} alt={project.title} fill priority={priority} sizes="(max-width: 640px) 100vw, 720px" className={project.mediaLayout === "landscape" ? "bg-[#0c141e] object-contain" : "object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"} />;
}
