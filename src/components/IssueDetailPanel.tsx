"use client";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";
import { toPngBlob } from "@/src/lib/htmlToImage";
import { MemorizationExportCard } from "@/src/components/MemorizationExportCard";

type Props = { topic: IssueTopic; compact?: boolean };

type SaveState = "idle" | "saving" | "success" | "error";

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

export function IssueDetailPanel({ topic, compact = false }: Props) {
  const exportCardRef = useRef<HTMLDivElement | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const philosopherIds = useMemo(() => topic.relatedPhilosophers.join("-"), [topic]);
  const compareText = useMemo(
    () => topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / "),
    [topic.comparePairs],
  );

  const fileName = `ethics-card_${slug(philosopherIds)}_${slug(topic.id)}.png`;

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(null), 2600);
  };

  const downloadImage = async () => {
    setSaveState("saving");
    try {
      const node = exportCardRef.current;
      if (!node) throw new Error("Export card ref is null");

      if (document.fonts?.ready) await document.fonts.ready;
      await waitForImages(node);
      await new Promise(requestAnimationFrame);
      await new Promise(requestAnimationFrame);

      const blob = await toPngBlob(node, { pixelRatio: 2, width: node.offsetWidth, height: node.offsetHeight });
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

      if (isIOS) {
        const dataUrl = await blobToDataUrl(blob);
        openImageFallback(dataUrl, fileName);
        setSaveState("success");
        showToast("이미지가 열렸습니다. 길게 눌러 저장해 주세요.");
        return;
      }

      const url = URL.createObjectURL(blob);
      if (isMobile) {
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.rel = "noopener";
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      URL.revokeObjectURL(url);
      setSaveState("success");
      showToast("암기카드 이미지가 저장되었습니다.");
    } catch (error) {
      console.error("Image export failed:", error);
      setSaveState("error");
      showToast("이미지 저장 실패: 개발자 도구 콘솔에서 원인을 확인해 주세요.");
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
        <button disabled={saveState === "saving"} onClick={downloadImage} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:border-cyan-200/60 disabled:cursor-not-allowed disabled:opacity-55">
          ⬇ {saveState === "saving" ? "저장 중..." : saveState === "success" ? "저장 완료" : saveState === "error" ? "저장 실패" : "이미지로 저장"}
        </button>
      </div>

      <div className="step-card-row mt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {steps.map((step, idx) => (
          <section key={step.title} className="step-card rounded-3xl border border-white/15 bg-gradient-to-b from-[#111a2f] to-[#0d1324] p-6 shadow-[0_20px_50px_rgba(2,6,18,.45)]">
            <p className="text-xs tracking-[0.16em] text-cyan-100/85">{step.title}</p>
            <p className="mt-4 text-[clamp(1rem,4.1vw,1.18rem)] leading-[1.75] text-slate-100 [word-break:keep-all] break-words">{step.body}</p>
            <p className="mt-6 text-xs text-slate-400">{idx + 1} / 5</p>
          </section>
        ))}
      </div>

      <div className="export-capture-stage" aria-hidden>
        <MemorizationExportCard ref={exportCardRef} topic={topic} />
      </div>

      {!compact && <div className="mt-6"><p className="text-sm font-medium text-slate-100">관련 철학자</p><div className="mt-3 flex flex-wrap gap-2">{topic.relatedPhilosophers.map((id) => <Link key={id} href={`/philosophers/${id}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-slate-100 hover:border-white/35">{nameById[id] ?? id}</Link>)}</div></div>}
      {toast && <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-950/90 px-4 py-2 text-xs text-slate-100">{toast}</div>}
    </article>
  );
}

async function waitForImages(node: HTMLElement) {
  const images = Array.from(node.querySelectorAll("img"));
  await Promise.all(images.map((img) => (img.complete ? Promise.resolve() : new Promise<void>((resolve, reject) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => reject(new Error(`Image failed to load: ${img.src}`)), { once: true });
  }))));
}

function blobToDataUrl(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => (typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("Failed to convert blob to data URL")));
    reader.onerror = () => reject(reader.error ?? new Error("Failed to read blob"));
    reader.readAsDataURL(blob);
  });
}

function slug(text: string) { return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9가-힣-]/g, ""); }

function openImageFallback(dataUrl: string, fileName: string) {
  const win = window.open("_blank", "noopener,noreferrer");
  if (!win) return;
  win.document.write(`<title>${fileName}</title><p style="font-family:sans-serif;padding:12px;">이미지를 길게 눌러 저장해 주세요.</p><img src="${dataUrl}" style="display:block;width:100%;height:auto;"/>`);
  win.document.close();
}
