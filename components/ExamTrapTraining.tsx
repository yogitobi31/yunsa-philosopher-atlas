"use client";
import { useMemo, useState } from "react";
import { trapQuestions } from "@/data/trapQuestions";

const WRONG_KEY = "ethics-atlas-wrong-answers";

export function ExamTrapTraining() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const q = trapQuestions[idx % trapQuestions.length];
  const isCorrect = picked !== null && (typeof q.answer === "boolean" ? String(q.answer) === picked : q.answer === picked);
  const total = trapQuestions.length;
  const submit = (value: string) => {
    if (picked) return;
    setPicked(value);
    if (!(typeof q.answer === "boolean" ? String(q.answer) === value : q.answer === value)) {
      const prev = JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]") as string[];
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(new Set([...prev, q.id]))));
    }
  };
  const choices = useMemo(() => q.choices ?? ["true", "false"], [q]);
  return <section id="trap" className="section-shell"><p className="eyebrow">Exam Trap Lab</p><h2 className="section-title mt-2">시험함정훈련소</h2><p className="mt-2 text-sm text-slate-300">총 {total}문항</p><article className="mt-4 rounded-3xl border border-white/15 bg-slate-950/50 p-5"><p className="text-sm text-slate-300">[{q.category}] {q.type}</p><p className="mt-3 text-lg">{q.question}</p><div className="mt-4 grid gap-2 md:grid-cols-2">{choices.map((c)=><button key={c} onClick={()=>submit(c)} className="rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-left">{c}</button>)}</div>{picked && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect?"border-emerald-300/40 bg-emerald-500/10":"border-rose-300/40 bg-rose-500/10"}`}><p>정답: {String(q.answer)}</p><p>해설: {q.explanation}</p><p>함정 포인트: {q.trapPoint}</p></div>}<button onClick={()=>{setIdx((v)=>v+1);setPicked(null);}} className="mt-4 rounded-xl border border-white/20 px-4 py-2">다음 문제</button></article></section>;
}
