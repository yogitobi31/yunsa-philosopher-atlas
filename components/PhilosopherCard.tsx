import Link from "next/link";
import { Philosopher } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const categoryTone: Record<Philosopher["category"], string> = {
  동양윤리: "border-emerald-200/25 bg-emerald-300/[0.08] text-emerald-100",
  서양윤리: "border-cyan-200/25 bg-cyan-300/[0.08] text-cyan-100",
  사회사상: "border-amber-200/25 bg-amber-300/[0.08] text-amber-100",
  한국윤리: "border-violet-200/25 bg-violet-300/[0.08] text-violet-100",
};

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return <Link aria-label={`${philosopher.name} 상세 보기`} href={`/philosophers/${philosopher.id}`} className="group premium-card atlas-card-glow relative min-w-0 overflow-hidden p-6 transition hover:-translate-y-1.5 hover:border-white/30">
    <div className="flex items-center justify-between gap-2"><span className={`rounded-full border px-3 py-1 text-[11px] ${categoryTone[philosopher.category]}`}>{philosopher.category}</span><span className="text-xs text-slate-300">{philosopher.hanjaOrSymbol}</span></div>
    <div className="mt-4 flex min-w-0 items-start gap-4"><PhilosopherAvatar id={philosopher.id} name={philosopher.name} size={72} /><div className="min-w-0 flex-1"><h3 className="text-3xl font-semibold leading-tight tracking-tight">{philosopher.name}</h3><p className="mt-2 text-sm text-slate-100">{philosopher.oneLine}</p></div></div>
    <div className="mt-5 flex flex-wrap gap-2">{philosopher.coreConcepts.slice(0, 2).map((c) => <span key={c} className="rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs">{c}</span>)}</div>
    <p className="mt-3 text-sm text-cyan-100">판단 기준: {philosopher.decisionStandard}</p>
    <p className="mt-2 text-xs text-amber-100">시험 함정: {philosopher.commonTrap}</p>
    <p className="mt-4 text-right text-xs text-slate-400">자세히 보기 →</p>
  </Link>;
}
