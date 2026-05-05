"use client";
import { useMemo, useState } from "react";
import { philosophers, regionFilters } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";

export function AtlasSection() {
  const [filter, setFilter] = useState<(typeof regionFilters)[number]>("전체");
  const list = useMemo(() => filter === "전체" ? philosophers : philosophers.filter((p) => p.region === filter), [filter]);
  return (<section id="atlas" className="section-shell space-y-6"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">Atlas</p><h2 className="section-title mt-3">철학자 도감</h2><p className="section-subtitle">흩어진 선지를 철학자 축으로 정리해요.</p></div><div className="flex flex-wrap gap-2">{regionFilters.map((r) => <button key={r} onClick={() => setFilter(r)} className={`rounded-full px-4 py-2 text-sm transition ${filter===r ? "bg-atlas-cyan text-slate-950" : "border border-white/15 bg-white/5 text-slate-300"}`}>{r}</button>)}</div></div><div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">{list.map((p) => <PhilosopherCard key={p.id} philosopher={p} />)}</div></section>);
}
