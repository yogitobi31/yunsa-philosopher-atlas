import { avatarData } from "./avatarData";

export function PhilosopherAvatar({ id, name, size = 88 }: { id: string; name: string; size?: number }) {
  const meta = avatarData[id] ?? { accentHex: "#64748b", symbol: "哲", cue: "사유" };
  const orbitId = `orbit-${id}`;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label={`${name} 상징 인장`}>
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={meta.accentHex} stopOpacity="0.9" />
            <stop offset="55%" stopColor="#17233f" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0b1228" stopOpacity="0.98" />
          </linearGradient>
          <radialGradient id={`inner-${id}`} cx="35%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="48" fill={`url(#grad-${id})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#inner-${id})`} />
        <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(248,250,252,0.5)" strokeWidth="1" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(125,211,252,0.35)" strokeWidth="0.9" />

        <path id={orbitId} d="M18 56 C24 24, 76 24, 82 56 C76 84, 24 84, 18 56 Z" fill="none" />
        <text fontSize="5.4" fill="rgba(226,232,240,0.55)" letterSpacing="1.4">
          <textPath href={`#${orbitId}`} startOffset="8%">{meta.cue} · {meta.cue} · {meta.cue}</textPath>
        </text>

        <text x="50" y="60" textAnchor="middle" fontSize="34" fill="#f8fafc" fontWeight="700" style={{ letterSpacing: "0.04em" }}>
          {meta.symbol}
        </text>
      </svg>
      <span className="sr-only">{name} 상징 인장</span>
    </div>
  );
}
