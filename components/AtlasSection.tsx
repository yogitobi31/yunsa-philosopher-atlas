"use client";
import { useEffect, useMemo, useState } from "react";
import { philosophers, regionFilters, Philosopher } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";
import { StructureStudyCard } from "./StructureStudyCard";

const SAVED_KEY = "philosopher_saved_cards";
type ViewMode = "summary" | "detail" | "saved";

function exportCardAsImage(philosopher: Philosopher) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1500;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#090f1d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(34, 211, 238, 0.12)");
  gradient.addColorStop(1, "rgba(15, 23, 42, 0.08)");
  ctx.fillStyle = gradient;
  ctx.fillRect(80, 80, 1040, 1340);
  ctx.strokeStyle = "rgba(148, 163, 184, 0.22)";
  ctx.lineWidth = 2;
  ctx.strokeRect(80, 80, 1040, 1340);

  const drawText = (text: string, x: number, y: number, size: number, color = "#dce8ff", weight = "400") => {
    ctx.font = `${weight} ${size}px -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif`;
    ctx.fillStyle = color;
    const words = text.split(" ");
    let line = "";
    let yy = y;
    for (const w of words) {
      const test = `${line}${w} `;
      if (ctx.measureText(test).width > 920) {
        ctx.fillText(line.trim(), x, yy);
        line = `${w} `;
        yy += size * 1.45;
      } else line = test;
    }
    if (line) ctx.fillText(line.trim(), x, yy);
    return yy;
  };

  drawText("윤리와 사상 구조 학습 카드", 130, 155, 24, "#95e8f4", "500");
  drawText(`${philosopher.name}: ${philosopher.oneLineSummary}`, 130, 220, 52, "#f1f6ff", "700");

  const rows = [
    ["핵심 질문", philosopher.oneLineSummary],
    ["핵심 개념", philosopher.keyIdeas.join(" · ")],
    ["시험 포인트", philosopher.examPoint],
    ["자주 나오는 함정", philosopher.trapPoint],
    ["비교 철학자 / 비교 개념", philosopher.compareWith.join(" · ")],
    ["한 줄 암기 문장", philosopher.representativeClaim],
  ] as const;

  let y = 360;
  rows.forEach(([title, body]) => {
    ctx.strokeStyle = "rgba(148,163,184,0.24)";
    ctx.strokeRect(130, y - 34, 940, 142);
    drawText(title, 160, y, 22, "#9de4f2", "500");
    drawText(body, 160, y + 36, 30);
    y += 190;
  });

  drawText(`${philosopher.name}는 ${philosopher.representativeClaim}`, 130, 1380, 28, "#d4e1ff", "500");
  drawText("Pilup Ethics Atlas", 870, 1440, 20, "#7f90aa", "500");

  const link = document.createElement("a");
  link.download = `윤사_${philosopher.name}_구조학습카드.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

export function AtlasSection() {
  const [category, setCategory] = useState<(typeof regionFilters)[number]>("전체");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("summary");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [exportStatus, setExportStatus] = useState<Record<string, "idle" | "saving" | "success" | "error">>({});

  useEffect(() => {
    const raw = localStorage.getItem(SAVED_KEY);
    if (raw) setSavedIds(JSON.parse(raw));
  }, []);

  const list = useMemo(() => philosophers.filter((p) => (category === "전체" || p.category === category) && `${p.name} ${p.keywords.join(" ")} ${p.examPoint}`.includes(query)), [category, query]);
  const visibleList = viewMode === "saved" ? list.filter((p) => savedIds.includes(p.id)) : list;

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      return next;
    });
  };

  return <section id="atlas" className="section-shell pb-24"><p className="eyebrow">Philosopher Atlas</p><h2 className="section-title mt-2">철학자 구조 학습 카드</h2>
    <div className="mt-4 flex flex-wrap gap-2">
      {([
        ["summary", "요약 보기"],
        ["detail", "상세 보기"],
        ["saved", "저장한 카드"],
      ] as const).map(([key, label]) => <button key={key} onClick={() => setViewMode(key)} className={`rounded-full border px-4 py-2 text-sm ${viewMode === key ? "border-cyan-200 bg-cyan-400/20 text-cyan-100" : "border-white/20 text-slate-200"}`}>{label}</button>)}
    </div>
    <div className="mt-4 flex flex-wrap gap-2">{regionFilters.map((f) => <button key={f} onClick={() => setCategory(f)} className={`rounded-xl border px-3 py-2 text-sm ${category === f ? "border-cyan-200 bg-cyan-400/20" : "border-white/20"}`}>{f}</button>)}</div>
    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="이름/키워드 검색" className="mt-4 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2" />
    <p className="mt-3 text-sm text-slate-300">현재 표시 카드 수: {visibleList.length}명의 철학자</p>

    {viewMode === "saved" && (
      <div className="mt-6 rounded-3xl border border-cyan-200/20 bg-slate-900/50 p-6">
        <p className="text-xs tracking-[0.2em] text-cyan-200/90">MY PHILOSOPHER COLLECTION</p>
        <h3 className="mt-2 text-xl font-semibold">저장한 철학자 카드</h3>
      </div>
    )}

    {viewMode === "saved" && visibleList.length === 0 ? (
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-300">아직 저장한 카드가 없습니다.<br />중요한 철학자를 저장해 나만의 복습 컬렉션을 만들어보세요.</div>
    ) : (
      <div className={`mt-6 grid gap-4 ${viewMode === "saved" ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"}`}>
        {visibleList.map((p) => (
          <div key={p.id} className="space-y-2">
            <PhilosopherCard philosopher={p} compact={viewMode === "summary" || viewMode === "saved"} expanded={expandedId === p.id} saved={savedIds.includes(p.id)} onToggleSave={() => toggleSave(p.id)} onToggleExpand={() => setExpandedId((prev) => prev === p.id ? null : p.id)} />
            {viewMode === "saved" && (
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-slate-100">철학자 구조 학습 카드</p>
                  <button onClick={() => {
                    setExportStatus((prev) => ({ ...prev, [p.id]: "saving" }));
                    try {
                      exportCardAsImage(p);
                      setExportStatus((prev) => ({ ...prev, [p.id]: "success" }));
                    } catch {
                      setExportStatus((prev) => ({ ...prev, [p.id]: "error" }));
                    }
                  }} className="rounded-xl border border-cyan-200/25 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100 hover:bg-cyan-300/20">이 카드 PNG로 저장</button>
                </div>
                <StructureStudyCard philosopher={p} />
                <p className="mt-2 min-h-5 text-xs text-slate-300">{exportStatus[p.id] === "saving" ? "이미지 저장 중…" : exportStatus[p.id] === "success" ? "암기카드가 저장되었어요." : exportStatus[p.id] === "error" ? "저장 실패: 다시 시도해 주세요." : ""}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}

    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-5 z-30 rounded-full border border-white/20 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 backdrop-blur">맨 위로</button>
  </section>;
}
