import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

const comparePairs = [["mencius","xunzi"],["zhu_xi","wang_yangming"],["bentham","mill"],["hobbes","locke"],["rawls","nozick"]] as const;

export function VisualStudySections() {
  return <section className="space-y-8">
    <div className="rounded-3xl glass p-6"><h3 className="text-xl font-bold">얼굴로 찾는 철학자</h3><div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">{philosophers.map((p)=><Link key={p.id} href={`/philosophers/${p.id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-3 text-center hover:border-atlas-cyan/60"><div className="mx-auto w-fit"><PhilosopherAvatar id={p.id} name={p.name} /></div><p className="mt-3 font-semibold">{p.name}</p><p className="text-xs text-slate-300">{p.oneLine}</p></Link>)}</div></div>
    <div className="rounded-3xl glass p-6"><h3 className="text-xl font-bold">헷갈리는 철학자 비교 카드</h3><div className="mt-4 grid gap-4 md:grid-cols-2">{comparePairs.map(([l,r])=>{const left=philosophers.find(p=>p.id===l)!;const right=philosophers.find(p=>p.id===r)!;return <article key={l+r} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"><Mini p={left}/><span className="text-atlas-cyan">VS</span><Mini p={right}/></div><p className="mt-3 text-sm">차이: {left.keyStandard} ↔ {right.keyStandard}</p><p className="mt-2 text-xs text-slate-300">핵심 기준: {left.name}({left.keyStandard}) / {right.name}({right.keyStandard})</p><p className="mt-1 text-xs text-amber-200">시험 함정: {left.trapPreview} · {right.trapPreview}</p></article>;})}</div></div>
  </section>;
}

function Mini({ p }: { p: (typeof philosophers)[number] }) { return <div className="text-center"><div className="mx-auto w-fit"><PhilosopherAvatar id={p.id} name={p.name} size={64} /></div><p className="mt-2 text-sm font-semibold">{p.name}</p></div>; }

export function OneCutSummaryCard({ id }: { id: string }) { const p = philosophers.find((item) => item.id === id); if (!p) return null; return <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4"><div className="flex gap-3"><PhilosopherAvatar id={p.id} name={p.name} size={72} /><div><h4 className="font-semibold">{p.name}</h4><p className="text-xs text-slate-300">{p.oneLine}</p><p className="mt-2 text-xs">개념: {p.coreConcepts.slice(0,3).join(", ")}</p><p className="mt-1 text-xs text-amber-200">시험 경고: {p.trapPreview}</p></div></div></article>; }
