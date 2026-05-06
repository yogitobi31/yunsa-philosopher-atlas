"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { issueTopics } from "@/src/data/issueTopics";
import { IssueDetailPanel } from "@/src/components/IssueDetailPanel";
import { IssueTopicCard } from "@/src/components/IssueTopicCard";

export function IssueLearningSection() {
  const [activeId, setActiveId] = useState(issueTopics[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const active = useMemo(() => issueTopics.find((t) => t.id === activeId) ?? issueTopics[0], [activeId]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (!isMobile && sectionRef.current) {
      const detailTarget = sectionRef.current.querySelector("[data-issue-detail='active']");
      if (detailTarget) {
        (detailTarget as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="issue-learning" ref={sectionRef} className="section-shell">
      <p className="eyebrow">Issue First Learning</p>
      <h2 className="section-title mt-3">논점으로 시작하기</h2>
      <p className="section-subtitle">질문 선택 → 변화 인지 → 학습 시작 흐름을 한 번에 보여줍니다.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-3">
          {issueTopics.map((topic) => {
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
