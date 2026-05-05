"use client";
import { useMemo, useState } from "react";
import { categoryFilters, philosophers, regionFilters } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";

export function AtlasSection() {
  const [regionFilter, setRegionFilter] = useState<(typeof regionFilters)[number]>("전체");
  const [categoryFilter, setCategoryFilter] = useState<(typeof categoryFilters)[number]>("전체");
  const [query, setQuery] = useState("");

  const list = useMemo(() => philosophers.filter((p) => {
    const regionOk = regionFilter === "전체" || p.region === regionFilter;
    const categoryOk = categoryFilter === "전체" || p.category === categoryFilter;
    const hay = `${p.name} ${p.coreConcepts.join(" ")} ${p.keywords.join(" ")} ${p.examPoint} ${p.commonTrap} ${p.category}`.toLowerCase();
    const queryOk = !query || hay.includes(query.toLowerCase());
    return regionOk && categoryOk && queryOk;
  }), [regionFilter, categoryFilter, query]);

  return (<section id="atlas" className="section-shell space-y-7"><div className="flex flex-col gap-4"><div><p className="eyebrow">Atlas</p><h2 className="section-title mt-3">사전식이 아닌 질문형 철학자 아틀라스</h2><p className="section-subtitle">질문 → 판단 기준 → 함정 포인트로 즉시 구분하세요.</p></div>
  <input aria-label="철학자 검색" placeholder="이름·개념·함정 키워드 검색 (예: 성선설, 정언명령)" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm" />
  <div className="flex flex-wrap gap-2">{regionFilters.map((r) => <button key={r} onClick={() => setRegionFilter(r)} className={`rounded-full px-4 py-2 text-sm ${regionFilter===r ? "bg-atlas-cyan text-slate-950" : "border border-white/15 bg-white/5 text-slate-300"}`}>{r}</button>)}</div>
  <div className="flex flex-wrap gap-2">{categoryFilters.map((r) => <button key={r} onClick={() => setCategoryFilter(r)} className={`rounded-full px-4 py-2 text-sm ${categoryFilter===r ? "bg-white text-slate-950" : "border border-white/15 bg-white/5 text-slate-300"}`}>{r}</button>)}</div></div>
  <div className="grid gap-4 md:grid-cols-1 xl:grid-cols-2">{list.map((p) => <PhilosopherCard key={p.id} philosopher={p} />)}</div></section>);
}
