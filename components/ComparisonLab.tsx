"use client";
import { useMemo, useState } from "react";
import { Philosopher, philosophers } from "@/data/philosophers";

function pickerLabel(p: Philosopher) { return `${p.name} · ${p.region}`; }
export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id); const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]); const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);
  const rows = [["핵심 기준", left.keyStandard, right.keyStandard], ["인간관", left.viewOfHuman, right.viewOfHuman], ["윤리 판단 기준", left.ethics, right.ethics], ["대표 개념", left.coreConcepts.join(", "), right.coreConcepts.join(", ")], ["시험 함정", left.trapPreview, right.trapPreview]];
  return <section id="lab" className="section-shell"><p className="eyebrow">Comparison Lab</p><h2 className="section-title mt-3">사상 비교 실험실</h2><p className="section-subtitle">두 철학자의 기준을 나란히 놓고 차이를 분명하게 잡습니다.</p><div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr]"><Selector value={leftId} onChange={setLeftId} title="좌측 철학자" /><div className="my-auto text-center text-xs tracking-[0.3em] text-slate-400">VS</div><Selector value={rightId} onChange={setRightId} title="우측 철학자" /></div><div className="mt-6 overflow-hidden rounded-3xl border border-white/10">{rows.map((row) => <div key={row[0]} className="grid gap-2 border-t border-white/10 px-4 py-4 md:grid-cols-[140px_1fr_1fr] md:gap-4 first:border-t-0"><p className="text-sm text-slate-400">{row[0]}</p><p className="text-sm text-cyan-100">{row[1]}</p><p className="text-sm text-violet-100">{row[2]}</p></div>)}</div><div className="mt-5 rounded-2xl border border-amber-300/30 bg-amber-200/10 p-4 text-sm text-amber-100">시험에서는 이 차이가 자주 함정으로 출제돼요.</div></section>;
}
function Selector({ value, onChange, title }: { value: string; onChange: (value: string) => void; title: string }) { return <article className="premium-card p-4"><p className="mb-2 text-xs text-slate-300">{title}</p><select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-slate-950/90 px-4 py-3 text-sm">{philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}</select></article>; }
