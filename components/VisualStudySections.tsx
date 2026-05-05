import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const comparePairs = [["mencius", "xunzi"], ["zhu_xi", "wang_yangming"], ["bentham", "mill"], ["hobbes", "locke"], ["rawls", "nozick"], ["yi_hwang", "yi_i"]] as const;

export function VisualStudySections() {
  return <section className="space-y-10">
    <div id="face-finder" className="section-shell">
      <p className="eyebrow">Visual Memory</p><h3 className="section-title mt-3">상징으로 기억하는 철학자</h3><p className="section-subtitle">얼굴보다 개념을 먼저 기억하도록, 철학자의 핵심 사상을 상징으로 정리했어요.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{philosophers.map((p) => <Link key={p.id} href={`/philosophers/${p.id}`} className="group premium-card min-w-0 p-6 transition hover:-translate-y-1 hover:border-white/25"><div className="flex flex-col items-center text-center"><PhilosopherAvatar id={p.id} name={p.name} size={92} /><p className="mt-4 text-xl font-semibold">{p.name}</p><p className="mt-1 text-sm text-slate-300">{p.oneLine}</p><p className="mt-3 text-xs text-atlas-cyan">{p.symbol} · {p.reviewStatus}</p><div className="mt-4 flex flex-wrap justify-center gap-2">{p.coreConcepts.slice(0, 3).map((c) => <span key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200">{c}</span>)}</div></div></Link>)}</div>
    </div>

    <div className="section-shell">
      <p className="eyebrow">Compare First</p><h3 className="section-title mt-3">헷갈리는 철학자 비교 카드</h3><p className="section-subtitle">시험에서 자주 섞이는 사상가를 핵심 차이로 먼저 구분해요.</p>
      <div className="mt-6 grid gap-5 xl:grid-cols-2">{comparePairs.map(([l, r]) => {const left = philosophers.find(p => p.id === l)!; const right = philosophers.find(p => p.id === r)!; return <article key={l + r} className="premium-card p-6"><div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]"><Mini p={left} /><p className="text-center text-xs tracking-[0.3em] text-slate-400">VS</p><Mini p={right} /></div><p className="mt-5 text-sm text-slate-100">{left.name}는 {left.keyStandard}, {right.name}는 {right.keyStandard}를 중심으로 판단해요.</p><div className="mt-4 space-y-2 text-sm"><p className="text-slate-300"><span className="text-slate-400">핵심 기준</span> · {left.keyStandard} / {right.keyStandard}</p><p className="text-amber-100"><span className="text-amber-200">시험 함정</span> · {left.trapPreview} · {right.trapPreview}</p></div></article>;})}</div>
    </div>
  </section>;
}

function Mini({ p }: { p: (typeof philosophers)[number] }) { return <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3"><div className="flex items-center gap-3"><PhilosopherAvatar id={p.id} name={p.name} size={58} /><div className="min-w-0"><p className="text-base font-semibold">{p.name}</p><p className="text-xs text-slate-300">{p.oneLine}</p></div></div></div>; }
