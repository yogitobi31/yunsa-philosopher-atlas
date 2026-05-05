"use client";

import { useMemo, useState } from "react";
import { Philosopher, philosophers } from "@/data/philosophers";

function pickerLabel(p: Philosopher) { return `${p.name} · ${p.region}`; }

export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id);
  const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]);
  const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);

  const rows = [["핵심 기준", left.keyStandard, right.keyStandard],["인간관", left.viewOfHuman, right.viewOfHuman],["윤리 판단 기준", left.ethics, right.ethics],["대표 개념", left.coreConcepts.join(", "), right.coreConcepts.join(", ")],["시험 함정", left.trapPreview, right.trapPreview]];

  return <section id="lab" className="rounded-3xl glass p-6 md:p-8">
    <p className="text-sm text-atlas-cyan">비교 실험실</p><h2 className="text-2xl font-bold">사상의 차이를 실험처럼 분해하기</h2>
    <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
      <Selector value={leftId} onChange={setLeftId} title={`좌측 철학자 · ${left.symbol}`} />
      <div className="mx-auto rounded-full border border-atlas-cyan/40 px-4 py-2 text-lg font-semibold text-atlas-cyan">VS</div>
      <Selector value={rightId} onChange={setRightId} title={`우측 철학자 · ${right.symbol}`} />
    </div>
    <div className="mt-5 rounded-xl border border-amber-400/40 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">시험에서는 이 차이가 자주 함정으로 출제돼요.</div>
    <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[680px] text-sm"><thead className="bg-white/5"><tr><th className="px-4 py-3 text-left">비교 축</th><th className="px-4 py-3 text-left">{left.name}</th><th className="px-4 py-3 text-left">{right.name}</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-white/10 align-top"><td className="px-4 py-3 font-medium text-slate-300">{row[0]}</td><td className="px-4 py-3 text-cyan-100">{row[1]}</td><td className="px-4 py-3 text-violet-100">{row[2]}</td></tr>)}</tbody></table></div>
  </section>;
}

function Selector({ value, onChange, title }: { value: string; onChange: (value: string) => void; title: string }) {
  return <article className="rounded-2xl border border-white/15 bg-slate-900/70 p-4"><p className="mb-2 text-xs text-slate-300">{title}</p><select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-slate-900/90 px-4 py-2 text-sm">{philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}</select></article>;
}
