"use client";
import { useMemo, useState } from "react";
import { trapQuestions } from "@/data/trapQuestions";

const WRONG_KEY = "ethics-atlas-wrong-answers-v2";
type Mode = "RANDOM10" | "CATEGORY" | "WRONG" | "MOCK";

const MODE_LABEL: Record<Mode, string> = {
  RANDOM10: "랜덤 10문항",
  CATEGORY: "유형별",
  WRONG: "오답만",
  MOCK: "실전 모의",
};

const normalizeChoice = (value: string) => {
  const v = value.toLowerCase();
  if (v === "true") return "O";
  if (v === "false") return "X";
  return value;
};

export function ExamTrapTraining() {
  const [mode, setMode] = useState<Mode>("RANDOM10");
  const [category, setCategory] = useState("전체");
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const categories = ["전체", ...Array.from(new Set(trapQuestions.map((q) => q.category)))];

  const pool = useMemo(() => {
    const wrong = typeof window === "undefined" ? [] : (JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]") as string[]);
    const base = category === "전체" ? trapQuestions : trapQuestions.filter((q) => q.category === category);
    if (mode === "WRONG") return base.filter((q) => wrong.includes(q.id));
    if (mode === "MOCK") return base.slice(0, 20);
    if (mode === "RANDOM10") return [...base].sort(() => Math.random() - 0.5).slice(0, 10);
    return base;
  }, [mode, category]);

  const resetFilters = () => {
    setCategory("전체");
    setMode("RANDOM10");
    setIdx(0);
    setPicked(null);
  };

  const q = pool[idx % Math.max(pool.length, 1)];
  if (!q) {
    return (
      <section id="trap" className="section-shell pb-24 md:pb-10">
        <p className="eyebrow">TRAP POINT CLINIC</p>
        <h2 className="section-title mt-2">오답 함정 클리닉</h2>
        <div className="mt-4 rounded-2xl border border-white/15 bg-slate-950/55 p-5">
          <p className="text-slate-200">선택한 조건의 문제가 아직 없어요.</p>
          <p className="mt-1 text-sm text-slate-300">필터를 초기화하거나 다른 범위를 선택해 보세요.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={resetFilters} className="rounded-xl border border-cyan-200/60 bg-cyan-400/15 px-4 py-2 text-sm">
              전체 문제 보기
            </button>
            <button onClick={resetFilters} className="rounded-xl border border-white/20 px-4 py-2 text-sm">
              필터 초기화
            </button>
          </div>
        </div>
      </section>
    );
  }

  const answerLabel = typeof q.answer === "boolean" ? (q.answer ? "O" : "X") : normalizeChoice(String(q.answer));
  const isCorrect = picked !== null && answerLabel === picked;
  const submit = (value: string) => {
    if (picked) return;
    setPicked(value);
    const correct = answerLabel === value;
    if (!correct) {
      const prev = JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]") as string[];
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(new Set([...prev, q.id]))));
    }
  };

  const rawChoices = q.choices ?? ["true", "false"];
  const choices = rawChoices.map((c) => normalizeChoice(String(c)));

  return <section id="trap" className="section-shell pb-24 md:pb-10"><p className="eyebrow">TRAP POINT CLINIC</p><h2 className="section-title mt-2">오답 함정 클리닉</h2><p className="mt-2 text-sm text-[rgba(17,24,39,.56)]">총 {trapQuestions.length}문항 · 현재 {pool.length}문항</p>
    <div className="mt-4 flex flex-wrap gap-2.5">{(["RANDOM10", "CATEGORY", "WRONG", "MOCK"] as const).map((m) => <button key={m} onClick={() => { setMode(m); setIdx(0); setPicked(null); }} className={`min-h-10 rounded-xl border px-3 py-2 text-xs sm:text-sm ${mode === m ? "border-[rgba(83,107,79,.34)] bg-[#c9dfc0] text-[#324b37]" : "border-[rgba(17,24,39,.14)] bg-[#f8f6f2] text-[rgba(17,24,39,.68)]"}`}>{MODE_LABEL[m]}</button>)}
      <select value={category} onChange={(e) => { setCategory(e.target.value); setIdx(0); setPicked(null); }} className="min-h-10 rounded-xl border border-[rgba(17,24,39,.14)] bg-[rgba(255,255,255,.72)] px-3 py-2 text-xs text-[rgba(17,24,39,.7)] sm:text-sm">{categories.map((c) => <option key={c}>{c}</option>)}</select></div>
    <article className="mt-4 rounded-3xl border border-white/15 bg-slate-950/55 p-5"><p className="text-sm text-slate-300">[{q.category}] {q.philosopher ?? "통합"} · {q.type}</p><p className="mt-3 text-lg">{q.question}</p>
      <div className="mt-4 grid gap-2 md:grid-cols-2">{choices.map((c) => <button key={c} onClick={() => submit(c)} className="rounded-xl border border-white/20 bg-white/[0.03] px-3 py-3 text-left hover:border-white/40"><span className="text-xl font-semibold">{c}</span>{(c === "O" || c === "X") && <span className="ml-2 text-sm text-slate-300">{c === "O" ? "맞다" : "아니다"}</span>}</button>)}</div>
      {picked && <div className={`mt-4 rounded-2xl border p-4 ${isCorrect ? "border-[rgba(83,107,79,.34)] bg-[rgba(83,107,79,.10)]" : "border-[rgba(138,90,43,.30)] bg-[rgba(138,90,43,.10)]"}`}><p className="font-semibold text-[rgba(17,24,39,.88)]">{isCorrect ? "정답이에요." : "함정에 걸렸어요."}</p><p className="mt-1 text-sm text-[rgba(17,24,39,.74)]">{isCorrect ? "핵심을 잘 잡았어요." : "이 선지는 이렇게 구분해야 해요."}</p><p className="mt-2 text-[rgba(17,24,39,.82)]"><strong>정답:</strong> {answerLabel}</p><p className="mt-1 text-[rgba(17,24,39,.78)]"><strong>해설:</strong> {q.explanation}</p><p className="mt-1 text-[rgba(17,24,39,.78)]"><strong>함정 포인트:</strong> {q.trapPoint}</p></div>}
      <button onClick={() => { setIdx((v) => v + 1); setPicked(null); }} className="mt-4 rounded-xl border border-white/20 px-4 py-2">다음 문제</button>
    </article>
  </section>;
}
