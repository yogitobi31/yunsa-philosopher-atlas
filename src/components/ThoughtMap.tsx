"use client";

import { useMemo, useState } from "react";
import { thoughtEdges, thoughtNodes } from "@/src/data/thoughtMap";
import { ThoughtEdge, ThoughtGroup } from "@/src/types/thoughtMap";

const groups: ("전체" | ThoughtGroup)[] = ["전체", "동양 윤리", "서양 윤리", "한국 윤리", "사회사상"];

const groupClasses: Record<ThoughtGroup, string> = {
  "동양 윤리": "border-emerald-300/45 bg-emerald-500/15 text-emerald-100",
  "서양 윤리": "border-cyan-300/45 bg-cyan-500/15 text-cyan-100",
  "한국 윤리": "border-violet-300/45 bg-violet-500/15 text-violet-100",
  "사회사상": "border-amber-300/45 bg-amber-500/15 text-amber-100",
};

export function ThoughtMap() {
  const [activeGroup, setActiveGroup] = useState<(typeof groups)[number]>("전체");
  const [selectedNodeId, setSelectedNodeId] = useState(thoughtNodes[0].id);
  const [selectedEdgeId, setSelectedEdgeId] = useState(thoughtEdges[0].id);

  const filteredNodes = useMemo(() => thoughtNodes.filter((node) => activeGroup === "전체" || node.group === activeGroup), [activeGroup]);
  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map((node) => node.id)), [filteredNodes]);
  const filteredEdges = useMemo(() => thoughtEdges.filter((edge) => filteredNodeIds.has(edge.from) && filteredNodeIds.has(edge.to)), [filteredNodeIds]);

  const selectedNode = filteredNodes.find((node) => node.id === selectedNodeId) ?? filteredNodes[0];
  const selectedEdge = filteredEdges.find((edge) => edge.id === selectedEdgeId) ?? filteredEdges[0];

  return (
    <section id="map" className="rounded-3xl glass p-6 md:p-8">
      <p className="text-sm text-atlas-cyan">사상 지도</p>
      <h2 className="mt-1 text-2xl font-bold">철학자들의 관계를 선으로 따라가며 사상의 흐름을 이해해요.</h2>
      <p className="mt-2 text-sm text-slate-300">노드와 연결선을 클릭하면 계보, 충돌 지점, 시험 포인트까지 한 번에 확인할 수 있어요.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            className={`rounded-full border px-4 py-2 text-sm transition ${activeGroup === group ? "border-atlas-cyan/70 bg-atlas-cyan/20 text-cyan-100" : "border-white/20 bg-white/5 text-slate-300 hover:border-white/40"}`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.55fr_0.95fr]">
        <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-slate-300">관계 네트워크</p>
            <p className="text-xs text-slate-400">노드 {filteredNodes.length} · 연결 {filteredEdges.length}</p>
          </div>
          <div className="relative h-[480px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12),transparent_36%),rgba(2,6,23,0.85)]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              {filteredEdges.map((edge) => {
                const from = filteredNodes.find((n) => n.id === edge.from);
                const to = filteredNodes.find((n) => n.id === edge.to);
                if (!from || !to) return null;
                const active = selectedEdge?.id === edge.id;
                return (
                  <g key={edge.id}>
                    <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={active ? "#67e8f9" : "rgba(203,213,225,0.45)"} strokeWidth={active ? 0.85 : 0.45} className="cursor-pointer" onClick={() => setSelectedEdgeId(edge.id)} />
                    <circle cx={(from.x + to.x) / 2} cy={(from.y + to.y) / 2} r={0.8} fill={active ? "#67e8f9" : "rgba(226,232,240,0.6)"} className="cursor-pointer" onClick={() => setSelectedEdgeId(edge.id)} />
                  </g>
                );
              })}
            </svg>

            {filteredNodes.map((node) => {
              const active = selectedNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-left transition ${active ? "border-atlas-cyan/70 bg-cyan-500/20 shadow-premium" : "border-white/20 bg-slate-900/80 hover:border-white/40"}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <p className="text-[10px] text-slate-300">{node.period}</p>
                  <p className="text-sm font-semibold">{node.name}</p>
                  <p className="text-[10px] text-slate-400">{node.symbol}</p>
                </button>
              );
            })}
          </div>
        </article>

        <div className="space-y-4">
          {selectedNode && (
            <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4">
              <p className="text-xs text-slate-400">선택한 철학자</p>
              <div className="mt-2 flex items-center gap-2">
                <h3 className="text-xl font-semibold">{selectedNode.name}</h3>
                <span className={`rounded-full border px-2 py-1 text-xs ${groupClasses[selectedNode.group]}`}>{selectedNode.group}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{selectedNode.period}</p>
              <p className="mt-3 text-sm text-slate-100">{selectedNode.shortIdea}</p>
            </article>
          )}

          {selectedEdge && <EdgePanel edge={selectedEdge} />}
        </div>
      </div>
    </section>
  );
}

function EdgePanel({ edge }: { edge?: ThoughtEdge }) {
  if (!edge) {
    return <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4 text-sm text-slate-300">현재 필터에 해당하는 연결선이 없습니다.</article>;
  }

  return <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-4"><p className="text-xs text-slate-400">선택한 연결</p><p className="mt-2 text-lg font-semibold text-cyan-100">{edge.relation}</p><p className="mt-2 text-sm text-slate-100">{edge.explanation}</p><div className="mt-3 rounded-xl border border-amber-300/40 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">시험 포인트: {edge.examPoint}</div></article>;
}
