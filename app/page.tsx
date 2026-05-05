import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";

const features = ["철학자 도감", "사상 비교 실험실", "시험 함정 훈련소", "사상 지도"];

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-gradient">
      <div className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium backdrop-blur-xl md:p-10">
          <p className="text-sm text-atlas-cyan">Premium Study Atlas</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">윤리와 사상 철학자 아틀라스</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">철학자를 외우는 앱이 아니라, 사상의 관계를 이해하는 앱</p>
          <div className="mt-8 grid gap-3 md:grid-cols-4">{features.map((f) => <div key={f} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium">{f}</div>)}</div>
          <article className="mt-6 rounded-2xl border border-atlas-cyan/40 bg-slate-950/40 p-4">
            <p className="text-xs text-atlas-cyan">오늘의 질문</p>
            <p className="mt-1 text-lg">정의로운 사회는 평등해야 할까, 자유로워야 할까?</p>
          </article>
          <div className="mt-6 flex gap-3 text-sm">
            <Link href="#atlas" className="rounded-xl bg-atlas-accent px-4 py-2">도감 탐색</Link>
            <Link href="#lab" className="rounded-xl border border-white/20 px-4 py-2">비교 시작</Link>
          </div>
        </section>

        <div className="mt-10 space-y-8">
          <AtlasSection />
          <ComparisonLab />
          <ExamTrapTraining />
        </div>
      </div>
    </main>
  );
}
