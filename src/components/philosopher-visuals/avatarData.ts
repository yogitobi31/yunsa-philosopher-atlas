export type AvatarMeta = {
  accentHex: string;
  label: string;
  motif: "linked" | "sprout" | "align" | "flow" | "expansion" | "grid" | "innerDot" | "starAxis" | "sum" | "rise" | "shield" | "key" | "community" | "veil" | "boundary" | "triangle" | "balance" | "dialogue" | "tool" | "purity" | "harmony";
};

export const avatarData: Record<string, AvatarMeta> = {
  confucius: { accentHex: "#f59e0b", label: "관계", motif: "linked" },
  mencius: { accentHex: "#f59e0b", label: "성장", motif: "sprout" },
  xunzi: { accentHex: "#f59e0b", label: "정돈", motif: "align" },
  laozi: { accentHex: "#f59e0b", label: "흐름", motif: "flow" },
  zhuangzi: { accentHex: "#f59e0b", label: "확장", motif: "expansion" },
  zhu_xi: { accentHex: "#f59e0b", label: "원리", motif: "grid" },
  wang_yangming: { accentHex: "#f59e0b", label: "마음", motif: "innerDot" },
  kant: { accentHex: "#60a5fa", label: "법칙", motif: "starAxis" },
  bentham: { accentHex: "#60a5fa", label: "집계", motif: "sum" },
  mill: { accentHex: "#60a5fa", label: "자유", motif: "rise" },
  hobbes: { accentHex: "#8b5cf6", label: "보호", motif: "shield" },
  locke: { accentHex: "#8b5cf6", label: "권리", motif: "key" },
  rousseau: { accentHex: "#8b5cf6", label: "공동체", motif: "community" },
  rawls: { accentHex: "#8b5cf6", label: "베일", motif: "veil" },
  nozick: { accentHex: "#8b5cf6", label: "경계", motif: "boundary" },
  plato: { accentHex: "#60a5fa", label: "이데아", motif: "triangle" },
  aristotle: { accentHex: "#60a5fa", label: "중용", motif: "balance" },
  socrates: { accentHex: "#60a5fa", label: "대화", motif: "dialogue" },
  jeong_yakyong: { accentHex: "#34d399", label: "실천", motif: "tool" },
  yi_hwang: { accentHex: "#34d399", label: "정제", motif: "purity" },
  yi_i: { accentHex: "#34d399", label: "조화", motif: "harmony" },
};
