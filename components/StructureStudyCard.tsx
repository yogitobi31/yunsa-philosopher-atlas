import { Philosopher } from "@/data/philosophers";

type StructureStudyCardProps = {
  philosopher: Philosopher;
  className?: string;
};

const panelClass = "rounded-2xl border border-[rgba(80,65,45,0.14)] bg-[rgba(255,253,248,0.88)] p-4";

export function StructureStudyCard({ philosopher, className = "" }: StructureStudyCardProps) {
  return (
    <article className={`study-card rounded-[28px] border border-[color:var(--line)] bg-[linear-gradient(180deg,#FFFDF8_0%,#FAF4E8_100%)] p-5 shadow-[0_20px_55px_rgba(80,65,45,.1)] md:p-6 ${className}`}>
      <p className="eyebrow">윤사 구조학습 카드</p>
      <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#1F2933] md:text-3xl">{philosopher.name}</h3>

      <div className="mt-4 grid gap-3 text-sm leading-relaxed text-[#374151] md:grid-cols-2">
        <section className={panelClass}><p className="text-xs text-[#6B6258]">메인 질문</p><p className="mt-1">{philosopher.oneLineSummary}</p></section>
        <section className={panelClass}><p className="text-xs text-[#6B6258]">핵심 질문</p><p className="mt-1">{philosopher.examPoint}</p></section>
        <section className={panelClass}><p className="text-xs text-[#6B6258]">비교 포인트</p><p className="mt-1">{philosopher.compareWith.join(" · ")}</p></section>
        <section className={panelClass}><p className="text-xs text-[#6B6258]">핵심 개념</p><p className="mt-1">{philosopher.keyIdeas.join(" · ")}</p></section>
      </div>

      <section className="mt-3 rounded-2xl border border-[rgba(138,90,43,.22)] bg-[rgba(138,90,43,.08)] p-4 text-sm text-[#8A5A2B]">
        <p className="text-xs text-[#6B6258]">시험 함정</p>
        <p className="mt-1">{philosopher.trapPoint}</p>
      </section>

      <section className="mt-3 rounded-2xl border border-[rgba(83,107,79,.24)] bg-[rgba(83,107,79,.08)] p-4 text-sm text-[#374151]">
        <p className="text-xs text-[#6B6258]">한 줄 암기</p>
        <p className="mt-1">{philosopher.representativeClaim}</p>
      </section>

      <div className="mt-3 flex flex-wrap gap-2">
        {philosopher.compareWith.map((tag) => <span key={tag} className="philosopher-tag rounded-full px-2.5 py-1 text-[11px]">{tag}</span>)}
      </div>
    </article>
  );
}
