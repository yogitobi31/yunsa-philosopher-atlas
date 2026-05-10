import { Philosopher } from "@/data/philosophers";
import { ConceptComicSection } from "@/components/ConceptComicSection";

type PhilosopherCardProps = {
  philosopher: Philosopher;
  expanded: boolean;
  compact?: boolean;
  saved: boolean;
  onToggleExpand: () => void;
  onToggleSave: () => void;
};

const accentByCategory: Record<string, string> = {
  동양: "#536B4F",
  서양: "#8A5A2B",
  한국: "#6E5CA8",
  인도: "#8D6E34",
};

export function PhilosopherCard({ philosopher, expanded, compact = false, saved, onToggleExpand, onToggleSave }: PhilosopherCardProps) {
  const accent = accentByCategory[philosopher.category] ?? "#536B4F";

  return (
    <article className="philosopher-card rounded-[26px] p-5 transition hover:-translate-y-0.5 md:p-6" style={{ ["--philo-accent" as string]: accent }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.16em] text-[color:var(--text-soft)]">{philosopher.category} · {philosopher.tradition}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-[color:var(--text-main)]">{philosopher.name}</h3>
          <p className="mt-2 text-sm text-[#2f3b48]">{philosopher.oneLineSummary}</p>
        </div>
        <button onClick={onToggleSave} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-xs text-[color:var(--text-main)] transition hover:border-[var(--philo-accent)]">
          {saved ? "♥ 저장됨" : "♡ 저장"}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {philosopher.coreFlow.map((step) => (
          <span key={step} className="philosopher-tag rounded-full px-2.5 py-1 text-[11px]">{step}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-[color:var(--line)] pt-3">
        <p className="text-xs text-[#5f564b]">핵심 흐름: {philosopher.coreFlow.join(" → ")}</p>
        <button onClick={onToggleExpand} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-xs text-[color:var(--text-main)] transition hover:border-[var(--philo-accent)]">
          {expanded ? "접기" : "자세히"}
        </button>
      </div>

      {expanded && (
        <div className={`mt-4 grid gap-3 text-sm text-[#374151] ${compact ? "border-t border-[color:var(--line)] pt-4" : ""}`}>
          <ConceptComicSection philosopher={philosopher} />
          <p><span className="text-[#6B6258]">시험 포인트</span><br />{philosopher.examPoint}</p>
          <p><span className="text-[#6B6258]">함정 포인트</span><br />{philosopher.trapPoint}</p>
          <p><span className="text-[#6B6258]">비교</span><br />{philosopher.compareWith.join(" / ")}</p>
          <p><span className="text-[#6B6258]">키워드</span><br />{philosopher.keywords.join(" / ")}</p>
        </div>
      )}
    </article>
  );
}
