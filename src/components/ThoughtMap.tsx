"use client";

import { useState } from "react";
import { thoughtEdges, thoughtNodes } from "@/src/data/thoughtMap";

const groups = ["동양 윤리", "한국 윤리", "서양 윤리", "사회사상"] as const;

export function ThoughtMap() {
  const [active, setActive] = useState<(typeof groups)[number]>(groups[0]);
  const nodes = thoughtNodes.filter((n) => n.group === active);
  const nodeIds = new Set(nodes.map((n) => n.id));
  const edges = thoughtEdges.filter((e) => nodeIds.has(e.from) && nodeIds.has(e.to));

  return <section className="section-shell"><p className="eyebrow">Thought Flow Map</p><h2 className="section-title mt-2">구조화된 사상 흐름 지도</h2><div className="mt-4 flex flex-wrap gap-2">{groups.map((g)=><button key={g} onClick={()=>setActive(g)} className={`rounded-xl border px-3 py-2 text-sm ${active===g?"border-cyan-200 bg-cyan-400/20":"border-white/20"}`}>{g}</button>)}</div><div className="mt-5 overflow-x-auto"><div className="min-w-[760px] rounded-3xl border border-white/15 bg-slate-950/45 p-4"><div className="grid grid-cols-3 gap-3">{nodes.map((n)=><div key={n.id} className="rounded-xl border border-white/15 bg-white/5 p-3"><p className="text-xs text-slate-400">{n.period}</p><p className="font-semibold">{n.name}</p><p className="text-xs text-slate-300">{n.shortIdea}</p></div>)}</div><div className="mt-4 space-y-2">{edges.map((e)=><p key={e.id} className="text-sm"><span className="text-cyan-200">{e.from} → {e.to}</span> · {e.relation} · {e.examPoint}</p>)}</div></div></div></section>;
}
