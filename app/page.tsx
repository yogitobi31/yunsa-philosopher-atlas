import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { ThoughtMap } from "@/src/components/ThoughtMap";
import { philosophers } from "@/data/philosophers";
import { VisualStudySections } from "@/components/VisualStudySections";
import { IssueLearningSection } from "@/src/components/IssueLearningSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <section className="hero-panel relative overflow-hidden rounded-[2.2rem] border border-white/15 px-6 py-10 md:px-10 md:py-14">
          <div className="hero-network" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Premium Study Atlas</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">윤리와 사상 철학자 아틀라스</h1>
              <p className="mt-6 text-xl text-slate-200">철학자를 외우는 앱이 아니라, 사상의 관계를 이해하는 앱</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">철학자의 핵심 관점, 비교 포인트, 시험 함정을 한 화면에서 정리합니다.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#atlas" className="rounded-full bg-atlas-cyan/85 px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5">철학자 도감 보기</Link>
                <Link href="#lab" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-white/40">비교 실험실 시작</Link>
              </div>
            </div>
            <div className="premium-card relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,205,231,0.2),transparent_42%)]" />
              <div className="relative grid gap-4">
                {philosophers.slice(0, 3).map((p) => (
                  <div key={p.id} className={`rounded-2xl border border-white/15 bg-gradient-to-r ${p.accent} p-4`}>
                    <p className="text-xs text-slate-200">{p.period}</p>
                    <p className="mt-1 text-xl font-semibold tracking-tight">{p.symbol} {p.name}</p>
                    <p className="mt-1 text-sm text-slate-100">{p.oneLine}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell mt-8">
          <p className="eyebrow">Release Notes</p>
          <h2 className="section-title mt-3">이번 버전에서 달라진 점</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <li>철학자 시각 카드 추가</li><li>한국 윤리 · 사회사상 철학자 확장</li><li>헷갈리는 철학자 비교 카드 추가</li><li>내용 검수 상태 표시 추가</li>
          </ul>
        </section>

        <div className="mt-14 space-y-10 md:space-y-14">
          <VisualStudySections />
          <IssueLearningSection />
          <AtlasSection />
          <ComparisonLab />
          <ThoughtMap />
          <ExamTrapTraining />
        </div>
      </div>
    </main>
  );
}
