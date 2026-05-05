import Link from "next/link";
import { Philosopher } from "@/data/philosophers";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link href={`/philosophers/${philosopher.id}`} className="group rounded-3xl border border-white/10 bg-slate-900/50 p-5 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-atlas-cyan/50 hover:bg-slate-900/80">
      <div className={`rounded-2xl bg-gradient-to-r ${philosopher.accent} p-4`}>
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="rounded-full border border-white/25 px-2 py-1">{philosopher.region}</span>
          <span className="text-slate-200">난이도 {'★'.repeat(philosopher.difficulty)}</span>
        </div>
        <div className="flex items-center gap-3"><span className="text-3xl font-bold text-white/90">{philosopher.symbol}</span><div><h3 className="text-xl font-semibold">{philosopher.name}</h3><p className="text-sm text-slate-200">{philosopher.period}</p></div></div>
      </div>
      <p className="mt-4 text-sm text-slate-200">{philosopher.oneLine}</p>
      <p className="mt-2 text-sm italic text-atlas-cyan">“{philosopher.quoteLike}”</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {philosopher.coreConcepts.slice(0, 4).map((concept) => <span key={concept} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs">{concept}</span>)}
      </div>
      <p className="mt-3 text-xs text-amber-300">시험 함정: {philosopher.trapPreview}</p>
      {philosopher.confusionPair && <p className="mt-1 text-xs text-slate-300">비교 추천: {philosopher.confusionPair}</p>}
    </Link>
  );
}
