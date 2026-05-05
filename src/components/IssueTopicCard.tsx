import { IssueTopic } from "@/src/types/issueTopic";

type Props = { topic: IssueTopic; isActive: boolean; onSelect: (id: string) => void };

export function IssueTopicCard({ topic, isActive, onSelect }: Props) {
  return <button onClick={() => onSelect(topic.id)} className={`w-full rounded-3xl border p-5 text-left transition ${isActive ? "border-atlas-cyan/60 bg-atlas-cyan/10" : "border-white/10 bg-white/[0.02] hover:border-white/30"}`}><p className="text-xs uppercase tracking-[0.2em] text-slate-400">질문으로 시작</p><h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-50">{topic.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{topic.question}</p><p className="mt-4 text-sm text-cyan-100">핵심 통찰: {topic.shortInsight}</p></button>;
}
