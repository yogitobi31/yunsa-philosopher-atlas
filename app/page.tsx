import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { philosophers } from "@/data/philosophers";

const features = [
  { id: "atlas", title: "철학자 도감", desc: "핵심 사상가를 카드처럼 탐색", mark: "◉" },
  { id: "lab", title: "사상 비교 실험실", desc: "헷갈리는 철학자를 한눈에 비교", mark: "⇄" },
  { id: "trap", title: "시험 함정 훈련소", desc: "내신·수능식 선지를 판별", mark: "△" },
  { id: "map", title: "사상 지도", desc: "사상의 흐름과 관계를 연결", mark: "◎" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-14">
        <section className="hero-panel relative overflow-hidden rounded-3xl border border-white/10 p-6 md:p-10">
          <div className="hero-network" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm text-atlas-cyan">Premium Study Atlas</p>
              <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">윤리와 사상 철학자 아틀라스</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">철학자를 외우는 앱이 아니라, 사상의 관계를 이해하는 앱</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <Link href="#atlas" className="rounded-xl bg-atlas-accent px-4 py-2.5 font-medium">철학자 도감 탐색</Link>
                <Link href="#lab" className="rounded-xl border border-white/20 bg-white/5 px-4 py-2.5">비교 실험실 시작</Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {philosophers.slice(0, 3).map((p) => (
                <div key={p.id} className="floating-card rounded-2xl border border-white/15 bg-gradient-to-r p-4 backdrop-blur">
                  <p className="text-xs text-slate-300">{p.period}</p><p className="mt-1 font-semibold">{p.symbol} · {p.name}</p><p className="mt-1 text-sm text-slate-200">{p.quoteLike}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f) => <Link key={f.title} href={`#${f.id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-atlas-cyan/40 hover:shadow-premium">
            <p className="text-atlas-cyan">{f.mark}</p><h3 className="mt-2 font-semibold">{f.title}</h3><p className="mt-1 text-sm text-slate-300">{f.desc}</p>
          </Link>)}
        </div>

        <div className="mt-10 space-y-8">
          <AtlasSection />
          <ComparisonLab />
          <ExamTrapTraining />
          <section id="map" className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-slate-300">사상 지도 영역 (다음 단계 확장 예정)</section>
        </div>
      </div>
    </main>
  );
}
