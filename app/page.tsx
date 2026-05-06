import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { ThoughtMap } from "@/src/components/ThoughtMap";
import { VisualStudySections } from "@/components/VisualStudySections";
import { IssueLearningSection } from "@/src/components/IssueLearningSection";

const heroStats = ["핵심 사상가 30+", "빈출 비교 20+", "시험 함정 훈련", "관계 지도"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <section className="hero-panel relative overflow-hidden rounded-[2.2rem] border border-white/15 px-6 py-10 md:px-10 md:py-14">
          <div className="hero-network" />
          <div className="relative z-10">
            <p className="eyebrow">Concept First Learning</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.14] tracking-tight md:text-6xl">윤리와 사상, 관계로 이해하다</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-100 md:text-xl">철학자를 외우기 전에, 그들이 붙잡은 질문과 판단 기준을 먼저 잡아보세요.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#issue-learning" className="min-h-11 rounded-full bg-atlas-cyan/90 px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5">논점으로 시작하기</Link>
              <Link href="#atlas" className="min-h-11 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-white/40">철학자 도감 보기</Link>
              <Link href="#trap" className="min-h-11 rounded-full border border-amber-200/35 bg-amber-100/5 px-6 py-3 text-sm text-amber-100 transition hover:border-amber-100/60">시험 함정 풀기</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {heroStats.map((stat) => (
                <span key={stat} className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-14 space-y-10 md:space-y-14">
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
