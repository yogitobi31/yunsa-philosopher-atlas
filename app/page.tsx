import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { philosophers } from "@/data/philosophers";

const features = [
  { id: "atlas", title: "철학자 도감", desc: "핵심 사상가를 카드처럼 탐색", mark: "仁" },
  { id: "lab", title: "사상 비교 실험실", desc: "헷갈리는 철학자를 한눈에 비교", mark: "VS" },
  { id: "trap", title: "시험 함정 훈련소", desc: "내신·수능식 선지를 판별", mark: "!" },
  { id: "map", title: "사상 지도", desc: "사상의 흐름과 관계를 연결", mark: "◎" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <section className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-10">
          <div className="hero-network" />
          <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-20 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium text-atlas-cyan">철학자 아틀라스</p>
              <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">윤리와 사상 철학자 아틀라스</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-200">철학자를 외우는 앱이 아니라, 사상의 관계를 이해하는 앱</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">선지의 키워드를 분절해서 외우는 대신, 철학자의 핵심 기준·인간관·판단 원리를 연결해 시험 함정을 피하도록 설계했습니다.</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <Link href="#atlas" className="rounded-xl bg-atlas-accent px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:shadow-premium">철학자 도감 탐색</Link>
                <Link href="#lab" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:border-atlas-cyan/50">비교 실험실 시작</Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {philosophers.slice(0, 4).map((p) => (
                <div key={p.id} className={`floating-card relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r ${p.accent} p-4 backdrop-blur`}>
                  <span className="absolute -right-2 -top-4 text-6xl font-black text-white/15">{p.symbol}</span>
                  <p className="text-xs text-slate-200">{p.period}</p>
                  <p className="mt-1 font-semibold">{p.name}</p>
                  <p className="mt-1 text-sm text-slate-100">{p.quoteLike}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f) => (
            <Link key={f.title} href={`#${f.id}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-atlas-cyan/60 hover:shadow-premium">
              <span className="absolute -right-3 -top-4 text-6xl font-black text-white/10 transition group-hover:text-atlas-cyan/25">{f.mark}</span>
              <h3 className="mt-2 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              <p className="mt-4 text-xs text-atlas-cyan">바로 이동</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 space-y-10 md:space-y-14">
          <AtlasSection />
          <ComparisonLab />
          <ExamTrapTraining />
          <section id="map" className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-sm text-atlas-cyan">사상 지도</p>
            <h2 className="mt-1 text-2xl font-bold">사상의 흐름을 선으로 보는 연결 지도</h2>
            <p className="mt-2 text-sm text-slate-300">곧 추가 예정 · 핵심 계보를 인터랙티브하게 확장합니다.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {["공자 → 맹자 → 주희 → 이황", "공자 → 순자 → 한비자", "소크라테스 → 플라톤 → 아리스토텔레스", "홉스 → 로크 → 루소", "칸트 → 롤스"].map((line) => (
                <div key={line} className="rounded-xl border border-white/15 bg-slate-900/50 p-4 text-sm text-slate-200">{line}</div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
