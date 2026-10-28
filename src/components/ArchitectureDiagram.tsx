import { ArrowDown } from "lucide-react";

export default function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <figure>
      <figcaption className="mb-5 text-sm font-semibold text-neutral-900">
        Main flow
      </figcaption>
      <ol aria-label="System flow" className="mx-auto max-w-md">
        {steps.map((step, index) => (
          <li key={step}>
            {index > 0 && (
              <div aria-hidden="true" className="flex h-9 items-center justify-center text-neutral-500">
                <ArrowDown className="h-6 w-6" strokeWidth={1.5} />
              </div>
            )}
            <div className={`relative rounded-2xl border px-5 py-4 text-center ${
              index === 0
                ? "border-[#18392d] bg-[#18392d] text-white"
                : "border-black/15 bg-[#f4f3ef] text-neutral-800"
            }`}>
              <span className={`mb-1.5 block font-mono text-[10px] uppercase tracking-widest ${index === 0 ? "text-white/70" : "text-neutral-500"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="break-words text-sm font-medium leading-relaxed">{step}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
