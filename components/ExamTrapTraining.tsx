"use client";

import { useState } from "react";

type Question = { id: string; statement: string; choices: string[]; answer: string; explanation: string; trapPoint: string };

const questions: Question[] = [
  { id: "q1", statement: "도덕적 행위의 가치는 결과가 아니라 동기에 의해 결정된다.", choices: ["칸트", "벤담", "밀", "맹자"], answer: "칸트", explanation: "칸트는 선의지와 의무 동기를 도덕성의 핵심으로 본다.", trapPoint: "결과 중심 공리주의와 의무론을 뒤바꾸는 선지" },
  { id: "q2", statement: "인간의 본성은 선한 단서를 지니며 이를 확충해야 한다.", choices: ["순자", "맹자", "노자", "플라톤"], answer: "맹자", explanation: "맹자는 사단을 근거로 성선설을 주장한다.", trapPoint: "성선설(맹자)과 성악설(순자)의 키워드 교차" },
  { id: "q3", statement: "해를 끼치지 않는다면 개인의 자유는 최대한 보장되어야 한다.", choices: ["공자", "밀", "주희", "소크라테스"], answer: "밀", explanation: "밀의 해악 금지 원리는 자유주의 선지의 핵심 포인트다.", trapPoint: "자유=방임으로 과장된 오답 유도" },
];

export function ExamTrapTraining() {
  const [picked, setPicked] = useState<Record<string, string>>({});
  return <section id="trap" className="rounded-3xl glass p-6 md:p-8"><p className="text-sm text-atlas-rose">시험 함정 훈련소</p><h2 className="mt-1 text-2xl font-bold">이 선지는 누구의 입장에 가까울까?</h2><div className="mt-5 space-y-4">{questions.map((q) => {
    const selected = picked[q.id];
    const judged = !!selected;
    const correct = selected === q.answer;
    return <article key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="font-medium leading-relaxed">{q.statement}</p><div className="mt-4 flex flex-wrap gap-2">{q.choices.map((choice) => <button key={choice} onClick={() => setPicked((prev) => ({ ...prev, [q.id]: choice }))} className="rounded-full border border-white/20 bg-slate-900/60 px-4 py-2 text-sm transition hover:border-atlas-cyan/70">{choice}</button>)}</div>{judged && <div className={`mt-4 rounded-xl border p-3 text-sm ${correct ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100" : "border-rose-400/40 bg-rose-500/10 text-rose-100"}`}><p>{correct ? "정답!" : `오답 · 정답: ${q.answer}`}</p><p className="mt-1">해설: {q.explanation}</p><p className="mt-1">관련 철학자: {q.answer}</p><p className="mt-1">함정 포인트: {q.trapPoint}</p></div>}</article>;
  })}</div></section>;
}
