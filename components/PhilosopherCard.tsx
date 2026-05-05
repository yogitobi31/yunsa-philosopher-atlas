import Link from "next/link";
import { Philosopher } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const categoryTone: Record<Philosopher["category"], string> = {
  동양윤리: "text-amber-200 border-amber-300/30",
  서양윤리: "text-blue-200 border-blue-300/30",
  사회사상: "text-violet-200 border-violet-300/30",
  한국윤리: "text-emerald-200 border-emerald-300/30",
};

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link
      aria-label={`${philosopher.name} 상세 보기`}
      href={`/philosophers/${philosopher.id}`}
      className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/78 p-6 transition hover:-translate-y-0.5 hover:border-white/20"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] tracking-[0.16em] ${categoryTone[philosopher.category]}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {philosopher.category}
        </span>
        <PhilosopherAvatar id={philosopher.id} name={philosopher.name} size={52} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-50">{philosopher.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-200">{philosopher.oneLine}</p>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">판단 기준</p>
        <p className="mt-1 text-sm text-slate-100">{philosopher.decisionStandard}</p>
      </div>

      <p className="mt-4 text-xs text-slate-400">시험 포인트: {philosopher.examPoint}</p>
    </Link>
  );
}
