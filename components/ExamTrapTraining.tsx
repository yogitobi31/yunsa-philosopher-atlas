"use client";
import { useState } from "react";

type Question = { id: string; statement: string; choices: string[]; answer: string; explanation: string; trapPoint: string };
const questions: Question[] = [
  { id: "q1", statement: "도덕적 행위의 가치는 결과가 아니라 동기에 의해 결정된다.", choices: ["칸트", "벤담", "밀", "맹자"], answer: "칸트", explanation: "칸트는 선의지와 의무 동기를 도덕성의 핵심으로 본다.", trapPoint: "결과 중심 공리주의와 의무론을 뒤바꾸는 선지" },
  { id: "q2", statement: "인간의 본성은 선한 단서를 지니며 이를 확충해야 한다.", choices: ["순자", "맹자", "노자", "플라톤"], answer: "맹자", explanation: "맹자는 사단을 근거로 성선설을 주장한다.", trapPoint: "성선설(맹자)과 성악설(순자)의 키워드 교차" },
  { id: "q3", statement: "해를 끼치지 않는다면 개인의 자유는 최대한 보장되어야 한다.", choices: ["공자", "밀", "주희", "소크라테스"], answer: "밀", explanation: "밀의 해악 금지 원리는 자유주의 선지의 핵심 포인트다.", trapPoint: "자유=방임으로 과장된 오답 유도" },
];

export function ExamTrapTraining() { const [picked, setPicked] = useState<Record<string, string>>({});
  return <section id="trap" className="section-shell"><p className="eyebrow">Exam Trap</p><h2 className="section-title mt-3">시험 함정 훈련소</h2><p className="section-subtitle">선지를 외우기보다, 누가 어떤 판단 기준을 쓰는지 구분해 보세요.</p><div className="mt-6 space-y-4">{questions.map((q) => {const selected = picked[q.id]; const judged = !!selected; const correct = selected === q.answer;
    return <article key={q.id} className="premium-card p-5"><p className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-base leading-relaxed">“{q.statement}”</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{q.choices.map((choice) => <button key={choice} onClick={() => setPicked((prev) => ({ ...prev, [q.id]: choice }))} className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${selected === choice ? "border-atlas-cyan/60 bg-atlas-cyan/15" : "border-white/15 bg-white/[0.02]"}`}>{choice}</button>)}</div>{judged && <div className={`mt-4 rounded-2xl border p-4 text-sm ${correct ? "border-emerald-300/40 bg-emerald-300/10" : "border-rose-300/40 bg-rose-300/10"}`}><p className="font-medium">{correct ? "정답입니다." : `오답입니다. 정답: ${q.answer}`}</p><p className="mt-2">해설: {q.explanation}</p><p className="mt-3 text-xs text-slate-200">관련 철학자: {q.answer}</p><p className="mt-1 text-xs text-amber-100">함정 포인트: {q.trapPoint}</p></div>}</article>;})}</div></section>; }
