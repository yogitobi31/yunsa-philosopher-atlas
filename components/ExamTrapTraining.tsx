"use client";
import { useMemo, useState } from "react";

type Category = "전체" | "동양윤리" | "서양윤리" | "한국윤리" | "사회사상";
type Question = { id: string; category: Exclude<Category, "전체">; difficulty: "쉬움"|"보통"|"어려움"; statement: string; choices: string[]; answer: string; explanation: string; trapPoint: string };
const questions: Question[] = [
  { id:"q1", category:"서양윤리", difficulty:"보통", statement:"도덕적 행위의 가치는 결과가 아니라 동기에 의해 결정된다.", choices:["칸트","벤담","밀","맹자"], answer:"칸트", explanation:"칸트는 선의지·의무를 도덕성의 핵심 기준으로 본다.", trapPoint:"결과 중심 공리주의와 의무론 뒤바꾸기" },
  { id:"q2", category:"동양윤리", difficulty:"쉬움", statement:"인간의 본성은 선한 단서를 지니며 이를 확충해야 한다.", choices:["순자","맹자","노자","플라톤"], answer:"맹자", explanation:"사단의 확충은 맹자의 대표 논리다.", trapPoint:"성선설·성악설 키워드 교차" },
  { id:"q3", category:"사회사상", difficulty:"보통", statement:"정부의 정당성은 개인의 자연권 보호에 있다.", choices:["홉스","루소","로크","롤스"], answer:"로크", explanation:"생명·자유·재산 보호가 로크 정부론 핵심이다.", trapPoint:"사회계약론자끼리 구분 실패" },
];

export function ExamTrapTraining() {
  const [category, setCategory] = useState<Category>("전체");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const filtered = useMemo(() => category === "전체" ? questions : questions.filter((q) => q.category === category), [category]);
  const q = filtered[index % Math.max(filtered.length,1)];
  if (!q) return null;
  const isCorrect = selected === q.answer;

  const submit = (choice: string) => {
    if (selected) return;
    setSelected(choice);
    if (choice === q.answer) setCorrectCount((v) => v + 1);
  };

  return <section id="trap" className="section-shell"><p className="eyebrow">Exam Trap</p><h2 className="section-title mt-3">시험 함정 훈련소</h2>
  <div className="mt-4 flex flex-wrap gap-2">{(["전체","동양윤리","서양윤리","한국윤리","사회사상"] as Category[]).map((c)=><button key={c} onClick={()=>{setCategory(c);setIndex(0);setSelected(null);}} className={`rounded-full px-3 py-2 text-xs ${category===c?"bg-atlas-cyan text-slate-950":"border border-white/15"}`}>{c}</button>)}</div>
  <article className="premium-card mt-5 p-5"><p className="text-xs text-slate-300">난이도: {q.difficulty}</p><p className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-base">“{q.statement}”</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{q.choices.map((choice) => <button key={choice} onClick={() => submit(choice)} className="rounded-2xl border border-white/15 px-4 py-3 text-left text-sm">{choice}</button>)}</div>
  {selected && <div className={`mt-4 rounded-2xl border p-4 text-sm ${isCorrect ? "border-emerald-300/40 bg-emerald-300/10" : "border-rose-300/40 bg-rose-300/10"}`}><p className="font-medium">{isCorrect ? "정답! 정확한 구분입니다." : `오답. 정답은 ${q.answer}`}</p><p className="mt-2">핵심 이유: {q.explanation}</p><p className="mt-1">함정 단어: {q.trapPoint}</p></div>}
  <div className="mt-4 flex items-center justify-between"><p className="text-xs text-slate-300">누적 정답률: {Math.round((correctCount / Math.max(index + (selected ? 1 : 0), 1)) * 100)}%</p><button onClick={() => {setIndex((i) => (i + 1) % filtered.length); setSelected(null);}} className="rounded-xl border border-white/20 px-4 py-2 text-sm">다음 문제</button></div></article></section>;
}
