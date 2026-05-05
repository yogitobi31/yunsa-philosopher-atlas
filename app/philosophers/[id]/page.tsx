import { notFound } from "next/navigation";
import Link from "next/link";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export default async function PhilosopherDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = philosophers.find((item) => item.id === id);
  if (!p) return notFound();

  return <main className="min-h-screen px-4 py-8 md:px-8 md:py-12"><div className="mx-auto max-w-5xl"><Link href="/" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-atlas-cyan">← 홈으로 돌아가기</Link><section className="section-shell mt-4"><div className={`relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-r ${p.accent} p-6 md:p-8`}><div className="flex flex-col gap-4 md:flex-row md:items-center"><PhilosopherAvatar id={p.id} name={p.name} size={120} /><div><p className="text-sm text-slate-200">{p.period} · {p.region}</p><h1 className="mt-1 text-4xl font-semibold">{p.symbol} {p.name}</h1><p className="mt-2 text-lg text-slate-100">{p.oneLine}</p><p className="mt-3 text-sm">검수: {p.reviewStatus} {p.teacherChecked ? "· 교사 확인" : ""}</p></div></div></div>
  <div className="mt-6 space-y-4"><Block title="반드시 알아야 할 것" text={p.mustKnow.join(" / ")} /><Block title="핵심 정체성" text={p.keyStandard} /><Block title="인간관" text={p.viewOfHuman} /><Block title="윤리 판단 기준" text={p.ethics} /><Block title="대표 개념" text={p.coreConcepts.join(", ")} /><Block title="시험 경고" text={p.examWarning} /><Block title="자주 나오는 선지" text={p.frequentStatements.join(" / ")} /><Block title="헷갈리는 상대" text={p.confusionPair || "비교 확장 필요"} /><Block title="30초 요약" text={p.summary30} /><Block title="sourceNote" text={p.sourceNote} /></div></section></div></main>;
}

function Block({ title, text }: { title: string; text: string }) { return <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><h2 className="text-sm text-atlas-cyan">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-100">{text}</p></article>; }
