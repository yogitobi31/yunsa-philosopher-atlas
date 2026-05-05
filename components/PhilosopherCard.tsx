import Link from "next/link";
import { Philosopher } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link href={`/philosophers/${philosopher.id}`} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-5 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-atlas-cyan/60 hover:bg-slate-900/80">
      <span className="absolute -right-3 top-0 text-8xl font-black text-white/10">{philosopher.symbol}</span>
      <div className={`rounded-2xl bg-gradient-to-r ${philosopher.accent} p-4`}><div className="mb-3"><PhilosopherAvatar id={philosopher.id} name={philosopher.name} size={68} /></div>
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="rounded-full border border-white/25 px-2 py-1">{philosopher.region}</span>
          <span className="text-slate-100">난이도 {'★'.repeat(philosopher.difficulty)}</span>
        </div>
        <h3 className="text-xl font-semibold">{philosopher.name}</h3>
        <p className="text-sm text-slate-100">{philosopher.period}</p>
      </div>
      <p className="mt-4 text-sm text-slate-200">{philosopher.oneLine}</p>
      <p className="mt-2 rounded-lg border border-atlas-cyan/30 bg-atlas-cyan/10 px-3 py-2 text-sm text-atlas-cyan">“{philosopher.quoteLike}”</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {philosopher.coreConcepts.slice(0, 4).map((concept) => <span key={concept} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs">{concept}</span>)}
      </div>
      <p className="mt-3 inline-flex rounded-full border border-amber-300/40 bg-amber-400/15 px-3 py-1 text-xs text-amber-200">시험 함정: {philosopher.trapPreview}</p>
      {philosopher.confusionPair && <p className="mt-2 text-xs text-slate-300">헷갈리는 상대: {philosopher.confusionPair}</p>}<p className="mt-2 text-xs text-slate-400">검수 상태: {philosopher.reviewStatus}</p>
    </Link>
  );
}
