"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { philosophers } from "@/data/philosophers";

export default function PhilosopherDetailPage() {
  const params = useParams<{ id: string }>();
  const p = philosophers.find((x) => x.id === params.id);
  if (!p) return <main className="p-8">존재하지 않는 철학자입니다.</main>;
  return <main className="min-h-screen px-4 py-8 md:px-8"><div className="mx-auto max-w-4xl"><Link href="/" className="rounded-xl border border-white/20 px-3 py-2 text-sm">← 홈으로</Link><section className="section-shell mt-4"><p className="text-sm text-cyan-200">{p.category} · {p.tradition} · {p.era}</p><h1 className="mt-2 text-4xl font-semibold">{p.name}</h1><p className="mt-2 text-slate-200">{p.oneLineSummary}</p><div className="mt-6 space-y-3 text-sm"><p><b>핵심 흐름:</b> {p.coreFlow.join(" → ")}</p><p><b>핵심 사상:</b> {p.keyIdeas.join(" / ")}</p><p><b>시험 포인트:</b> {p.examPoint}</p><p><b>함정 포인트:</b> {p.trapPoint}</p><p><b>비교 대상:</b> {p.compareWith.join(" / ")}</p><p><b>대표 주장:</b> {p.representativeClaim}</p></div></section></div></main>;
}
