import Link from "next/link";
import { Philosopher } from "@/data/philosophers";

const categoryTone: Record<Philosopher["category"], string> = {
  동양윤리: "text-amber-100 border-amber-200/35 bg-amber-200/10",
  서양윤리: "text-sky-100 border-sky-200/30 bg-sky-200/10",
  사회사상: "text-violet-100 border-violet-200/30 bg-violet-200/10",
  한국윤리: "text-emerald-100 border-emerald-200/30 bg-emerald-200/10",
};

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link
      aria-label={`${philosopher.name} 상세 보기`}
      href={`/philosophers/${philosopher.id}`}
      className="group relative min-w-0 overflow-hidden rounded-[1.75rem] border border-white/12 bg-slate-950/45 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/30 md:p-7"
    >
      <p className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] tracking-[0.14em] ${categoryTone[philosopher.category]}`}>
        {philosopher.categoryLabel}
      </p>

      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50">{philosopher.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{philosopher.thesis}</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">사고 흐름</p>
        <p className="mt-2 text-sm text-slate-100">{philosopher.flow.join(" → ")}</p>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">시험 포인트</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-100">{philosopher.examPoint}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {philosopher.keywords.slice(0, 4).map((keyword) => (
          <span key={keyword} className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200">
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  );
}
