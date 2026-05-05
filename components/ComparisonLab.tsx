"use client";

import { useMemo, useState } from "react";
import { Philosopher, philosophers } from "@/data/philosophers";

function pickerLabel(p: Philosopher) { return `${p.name} · ${p.region}`; }

export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id);
  const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]);
  const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);

  const rows = [["핵심 기준", left.keyStandard, right.keyStandard], ["인간관", left.viewOfHuman, right.viewOfHuman], ["윤리 판단 기준", left.ethics, right.ethics], ["대표 개념", left.coreConcepts.join(", "), right.coreConcepts.join(", ")], ["시험 함정", left.trapPreview, right.trapPreview]];

  return <section id="lab" className="rounded-3xl glass p-6 md:p-8">
    <p className="text-sm text-atlas-cyan">사상 비교 실험실</p><h2 className="text-2xl font-bold">헷갈리는 축을 실험처럼 분해하기</h2><p className="mt-1 text-sm text-slate-300">표 하나로 끝내지 않고, 차이 포인트를 카드로 먼저 잡습니다.</p>
    <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
      <Selector value={leftId} onChange={setLeftId} title="좌측 철학자" symbol={left.symbol} />
      <div className="mx-auto rounded-full border border-atlas-cyan/40 bg-atlas-cyan/10 px-4 py-2 text-lg font-semibold text-atlas-cyan">VS</div>
      <Selector value={rightId} onChange={setRightId} title="우측 철학자" symbol={right.symbol} />
    </div>
    <div className="mt-5 grid gap-3 md:grid-cols-3">
      <DiffCard title="핵심 기준" left={left.keyStandard} right={right.keyStandard} />
      <DiffCard title="윤리 판단 기준" left={left.ethics} right={right.ethics} />
      <DiffCard title="시험 함정" left={left.trapPreview} right={right.trapPreview} />
    </div>
    <div className="mt-5 rounded-xl border border-amber-400/40 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">시험에서는 이 차이가 자주 함정으로 출제돼요.</div>
    <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[720px] text-sm"><thead className="bg-white/5"><tr><th className="px-4 py-3 text-left">비교 축</th><th className="px-4 py-3 text-left">{left.name}</th><th className="px-4 py-3 text-left">{right.name}</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-white/10 align-top"><td className="px-4 py-3 font-medium text-slate-300">{row[0]}</td><td className="px-4 py-3 text-cyan-100">{row[1]}</td><td className="px-4 py-3 text-violet-100">{row[2]}</td></tr>)}</tbody></table></div>
  </section>;
}

function DiffCard({ title, left, right }: { title: string; left: string; right: string }) {
  return <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4"><p className="text-xs text-atlas-cyan">{title}</p><p className="mt-2 text-xs text-slate-400">좌측</p><p className="text-sm text-slate-100">{left}</p><p className="mt-2 text-xs text-slate-400">우측</p><p className="text-sm text-slate-100">{right}</p></article>;
}

function Selector({ value, onChange, title, symbol }: { value: string; onChange: (value: string) => void; title: string; symbol: string }) {
  return <article className="rounded-2xl border border-white/15 bg-slate-900/70 p-4"><p className="mb-2 text-xs text-slate-300">{title} · {symbol}</p><select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/15 bg-slate-900/90 px-4 py-2 text-sm">{philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}</select></article>;
}
