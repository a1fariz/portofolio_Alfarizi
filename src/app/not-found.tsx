import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#141414] flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-[#141414] selection:text-[#f4f3ef]">
      {/* Top Bar */}
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between font-mono text-xs text-neutral-500 uppercase tracking-widest border-b border-black/10 pb-6">
        <span>Alfa Rizi · Error 404</span>
        <span>Route Not Located</span>
      </div>

      {/* Center Editorial Monolith */}
      <div className="max-w-[1440px] mx-auto w-full my-auto py-16 space-y-6 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 block">
          404 / System Exception
        </span>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#141414] uppercase leading-none">
          Page Not <br />
          <span className="font-serif italic font-normal text-neutral-500">
            Found.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 font-light max-w-lg">
          The requested system node or case study is not present in the current production deployment index.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-full bg-white border border-black/10 text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-100 transition-all flex items-center gap-2 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Explore 7+ Projects</span>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500 border-t border-black/10 pt-6">
        <div>© 2026 Alfa Rizi. All systems verified.</div>
        <div>Status Code: 404 (Resource Missing)</div>
      </div>
    </main>
  );
}
