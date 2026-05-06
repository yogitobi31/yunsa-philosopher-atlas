"use client";
import { useMemo, useState } from "react";
import { philosophers, regionFilters } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";

export function AtlasSection() {
  const [category, setCategory] = useState<(typeof regionFilters)[number]>("전체");
  const [query, setQuery] = useState("");
  const list = useMemo(() => philosophers.filter((p) => (category === "전체" || p.category === category) && `${p.name} ${p.keywords.join(" ")} ${p.examPoint}`.includes(query)), [category, query]);
  return <section id="atlas" className="section-shell"><p className="eyebrow">Philosopher Atlas</p><h2 className="section-title mt-2">철학자 구조 학습 카드</h2><div className="mt-4 flex flex-wrap gap-2">{regionFilters.map((f)=><button key={f} onClick={()=>setCategory(f)} className={`rounded-xl border px-3 py-2 text-sm ${category===f?"border-cyan-200 bg-cyan-400/20":"border-white/20"}`}>{f}</button>)}</div><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="이름/키워드 검색" className="mt-4 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2"/><div className="mt-6 grid gap-4 md:grid-cols-2">{list.map((p)=><PhilosopherCard key={p.id} philosopher={p} />)}</div></section>;
}
