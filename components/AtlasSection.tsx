"use client";
import { useEffect, useMemo, useState } from "react";
import { philosophers, regionFilters, Philosopher } from "@/data/philosophers";
import { PhilosopherCard } from "./PhilosopherCard";
import { StructureStudyCard } from "./StructureStudyCard";

const SAVED_KEY = "philosopher_saved_cards";
type ViewMode = "summary" | "detail" | "saved";

export function AtlasSection() {
  const [category, setCategory] = useState<(typeof regionFilters)[number]>("전체");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("summary");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [exportStatus, setExportStatus] = useState<Record<string, "idle" | "saving" | "success" | "error">>({});
  const [exportError, setExportError] = useState<Record<string, string>>({});

  const mencius = philosophers.find((p) => p.id === "mencius");
  const xunzi = philosophers.find((p) => p.id === "xunzi");

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

  const saveMemorizationCard = async (philosopher: Philosopher) => {
    setExportStatus((prev) => ({ ...prev, [philosopher.id]: "saving" }));
    setExportError((prev) => ({ ...prev, [philosopher.id]: "" }));

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context is null");

      const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
      gradient.addColorStop(0, "#071024");
      gradient.addColorStop(1, "#0f1933");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1350);

      const drawWrapped = (text: string, x: number, y: number, maxWidth: number, size = 36, color = "#ebf3ff", weight = "500") => {
        ctx.font = `${weight} ${size}px sans-serif`;
        ctx.fillStyle = color;
        const words = text.split(" ");
        let line = "";
        let yy = y;
        for (const word of words) {
          const test = `${line}${word} `;
          if (ctx.measureText(test).width > maxWidth) {
            ctx.fillText(line.trim(), x, yy);
            line = `${word} `;
            yy += size * 1.45;
          } else line = test;
        }
        if (line) ctx.fillText(line.trim(), x, yy);
        return yy + size * 1.25;
      };

      let y = 90;
      y = drawWrapped("윤리와 사상 구조학습 카드", 72, y, 940, 34, "#9de4f2", "600");
      y = drawWrapped(`${philosopher.name}`, 72, y + 16, 940, 64, "#ffffff", "700");
      const rows = [
        ["메인 질문", philosopher.oneLineSummary],
        ["핵심 질문", philosopher.examPoint],
        ["맹자 입장", mencius?.oneLineSummary ?? ""],
        ["순자 입장", xunzi?.oneLineSummary ?? ""],
        ["시험 함정", philosopher.trapPoint],
        ["한 줄 암기", philosopher.representativeClaim],
        ["관련 철학자 태그", philosopher.compareWith.join(" · ")],
      ] as const;

      for (const [title, body] of rows) {
        ctx.strokeStyle = "rgba(148,163,184,0.35)";
        ctx.strokeRect(72, y, 936, 142);
        drawWrapped(title, 98, y + 40, 880, 28, "#8be9fd", "600");
        drawWrapped(body, 98, y + 84, 880, 30);
        y += 170;
      }

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
          if (!result) reject(new Error("canvas.toBlob returned null"));
          else resolve(result);
        }, "image/png", 1);
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `윤리와사상_암기카드_${philosopher.name}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setExportStatus((prev) => ({ ...prev, [philosopher.id]: "success" }));
    } catch (error) {
      console.error("Image export failed:", error);
      const message = error instanceof Error ? error.message : String(error);
      setExportError((prev) => ({ ...prev, [philosopher.id]: message }));
      setExportStatus((prev) => ({ ...prev, [philosopher.id]: "error" }));
    }
  };

  return <section id="atlas" className="section-shell pb-24"><p className="eyebrow">Philosopher Atlas</p><h2 className="section-title mt-2">철학자 구조 학습 카드</h2>
    <div className="mt-4 flex flex-wrap gap-2.5">{([ ["summary", "요약 보기"], ["detail", "상세 보기"], ["saved", "저장한 카드"], ] as const).map(([key, label]) => <button key={key} onClick={() => setViewMode(key)} className={`rounded-full border px-4 py-2 text-sm transition ${viewMode === key ? "border-[rgba(83,107,79,.34)] bg-[#c9dfc0] text-[#324b37]" : "border-[rgba(17,24,39,.14)] bg-[#f8f6f2] text-[rgba(17,24,39,.68)]"}`}>{label}</button>)}</div>
    <div className="mt-4 flex flex-wrap gap-2.5">{regionFilters.map((f) => <button key={f} onClick={() => setCategory(f)} className={`rounded-xl border px-3 py-2 text-sm transition ${category === f ? "border-[rgba(83,107,79,.34)] bg-[#c9dfc0] text-[#324b37]" : "border-[rgba(17,24,39,.14)] bg-[#f8f6f2] text-[rgba(17,24,39,.68)]"}`}>{f}</button>)}</div>
    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="이름/키워드 검색" className="mt-4 w-full rounded-xl border border-[rgba(17,24,39,.14)] bg-[rgba(255,255,255,.72)] px-3 py-2 text-[rgba(17,24,39,.74)] placeholder:text-[rgba(17,24,39,.5)]" />
    <p className="mt-3 text-sm text-[rgba(17,24,39,.56)]">현재 표시 카드 수: {visibleList.length}명의 철학자</p>

    {viewMode === "saved" && visibleList.length === 0 ? <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-300">아직 저장한 카드가 없습니다.</div> : (
      <div className={`philosopher-grid mt-6 grid gap-4 ${viewMode === "saved" ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"}`}>
        {visibleList.map((p) => (
          <div key={p.id} className="space-y-2">
            <PhilosopherCard philosopher={p} compact={viewMode === "summary" || viewMode === "saved"} expanded={expandedId === p.id} saved={savedIds.includes(p.id)} onToggleSave={() => toggleSave(p.id)} onToggleExpand={() => setExpandedId((prev) => prev === p.id ? null : p.id)} />
            {viewMode === "saved" && <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3"><div className="mb-3 flex items-center justify-between gap-3"><p className="text-sm font-medium text-slate-100">철학자 구조 학습 카드</p><button onClick={() => void saveMemorizationCard(p)} className="rounded-xl border border-cyan-200/25 bg-cyan-300/10 px-3 py-2 text-xs text-cyan-100 hover:bg-cyan-300/20">이 카드 PNG로 저장</button></div><StructureStudyCard philosopher={p} /><p className="mt-2 min-h-5 text-xs text-slate-300">{exportStatus[p.id] === "saving" ? "이미지 저장 중…" : exportStatus[p.id] === "success" ? "암기카드가 저장되었어요." : exportStatus[p.id] === "error" ? `이미지 저장 실패: ${exportError[p.id] ?? "unknown"}` : ""}</p></div>}
          </div>
        ))}
      </div>
    )}

  </section>;
}
