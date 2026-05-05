import { notFound } from "next/navigation";
import Link from "next/link";
import { philosophers } from "@/data/philosophers";

export default async function PhilosopherDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = philosophers.find((item) => item.id === id);
  if (!p) return notFound();

  return (
    <main className="min-h-screen bg-hero-gradient px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto max-w-5xl rounded-3xl glass p-6 md:p-10">
        <Link href="/" className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-atlas-cyan transition hover:border-atlas-cyan/60">← 홈으로 돌아가기</Link>
        <div className={`relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-r ${p.accent} p-6`}>
          <span className="absolute -right-3 top-0 text-9xl font-black text-white/15">{p.symbol}</span>
          <p className="text-sm text-slate-200">{p.period} · {p.region}</p>
          <h1 className="mt-1 text-4xl font-bold">{p.name}</h1>
          <p className="mt-2 text-lg text-slate-100">{p.oneLine}</p>
          <p className="mt-3 text-sm italic text-slate-100">“{p.quoteLike}”</p>
          <div className="mt-3 flex flex-wrap gap-2">{p.coreConcepts.map((tag) => <span key={tag} className="rounded-full border border-white/30 px-3 py-1 text-xs">{tag}</span>)}</div>
          {p.confusionPair && <p className="mt-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs">헷갈리는 상대: {p.confusionPair}</p>}
        </div>

        <div className="mt-5 rounded-2xl border border-amber-300/40 bg-amber-300/10 p-4 text-sm text-amber-100">시험 함정: {p.trapPreview}</div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Info title="핵심 정체성" text={p.keyStandard} /><Info title="인간관" text={p.viewOfHuman} />
          <Info title="윤리 판단 기준" text={p.ethics} /><Info title="대표 개념" text={p.coreConcepts.join(", ")} />
          <Info title="시험 함정" text={p.examTraps.join(" / ")} /><Info title="자주 나오는 선지" text={p.frequentStatements.join(" / ")} />
          <Info title="비교 추천" text={(p.confusionPair ? `${p.confusionPair}와 우선 비교` : "교재 대비 비교 확장") + ` · ${p.compareWith.join(", ")}`} /><Info title="30초 요약" text={p.summary30} />
        </div>
      </div>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <article className="rounded-2xl border border-white/10 bg-white/5 p-4"><h2 className="text-sm text-atlas-cyan">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-100">{text}</p></article>;
}
