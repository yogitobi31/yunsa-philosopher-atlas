import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const comparePairs = [["mencius", "xunzi"], ["bentham", "mill"], ["hobbes", "locke"], ["rawls", "nozick"]] as const;

export function VisualStudySections() {
  return <section className="space-y-10">
    <div id="compare-first" className="section-shell"><p className="eyebrow">Compare First</p><h3 className="section-title mt-3">헷갈리는 철학자 비교</h3><p className="section-subtitle">사상가 이름보다 판단 기준이 먼저 보이도록, 대립 구조로 빠르게 구분합니다.</p><div className="mt-6 grid gap-5 xl:grid-cols-2">{comparePairs.map(([l, r]) => {const left = philosophers.find(p => p.id === l)!; const right = philosophers.find(p => p.id === r)!; return <article key={l + r} className="premium-card p-6"><p className="text-lg font-semibold text-slate-100">{left.name} vs {right.name}</p><div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center"><div className="rounded-2xl border border-emerald-200/20 bg-emerald-300/[0.07] p-4"><p className="text-xs text-emerald-100">{left.name}</p><p className="mt-2 text-sm text-slate-100">{left.decisionStandard}</p></div><div className="text-center text-xs tracking-[0.28em] text-slate-400">VS</div><div className="rounded-2xl border border-violet-200/20 bg-violet-300/[0.07] p-4"><p className="text-xs text-violet-100">{right.name}</p><p className="mt-2 text-sm text-slate-100">{right.decisionStandard}</p></div></div><p className="mt-4 rounded-2xl border border-amber-200/30 bg-amber-300/[0.08] p-3 text-sm text-amber-100">한 방 구분법: {left.memoryImage} / {right.memoryImage}</p></article>;})}</div></div>

    <div id="face-finder" className="section-shell"><p className="eyebrow">Visual Memory</p><h3 className="section-title mt-3">상징으로 기억하는 철학자</h3><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{philosophers.map((p) => <Link key={p.id} href={`/philosophers/${p.id}`} className="group premium-card min-w-0 p-6 transition hover:-translate-y-1 hover:border-white/25"><div className="flex flex-col items-center text-center"><PhilosopherAvatar id={p.id} name={p.name} size={92} /><p className="mt-4 text-xl font-semibold">{p.name}</p><p className="mt-1 text-sm text-slate-300">{p.hanjaOrSymbol} → {p.coreConcepts[0]}</p><p className="mt-2 text-xs text-amber-100">시험 포인트: {p.examPoint}</p></div></Link>)}</div></div>
  </section>;
}
