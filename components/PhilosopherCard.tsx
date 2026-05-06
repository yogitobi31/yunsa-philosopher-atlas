import { Philosopher } from "@/data/philosophers";

type PhilosopherCardProps = {
  philosopher: Philosopher;
  expanded: boolean;
  compact?: boolean;
  saved: boolean;
  onToggleExpand: () => void;
  onToggleSave: () => void;
};

export function PhilosopherCard({ philosopher, expanded, compact = false, saved, onToggleExpand, onToggleSave }: PhilosopherCardProps) {
  return (
    <article className="rounded-3xl border border-white/15 bg-slate-950/55 p-5 backdrop-blur-xl transition hover:border-white/30">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.16em] text-cyan-200">{philosopher.category} · {philosopher.tradition}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{philosopher.name}</h3>
          <p className="mt-2 text-sm text-slate-200">{philosopher.oneLineSummary}</p>
        </div>
        <button onClick={onToggleSave} className="rounded-full border border-cyan-200/30 px-3 py-1.5 text-xs text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-200/10">
          {saved ? "♥ 저장됨" : "♡ 저장"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {philosopher.coreFlow.map((step) => (
          <span key={step} className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300">{step}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
        <p className="text-xs text-slate-400">핵심 흐름: {philosopher.coreFlow.join(" → ")}</p>
        <button onClick={onToggleExpand} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-slate-100 transition hover:border-white/50">
          {expanded ? "접기" : "자세히"}
        </button>
      </div>

      {expanded && (
        <div className={`mt-4 grid gap-3 text-sm text-slate-200 ${compact ? "border-t border-white/10 pt-4" : ""}`}>
          <p><span className="text-slate-400">시험 포인트</span><br />{philosopher.examPoint}</p>
          <p><span className="text-slate-400">함정 포인트</span><br />{philosopher.trapPoint}</p>
          <p><span className="text-slate-400">비교</span><br />{philosopher.compareWith.join(" / ")}</p>
          <p><span className="text-slate-400">키워드</span><br />{philosopher.keywords.join(" / ")}</p>
        </div>
      )}
    </article>
  );
}
