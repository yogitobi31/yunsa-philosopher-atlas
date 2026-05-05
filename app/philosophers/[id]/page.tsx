"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { philosophers } from "@/data/philosophers";
import { PhilosopherAvatar } from "@/src/components/philosopher-visuals/PhilosopherAvatar";

export default function PhilosopherDetail() {
  const params = useParams<{ id: string }>();
  const p = useMemo(() => philosophers.find((item) => item.id === params.id), [params.id]);
  const [done, setDone] = useState(false);
  useEffect(() => { if (!p) return; setDone(localStorage.getItem(`done:${p.id}`) === "1"); }, [p]);
  if (!p) return <main className="p-8">존재하지 않는 철학자입니다.</main>;
  const markDone = () => { localStorage.setItem(`done:${p.id}`, "1"); setDone(true); };

  return <main className="min-h-screen px-4 py-8 md:px-8 md:py-12"><div className="mx-auto max-w-5xl"><Link href="/" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-atlas-cyan">← 홈으로 돌아가기</Link><section className="section-shell mt-4"><div className="relative overflow-hidden rounded-[2rem] border border-white/15 p-6 md:p-8"><div className="flex flex-col gap-4 md:flex-row md:items-center"><PhilosopherAvatar id={p.id} name={p.name} size={100} /><div><p className="text-sm text-slate-200">{p.period} · {p.region} · {p.category}</p><h1 className="mt-1 text-4xl font-semibold">{p.hanjaOrSymbol} {p.name}</h1><p className="mt-2 text-lg text-slate-100">{p.oneLine}</p></div></div></div>
  <div className="mt-6 space-y-4"><Block title="A. 핵심 질문" text={p.coreQuestion} /><Block title="B-1. 인간관" text={p.humanView} /><Block title="B-2. 도덕 판단 기준" text={p.decisionStandard} /><Block title="B-3. 이상 사회/실천" text={p.idealStateOrSociety} /><Block title="C. 시험에 나오는 문장" text={p.examPoint} /><Block title="D. 헷갈리는 사람" text={p.contrastWith.map((id) => philosophers.find(x=>x.id===id)?.name || id).join(" vs ")} /><Block title="E. 자주 틀리는 함정" text={p.commonTrap} /><Block title="F. 기억 이미지" text={p.memoryImage} /><Block title="요약" text={p.longSummary} /></div>
  <button onClick={markDone} className="mt-5 rounded-xl bg-atlas-cyan/90 px-4 py-2 text-sm text-slate-950">{done ? "학습 완료됨" : "이해 완료 체크"}</button>
  </section></div></main>;
}

function Block({ title, text }: { title: string; text: string }) { return <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><h2 className="text-sm text-atlas-cyan">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-100">{text}</p></article>; }
