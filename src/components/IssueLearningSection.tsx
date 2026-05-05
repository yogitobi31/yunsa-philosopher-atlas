"use client";
import { useMemo, useState } from "react";
import { issueTopics } from "@/src/data/issueTopics";
import { IssueDetailPanel } from "@/src/components/IssueDetailPanel";
import { IssueTopicCard } from "@/src/components/IssueTopicCard";

export function IssueLearningSection() {
  const [activeId, setActiveId] = useState(issueTopics[0].id);
  const active = useMemo(() => issueTopics.find((t) => t.id === activeId) ?? issueTopics[0], [activeId]);
  return <section id="issue-learning" className="section-shell"><p className="eyebrow">Issue First Learning</p><h2 className="section-title mt-3">논점으로 시작하기</h2><p className="section-subtitle">질문에서 시작해 논점을 잡고, 관련 철학자를 연결한 뒤 시험 함정까지 한 번에 정리합니다.</p><div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]"><div className="space-y-3">{issueTopics.map((topic) => <IssueTopicCard key={topic.id} topic={topic} isActive={activeId === topic.id} onSelect={setActiveId} />)}</div><IssueDetailPanel topic={active} /></div></section>;
}
