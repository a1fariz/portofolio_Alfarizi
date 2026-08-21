import { ArrowRight, Server } from "lucide-react";
import { ProjectArchitecture } from "@/lib/types";

interface ArchitectureDetailsProps {
  architecture: ProjectArchitecture;
}

// Presentational architecture breakdown (summary + flow + modules).
// No modal chrome — reused by ArchitectureModal and the project detail page.
export default function ArchitectureDetails({
  architecture,
}: ArchitectureDetailsProps) {
  return (
    <>
      {/* Summary */}
      <p className="font-sans text-sm text-body leading-relaxed mb-6 bg-surface-soft/70 p-4 rounded-2xl border border-border/30">
        {architecture.summary}
      </p>

      {/* Architecture Flow */}
      <div className="mb-6">
        <h4 className="font-sans text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          Execution & Data Flow
        </h4>
        <div className="space-y-2">
          {architecture.flow.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2.5 rounded-md bg-surface-soft/70 border border-border/30 text-xs font-mono"
            >
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[11px] font-bold shrink-0">
                {idx + 1}
              </span>
              <span className="text-body-strong flex-1">{step}</span>
              {idx < architecture.flow.length - 1 && (
                <ArrowRight size={14} className="text-primary shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subsystem Components */}
      <div>
        <h4 className="font-sans text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          Core Engineering Modules
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {architecture.components.map((comp, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-surface-soft/70 border border-border/40 hover:border-primary/30 transition-colors"
            >
              <h5 className="font-sans text-xs font-semibold text-ink flex items-center gap-1.5 mb-1">
                <Server size={14} className="text-primary" />
                {comp.title}
              </h5>
              <p className="font-sans text-xs text-muted leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
