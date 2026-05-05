import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const comparePairs = [["mencius","xunzi"],["zhu_xi","wang_yangming"],["bentham","mill"],["hobbes","locke"],["rawls","nozick"],["yi_hwang","yi_i"]] as const;

export function VisualStudySections() {
  return <section className="space-y-8">
    <div id="face-finder" className="rounded-3xl glass p-6">
      <h3 className="text-2xl font-bold">얼굴로 찾는 철학자</h3>
      <p className="mt-2 text-sm text-slate-300">상징과 얼굴로 먼저 기억하고, 개념은 카드에서 바로 확인해요.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{philosophers.map((p)=><Link key={p.id} href={`/philosophers/${p.id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-atlas-cyan/60"><div className="mx-auto w-fit"><PhilosopherAvatar id={p.id} name={p.name} size={96} /></div><p className="mt-3 text-center font-semibold">{p.name}</p><p className="text-center text-xs text-atlas-cyan">{p.symbol} · {p.reviewStatus}</p><p className="mt-1 text-center text-xs text-slate-300">{p.oneLine}</p><div className="mt-2 flex flex-wrap justify-center gap-1">{p.coreConcepts.slice(0,3).map((c)=><span key={c} className="rounded-full border border-white/20 px-2 py-0.5 text-[11px]">{c}</span>)}</div></Link>)}</div>
    </div>
    <div className="rounded-3xl glass p-6"><h3 className="text-2xl font-bold">헷갈리는 철학자 비교 카드</h3><p className="mt-2 text-sm text-slate-300">시험에서 자주 섞이는 사상가를 한 장으로 비교해요.</p><div className="mt-4 grid gap-4 md:grid-cols-2">{comparePairs.map(([l,r])=>{const left=philosophers.find(p=>p.id===l)!;const right=philosophers.find(p=>p.id===r)!;return <article key={l+r} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"><Mini p={left}/><span className="text-atlas-cyan">VS</span><Mini p={right}/></div><p className="mt-3 text-sm">한 줄 차이: {left.keyStandard} ↔ {right.keyStandard}</p><p className="mt-2 text-xs text-slate-300">핵심 기준: {left.name}({left.keyStandard}) / {right.name}({right.keyStandard})</p><p className="mt-1 text-xs text-amber-200">시험 함정: {left.trapPreview} · {right.trapPreview}</p><Link href="#lab" className="mt-3 inline-block rounded-lg border border-atlas-cyan/50 px-3 py-1 text-xs text-atlas-cyan">비교 실험실로 이동</Link></article>;})}</div></div>
  </section>;
}

function Mini({ p }: { p: (typeof philosophers)[number] }) { return <div className="text-center"><div className="mx-auto w-fit"><PhilosopherAvatar id={p.id} name={p.name} size={64} /></div><p className="mt-2 text-sm font-semibold">{p.name}</p></div>; }

export function OneCutSummaryCard({ id }: { id: string }) { const p = philosophers.find((item) => item.id === id); if (!p) return null; return <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4"><div className="flex gap-3"><PhilosopherAvatar id={p.id} name={p.name} size={72} /><div><h4 className="font-semibold">{p.name}</h4><p className="text-xs text-slate-300">{p.oneLine}</p><p className="mt-2 text-xs">개념: {p.coreConcepts.slice(0,3).join(", ")}</p><ul className="mt-2 list-disc pl-4 text-xs text-slate-200"><li>{p.mustKnow[0]}</li></ul><p className="mt-1 text-xs text-amber-200">시험 경고: {p.examWarning}</p></div></div></article>; }
