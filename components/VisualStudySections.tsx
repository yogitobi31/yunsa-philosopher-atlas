import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const comparePairs = [["mencius", "xunzi"], ["bentham", "mill"], ["hobbes", "locke"], ["rawls", "nozick"]] as const;

export function VisualStudySections() {
  return <section className="space-y-10">
    <div id="face-finder" className="section-shell"><p className="eyebrow">Visual Memory</p><h3 className="section-title mt-3">상징으로 기억하는 철학자</h3><div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{philosophers.map((p) => <Link key={p.id} href={`/philosophers/${p.id}`} className="group premium-card min-w-0 p-6 transition hover:-translate-y-1 hover:border-white/25"><div className="flex flex-col items-center text-center"><PhilosopherAvatar id={p.id} name={p.name} size={92} /><p className="mt-4 text-xl font-semibold">{p.name}</p><p className="mt-1 text-sm text-slate-300">{p.hanjaOrSymbol} → {p.coreConcepts[0]}</p><p className="mt-2 text-xs text-amber-100">시험 포인트: {p.examPoint}</p></div></Link>)}</div></div>
    <div className="section-shell"><p className="eyebrow">Compare First</p><h3 className="section-title mt-3">헷갈리는 철학자 비교 카드</h3><div className="mt-6 grid gap-5 xl:grid-cols-2">{comparePairs.map(([l, r]) => {const left = philosophers.find(p => p.id === l)!; const right = philosophers.find(p => p.id === r)!; return <article key={l + r} className="premium-card p-6"><p className="text-lg font-semibold">{left.name} vs {right.name}</p><p className="mt-3 text-sm text-slate-300">공통점: 둘 다 {left.category === right.category ? left.category : "비교 빈출"} 핵심 사상가</p><p className="mt-2 text-sm">차이: {left.name}는 {left.decisionStandard}, {right.name}는 {right.decisionStandard}</p><p className="mt-2 text-xs text-amber-100">한 방 구분법: {left.memoryImage} / {right.memoryImage}</p></article>;})}</div></div>
  </section>;
}
