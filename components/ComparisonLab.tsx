"use client";
import { useMemo, useState } from "react";
import { philosophers } from "@/data/philosophers";

export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id);
  const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]);
  const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);

  return (
    <section className="section-shell section-compact">
      <p className="eyebrow">Comparison</p>
      <h2 className="section-title mt-2">비교 이해</h2>
      <p className="section-subtitle">유사 개념의 결을 비교해 함정 선지를 빠르게 구분합니다.</p>

      <div className="comparison-grid mt-5 grid gap-3 md:grid-cols-2">
        <select value={leftId} onChange={(e) => setLeftId(e.target.value)} className="comparison-input">
          {philosophers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select value={rightId} onChange={(e) => setRightId(e.target.value)} className="comparison-input">
          {philosophers.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      <div className="comparison-panel mt-5">
        <p className="text-[15px] text-[#374151]"><b className="text-[#1F2933]">{left.name}</b>: {left.examPoint}</p>
        <p className="mt-3 text-[15px] text-[#374151]"><b className="text-[#1F2933]">{right.name}</b>: {right.examPoint}</p>
        <p className="mt-4 rounded-2xl border border-[rgba(138,90,43,.22)] bg-[rgba(138,90,43,.08)] px-4 py-3 text-sm text-[#8A5A2B]">함정: {left.trapPoint} / {right.trapPoint}</p>
      </div>
    </section>
  );
}
