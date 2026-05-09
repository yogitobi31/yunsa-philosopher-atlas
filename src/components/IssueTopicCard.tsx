import { IssueTopic } from "@/src/types/issueTopic";

type Props = {
  topic: IssueTopic;
  isActive: boolean;
  onSelect: (id: string) => void;
  showInlineDetail?: boolean;
};

export function IssueTopicCard({ topic, isActive, onSelect, showInlineDetail = false }: Props) {
  return (
    <button
      onClick={() => onSelect(topic.id)}
      aria-pressed={isActive}
      className={`group relative w-full rounded-3xl border p-5 text-left transition duration-300 ${
        isActive
          ? "-translate-y-0.5 border-[color:var(--accent-blue)] bg-gradient-to-br from-[#fffdf8] via-[#faf4e8] to-[#f6eee3] shadow-[0_10px_30px_rgba(80,65,45,0.14)]"
          : "border-[color:var(--line)] bg-[color:var(--surface)] hover:border-[color:var(--accent-gold)]"
      } ${showInlineDetail ? "mb-1" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">질문으로 시작</p>
        {isActive && (
          <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200/70 bg-cyan-100/10 px-2.5 py-1 text-[11px] font-medium text-[color:var(--text-main)]">
            ✓ 선택됨
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-[color:var(--text-main)]">{topic.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">{topic.question}</p>
      <p className="mt-4 text-sm text-[color:var(--text-main)]">핵심 통찰: {topic.shortInsight}</p>
      {isActive && (
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-soft)] px-3 py-2 text-xs text-[color:var(--text-main)]">
          <span>선택 즉시 학습 시작 가능</span>
          <span className="font-medium">이 논점 학습 시작 →</span>
        </div>
      )}
    </button>
  );
}
