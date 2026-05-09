"use client";
import { useState } from "react";
import { Philosopher } from "@/data/philosophers";

type Props = { philosopher: Philosopher };

export function ConceptComicSection({ philosopher }: Props) {
  const comic = philosopher.comic;
  const [failedImageIds, setFailedImageIds] = useState<Record<string, boolean>>({});
  const [saveState, setSaveState] = useState<"idle"|"saving"|"success"|"error">("idle");
  const [saveError, setSaveError] = useState<string>("");
  const panels = comic?.panels ?? [];
  const panelType = comic?.type ?? "four-panel";
  const gridCols = panelType === "six-panel" ? "lg:grid-cols-3" : "sm:grid-cols-2";

  const saveComicCard = async () => {
    if (!comic) return;
    setSaveState("saving");
    setSaveError("");
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1400;
      canvas.height = 1800;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas context 생성 실패");
      ctx.fillStyle = "#F7F3EA"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#1F2933"; ctx.font = "700 54px sans-serif"; ctx.fillText(`${philosopher.name} · ${comic.title}`, 80, 110);
      ctx.fillStyle = "#5F6368"; ctx.font = "500 30px sans-serif"; ctx.fillText(`개념: ${comic.concept}`, 80, 160);
      const blockW = 610;
      panels.slice(0, 4).forEach((p, i) => {
        const x = 80 + (i % 2) * 650; const y = 220 + Math.floor(i / 2) * 320;
        ctx.fillStyle = "#FFFDF8"; ctx.strokeStyle = "rgba(80,65,45,0.20)"; ctx.lineWidth = 3;
        ctx.fillRect(x, y, blockW, 280); ctx.strokeRect(x, y, blockW, 280);
        ctx.fillStyle = "#7A7F5D"; ctx.font = "700 24px sans-serif"; ctx.fillText(`${i + 1}컷`, x + 24, y + 40);
        ctx.fillStyle = "#1F2933"; ctx.font = "600 22px sans-serif"; ctx.fillText(p.scene.slice(0, 36), x + 24, y + 78);
        ctx.fillStyle = "#8F5A4A"; ctx.font = "500 20px sans-serif"; if (p.speech) ctx.fillText(`“${p.speech}”`.slice(0, 40), x + 24, y + 120);
        ctx.fillStyle = "#374151"; ctx.font = "500 19px sans-serif"; ctx.fillText(p.caption.slice(0, 42), x + 24, y + 162);
      });
      ctx.fillStyle = "#FFFDF8"; ctx.fillRect(80, 890, 1240, 300); ctx.strokeStyle = "rgba(80,65,45,0.18)"; ctx.strokeRect(80, 890, 1240, 300);
      ctx.fillStyle = "#1F2933"; ctx.font = "700 30px sans-serif"; ctx.fillText(`핵심 한 줄: ${comic.coreLine}`.slice(0, 72), 112, 960);
      ctx.fillText(`시험 포인트: ${comic.examPoint}`.slice(0, 72), 112, 1030);
      ctx.fillText(`오해 주의: ${comic.trapPoint}`.slice(0, 72), 112, 1100);
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png", 1));
      if (!blob) throw new Error("이미지 Blob 생성 실패");
      const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `윤사_웹툰카드_${philosopher.id}.png`; a.click(); URL.revokeObjectURL(url);
      setSaveState("success");
    } catch (error) {
      console.error("웹툰 카드 저장 실패", error);
      setSaveState("error");
      setSaveError(error instanceof Error ? error.message : "알 수 없는 오류");
    }
  };

  if (!comic || !panels.length) return null;

  return <section className="comic-section mt-4">
    <p className="text-xs tracking-[0.16em] text-[#6B6258]">상황 중심 학습</p>
    <h4 className="mt-2 text-2xl font-semibold text-[#1F2933]">상황으로 보는 개념</h4>
    <p className="mt-1 text-sm text-[#5F6368]">어려운 개념을 짧은 이야기로 먼저 이해해 보세요.</p>
    <div className={`comic-grid mt-5 grid ${gridCols}`}>
      {panels.map((panel, i) => {
        const failed = failedImageIds[panel.id];
        return <article key={panel.id} className="comic-panel">
          {!failed ? <img src={panel.imagePath} alt={`${comic.title} ${i+1}컷`} className="h-44 w-full object-cover sm:h-52" onError={() => setFailedImageIds((prev) => ({ ...prev, [panel.id]: true }))} /> : null}
          {failed ? <div className="relative h-44 overflow-hidden bg-[radial-gradient(circle_at_top,#FFFDF8,#FAF4E8)] p-4 sm:h-52">
            <div className="absolute -right-6 -top-8 h-20 w-20 rounded-full bg-[#B7C6A5]/30" />
            <div className="absolute bottom-3 right-4 h-10 w-10 rounded-full border border-[#D4AE6A]/60" />
            <p className="text-xs font-semibold tracking-[0.1em] text-[#7A7F5D]">{i + 1}컷</p>
            <p className="mt-2 text-sm font-semibold text-[#1F2933] break-keep">{panel.scene}</p>
            {panel.speech ? <p className="mt-2 inline-block rounded-full border border-[#E8B8A7] bg-white/90 px-3 py-1 text-xs text-[#8F5A4A]">“{panel.speech}”</p> : null}
            <p className="mt-2 text-xs text-[#5F6368] break-keep">{panel.caption}</p>
          </div> : null}
          <div className="p-4"><p className="text-sm text-[#1F2933] break-keep">{panel.caption}</p></div>
        </article>;
      })}
    </div>
    <div className="mt-4 grid gap-3 md:grid-cols-3">
      <div className="rounded-2xl border border-[rgba(80,65,45,0.12)] bg-[#FFFDF8] p-4"><p className="text-xs text-[#7A7F5D]">핵심 한 줄</p><p className="mt-2 text-sm text-[#1F2933]">{comic.coreLine}</p></div>
      <div className="rounded-2xl border border-[rgba(80,65,45,0.12)] bg-[#FFFDF8] p-4"><p className="text-xs text-[#8F5A4A]">시험 포인트</p><p className="mt-2 text-sm text-[#1F2933]">{comic.examPoint}</p></div>
      <div className="rounded-2xl border border-[rgba(80,65,45,0.12)] bg-[#FFFDF8] p-4"><p className="text-xs text-[#D4AE6A]">오해 주의</p><p className="mt-2 text-sm text-[#1F2933]">{comic.trapPoint}</p></div>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <button onClick={() => void saveComicCard()} className="rounded-full border border-[#C48B4D] bg-[#FFF1D7] px-4 py-2 text-sm text-[#7A4D22]">웹툰 카드 저장</button>
      <p className="self-center text-xs text-[#5F6368]">{saveState === "saving" ? "저장 중..." : saveState === "success" ? "저장 완료" : saveState === "error" ? `저장 실패: ${saveError}` : ""}</p>
    </div>
  </section>;
}
