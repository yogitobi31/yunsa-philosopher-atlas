"use client";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";
import { toPng } from "@/src/lib/htmlToImage";

type Props = { topic: IssueTopic; compact?: boolean };

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

export function IssueDetailPanel({ topic, compact = false }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const philosopherIds = useMemo(() => topic.relatedPhilosophers.join("-"), [topic]);

  const fileName = `ethics-card_${slug(philosopherIds)}_${slug(topic.id)}.png`;

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(null), 2200);
  };

  const downloadImage = async () => {
    if (!cardRef.current) return;
    showToast("암기카드 이미지를 만드는 중…");
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 3, width: 1080, height: 1350 });
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

      if (isIOS) {
        openImageFallback(dataUrl, fileName);
        showToast("이미지를 길게 눌러 저장해 주세요.");
        return;
      }

      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataUrl;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast("이미지 저장 완료!");
    } catch {
      showToast("이미지 저장에 실패했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <article className={`premium-card relative ${compact ? "p-5" : "p-6 md:p-7"}`}>
      <div className="mb-4 rounded-2xl border border-cyan-100/20 bg-cyan-100/5 p-3 text-xs text-cyan-50">
        이 카드는 시험 전 빠르게 복습할 수 있는 암기 이미지로 저장할 수 있어요.
      </div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="eyebrow">질문 → 논점 → 비교</p>
        <button onClick={downloadImage} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white hover:border-cyan-200/60">
          ⬇ 이미지로 저장
        </button>
      </div>
      <p className="text-xs text-slate-300">현재 보이는 철학자 구조학습카드가 이미지로 저장됩니다.</p>

      <div ref={cardRef} className="mt-4 mx-auto flex aspect-[4/5] w-full max-w-[720px] flex-col rounded-[22px] border border-slate-500/40 bg-gradient-to-b from-[#0e1629] to-[#151922] p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{topic.title}</h3>
        <p className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-base leading-relaxed text-slate-100">Q. {topic.question}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2"><Info title="논점 핵심" value={topic.keyContrast} /><Info title="시험 포인트" value={topic.examPoint} /><Info title="시험 함정" value={topic.commonTrap} /></div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs tracking-[0.18em] text-slate-400">대표 주장 · 비교 철학자</p>
          <p className="mt-2 text-sm text-slate-100">대표 주장: {topic.shortInsight}</p>
          <p className="mt-1 text-sm text-slate-200">비교 철학자: {topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / ")}</p>
        </div>
        <div className="mt-auto border-t border-white/10 pt-3 text-center text-xs tracking-[0.14em] text-slate-400">윤리와 사상 구조학습 카드</div>
      </div>

      {!compact && <div className="mt-6"><p className="text-sm font-medium text-slate-100">관련 철학자</p><div className="mt-3 flex flex-wrap gap-2">{topic.relatedPhilosophers.map((id) => <Link key={id} href={`/philosophers/${id}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-100 hover:border-white/35">{nameById[id] ?? id}</Link>)}</div></div>}
      {toast && <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-950/90 px-4 py-2 text-xs text-slate-100">{toast}</div>}
    </article>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"><p className="text-xs tracking-[0.12em] text-slate-400">{title}</p><p className="mt-2 text-sm leading-relaxed text-slate-100">{value}</p></div>;
}

function slug(text: string) { return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9가-힣-]/g, ""); }


function openImageFallback(dataUrl: string, fileName: string) {
  const win = window.open("_blank", "noopener,noreferrer");
  if (!win) return;
  win.document.write(`<title>${fileName}</title><p style="font-family:sans-serif;padding:12px;">이미지를 길게 눌러 저장해 주세요.</p><img src="${dataUrl}" style="display:block;width:100%;height:auto;"/>`);
  win.document.close();
}
