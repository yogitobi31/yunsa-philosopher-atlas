"use client";

import { useMemo, useState } from "react";
import { philosophers } from "@/data/philosophers";

const groups = ["동양 윤리", "한국 윤리", "서양 윤리", "사회사상", "현대 응용 윤리"] as const;
const edges = [
  ["공자", "맹자", "계승"], ["공자", "순자", "계승"], ["주희", "이황", "계승"], ["주희", "이이", "계승"], ["이황", "이이", "논쟁"],
  ["소크라테스", "플라톤", "계승"], ["플라톤", "아리스토텔레스", "계승"], ["벤담", "밀", "발전"], ["칸트", "벤담", "대립"],
  ["홉스", "로크", "대립"], ["로크", "루소", "비교"], ["롤스", "노직", "대립"], ["싱어", "레건", "대립"]
] as const;

export function ThoughtMap() {
  const [active, setActive] = useState<(typeof groups)[number]>("동양 윤리");
  const [selected, setSelected] = useState("공자");
  const nodes = philosophers.filter((p) => p.category === active);
  const selectedData = philosophers.find((p) => p.name === selected) ?? nodes[0];
  const related = useMemo(() => edges.filter(([a, b]) => a === selected || b === selected), [selected]);

  return <section className="section-shell"><p className="eyebrow">Thought Flow Map</p><h2 className="section-title mt-2">구조화된 사상 흐름 지도</h2>
    <div className="mt-4 flex flex-wrap gap-2">{groups.map((g)=><button key={g} onClick={()=>{setActive(g);setSelected(philosophers.find((p)=>p.category===g)?.name ?? selected);}} className={`rounded-xl border px-3 py-2 text-sm ${active===g?"border-cyan-200 bg-cyan-400/15":"border-white/20"}`}>{g}</button>)}</div>
    <div className="mt-5 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
      <div className="rounded-3xl border border-white/15 bg-slate-950/45 p-4">
        <div className="flex flex-wrap gap-2">{nodes.map((n)=><button key={n.id} onClick={()=>setSelected(n.name)} className={`rounded-lg border px-3 py-2 text-left text-sm ${selected===n.name?"border-cyan-200 bg-cyan-400/12":"border-white/15 bg-white/5"}`}><p className="text-[11px] text-slate-400">{n.tradition}</p><p>{n.name}</p></button>)}</div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm">
          <p className="text-slate-300">선택 철학자 연결 경로</p>
          <div className="mt-2 space-y-1">{related.length ? related.map(([a,b,r],i)=><p key={i} className="text-slate-200"><span className={`${r==="대립"||r==="논쟁"?"text-amber-200":"text-cyan-200"}`}>{a} {r==="계승"||r==="발전"?"→":"↔"} {b}</span> · {r}</p>) : <p className="text-slate-400">이 그룹에서는 대표 연결이 없습니다.</p>}</div>
        </div>
      </div>
      {selectedData && <article className="rounded-3xl border border-white/15 bg-slate-950/55 p-5"><p className="text-xs text-cyan-200">{selectedData.category} · {selectedData.tradition}</p><h3 className="mt-2 text-2xl font-semibold">{selectedData.name}</h3><p className="mt-2 text-sm text-slate-200">{selectedData.oneLineSummary}</p><p className="mt-3 text-sm"><span className="text-slate-400">비교 포인트</span><br />{selectedData.compareWith.join(" / ")}</p><p className="mt-2 text-sm"><span className="text-slate-400">시험 함정</span><br />{selectedData.trapPoint}</p></article>}
    </div>
  </section>;
}
