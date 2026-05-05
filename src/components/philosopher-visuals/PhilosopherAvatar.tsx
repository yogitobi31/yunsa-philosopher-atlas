import { avatarData } from "./avatarData";

export function PhilosopherAvatar({ id, name, size = 88 }: { id: string; name: string; size?: number }) {
  const meta = avatarData[id] ?? { accentHex: "#64748b", symbol: "哲", cue: "사유" };
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={meta.accentHex} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill={`url(#grad-${id})`} />
        <ellipse cx="50" cy="42" rx="18" ry="16" fill="#f8fafc" fillOpacity="0.85" />
        <rect x="34" y="58" width="32" height="20" rx="10" fill="#e2e8f0" fillOpacity="0.8" />
        <circle cx="44" cy="41" r="2" fill="#0f172a" />
        <circle cx="56" cy="41" r="2" fill="#0f172a" />
        <path d="M43 49 Q50 54 57 49" stroke="#0f172a" strokeWidth="2" fill="none" />
        <text x="50" y="24" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="700">{meta.symbol}</text>
      </svg>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-100">{meta.cue}</span>
      <span className="sr-only">{name} 캐리커처</span>
    </div>
  );
}
