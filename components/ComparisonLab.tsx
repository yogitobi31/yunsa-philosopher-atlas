"use client";
import { useMemo, useState } from "react";
import { Philosopher, philosophers } from "@/data/philosophers";

function pickerLabel(p: Philosopher) { return `${p.name} · ${p.category}`; }
export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id); const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]); const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);
  const quiz = `${left.name}의 관점에 더 가까운 문장을 고르세요: "${left.decisionStandard}"`;
  return <section id="lab" className="section-shell"><p className="eyebrow">Comparison Lab</p><h2 className="section-title mt-3">사상 비교 실험실</h2><p className="section-subtitle">두 철학자의 갈등 구조를 먼저 잡고, 시험 보기 함정을 분해하세요.</p><div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr]"><Selector value={leftId} onChange={setLeftId} title="좌측 철학자" /><div className="my-auto text-center text-xs tracking-[0.3em] text-slate-400">VS</div><Selector value={rightId} onChange={setRightId} title="우측 철학자" /></div>
  <div className="mt-5 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-sm">한 줄 결론: {left.name}는 {left.decisionStandard}을/를 중시하고, {right.name}는 {right.decisionStandard}을/를 중시한다.</div>
  <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">{[["인간관", left.humanView, right.humanView],["판단 기준", left.decisionStandard, right.decisionStandard],["이상 사회", left.idealStateOrSociety, right.idealStateOrSociety],["시험 포인트", left.examPoint, right.examPoint]].map((row) => <div key={row[0]} className="grid gap-2 border-t border-white/10 px-4 py-4 md:grid-cols-[110px_1fr_1fr] first:border-t-0"><p className="text-sm text-slate-400">{row[0]}</p><p className="text-sm text-cyan-100">{row[1]}</p><p className="text-sm text-violet-100">{row[2]}</p></div>)}</div>
  <div className="mt-4 rounded-2xl border border-amber-300/30 bg-amber-200/10 p-4 text-sm text-amber-100">헷갈리는 보기 예시: "{left.commonTrap}" / "{right.commonTrap}"</div>
  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">정답 판단 훈련: {quiz}</div>
  </section>;
}
function Selector({ value, onChange, title }: { value: string; onChange: (value: string) => void; title: string }) { return <article className="premium-card p-4"><p className="mb-2 text-xs text-slate-300">{title}</p><select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-slate-950/90 px-4 py-3 text-sm">{philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}</select></article>; }
