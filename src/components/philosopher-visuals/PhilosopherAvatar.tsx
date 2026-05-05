import { avatarData } from "./avatarData";

function Motif({ type, accent }: { type: string; accent: string }) {
  const stroke = { stroke: accent, strokeWidth: 1.8, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (type) {
    case "linked":
      return <><circle cx="30" cy="36" r="8" {...stroke} /><circle cx="50" cy="50" r="8" {...stroke} /><circle cx="70" cy="36" r="8" {...stroke} /><path d="M37 41 L43 45 M57 45 L63 41" {...stroke} /></>;
    case "sprout":
      return <><path d="M50 66 V42" {...stroke} /><path d="M50 46 C38 46 34 36 37 30 C44 30 49 35 50 42" {...stroke} /><path d="M50 46 C62 46 66 36 63 30 C56 30 51 35 50 42" {...stroke} /></>;
    case "align":
      return <><path d="M30 34 H70 M30 50 H70 M30 66 H70" {...stroke} /><path d="M42 34 V66" {...stroke} /></>;
    case "flow":
      return <path d="M28 56 C38 40 50 68 72 44" {...stroke} />;
    case "expansion":
      return <><path d="M36 62 C42 48 58 48 64 62" {...stroke} /><path d="M50 30 V48 M50 30 L44 36 M50 30 L56 36" {...stroke} /></>;
    case "grid":
      return <><path d="M32 34 H68 V66 H32 Z" {...stroke} /><path d="M44 34 V66 M56 34 V66 M32 46 H68 M32 58 H68" {...stroke} /></>;
    case "innerDot":
      return <><circle cx="50" cy="50" r="18" {...stroke} /><circle cx="50" cy="50" r="4" fill={accent} /></>;
    case "starAxis":
      return <><path d="M50 28 V68 M30 48 H70" {...stroke} /><path d="M50 34 L53 44 L64 44 L55 50 L58 60 L50 54 L42 60 L45 50 L36 44 L47 44 Z" {...stroke} /></>;
    case "sum":
      return <><path d="M62 32 H40 L54 50 L40 68 H62" {...stroke} /><path d="M34 40 V60" {...stroke} /></>;
    case "rise":
      return <><path d="M34 64 L50 48 L62 56 L70 40" {...stroke} /><path d="M70 40 H60 M70 40 V50" {...stroke} /></>;
    case "shield":
      return <path d="M50 28 L66 34 V48 C66 58 59 66 50 70 C41 66 34 58 34 48 V34 Z" {...stroke} />;
    case "key":
      return <><circle cx="42" cy="50" r="9" {...stroke} /><path d="M51 50 H68 M62 50 V56 M68 50 V54" {...stroke} /></>;
    case "community":
      return <><circle cx="38" cy="48" r="7" {...stroke} /><circle cx="62" cy="48" r="7" {...stroke} /><path d="M31 60 C38 53 62 53 69 60" {...stroke} /></>;
    case "veil":
      return <><path d="M34 38 H66" {...stroke} /><path d="M34 50 H66" {...stroke} /><path d="M34 62 H66" {...stroke} /><path d="M50 30 V70" {...stroke} /></>;
    case "boundary":
      return <><path d="M34 34 H66 V66 H34 Z" {...stroke} /><path d="M46 34 V66" {...stroke} /></>;
    case "triangle":
      return <path d="M50 30 L68 64 H32 Z" {...stroke} />;
    case "balance":
      return <><path d="M50 30 V64 M34 40 H66" {...stroke} /><path d="M38 40 L32 54 H44 Z M62 40 L56 54 H68 Z" {...stroke} /></>;
    case "dialogue":
      return <><path d="M32 38 H58 V54 H42 L36 60 V54 H32 Z" {...stroke} /><path d="M46 46 H68 V62 H54" {...stroke} /></>;
    case "tool":
      return <><path d="M34 60 L48 46" {...stroke} /><path d="M48 46 L56 54 L42 68 L34 60 Z" {...stroke} /><path d="M56 32 L66 42" {...stroke} /></>;
    case "purity":
      return <><circle cx="50" cy="50" r="16" {...stroke} /><path d="M50 38 V62 M38 50 H62" {...stroke} /></>;
    case "harmony":
      return <><circle cx="44" cy="50" r="10" {...stroke} /><circle cx="56" cy="50" r="10" {...stroke} /></>;
    default:
      return <circle cx="50" cy="50" r="14" {...stroke} />;
  }
}

export function PhilosopherAvatar({ id, name, size = 52 }: { id: string; name: string; size?: number }) {
  const meta = avatarData[id] ?? { accentHex: "#67e8f9", label: "사유", motif: "innerDot" as const };

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label={`${name} 미니멀 상징`}>
        <rect x="8" y="8" width="84" height="84" rx="24" fill="rgba(148,163,184,0.08)" stroke="rgba(148,163,184,0.18)" />
        <Motif type={meta.motif} accent={meta.accentHex} />
      </svg>
    </div>
  );
}
