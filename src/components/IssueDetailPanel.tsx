"use client";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";
import { toPng } from "@/src/lib/htmlToImage";

type Props = { topic: IssueTopic; compact?: boolean };

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

export function IssueDetailPanel({ topic, compact = false }: Props) {
  const exportCardRef = useRef<HTMLDivElement | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const philosopherIds = useMemo(() => topic.relatedPhilosophers.join("-"), [topic]);
  const compareText = useMemo(
    () => topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / "),
    [topic.comparePairs],
  );

  const fileName = `ethics-card_${slug(philosopherIds)}_${slug(topic.id)}.png`;

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(null), 2200);
  };

  const downloadImage = async () => {
    if (!exportCardRef.current) return;
    showToast("암기카드 이미지를 만드는 중…");
    try {
      const dataUrl = await toPng(exportCardRef.current, { cacheBust: true, pixelRatio: 3, width: 1080, height: 1350 });
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

  const steps = [
    { title: "CARD 1 · 핵심 질문", body: topic.question },
    { title: "CARD 2 · 맹자 vs 순자 핵심 비교", body: compareText },
    { title: "CARD 3 · 시험 함정 포인트", body: topic.commonTrap },
    { title: "CARD 4 · 한 줄 암기", body: topic.shortInsight },
    { title: "CARD 5 · 저장용 프리미엄 카드", body: "아래 저장 버튼으로 SNS 공유용 카드 생성" },
  ];

  return (
    <article className={`premium-card relative ${compact ? "p-5" : "p-6 md:p-7"}`}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="eyebrow">Step Card Flow</p>
        <button onClick={downloadImage} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:border-cyan-200/60">
          ⬇ 이미지로 저장
        </button>
      </div>

      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-[calc(1rem+env(safe-area-inset-bottom))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {steps.map((step, idx) => (
          <section
            key={step.title}
            className="min-w-full snap-center rounded-3xl border border-white/15 bg-gradient-to-b from-[#111a2f] to-[#0d1324] p-6 shadow-[0_20px_50px_rgba(2,6,18,.45)]"
          >
            <p className="text-xs tracking-[0.16em] text-cyan-100/85">{step.title}</p>
            <p className="mt-4 text-[clamp(1rem,4.1vw,1.18rem)] leading-[1.75] text-slate-100 [word-break:keep-all] break-words">{step.body}</p>
            <p className="mt-6 text-xs text-slate-400">{idx + 1} / 5</p>
          </section>
        ))}
      </div>

      <div className="sr-only" aria-hidden>
        <div ref={exportCardRef} className="flex aspect-[4/5] w-[1080px] flex-col rounded-[42px] border border-slate-500/40 bg-gradient-to-b from-[#0a0f1d] via-[#10192e] to-[#0e1528] p-16 text-white">
          <p className="text-[28px] tracking-[0.2em] text-cyan-100/90">ETHICS PREMIUM CARD</p>
          <h3 className="mt-6 text-6xl font-semibold leading-[1.25] [word-break:keep-all]">{topic.question}</h3>
          <div className="mt-10 space-y-7 text-3xl leading-[1.55] text-slate-100">
            <p><span className="text-cyan-200">핵심 대비</span> · {compareText}</p>
            <p><span className="text-cyan-200">한 줄 암기</span> · {topic.shortInsight}</p>
            <p><span className="text-cyan-200">철학자 키워드</span> · {topic.relatedPhilosophers.map((id) => nameById[id] ?? id).join(" · ")}</p>
          </div>
        </div>
      </div>

      {!compact && <div className="mt-6"><p className="text-sm font-medium text-slate-100">관련 철학자</p><div className="mt-3 flex flex-wrap gap-2">{topic.relatedPhilosophers.map((id) => <Link key={id} href={`/philosophers/${id}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-100 hover:border-white/35">{nameById[id] ?? id}</Link>)}</div></div>}
      {toast && <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-950/90 px-4 py-2 text-xs text-slate-100">{toast}</div>}
    </article>
  );
}

function slug(text: string) { return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9가-힣-]/g, ""); }

function openImageFallback(dataUrl: string, fileName: string) {
  const win = window.open("_blank", "noopener,noreferrer");
  if (!win) return;
  win.document.write(`<title>${fileName}</title><p style="font-family:sans-serif;padding:12px;">이미지를 길게 눌러 저장해 주세요.</p><img src="${dataUrl}" style="display:block;width:100%;height:auto;"/>`);
  win.document.close();
}
