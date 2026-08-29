"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Play, Copy, Check, Database } from "lucide-react";
import { sounds } from "@/lib/sound";

interface InspectorEndpoint {
  id: string;
  name: string;
  project: string;
  method: "GET" | "POST" | "PATCH";
  path: string;
  desc: string;
  headers: Record<string, string>;
  requestPayload?: Record<string, unknown>;
  responseGenerator: (params: number | string | { inv: number; rate: number }) => Record<string, unknown>;
  schemaDetails: string[];
}

export default function SystemPayloadInspector() {
  const [activeTab, setActiveTab] = useState<string>("apexgrid");
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState<Record<string, unknown> | null>(null);

  // Dynamic user editable params
  const [raceSeats, setRaceSeats] = useState<number>(2);
  const [ragQuery, setRagQuery] = useState<string>("Explain neural backpropagation with page citations");
  const [discountRate, setDiscountRate] = useState<number>(10);
  const [initialInvestment, setInitialInvestment] = useState<number>(50000);

  const endpoints: Record<string, InspectorEndpoint> = {
    apexgrid: {
      id: "apexgrid",
      name: "ApexGrid — Concurrency Ticket Booking",
      project: "Java 17 / Spring Boot 3.2",
      method: "POST",
      path: "/api/v1/races/monza-2026/reservations",
      desc: "Executes atomic seat locking via PostgreSQL triggers and starts a 30-minute auto-expiry scheduler.",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "Content-Type": "application/json",
        "X-RateLimit-Remaining": "58",
      },
      requestPayload: {
        raceId: "MONZA-2026-F1",
        tier: "GRANDSTAND_A",
        seatCount: raceSeats,
        idempotencyKey: "idem_8f9a23b1-09cd",
      },
      responseGenerator: (params) => {
        const seats = typeof params === "number" ? params : 2;
        return {
          status: 201,
          code: "RESERVATION_CONFIRMED",
          data: {
            reservationId: "RES-98214-MNZ",
            expiresInMinutes: 30,
            allocatedSeats: Array.from({ length: seats }, (_, i) => `G-A-${140 + i}`),
            totalPrice: `$${seats * 420}.00`,
            currency: "USD",
            lockType: "POSTGRES_ROW_LEVEL_PESSIMISTIC",
          },
          telemetry: {
            dbTriggerLatency: "4.2ms",
            totalExecution: "18.4ms",
            acidLockVerified: true,
          },
        };
      },
      schemaDetails: [
        "Table: race_inventory (seat_id PK, race_id FK, status ENUM, locked_until TIMESTAMP)",
        "PostgreSQL Trigger: verify_and_decrement_quota_trigger()",
        "Scheduler: @Scheduled(fixedRate = 60000) expireUnpaidReservations()",
      ],
    },
    studymate: {
      id: "studymate",
      name: "StudyMate AI — Asynchronous RAG Pipeline",
      project: "Python / LangChain / ChromaDB",
      method: "POST",
      path: "/api/v1/rag/synthesize",
      desc: "Performs semantic vector search across ChromaDB textbook embeddings and injects context into Gemini 2.0 Flash.",
      headers: {
        "Authorization": "Bearer studymate_sec_token_90x",
        "Content-Type": "application/json",
        "X-Vector-Index": "chroma-cosine-1536",
      },
      requestPayload: {
        query: ragQuery,
        topK: 3,
        documentId: "deep_learning_goodfellow_ch6.pdf",
        includeCitations: true,
      },
      responseGenerator: (params) => {
        const query = typeof params === "string" ? params : "";
        return {
          status: 200,
          model: "Google Gemini 2.0 Flash",
          orchestration: "LangChain RAG Pipeline",
          retrievedContextChunks: [
            {
              page: 204,
              similarityScore: 0.942,
              chunkId: "dl-ch6-sec5-p204",
              excerpt: "Backpropagation algorithms compute gradient vector through chain rule...",
            },
            {
              page: 208,
              similarityScore: 0.918,
              chunkId: "dl-ch6-sec7-p208",
              excerpt: "Forward graph evaluation propagates activations before backward pass...",
            },
          ],
          synthesis: `Regarding '${query}': Backpropagation systematically evaluates gradients by decomposing multivariable calculus derivatives across computational DAG nodes. (Goodfellow et al., p. 204-208).`,
          generatedCards: 4,
          latencyMs: 164,
        };
      },
      schemaDetails: [
        "Vector Engine: ChromaDB Cosine Indexing with sentence-transformers",
        "Parser: PyMuPDF extracting exact page coordinates & metadata",
        "Rate Guard: Redis Token Bucket (60 req/min)",
      ],
    },
    finance: {
      id: "finance",
      name: "Finance Feasibility — Valuation Engine",
      project: "React 19 / Node.js / Drizzle ORM",
      method: "POST",
      path: "/api/v1/valuation/calculate-npv-irr",
      desc: "Computes Net Present Value (NPV), Internal Rate of Return (IRR), and Payback Period with multi-scenario sensitivity.",
      headers: {
        "Content-Type": "application/json",
        "X-ORM-Driver": "drizzle-orm/pg",
      },
      requestPayload: {
        initialOutflow: initialInvestment,
        discountRatePercentage: discountRate,
        annualCashflows: [18000, 24000, 28000, 32000, 35000],
        projectionYears: 5,
      },
      responseGenerator: (params) => {
        const payload = (typeof params === "object" && params !== null ? params : {}) as {
          inv?: number;
          rate?: number;
        };
        const inv = payload.inv ?? 50000;
        const rate = payload.rate ?? 10;
        const cashflows = [18000, 24000, 28000, 32000, 35000];
        const r = rate / 100;
        let npv = -inv;
        cashflows.forEach((cf, i) => {
          npv += cf / Math.pow(1 + r, i + 1);
        });

        return {
          status: 200,
          valuationVerdict: npv > 0 ? "FEASIBLE_HIGH_POTENTIAL" : "UNFEASIBLE_DEFICIT",
          financialMetrics: {
            netPresentValue: `$${Math.round(npv).toLocaleString()}`,
            internalRateOfReturn: "28.4%",
            returnOnInvestment: `${Math.round(((cashflows.reduce((a, b) => a + b, 0) - inv) / inv) * 100)}%`,
            paybackPeriod: "2.35 Years",
            breakEvenYear: 3,
          },
          aiStrategicSummary: `With an initial outlay of $${inv.toLocaleString()} at a ${rate}% discount hurdle, the project generates positive net surplus of $${Math.round(npv).toLocaleString()}.`,
          ormQueryTime: "2.1ms",
        };
      },
      schemaDetails: [
        "Drizzle Schema: projects table, scenarios table (one-to-many foreign keys)",
        "PostgreSQL Export: Vectorized PDF tables & Excel binary streams",
        "Gemini Advisory: Automated sensitivity analysis generation",
      ],
    },
  };

  const current = endpoints[activeTab];

  const handleExecute = () => {
    sounds.playClick();
    setExecuting(true);
    setTimeout(() => {
      let result;
      if (activeTab === "apexgrid") result = current.responseGenerator(raceSeats);
      else if (activeTab === "studymate") result = current.responseGenerator(ragQuery);
      else result = current.responseGenerator({ inv: initialInvestment, rate: discountRate });

      setExecutionResult(result);
      setExecuting(false);
      sounds.playChirp();
    }, 280);
  };

  const handleCopyCurl = () => {
    sounds.playClick();
    const curl = `curl -X ${current.method} "https://api.alfarizi.my.id${current.path}" \\\n  -H "Content-Type: application/json" \\\n  -d '${JSON.stringify(current.requestPayload, null, 2)}'`;
    navigator.clipboard.writeText(curl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#f4f3ef] text-[#141414] border-b border-black/5">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 block mb-1">
              Interactive System Inspector
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] uppercase">
              Live API &amp; Payload Sandbox
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-600 max-w-md font-light">
            Directly test and inspect live API payloads, database triggers, and RAG vector pipelines built across Alfa Rizi&apos;s production systems.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-2">
          {Object.values(endpoints).map((ep) => (
            <button
              key={ep.id}
              onClick={() => {
                setActiveTab(ep.id);
                setExecutionResult(null);
                sounds.playClick();
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === ep.id
                  ? "bg-[#141414] text-[#f4f3ef] font-bold shadow-md"
                  : "bg-white text-neutral-600 border border-black/5 hover:text-black"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{ep.name.split("—")[0]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Workspace Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Interactive Param Tuning & Request Headers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-black/5 space-y-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#141414] text-[#f4f3ef] font-bold">
                  {current.method}
                </span>
                <span className="text-neutral-500">{current.project}</span>
              </div>

              <div className="font-mono text-xs space-y-1">
                <span className="text-neutral-400 block">Endpoint Route</span>
                <span className="text-black font-bold block bg-neutral-100 p-2 rounded-xl overflow-x-auto text-[11px] sm:text-xs">
                  {current.path}
                </span>
              </div>

              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                {current.desc}
              </p>

              {/* Dynamic Parameter Tuning Controls */}
              <div className="space-y-4 pt-2 border-t border-black/5 font-mono text-xs">
                <span className="text-black font-bold block uppercase text-[11px]">
                  Simulate Parameters
                </span>

                {activeTab === "apexgrid" && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-neutral-500">Reserved Seats Count:</label>
                      <span className="text-black font-bold">{raceSeats} Seats</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={raceSeats}
                      onChange={(e) => setRaceSeats(Number(e.target.value))}
                      className="w-full accent-black cursor-pointer"
                    />
                  </div>
                )}

                {activeTab === "studymate" && (
                  <div className="space-y-1.5">
                    <label className="text-neutral-500">Natural Language RAG Query:</label>
                    <input
                      type="text"
                      value={ragQuery}
                      onChange={(e) => setRagQuery(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-50 border border-black/10 text-xs font-mono text-black focus:outline-none focus:border-black"
                    />
                  </div>
                )}

                {activeTab === "finance" && (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-neutral-500">Initial Outlay ($):</label>
                        <span className="text-black font-bold">${initialInvestment.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="20000"
                        max="150000"
                        step="5000"
                        value={initialInvestment}
                        onChange={(e) => setInitialInvestment(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-neutral-500">Discount Hurdle Rate (%):</label>
                        <span className="text-black font-bold">{discountRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="25"
                        value={discountRate}
                        onChange={(e) => setDiscountRate(Number(e.target.value))}
                        className="w-full accent-black cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <button
                  onClick={handleExecute}
                  disabled={executing}
                  className="flex-1 py-3 rounded-full bg-[#141414] text-[#f4f3ef] font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{executing ? "Dispatching..." : "Send Request"}</span>
                </button>

                <button
                  onClick={handleCopyCurl}
                  className="p-3 rounded-full bg-white border border-black/10 hover:border-black text-black transition-colors"
                  title="Copy cURL Command"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Architecture Schema Blueprint Highlights */}
            <div className="p-6 rounded-3xl bg-white border border-black/5 space-y-3 font-mono text-xs shadow-sm">
              <span className="text-black font-bold uppercase text-[11px] flex items-center gap-2">
                <Database className="w-3.5 h-3.5" />
                Underlying Engineering Spec
              </span>
              <ul className="space-y-2 text-neutral-600">
                {current.schemaDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-black font-bold">↳</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Live Terminal Response View */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c0c0c] border border-white/10 p-5 sm:p-8 text-white font-mono text-xs shadow-2xl flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
              <div className="space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="text-neutral-400 pl-2 text-[11px]">payload_inspector.json</span>
                  </div>

                  <span className="text-emerald-400 text-[10px] sm:text-[11px]">
                    {executionResult ? "STATUS: 200 OK / ACID COMPLIANT" : "AWAITING DISPATCH"}
                  </span>
                </div>

                {/* Response Code Block */}
                <div className="overflow-x-auto max-h-[380px] text-neutral-300 leading-relaxed font-mono text-[11px] sm:text-xs">
                  <pre>
                    {JSON.stringify(
                      executionResult ||
                        current.responseGenerator(
                          activeTab === "apexgrid"
                            ? raceSeats
                            : activeTab === "studymate"
                            ? ragQuery
                            : { inv: initialInvestment, rate: discountRate }
                        ),
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>

              {/* Bottom Console Note */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-500">
                <span>Directly simulated against local logic schemas</span>
                <span>Alfa Rizi · Production Ready 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
