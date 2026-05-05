import Link from "next/link";
import { Philosopher } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return <Link aria-label={`${philosopher.name} 상세 보기`} href={`/philosophers/${philosopher.id}`} className="group premium-card relative min-w-0 overflow-hidden p-6 transition hover:-translate-y-1 hover:border-white/25">
    <div className="flex min-w-0 items-start gap-4"><PhilosopherAvatar id={philosopher.id} name={philosopher.name} size={72} /><div className="min-w-0 flex-1"><h3 className="text-2xl font-semibold leading-tight">{philosopher.name}</h3><p className="mt-1 text-xs text-slate-300">{philosopher.period} · {philosopher.region}</p><p className="mt-3 text-sm text-slate-100">{philosopher.oneLine}</p></div></div>
    <p className="mt-4 text-xs text-atlas-cyan">판단 기준 · {philosopher.decisionStandard}</p>
    <div className="mt-3 flex flex-wrap gap-2">{philosopher.coreConcepts.slice(0, 3).map((c) => <span key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs">{c}</span>)}</div>
    <p className="mt-4 text-xs text-amber-100">시험 함정: {philosopher.commonTrap}</p>
  </Link>;
}
