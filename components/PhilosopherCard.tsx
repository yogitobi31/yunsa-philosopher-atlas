import { Philosopher } from "@/data/philosophers";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <article className="rounded-3xl border border-white/15 bg-slate-950/55 p-6 backdrop-blur-xl transition hover:border-white/30">
      <p className="text-xs tracking-[0.16em] text-cyan-200">{philosopher.category} · {philosopher.tradition}</p>
      <h3 className="mt-3 text-2xl font-semibold">{philosopher.name}</h3>
      <p className="mt-2 text-sm text-slate-200">{philosopher.oneLineSummary}</p>
      <div className="mt-4 space-y-3 text-sm">
        <p><span className="text-slate-400">핵심 흐름</span><br />{philosopher.coreFlow.join(" → ")}</p>
        <p><span className="text-slate-400">시험 포인트</span><br />{philosopher.examPoint}</p>
        <p><span className="text-slate-400">함정 포인트</span><br />{philosopher.trapPoint}</p>
        <p><span className="text-slate-400">비교</span><br />{philosopher.compareWith.join(" / ")}</p>
        <p><span className="text-slate-400">키워드</span><br />{philosopher.keywords.join(" / ")}</p>
      </div>
    </article>
  );
}
