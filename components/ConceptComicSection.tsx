"use client";
import { useMemo, useState } from "react";
import { Philosopher } from "@/data/philosophers";

type Props = { philosopher: Philosopher };

export function ConceptComicSection({ philosopher }: Props) {
  const panels = philosopher.comicPanels ?? [];
  const [index, setIndex] = useState(0);
  const visible = useMemo(() => panels[index], [panels, index]);
  if (!panels.length) return null;

  const saveComicCard = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1400;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#FFF9EE"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#2F2A24"; ctx.font = "700 52px sans-serif"; ctx.fillText(`${philosopher.name} · ${philosopher.comicTitle ?? "상황으로 보는 개념"}`, 72, 100);
    ctx.strokeStyle = "#DACCB2"; ctx.lineWidth = 4;
    panels.slice(0, 4).forEach((p, i) => { const y = 160 + i * 220; ctx.strokeRect(72, y, 936, 180); ctx.font = "600 30px sans-serif"; ctx.fillText(`${i+1}컷 ${p.scene}`, 98, y + 48); ctx.font = "400 28px sans-serif"; ctx.fillText(p.caption.slice(0, 45), 98, y + 100); if (p.note) ctx.fillText(`· ${p.note}`.slice(0, 55), 98, y + 145); });
    ctx.fillStyle = "#374151"; ctx.font = "600 32px sans-serif"; ctx.fillText(`핵심 한 줄: ${philosopher.comicSummary ?? philosopher.oneLineSummary}`.slice(0, 55), 72, 1110);
    ctx.fillText(`시험 포인트: ${philosopher.comicExamPoint ?? philosopher.examPoint}`.slice(0, 55), 72, 1170);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png", 1));
    if (!blob) return;
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `윤사_웹툰_${philosopher.name}.png`; a.click(); URL.revokeObjectURL(url);
  };

  return <section className="mt-4 rounded-3xl border border-[rgba(80,65,45,0.16)] bg-[linear-gradient(180deg,#FFFDF8_0%,#F8F1E4_100%)] p-4 shadow-[0_14px_38px_rgba(80,65,45,.08)] md:p-5">
    <p className="text-xs tracking-[0.16em] text-[#6B6258]">상황 중심 학습</p>
    <h4 className="mt-2 text-xl font-semibold text-[#1F2933]">상황으로 보는 개념</h4>
    <p className="mt-1 text-sm text-[#5C544A]">{philosopher.comicIntro ?? "개념을 이야기로 쉽게 이해해 보세요."}</p>

    <article className="mt-4 rounded-2xl border border-[#E4D6BE] bg-[#FFF8EA] p-4">
      <p className="text-sm font-semibold text-[#8A5A2B]">{philosopher.comicTitle}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {panels.map((panel, i) => <button key={`${panel.scene}-${i}`} onClick={() => setIndex(i)} className={`rounded-xl border p-3 text-left ${i===index?"border-[#C48B4D] bg-[#FFF2DA]":"border-[#E9DFC8] bg-white/70"}`}><p className="text-xs text-[#8B7A67]">{i + 1}컷 · {panel.scene}</p><p className="mt-1 text-sm text-[#2F2A24]">{panel.caption}</p></button>)}
      </div>
      {visible && <div className="mt-3 rounded-xl border border-[#E4D6BE] bg-white p-3 text-sm text-[#374151]"><b>현재 컷</b> {visible.speech ? `“${visible.speech}”` : visible.caption}{visible.note ? ` · ${visible.note}` : ""}</div>}
    </article>

    <div className="mt-3 grid gap-2 text-sm md:grid-cols-3">
      <div className="rounded-xl border border-[#DCD0BD] bg-white/80 p-3"><p className="text-xs text-[#8B7A67]">핵심 한 줄</p><p className="mt-1">{philosopher.comicSummary}</p></div>
      <div className="rounded-xl border border-[#DCD0BD] bg-white/80 p-3"><p className="text-xs text-[#8B7A67]">시험에 이렇게 나온다</p><p className="mt-1">{philosopher.comicExamPoint}</p></div>
      <div className="rounded-xl border border-[#DCD0BD] bg-white/80 p-3"><p className="text-xs text-[#8B7A67]">헷갈리기 쉬운 오답 포인트</p><p className="mt-1">{philosopher.comicTrapPoint}</p></div>
    </div>
    <div className="mt-3 flex flex-wrap gap-2 text-xs">
      <button className="rounded-full border border-[#D8C8AE] bg-white px-3 py-1.5">비교 개념 보기: {philosopher.compareWith.join(" · ")}</button>
      <button onClick={() => void saveComicCard()} className="rounded-full border border-[#C48B4D] bg-[#FFF1D7] px-3 py-1.5 text-[#7A4D22]">이 웹툰 저장</button>
    </div>
  </section>;
}
