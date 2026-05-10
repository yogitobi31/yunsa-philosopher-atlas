"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { issueTopics } from "@/src/data/issueTopics";
import { IssueDetailPanel } from "@/src/components/IssueDetailPanel";
import { IssueTopicCard } from "@/src/components/IssueTopicCard";

export function IssueLearningSection() {
  const [activeId, setActiveId] = useState(issueTopics[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const active = useMemo(() => issueTopics.find((t) => t.id === activeId) ?? issueTopics[0], [activeId]);
  const visibleTopics = isMobile && !showAll ? issueTopics.slice(0, 3) : issueTopics;

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (!isMobile && sectionRef.current) {
      const detailTarget = sectionRef.current.querySelector("[data-issue-detail='active']");
      if (detailTarget) (detailTarget as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="issue-learning" ref={sectionRef} className="section-shell scroll-mt-6">
      <p className="eyebrow">오늘의 3분 학습</p>
      <p className="mt-2 text-xs text-[color:var(--text-soft)]">1. 소개 → 2. 핵심 → 3. 비교 → 4. 카드 → 5. 문제</p>
      <h2 className="section-title mt-3">철학자 하나로 시작하는 3분 코스</h2>
      <p className="section-subtitle">첫 클릭 후 바로 학습이 시작되고, 카드 저장까지 한 흐름으로 이어집니다.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-3">
          {visibleTopics.map((topic) => {
            const activeCard = activeId === topic.id;
            return (
              <div key={topic.id} className="space-y-2">
                <IssueTopicCard topic={topic} isActive={activeCard} onSelect={handleSelect} showInlineDetail={isMobile} />
                {isMobile && activeCard && (
                  <div className="animate-[fadeIn_.3s_ease-out]" data-issue-detail="active">
                    <IssueDetailPanel topic={active} compact />
                  </div>
                )}
              </div>
            );
          })}
          {isMobile && issueTopics.length > 3 && (
            <button onClick={() => setShowAll((v) => !v)} className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-main)]">
              {showAll ? "접기" : "다른 철학자 더 보기"}
            </button>
          )}
        </div>
        {!isMobile && (
          <div data-issue-detail="active">
            <IssueDetailPanel topic={active} />
          </div>
        )}
      </div>
    </section>
  );
}
