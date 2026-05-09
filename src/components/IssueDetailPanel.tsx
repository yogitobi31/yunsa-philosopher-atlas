"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";

type Props = { topic: IssueTopic; compact?: boolean };
type SaveState = "idle" | "saving" | "success" | "error";

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

export function IssueDetailPanel({ topic, compact = false }: Props) {
  const [toast, setToast] = useState<string | null>(null);
  const [saveError, setSaveError] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const philosopherIds = useMemo(() => topic.relatedPhilosophers.join("-"), [topic]);
  const compareText = useMemo(
    () => topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / "),
    [topic.comparePairs],
  );

  const fileName = `ethics-card_${slug(philosopherIds)}_${slug(topic.id)}.png`;

  const steps = [
    { title: "CARD 1 · 핵심 질문", body: topic.question },
    { title: "CARD 2 · 맹자 vs 순자 핵심 비교", body: compareText },
    { title: "CARD 3 · 시험 함정 포인트", body: topic.commonTrap },
    { title: "CARD 4 · 한 줄 암기", body: topic.shortInsight },
    { title: "CARD 5 · 저장 안내", body: "아래 저장 버튼으로 SNS 공유용 카드 생성" },
  ];

  const showToast = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(null), 2600);
  };

  const downloadImage = async () => {
    setSaveState("saving");
    setSaveError("");
    try {
      const blob = await createMemorizationPng(topic, compareText);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

      if (isIOS) {
        const dataUrl = await blobToDataUrl(blob);
        openImageFallback(dataUrl, fileName);
        setSaveState("success");
        showToast("이미지가 열렸습니다. 길게 눌러 저장해 주세요.");
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setSaveState("success");
      showToast("암기카드 이미지가 저장되었습니다.");
    } catch (error) {
      console.error("Canvas image export failed:", error);
      setSaveState("error");
      const message = error instanceof Error ? error.message : String(error);
      setSaveError(message);
      showToast(`이미지 저장 실패: ${message}`);
    }
  };

  return (
    <article className={`premium-card glass relative ${compact ? "p-5" : "p-6 md:p-7"}`}>
      <div className="step-card-header mb-3">
        <p className="eyebrow">Step Card Flow</p>
        <button disabled={saveState === "saving"} onClick={downloadImage} className="save-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text-main)] hover:border-cyan-200/60 disabled:cursor-not-allowed disabled:opacity-55">
          ⬇ {saveState === "saving" ? "저장 중..." : saveState === "success" ? "저장 완료" : saveState === "error" ? "저장 실패" : "이미지로 저장"}
        </button>
      </div>

      <div className="step-card-flow mt-4">
        <div className="step-card-pager">
          <section className="step-card">
            <p className="text-xs tracking-[0.16em] text-[color:var(--text-soft)]">{steps[currentStep].title}</p>
            <p className="mt-4 text-[clamp(1rem,4.1vw,1.18rem)] text-[color:var(--text-main)]">{steps[currentStep].body}</p>
          </section>
          <div className="mt-4 flex items-center justify-between gap-3 text-sm">
            <button type="button" onClick={() => setCurrentStep((s) => Math.max(0, s - 1))} disabled={currentStep === 0} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 disabled:opacity-50">이전</button>
            <p className="text-[color:var(--text-soft)]">{currentStep + 1} / {steps.length}</p>
            <button type="button" onClick={() => setCurrentStep((s) => Math.min(steps.length - 1, s + 1))} disabled={currentStep === steps.length - 1} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 disabled:opacity-50">다음</button>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            {steps.map((_, idx) => <button key={idx} onClick={() => setCurrentStep(idx)} className={`h-2.5 w-2.5 rounded-full ${idx === currentStep ? "bg-[color:var(--accent-gold)]" : "bg-[#d9cfbd]"}`} aria-label={`카드 ${idx + 1}`} />)}
          </div>
        </div>
      </div>

      {!compact && <div className="mt-6"><p className="text-sm font-medium text-[color:var(--text-main)]">관련 철학자</p><div className="mt-3 flex flex-wrap gap-2">{topic.relatedPhilosophers.map((id) => <Link key={id} href={`/philosophers/${id}`} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-sm text-[color:var(--text-main)] hover:border-white/35">{nameById[id] ?? id}</Link>)}</div></div>}
      {saveError && <p className="mt-3 text-xs text-[#a34343]">이미지 저장 실패: {saveError}</p>}
      {toast && <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-xs text-[color:var(--text-main)]">{toast}</div>}
    </article>
  );
}

async function createMemorizationPng(topic: IssueTopic, compareText: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context is null");

  const bg = ctx.createLinearGradient(0, 0, 1080, 1350);
  bg.addColorStop(0, "#F8F1E4");
  bg.addColorStop(0.5, "#FFFDF8");
  bg.addColorStop(1, "#E9F0E4");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1080, 1350);

  roundRect(ctx, 80, 90, 920, 1170, 48);
  ctx.fillStyle = "#FFFDF8";
  ctx.fill();
  ctx.strokeStyle = "rgba(80,65,45,0.12)";
  ctx.lineWidth = 2;
  ctx.stroke();

  let y = 170;
  ctx.fillStyle = "#8A8175";
  ctx.font = "600 30px 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";
  ctx.fillText("윤리와 사상 구조학습 카드", 130, y);

  y += 60;
  ctx.fillStyle = "#1F2933";
  ctx.font = "700 52px 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";
  y = drawWrappedText(ctx, topic.title, 130, y, 820, 64);

  y += 15;
  ctx.strokeStyle = "rgba(80,65,45,0.18)";
  ctx.beginPath(); ctx.moveTo(130, y); ctx.lineTo(950, y); ctx.stroke();

  const sections = [
    ["핵심 질문", topic.question],
    ["핵심 비교 (맹자 vs 순자)", compareText],
    ["시험 함정", topic.commonTrap],
    ["한 줄 암기", topic.shortInsight],
  ] as const;

  for (const [heading, body] of sections) {
    y += 52;
    ctx.fillStyle = "#5F6368";
    ctx.font = "700 32px 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";
    ctx.fillText(heading, 130, y);
    y += 20;
    ctx.fillStyle = "#1F2933";
    ctx.font = "500 34px 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";
    y = drawWrappedText(ctx, body, 130, y + 28, 820, 48);
  }

  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("canvas.toBlob returned null")), "image/png", 1);
  });
}

function drawWrappedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  const flushLine = () => {
    if (!line) return;
    ctx.fillText(line, x, currentY);
    line = "";
    currentY += lineHeight;
  };

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width <= maxWidth) {
      line = testLine;
      continue;
    }
    if (line) flushLine();

    if (ctx.measureText(word).width <= maxWidth) {
      line = word;
    } else {
      let chunk = "";
      for (const char of word) {
        const testChunk = chunk + char;
        if (ctx.measureText(testChunk).width > maxWidth && chunk) {
          ctx.fillText(chunk, x, currentY);
          currentY += lineHeight;
          chunk = char;
        } else {
          chunk = testChunk;
        }
      }
      line = chunk;
    }
  }

  flushLine();
  return currentY;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
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
