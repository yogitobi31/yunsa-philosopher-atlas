import Link from "next/link";
import { Philosopher } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link href={`/philosophers/${philosopher.id}`} className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-slate-900/65 p-6 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-atlas-cyan/60 hover:bg-slate-900/80">
      <span className="pointer-events-none absolute -right-3 top-0 text-8xl font-black text-white/10">{philosopher.symbol}</span>
      <div className="relative z-10 flex min-w-0 items-start gap-4" style={{ wordBreak: "keep-all", whiteSpace: "normal" }}>
        <PhilosopherAvatar id={philosopher.id} name={philosopher.name} size={72} />
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-semibold leading-tight">{philosopher.name}</h3>
          <p className="mt-1 text-xs text-slate-300">{philosopher.period} · {philosopher.region}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-white/25 px-2.5 py-1">난이도 {'★'.repeat(philosopher.difficulty)}</span>
            <span className="rounded-full border border-white/25 px-2.5 py-1">검수 {philosopher.reviewStatus}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-200">{philosopher.oneLine}</p>
      {philosopher.quoteLike && <p className="mt-3 rounded-xl border border-atlas-cyan/30 bg-atlas-cyan/10 px-3 py-2 text-sm text-atlas-cyan">“{philosopher.quoteLike}”</p>}
      <div className="mt-4 flex flex-wrap gap-2">{philosopher.coreConcepts.slice(0, 4).map((concept) => <span key={concept} className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-xs">{concept}</span>)}</div>
      <p className="mt-3 inline-flex rounded-full border border-amber-300/35 bg-amber-400/15 px-3 py-1 text-xs text-amber-200">시험 함정: {philosopher.trapPreview}</p>
      {philosopher.confusionPair && <p className="mt-2 text-xs text-slate-300">헷갈리는 상대: {philosopher.confusionPair}</p>}
    </Link>
  );
}
