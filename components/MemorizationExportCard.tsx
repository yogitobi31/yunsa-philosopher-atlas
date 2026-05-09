import { Philosopher } from "@/data/philosophers";

type MemorizationExportCardProps = {
  philosopher: Philosopher;
  menciusView: string;
  xunziView: string;
};

export function MemorizationExportCard({ philosopher, menciusView, xunziView }: MemorizationExportCardProps) {
  return (
    <article className="export-card">
      <header className="export-card-header">
        <p className="export-card-kicker">윤리와 사상 구조학습 카드</p>
        <h2 className="export-card-title">{philosopher.name}</h2>
        <p className="export-card-main-question">메인 질문: {philosopher.oneLineSummary}</p>
      </header>
      <section className="export-card-section"><h3>핵심 질문</h3><p>{philosopher.examPoint}</p></section>
      <section className="export-card-section"><h3>맹자 입장</h3><p>{menciusView}</p></section>
      <section className="export-card-section"><h3>순자 입장</h3><p>{xunziView}</p></section>
      <section className="export-card-section"><h3>시험 함정</h3><p>{philosopher.trapPoint}</p></section>
      <section className="export-card-section"><h3>한 줄 암기</h3><p>{philosopher.representativeClaim}</p></section>
      <footer className="export-card-footer"><p className="export-card-tags">관련 철학자 태그: {philosopher.compareWith.join(" · ")}</p></footer>
    </article>
  );
}
