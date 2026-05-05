"use client";

import { useMemo, useState } from "react";
import { Philosopher, philosophers } from "@/data/philosophers";

function pickerLabel(p: Philosopher) {
  return `${p.name} · ${p.region}`;
}

export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id);
  const [rightId, setRightId] = useState(philosophers[1].id);

  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]);
  const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);

  const rows = [
    ["핵심 기준", left.keyStandard, right.keyStandard],
    ["인간관", left.viewOfHuman, right.viewOfHuman],
    ["윤리 판단 기준", left.ethics, right.ethics],
    ["대표 개념", left.coreConcepts.join(", "), right.coreConcepts.join(", ")],
    ["시험 함정", left.examTraps[0], right.examTraps[0]],
  ];

  return (
    <section id="lab" className="rounded-3xl glass p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm text-atlas-cyan">비교 실험실</p>
          <h2 className="text-2xl font-bold">사상을 섞어서 차이를 선명하게</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <select value={leftId} onChange={(e) => setLeftId(e.target.value)} className="rounded-xl border border-white/15 bg-slate-900/90 px-4 py-2 text-sm">
            {philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}
          </select>
          <select value={rightId} onChange={(e) => setRightId(e.target.value)} className="rounded-xl border border-white/15 bg-slate-900/90 px-4 py-2 text-sm">
            {philosophers.map((p) => <option key={p.id} value={p.id}>{pickerLabel(p)}</option>)}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3 text-left">비교 축</th><th className="px-4 py-3 text-left">{left.name}</th><th className="px-4 py-3 text-left">{right.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-white/10 align-top">
                <td className="px-4 py-3 font-medium text-slate-300">{row[0]}</td>
                <td className="px-4 py-3 text-slate-100">{row[1]}</td>
                <td className="px-4 py-3 text-slate-100">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
