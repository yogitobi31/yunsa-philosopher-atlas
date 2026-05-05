import Link from "next/link";
import { AtlasSection } from "@/components/AtlasSection";
import { ComparisonLab } from "@/components/ComparisonLab";
import { ExamTrapTraining } from "@/components/ExamTrapTraining";
import { philosophers } from "@/data/philosophers";

const dailyQuestions = [
  { text: "인간의 본성은 선한가?", target: "#topic-human" },
  { text: "도덕 판단은 결과보다 동기가 중요한가?", target: "#topic-happiness" },
  { text: "정의로운 사회는 평등해야 할까, 자유로워야 할까?", target: "#compare-section" },
  { text: "수양은 밖의 이치를 탐구하는 것일까, 마음을 살피는 것일까?", target: "#topic-cultivation" },
  { text: "국가는 안전을 위해 강해야 할까, 권리를 위해 제한되어야 할까?", target: "#topic-liberty" },
];

const topicModules = [
  { id: "human", title: "인간 본성", question: "인간은 선한 단서를 타고나는가, 규범으로 길러져야 하는가?", related: ["맹자", "순자", "홉스", "루소"], summary: "본성의 출발점을 다르게 보면 정치와 수양 방식도 달라집니다.", trap: "성선설=이미 완성된 선, 성악설=인간혐오로 외우면 오답입니다.", compareHref: "#compare-section" },
  { id: "cultivation", title: "수양과 도덕 수양", question: "도덕 원리는 밖에서 찾는가, 마음에서 찾는가?", related: ["주희", "왕수인", "이황", "이이"], summary: "탐구의 방향(외재/내재)과 실천의 속도를 구분하면 흔들리지 않습니다.", trap: "격물치지와 심즉리를 같은 방식으로 기억하면 선지가 섞입니다.", compareHref: "#compare-section" },
  { id: "society", title: "이상 사회와 정치", question: "질서 중심 정치와 참여 중심 정치는 무엇이 다른가?", related: ["공자", "홉스", "로크", "루소"], summary: "사회의 목적을 질서로 보느냐 권리로 보느냐가 국가 설계를 가릅니다.", trap: "사회계약론이라고 모두 같은 정부론이 아닙니다.", compareHref: "#lab" },
  { id: "justice", title: "정의", question: "정의는 공정한 결과인가, 정당한 과정인가?", related: ["롤스", "노직", "마르크스"], summary: "정의의 기준을 결과 패턴과 취득 과정으로 나눠 이해해야 정확합니다.", trap: "롤스=절대평등, 노직=무정부로 단순화하면 틀립니다.", compareHref: "#compare-section" },
  { id: "liberty", title: "자유와 국가", question: "자유를 최대화하려면 국가는 어디까지 개입해야 하는가?", related: ["밀", "홉스", "로크", "노직"], summary: "자유는 방임이 아니라 해악 기준·권리 기준과 함께 읽어야 합니다.", trap: "밀의 자유론을 무제한 자유로 해석하는 선지를 경계하세요.", compareHref: "#lab" },
  { id: "happiness", title: "행복과 도덕 판단", question: "행위의 옳고 그름은 의도와 결과 중 무엇으로 판단할까?", related: ["칸트", "벤담", "밀"], summary: "의무론과 공리주의의 판단축을 먼저 분리하면 문제 풀이 속도가 빨라집니다.", trap: "벤담과 밀의 차이를 양/질 쾌락으로 꼭 분리하세요.", compareHref: "#compare-section" },
];

const confusingPairs = [
  {
    pair: "맹자 vs 순자",
    oneLine: "맹자는 선한 단서의 확충, 순자는 욕망의 교정을 강조합니다.",
    standard: "핵심 기준: 성선 단서 확충 vs 욕망 절제와 예",
    trap: "성선/성악을 도덕성의 완성 여부로 읽으면 오답.",
  },
  {
    pair: "주희 vs 왕수인",
    oneLine: "주희는 리를 탐구하고, 왕수인은 마음의 양지를 즉시 실천합니다.",
    standard: "핵심 기준: 격물치지 vs 심즉리·지행합일",
    trap: "둘 다 수양을 말하지만 탐구 방향이 다릅니다.",
  },
  {
    pair: "벤담 vs 밀",
    oneLine: "벤담은 총량, 밀은 질 높은 행복과 자유를 함께 봅니다.",
    standard: "핵심 기준: 양적 효용 vs 질적 효용",
    trap: "둘 다 공리주의라는 이유로 동일시하면 함정.",
  },
  {
    pair: "홉스 vs 로크",
    oneLine: "홉스는 안전을 위한 강한 주권, 로크는 권리 보호를 위한 제한정부를 말합니다.",
    standard: "핵심 기준: 질서·안전 vs 자연권 보호",
    trap: "사회계약론 범주만 기억하면 국가관이 뒤집힙니다.",
  },
  {
    pair: "롤스 vs 노직",
    oneLine: "롤스는 최소수혜자 개선, 노직은 정당한 취득 과정을 중시합니다.",
    standard: "핵심 기준: 차등원리 vs 자격이론",
    trap: "결과 평등/완전 자유의 이분법으로 외우지 않기.",
  },
  {
    pair: "이황 vs 이이",
    oneLine: "이황은 리의 주재성을, 이이는 리·기의 현실적 함께 작동을 강조합니다.",
    standard: "핵심 기준: 리 중심 성찰 vs 현실 적용과 통합",
    trap: "사단칠정 논쟁 용어만 외우면 실천 맥락을 놓칩니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12 space-y-14 md:space-y-20">
        <section className="hero-panel relative overflow-hidden rounded-[2.2rem] border border-white/15 px-6 py-10 md:px-10 md:py-16">
          <div className="hero-network" />
          <div className="relative z-10">
            <p className="eyebrow">Learning First Atlas</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">윤리와 사상 철학자 아틀라스</h1>
            <p className="mt-6 text-xl text-slate-200">철학자를 외우는 앱이 아니라, 사상의 차이를 이해하는 앱</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">핵심 논점, 비교 포인트, 시험 함정을 가장 직관적으로 정리합니다.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#topics" className="rounded-full bg-atlas-cyan/85 px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5">논점으로 시작하기</Link>
              <Link href="#compare-section" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-slate-100 transition hover:border-white/40">헷갈리는 비교 보기</Link>
            </div>
          </div>
        </section>

        <section className="section-shell" id="daily-questions">
          <p className="eyebrow">Today&apos;s Questions</p>
          <h2 className="section-title mt-3">오늘의 질문</h2>
          <p className="section-subtitle">질문에서 시작하면 사상 흐름이 더 빨리 잡힙니다. 탭해서 바로 해당 학습 구간으로 이동하세요.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {dailyQuestions.map((q) => (
              <Link key={q.text} href={q.target} className="premium-card p-5 transition hover:-translate-y-0.5 hover:border-white/30">
                <p className="text-lg font-medium">{q.text}</p>
                <p className="mt-2 text-sm text-atlas-cyan">해당 논점으로 이동 →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-shell" id="topics">
          <p className="eyebrow">Topic Flow</p>
          <h2 className="section-title mt-3">논점으로 시작하기</h2>
          <p className="section-subtitle">철학자 이름보다 논점 질문을 먼저 잡고, 핵심 차이와 함정을 단계적으로 확인하세요.</p>
          <div className="mt-7 space-y-5">
            {topicModules.map((topic) => (
              <article key={topic.id} id={`topic-${topic.id}`} className="premium-card p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{topic.title}</p>
                <p className="mt-3 text-xl font-semibold leading-snug">{topic.question}</p>
                <p className="mt-4 text-sm text-slate-200">관련 철학자: {topic.related.join(", ")}</p>
                <p className="mt-2 text-sm text-atlas-cyan">한 줄 핵심 차이: {topic.summary}</p>
                <details className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <summary className="cursor-pointer text-sm text-amber-100">시험 포인트 보기</summary>
                  <p className="mt-2 text-sm text-amber-50">{topic.trap}</p>
                </details>
                <Link href={topic.compareHref} className="mt-4 inline-flex rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-sm text-slate-100 transition hover:border-white/35">바로 비교하기</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="compare-section">
          <p className="eyebrow">Confusion Clinic</p>
          <h2 className="section-title mt-3">헷갈리는 철학자 비교</h2>
          <p className="section-subtitle">학생들이 왜 헷갈리는지부터 보여주는 비교 모듈입니다. 한 줄 차이→핵심 기준→시험 함정 순으로 보세요.</p>
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {confusingPairs.map((item) => (
              <article key={item.pair} className="premium-card p-6">
                <h3 className="text-2xl font-semibold">{item.pair}</h3>
                <p className="mt-3 text-sm text-slate-100">{item.oneLine}</p>
                <p className="mt-3 text-sm text-cyan-100">{item.standard}</p>
                <p className="mt-2 text-sm text-amber-100">시험 함정: {item.trap}</p>
                <Link href="#lab" className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm">비교 실험실로 이동</Link>
              </article>
            ))}
          </div>
        </section>

        <ExamTrapTraining />
        <ComparisonLab />

        <section className="section-shell" id="atlas">
          <p className="eyebrow">Reference Atlas</p>
          <h2 className="section-title mt-3">철학자 도감</h2>
          <p className="section-subtitle">이제 도감은 학습 흐름 이후 확인하는 레퍼런스 영역입니다. 필요한 철학자를 눌러 세부 정리를 확인하세요.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {philosophers.slice(0, 6).map((p) => (
              <Link key={p.id} href={`/philosophers/${p.id}`} className="premium-card p-4 transition hover:border-white/30">
                <p className="text-xl font-semibold">{p.symbol} {p.name}</p>
                <p className="mt-2 text-sm text-slate-200">{p.oneLine}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <AtlasSection />
          </div>
        </section>
      </div>
    </main>
  );
}
