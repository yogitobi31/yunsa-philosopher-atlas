import Link from "next/link";
import { Philosopher } from "@/data/philosophers";

export function PhilosopherCard({ philosopher }: { philosopher: Philosopher }) {
  return (
    <Link href={`/philosophers/${philosopher.id}`} className="group rounded-3xl glass p-5 shadow-premium transition hover:-translate-y-1 hover:border-atlas-cyan/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">{philosopher.region}</span>
        <span className="text-xs text-slate-400">난이도 {"★".repeat(philosopher.difficulty)}</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{philosopher.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{philosopher.period}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-200">{philosopher.oneLine}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {philosopher.coreConcepts.slice(0, 4).map((concept) => (
          <span key={concept} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">{concept}</span>
        ))}
      </div>
    </Link>
  );
}
