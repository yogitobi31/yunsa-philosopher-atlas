export type AvatarMeta = {
  accentHex: string;
  symbol: string;
  cue: string;
};

export const avatarData: Record<string, AvatarMeta> = {
  confucius: { accentHex: "#f59e0b", symbol: "仁", cue: "두루마리" },
  mencius: { accentHex: "#10b981", symbol: "善", cue: "도덕의 싹" },
  xunzi: { accentHex: "#2563eb", symbol: "禮", cue: "규범 죽간" },
  laozi: { accentHex: "#6366f1", symbol: "道", cue: "구름" },
  zhuangzi: { accentHex: "#0ea5e9", symbol: "逍", cue: "나비" },
  wonhyo: { accentHex: "#f97316", symbol: "和", cue: "일심" },
  yi_hwang: { accentHex: "#8b5cf6", symbol: "理", cue: "성찰서" },
  yi_i: { accentHex: "#14b8a6", symbol: "氣", cue: "개혁문" },
  jeong_yakyong: { accentHex: "#22c55e", symbol: "實", cue: "거중기" },
  zhu_xi: { accentHex: "#a855f7", symbol: "理", cue: "주자서" },
  wang_yangming: { accentHex: "#ec4899", symbol: "心", cue: "내면의 빛" },
  socrates: { accentHex: "#38bdf8", symbol: "?", cue: "대화" },
  plato: { accentHex: "#818cf8", symbol: "△", cue: "이데아" },
  aristotle: { accentHex: "#f59e0b", symbol: "⚖", cue: "중용" },
  kant: { accentHex: "#eab308", symbol: "★", cue: "의무" },
  bentham: { accentHex: "#84cc16", symbol: "∑", cue: "효용합" },
  mill: { accentHex: "#06b6d4", symbol: "↑", cue: "자유" },
  hobbes: { accentHex: "#ef4444", symbol: "국", cue: "리바이어던" },
  locke: { accentHex: "#3b82f6", symbol: "권", cue: "자연권" },
  rousseau: { accentHex: "#10b981", symbol: "계", cue: "일반의지" },
  marx: { accentHex: "#dc2626", symbol: "階", cue: "계급" },
  rawls: { accentHex: "#7c3aed", symbol: "正", cue: "무지의 장막" },
  nozick: { accentHex: "#f97316", symbol: "自", cue: "최소국가" },
};
