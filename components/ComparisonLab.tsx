"use client";
import { useMemo, useState } from "react";
import { philosophers } from "@/data/philosophers";

export function ComparisonLab() {
  const [leftId, setLeftId] = useState(philosophers[0].id);
  const [rightId, setRightId] = useState(philosophers[1].id);
  const left = useMemo(() => philosophers.find((p) => p.id === leftId)!, [leftId]);
  const right = useMemo(() => philosophers.find((p) => p.id === rightId)!, [rightId]);
  return <section className="section-shell"><p className="eyebrow">Comparison</p><h2 className="section-title mt-2">비교 이해</h2><div className="mt-4 grid gap-2 md:grid-cols-2"><select value={leftId} onChange={(e)=>setLeftId(e.target.value)} className="rounded-xl border border-white/20 bg-white/5 p-3">{philosophers.map((p)=><option key={p.id} value={p.id}>{p.name}</option>)}</select><select value={rightId} onChange={(e)=>setRightId(e.target.value)} className="rounded-xl border border-white/20 bg-white/5 p-3">{philosophers.map((p)=><option key={p.id} value={p.id}>{p.name}</option>)}</select></div><div className="mt-4 rounded-xl border border-white/15 p-4 text-sm"><p><b>{left.name}</b>: {left.examPoint}</p><p className="mt-2"><b>{right.name}</b>: {right.examPoint}</p><p className="mt-2 text-amber-100">함정: {left.trapPoint} / {right.trapPoint}</p></div></section>;
}
