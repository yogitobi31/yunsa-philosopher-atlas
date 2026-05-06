import { Philosopher } from "@/data/philosophers";

type StructureStudyCardProps = {
  philosopher: Philosopher;
  className?: string;
};

const itemClass = "min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:p-4";

export function StructureStudyCard({ philosopher, className = "" }: StructureStudyCardProps) {
  return (
    <article className={`study-card w-full max-w-[860px] box-border overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/80 p-4 shadow-[0_20px_55px_rgba(2,6,18,.45)] [word-break:keep-all] [overflow-wrap:break-word] [white-space:normal] md:p-6 ${className}`}>
      <p className="text-[11px] tracking-[0.16em] text-cyan-200/85">윤리와 사상 구조 학습 카드</p>
      <h3 className="mt-2 text-xl font-semibold leading-tight text-slate-100 md:text-3xl">{philosopher.name}: {philosopher.oneLineSummary}</h3>

      <div className="mt-4 grid min-w-0 grid-cols-1 gap-3 text-[13px] leading-relaxed text-slate-200 md:grid-cols-2 md:gap-4 md:text-[14px]">
        <section className={itemClass}><p className="text-xs text-cyan-100/85">핵심 질문</p><p className="mt-1">{philosopher.oneLineSummary}</p></section>
        <section className={itemClass}><p className="text-xs text-cyan-100/85">핵심 개념</p><p className="mt-1">{philosopher.keyIdeas.join(" · ")}</p></section>
        <section className={itemClass}><p className="text-xs text-cyan-100/85">시험 포인트</p><p className="mt-1">{philosopher.examPoint}</p></section>
        <section className={itemClass}><p className="text-xs text-cyan-100/85">자주 나오는 함정</p><p className="mt-1">{philosopher.trapPoint}</p></section>
        <section className={itemClass}><p className="text-xs text-cyan-100/85">비교 철학자 / 비교 개념</p><p className="mt-1">{philosopher.compareWith.join(" · ")}</p></section>
        <section className={itemClass}><p className="text-xs text-cyan-100/85">한 줄 암기 문장</p><p className="mt-1">{philosopher.representativeClaim}</p></section>
      </div>

      <p className="mt-4 text-[12px] leading-relaxed text-slate-300 md:text-[13px]">{philosopher.name}는 {philosopher.representativeClaim}</p>
      <p className="mt-3 text-right text-[10px] tracking-[0.14em] text-slate-500">Pilup Ethics Atlas</p>
    </article>
  );
}
