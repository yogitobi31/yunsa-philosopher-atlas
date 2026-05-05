import { notFound } from "next/navigation";
import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export default async function PhilosopherDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = philosophers.find((item) => item.id === id);
  if (!p) return notFound();

  const confusion = philosophers.find((item) => item.name === p.confusionPair || item.id === p.confusionPair);

  return <main className="min-h-screen px-4 py-8 md:px-8 md:py-12"><div className="mx-auto max-w-5xl"><Link href="/" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-atlas-cyan">← 홈으로 돌아가기</Link><section className="section-shell mt-4"><div className={`relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-r ${p.accent} p-6 md:p-8`}><div className="flex flex-col gap-4 md:flex-row md:items-center"><PhilosopherAvatar id={p.id} name={p.name} size={120} /><div><p className="text-sm text-slate-200">{p.period} · {p.region}</p><h1 className="mt-1 text-4xl font-semibold">{p.symbol} {p.name}</h1><p className="mt-2 text-lg text-slate-100">{p.oneLine}</p></div></div></div>
  <div className="mt-6 grid gap-4 md:grid-cols-2">
    <Block title="이 철학자를 한마디로" text={p.summary30} />
    <Block title="누구와 헷갈리는가" text={confusion ? `${confusion.name} — ${confusion.oneLine}` : (p.confusionPair || "비교 확장 필요")} />
    <Block title="반드시 알아야 할 것 3개" text={p.mustKnow.join(" / ")} />
    <Block title="시험에서 자주 나오는 포인트" text={p.frequentStatements.join(" / ")} />
  </div>
  <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-100">
    <p className="text-atlas-cyan">학습 흐름 안내</p>
    <p className="mt-2">다음 단계: 이 철학자의 혼동 페어를 비교 실험실에서 확인하세요.</p>
    <Link href="/#lab" className="mt-3 inline-flex rounded-full border border-white/20 px-3 py-2 text-xs">관련 비교로 이동</Link>
  </div>
  <div className="mt-6 space-y-4"><Block title="핵심 정체성" text={p.keyStandard} /><Block title="인간관" text={p.viewOfHuman} /><Block title="윤리 판단 기준" text={p.ethics} /><Block title="대표 개념" text={p.coreConcepts.join(", ")} /><Block title="시험 경고" text={p.examWarning} /><Block title="sourceNote" text={p.sourceNote} /></div></section></div></main>;
}

function Block({ title, text }: { title: string; text: string }) { return <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><h2 className="text-sm text-atlas-cyan">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-100">{text}</p></article>; }
