import { forwardRef } from "react";
import { philosophers } from "@/data/philosophers";
import { IssueTopic } from "@/src/types/issueTopic";

const nameById = Object.fromEntries(philosophers.map((p) => [p.id, p.name]));

type Props = { topic: IssueTopic };

export const MemorizationExportCard = forwardRef<HTMLDivElement, Props>(function MemorizationExportCard({ topic }, ref) {
  const philosopherTags = topic.relatedPhilosophers.map((id) => nameById[id] ?? id);
  const compareText = topic.comparePairs.map((pair) => `${nameById[pair.a] ?? pair.a} vs ${nameById[pair.b] ?? pair.b}`).join(" / ");

  return (
    <div ref={ref} className="memorization-export-card flex h-[1350px] w-[1080px] flex-col overflow-hidden rounded-[48px] p-[72px] text-white">
      <p className="text-[22px] tracking-[0.24em] text-cyan-100/85">윤사 프리미엄 암기카드</p>
      <h2 className="mt-6 text-[48px] font-semibold leading-[1.25] [word-break:keep-all]">{topic.title}</h2>
      <p className="mt-5 text-[34px] leading-[1.55] text-slate-100 [word-break:keep-all]">{topic.question}</p>

      <div className="mt-10 grid grid-cols-2 gap-6 text-[26px] leading-[1.6]">
        <Info title="핵심 질문" body={topic.question} />
        <Info title="핵심 비교" body={compareText} />
        <Info title="핵심 질문" body={topic.keyContrast} />
        <Info title="시험 포인트" body={topic.examPoint} />
        <Info title="시험 함정" body={topic.commonTrap} />
        <Info title="한 줄 암기" body={topic.shortInsight} />
      </div>

      <div className="mt-auto rounded-3xl border border-white/20 bg-white/10 px-6 py-5">
        <p className="text-[22px] text-cyan-100">관련 철학자</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {philosopherTags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[20px]">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
});

function Info({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-3xl border border-white/15 bg-black/20 p-5">
      <p className="text-[20px] tracking-[0.1em] text-cyan-100/90">{title}</p>
      <p className="mt-3 text-[26px] leading-[1.55] text-slate-100 [word-break:keep-all] break-words">{body}</p>
    </section>
  );
}
