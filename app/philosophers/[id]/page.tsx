import { notFound } from "next/navigation";
import Link from "next/link";
import { philosophers } from "@/data/philosophers";

export default async function PhilosopherDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = philosophers.find((item) => item.id === id);
  if (!p) return notFound();

  return (
    <main className="min-h-screen bg-hero-gradient px-5 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl glass p-6 md:p-10">
        <Link href="/" className="text-sm text-atlas-cyan">← 홈으로</Link>
        <h1 className="mt-3 text-4xl font-bold">{p.name}</h1>
        <p className="mt-2 text-lg text-slate-300">{p.oneLine}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.coreConcepts.map((c) => <span key={c} className="rounded-full bg-white/10 px-3 py-1 text-sm">{c}</span>)}</div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Info title="인간관" text={p.viewOfHuman} />
          <Info title="윤리" text={p.ethics} />
          <Info title="정치/사회" text={p.politics ?? "해당 단원에서 직접 다루는 정치 이론은 제한적"} />
          <Info title="30초 요약" text={p.summary30} />
        </div>
        <List title="시험 함정" items={p.examTraps} />
        <List title="비교 타깃" items={p.compareWith} />
        <List title="자주 나오는 선지 표현" items={p.frequentStatements} />
      </div>
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <article className="rounded-2xl border border-white/10 bg-white/5 p-4"><h2 className="text-sm text-atlas-cyan">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-100">{text}</p></article>;
}

function List({ title, items }: { title: string; items: string[] }) {
  return <section className="mt-5"><h2 className="mb-2 text-sm text-atlas-rose">{title}</h2><ul className="space-y-2">{items.map((item) => <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">{item}</li>)}</ul></section>;
}
