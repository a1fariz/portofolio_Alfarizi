import {
  Server,
  Sparkles,
  Globe,
  TerminalSquare,
  Code2,
  type LucideIcon,
} from "lucide-react";

// Per-category cover styling — a designed fallback when no screenshot exists.
// Shared by ProjectCard and the project detail page so both stay in sync.
const categoryCover: Record<string, { icon: LucideIcon; gradient: string }> = {
  "Java / Backend": {
    icon: Server,
    gradient: "from-amber-500/20 via-primary/10 to-transparent",
  },
  "AI & RAG": {
    icon: Sparkles,
    gradient: "from-violet-500/25 via-primary/15 to-transparent",
  },
  "Full-Stack Web": {
    icon: Globe,
    gradient: "from-cyan-500/25 via-primary/15 to-transparent",
  },
  "C Systems": {
    icon: TerminalSquare,
    gradient: "from-emerald-500/25 via-primary/10 to-transparent",
  },
};

const fallbackCover = {
  icon: Code2,
  gradient: "from-primary/20 via-indigo-500/10 to-transparent",
};

export function getProjectCover(category?: string) {
  return categoryCover[category ?? ""] ?? fallbackCover;
}
