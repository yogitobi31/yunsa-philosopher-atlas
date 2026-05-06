"use client";
import { useMemo, useState } from "react";
import { trapQuestions } from "@/data/trapQuestions";

const WRONG_KEY = "ethics-atlas-wrong-answers-v2";
type Mode = "RANDOM10" | "CATEGORY" | "WRONG" | "MOCK";

export function ExamTrapTraining() {
  const [mode, setMode] = useState<Mode>("RANDOM10");
  const [category, setCategory] = useState("전체");
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const categories = ["전체", ...Array.from(new Set(trapQuestions.map((q) => q.category)))];

  const pool = useMemo(() => {
    const wrong = typeof window === "undefined" ? [] : JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]") as string[];
    const base = category === "전체" ? trapQuestions : trapQuestions.filter((q) => q.category === category);
    if (mode === "WRONG") return base.filter((q) => wrong.includes(q.id));
    if (mode === "MOCK") return base.slice(0, 20);
    if (mode === "RANDOM10") return [...base].sort(() => Math.random() - 0.5).slice(0, 10);
    return base;
  }, [mode, category]);

  const q = pool[idx % Math.max(pool.length, 1)];
  if (!q) return <section id="trap" className="section-shell"><h2 className="section-title">시험함정훈련소</h2><p className="mt-2 text-slate-300">선택한 조건의 문제가 없습니다.</p></section>;
  const isCorrect = picked !== null && (typeof q.answer === "boolean" ? String(q.answer) === picked : q.answer === picked);
  const submit = (value: string) => {
    if (picked) return;
    setPicked(value);
    const correct = typeof q.answer === "boolean" ? String(q.answer) === value : q.answer === value;
    if (!correct) {
      const prev = JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]") as string[];
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(new Set([...prev, q.id]))));
    }
  };
  const choices = q.choices ?? ["true", "false"];

  return <section id="trap" className="section-shell"><p className="eyebrow">Exam Trap Lab</p><h2 className="section-title mt-2">시험함정훈련소</h2><p className="mt-2 text-sm text-slate-300">총 {trapQuestions.length}문항 · 현재 {pool.length}문항</p>
    <div className="mt-4 flex flex-wrap gap-2">{(["RANDOM10","CATEGORY","WRONG","MOCK"] as const).map((m)=><button key={m} onClick={()=>{setMode(m);setIdx(0);setPicked(null);}} className={`rounded-xl border px-3 py-2 text-sm ${mode===m?"border-cyan-200 bg-cyan-400/15":"border-white/20"}`}>{m}</button>)}
    <select value={category} onChange={(e)=>{setCategory(e.target.value);setIdx(0);setPicked(null);}} className="rounded-xl border border-white/20 bg-slate-950/70 px-3 py-2 text-sm">{categories.map((c)=><option key={c}>{c}</option>)}</select></div>
    <article className="mt-4 rounded-3xl border border-white/15 bg-slate-950/55 p-5"><p className="text-sm text-slate-300">[{q.category}] {q.philosopher ?? "통합"} · {q.type}</p><p className="mt-3 text-lg">{q.question}</p>
      <div className="mt-4 grid gap-2 md:grid-cols-2">{choices.map((c)=><button key={c} onClick={()=>submit(c)} className="rounded-xl border border-white/20 bg-white/[0.03] px-3 py-3 text-left hover:border-white/40">{c}</button>)}</div>
      {picked && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect?"border-emerald-300/40 bg-emerald-500/10":"border-rose-300/40 bg-rose-500/10"}`}><p><strong>정답:</strong> {String(q.answer)}</p><p><strong>해설:</strong> {q.explanation}</p><p><strong>함정 포인트:</strong> {q.trapPoint}</p></div>}
      <button onClick={()=>{setIdx((v)=>v+1);setPicked(null);}} className="mt-4 rounded-xl border border-white/20 px-4 py-2">다음 문제</button>
    </article>
  </section>;
}
