import { philosophers } from "@/data/philosophers";

export type TrapQuestion = {
  id: string;
  category: string;
  philosopher?: string;
  type: "OX" | "MULTIPLE_CHOICE" | "COMPARE" | "BLANK" | "CLAIM" | "TRAP";
  question: string;
  choices?: string[];
  answer: string | boolean;
  explanation: string;
  trapPoint: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
};

const base: TrapQuestion[] = philosophers.flatMap((p, i) => {
  const c = p.compareWith[0] ?? philosophers[(i + 1) % philosophers.length].name;
  return [
    { id:`${p.id}-ox`, category:p.category, philosopher:p.name, type:"OX", question:`${p.name}는 다음과 같은 입장을 보인다: ${p.examPoint}`, answer:true, explanation:p.examPoint, trapPoint:p.trapPoint, difficulty:"easy", tags:[p.name, ...p.keywords.slice(0,2)] },
    { id:`${p.id}-blank`, category:p.category, philosopher:p.name, type:"BLANK", question:`${p.name}의 핵심 사상 흐름 빈칸: ${p.coreFlow[0]} → ____ → ${p.coreFlow[p.coreFlow.length-1]}`, choices:p.coreFlow, answer:p.coreFlow[1] ?? p.coreFlow[0], explanation:`${p.name}의 핵심 흐름은 ${p.coreFlow.join(" → ")}이다.`, trapPoint:`핵심 흐름의 중간 단계를 바꿔 넣는 선지가 자주 출제된다.`, difficulty:"medium", tags:[p.name,"흐름"] },
    { id:`${p.id}-compare`, category:p.category, philosopher:p.name, type:"COMPARE", question:`${p.name}와 ${c}를 구분할 때 가장 중요한 기준은?`, choices:[p.keyIdeas[0] ?? p.keywords[0], "결과만 중시", "권위에 무조건 복종", "도덕 불가능론"], answer:p.keyIdeas[0] ?? p.keywords[0], explanation:`${p.name}의 대표 기준은 ${p.keyIdeas[0] ?? p.keywords[0]}이다.`, trapPoint:`비교 철학자의 핵심어를 섞어 제시하는 함정에 주의한다.`, difficulty:"hard", tags:[p.name,c,"비교"] },
  ];
});

export const trapQuestions: TrapQuestion[] = Array.from({ length: 5 }).flatMap((_, idx) =>
  base.map((q) => ({ ...q, id: `${q.id}-${idx + 1}`, difficulty: idx < 2 ? q.difficulty : idx < 4 ? "medium" : "hard" as const }))
);
