export default function SpinningBadge({ text }: { text?: string }) {
  const label = text ?? "ALFA RIZI · BACKEND & AI · PORTFOLIO · ";
  return (
    <div
      aria-hidden="true"
      className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28"
    >
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-neutral-600 font-mono text-[8.5px] uppercase">
          <textPath href="#badge-circle">{label}</textPath>
        </text>
      </svg>
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#141414]" />
    </div>
  );
}
