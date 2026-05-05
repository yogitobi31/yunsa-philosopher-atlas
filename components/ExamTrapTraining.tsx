"use client";

import { useState } from "react";

type Question = { id: string; statement: string; choices: string[]; answer: string; explanation: string };

const questions: Question[] = [
  { id: "q1", statement: "도덕적 행위의 가치는 결과가 아니라 동기에 의해 결정된다.", choices: ["칸트", "벤담", "밀", "맹자"], answer: "칸트", explanation: "칸트는 선의지와 의무 동기를 도덕성의 핵심으로 본다." },
  { id: "q2", statement: "인간의 본성은 선한 단서를 지니며 이를 확충해야 한다.", choices: ["순자", "맹자", "노자", "플라톤"], answer: "맹자", explanation: "맹자는 사단을 근거로 성선설을 주장한다." },
  { id: "q3", statement: "해를 끼치지 않는다면 개인의 자유는 최대한 보장되어야 한다.", choices: ["공자", "밀", "주희", "소크라테스"], answer: "밀", explanation: "밀의 해악 금지 원리는 자유주의 선지의 핵심 포인트다." },
];

export function ExamTrapTraining() {
  const [picked, setPicked] = useState<Record<string, string>>({});

  return (
    <section className="rounded-3xl glass p-6 md:p-8">
      <p className="text-sm text-atlas-rose">시험 함정 훈련소</p>
      <h2 className="mt-1 text-2xl font-bold">이 선지는 누구의 입장에 가까울까?</h2>
      <div className="mt-5 space-y-4">
        {questions.map((q) => {
          const selected = picked[q.id];
          const judged = !!selected;
          const correct = selected === q.answer;
          return <article key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="font-medium">{q.statement}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
              {q.choices.map((choice) => (
                <button key={choice} onClick={() => setPicked((prev) => ({ ...prev, [q.id]: choice }))} className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:border-atlas-cyan/70">
                  {choice}
                </button>
              ))}
            </div>
            {judged && <p className={`mt-3 text-sm ${correct ? "text-emerald-300" : "text-rose-300"}`}>{correct ? "정답!" : `오답 · 정답: ${q.answer}`} — {q.explanation}</p>}
          </article>;
        })}
      </div>
    </section>
  );
}
