"use client";

import { useMemo, useState } from "react";
import { philosophers, regionFilters } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";

export function AtlasSection() {
  const [filter, setFilter] = useState<(typeof regionFilters)[number]>("전체");
  const list = useMemo(() => filter === "전체" ? philosophers : philosophers.filter((p) => p.region === filter), [filter]);

  return (
    <section id="atlas" className="space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-atlas-cyan">철학자 도감</p>
          <h2 className="text-2xl font-bold">흩어진 선지들을 철학자 축으로 정리하기</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {regionFilters.map((r) => <button key={r} onClick={() => setFilter(r)} className={`rounded-full px-4 py-2 text-sm ${filter===r ? "bg-atlas-accent text-white" : "bg-white/10 text-slate-300"}`}>{r}</button>)}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((philosopher) => <PhilosopherCard key={philosopher.id} philosopher={philosopher} />)}
      </div>
    </section>
  );
}
