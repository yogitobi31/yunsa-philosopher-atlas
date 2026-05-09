import { forwardRef } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

type Props = { topic: IssueTopic };

export const MemorizationExportCard = forwardRef<HTMLDivElement, Props>(function MemorizationExportCard({ topic }, ref) {
  const philosopherTags = topic.relatedPhilosophers.map((id) => nameById[id] ?? id);
  const compareText = topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / ");

  return (
    <div ref={ref} className="export-card">
      <header className="export-card-header">
        <p className="export-card-kicker">윤리와 사상 구조학습 카드</p>
        <h2 className="export-card-title">{topic.title}</h2>
      </header>
      <p className="export-card-main-question">메인 질문 · {topic.question}</p>

      <section className="export-card-section"><h3>핵심 질문</h3><p>{topic.question}</p></section>
      <section className="export-card-section"><h3>핵심 비교 (맹자 vs 순자)</h3><p>{compareText}</p></section>
      <section className="export-card-section"><h3>시험 함정</h3><p>{topic.commonTrap}</p></section>
      <section className="export-card-section"><h3>한 줄 암기</h3><p>{topic.shortInsight}</p></section>

      <footer className="export-card-section">
        <h3>관련 철학자 태그</h3>
        <div className="export-card-tags">
          {philosopherTags.map((tag) => (<span key={tag} className="export-card-tag">#{tag}</span>))}
        </div>
      </footer>
    </div>
  );
});
