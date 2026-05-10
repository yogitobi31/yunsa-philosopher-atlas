import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { ThoughtMap } from "@/src/components/ThoughtMap";
import { VisualStudySections } from "@/components/VisualStudySections";
import { IssueLearningSection } from "@/src/components/IssueLearningSection";

const starterCards = [
  {
    title: "1. 철학자 한 명 선택",
    description: "공자, 맹자, 칸트처럼 헷갈리는 인물을 고릅니다.",
  },
  {
    title: "2. 핵심 구조 이해",
    description: "주장, 인간관, 사회관, 공부 포인트를 카드로 정리합니다.",
  },
  {
    title: "3. 암기카드로 저장",
    description: "시험 전에 다시 볼 수 있게 이미지 카드로 저장합니다.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="app-shell py-8 md:py-12">
        <section className="hero-panel relative overflow-hidden rounded-[2.2rem] border border-white/15 px-6 py-9 md:px-10 md:py-14">
          <div className="hero-network" />
          <div className="relative z-10">
            <p className="eyebrow">오늘의 3분 학습</p>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.25] tracking-tight md:text-6xl">헷갈리는 윤리 사상가를 관계와 구조로 정리하는 학습 앱</h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[color:var(--text-muted)] md:text-xl">
              처음 보는 개념도 카드, 비교, 흐름으로 따라가며 이해할 수 있습니다.<br />
              오늘은 한 명의 철학자부터 시작해 보세요.
            </p>
            <div className="mt-7">
              <Link href="#issue-learning" className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--accent-green)] px-6 py-3 text-sm font-medium text-[color:var(--text-main)] transition hover:-translate-y-0.5">오늘의 철학자 1명 배우기</Link>
            </div>
          </div>
        </section>

        <section className="section-shell mt-6 md:mt-8">
          <p className="eyebrow">사용법 미니 가이드</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {starterCards.map((card) => (
              <article key={card.title} className="premium-card glass p-4">
                <h2 className="text-base font-semibold text-[color:var(--text-main)]">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-10 md:space-y-14">
          <IssueLearningSection />
          <VisualStudySections />
          <ComparisonLab />
          <ExamTrapTraining />
          <AtlasSection />
          <ThoughtMap />
        </div>
      </div>

      <footer className="archive-footer">
        <div className="archive-footer__inner">
          <p className="archive-footer__title">PHILOSOPHER RELATION ATLAS</p>
          <p className="archive-footer__subtitle">An interactive ethics archive by Juwon Jeon</p>
          <p className="archive-footer__copy">© 2026 Juwon Jeon. All rights reserved.</p>
          <p className="archive-footer__presented">Presented by Pilup Academy</p>
        </div>
      </footer>
    </main>
  );
}
