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

const generated: TrapQuestion[] = philosophers.flatMap((p, i) => {
  const compare = p.compareWith[0] ?? philosophers[(i + 1) % philosophers.length].name;
  return [
    { id: `${p.id}-ox`, category: p.category, philosopher: p.name, type: "OX", question: `${p.name}에 대한 설명으로 옳은가? ${p.examPoint}`, answer: true, explanation: p.examPoint, trapPoint: p.trapPoint, difficulty: "easy", tags: [p.category, p.name, "개념확인"] },
    { id: `${p.id}-blank`, category: p.category, philosopher: p.name, type: "BLANK", question: `${p.name}의 핵심 사상 흐름에서 빈칸에 들어갈 말은? ${p.coreFlow[0]} → ____ → ${p.coreFlow[p.coreFlow.length - 1]}`, choices: p.coreFlow, answer: p.coreFlow[1] ?? p.coreFlow[0], explanation: `${p.name}의 흐름은 ${p.coreFlow.join(" → ")}로 정리된다.`, trapPoint: "핵심 개념의 순서를 바꾸는 선지가 자주 출제된다.", difficulty: "medium", tags: [p.category, p.name, "흐름"] },
    { id: `${p.id}-compare`, category: p.category, philosopher: p.name, type: "COMPARE", question: `${p.name}와 ${compare}를 구분하는 핵심 기준으로 가장 적절한 것은?`, choices: [p.keyIdeas[0] ?? p.keywords[0], "결과만 중시", "도덕 교육 불필요", "강제 권력 절대화"], answer: p.keyIdeas[0] ?? p.keywords[0], explanation: `${p.name}의 대표 논점은 ${p.keyIdeas[0] ?? p.keywords[0]}이다.`, trapPoint: `${compare}의 핵심어와 바꿔 출제되는 함정에 주의한다.`, difficulty: "hard", tags: [p.category, p.name, compare, "비교"] },
  ];
});

const extras: TrapQuestion[] = [
  { id:"east-1",category:"동양 윤리",philosopher:"공자",type:"TRAP",question:"공자의 예를 단순한 외적 의례 규칙으로만 이해해도 되는가?",answer:false,explanation:"공자의 예는 인을 사회적으로 구현하는 실천 규범이다.",trapPoint:"인의 내면성과 예의 사회성을 분리하면 오답이다.",difficulty:"medium",tags:["동양 윤리","공자","함정"]},
  { id:"korea-1",category:"한국 윤리",philosopher:"이황",type:"COMPARE",question:"이황과 이이를 구분할 때 적절한 설명은?",choices:["이황은 사단의 도덕적 순수성을 강조한다.","이이는 리를 부정한다.","이황은 기만 중시한다.","두 사람은 동일 입장이다."],answer:"이황은 사단의 도덕적 순수성을 강조한다.",explanation:"이황은 사단의 도덕성을 강조했고, 이이는 리와 기의 불가분성을 강조했다.",trapPoint:"이이를 리 부정론으로 오해하는 선지가 빈출된다.",difficulty:"hard",tags:["한국 윤리","이황","이이"]},
  { id:"west-1",category:"서양 윤리",philosopher:"칸트",type:"MULTIPLE_CHOICE",question:"칸트 윤리에서 도덕적 행위 판단 기준은?",choices:["쾌락 총량","보편화 가능한 의무 동기","사회적 인기","개인 성향"],answer:"보편화 가능한 의무 동기",explanation:"칸트는 선의지와 의무, 보편화 가능성을 중시한다.",trapPoint:"결과 중심 판단은 공리주의와 혼동한 것이다.",difficulty:"easy",tags:["서양 윤리","칸트"]},
  { id:"soc-1",category:"사회사상",philosopher:"루소",type:"TRAP",question:"루소의 일반의지는 단순 다수결 결과와 동일한가?",answer:false,explanation:"일반의지는 공동선을 지향하며 사적 의지의 단순 합과 구분된다.",trapPoint:"일반의지와 전체의지 구분은 대표 함정이다.",difficulty:"medium",tags:["사회사상","루소"]},
  { id:"applied-1",category:"현대 응용 윤리",philosopher:"싱어",type:"OX",question:"싱어는 종 차별을 비판하며 고통 능력을 도덕 고려 기준으로 본다.",answer:true,explanation:"싱어는 이익 평등 고려 원칙을 제시한다.",trapPoint:"인간 우선주의를 당연 전제로 두면 오답이다.",difficulty:"easy",tags:["현대 응용 윤리","싱어"]},
  { id:"integrated-1",category:"통합 비교형",type:"COMPARE",question:"칸트와 밀을 구분하는 핵심 기준은?",choices:["의무 중심과 결과 중심", "직접 민주주의 여부", "자연권 인정 여부", "계급투쟁 여부"],answer:"의무 중심과 결과 중심",explanation:"칸트는 의무론, 밀은 공리주의로 구분된다.",trapPoint:"둘 다 보편성을 말하지만 기준이 다르다.",difficulty:"medium",tags:["통합","칸트","밀"]},
  { id:"integrated-2",category:"통합 비교형",type:"COMPARE",question:"맹자와 순자의 인간 본성 이해를 바르게 연결한 것은?",choices:["맹자-성선설, 순자-성악설","맹자-성악설, 순자-성선설","둘 다 성악설","둘 다 성선설"],answer:"맹자-성선설, 순자-성악설",explanation:"맹자는 사단을 통한 성선, 순자는 화성기위를 통한 성악설을 제시했다.",trapPoint:"성악설을 도덕 불가능론으로 연결하면 오답이다.",difficulty:"easy",tags:["통합","맹자","순자"]},
  { id:"integrated-3",category:"통합 비교형",type:"TRAP",question:"롤스의 차등의 원칙은 모든 불평등을 부정한다.",answer:false,explanation:"최소 수혜자에게 이익이 되는 불평등은 허용될 수 있다.",trapPoint:"평등주의를 절대적 동일 분배로 이해하면 오답이다.",difficulty:"medium",tags:["통합","롤스"]},
  { id:"integrated-4",category:"통합 비교형",type:"CLAIM",question:"다음 주장과 가장 가까운 사상가는? '정부가 권리를 침해하면 시민은 저항할 수 있다.'",choices:["홉스","로크","루소","노직"],answer:"로크",explanation:"로크는 자연권 침해 시 저항권을 인정한다.",trapPoint:"홉스는 강한 주권을 우선시한다.",difficulty:"medium",tags:["통합","사회계약"]},
  { id:"integrated-5",category:"통합 비교형",type:"COMPARE",question:"싱어와 레건의 공통점으로 가장 적절한 것은?",choices:["동물 도구화 비판","인간 중심주의 절대 옹호","의무론 전면 부정","환경 보전 반대"],answer:"동물 도구화 비판",explanation:"두 사상 모두 동물을 단순 수단으로 보는 관점을 비판한다.",trapPoint:"이론 근거는 다르므로 동일 학설로 보면 오답이다.",difficulty:"hard",tags:["통합","싱어","레건"]},
  { id:"integrated-6",category:"통합 비교형",type:"BLANK",question:"소크라테스 → 플라톤 → ____ 흐름에서 빈칸은?",choices:["아리스토텔레스","흄","벤담","하버마스"],answer:"아리스토텔레스",explanation:"고대 그리스 윤리 흐름의 핵심 계승 구도다.",trapPoint:"시대가 다른 사상가를 끼워 넣는 함정에 주의한다.",difficulty:"easy",tags:["통합","서양 윤리"]},
  { id:"integrated-7",category:"통합 비교형",type:"TRAP",question:"주희와 왕수인은 모두 도덕 실천을 강조하므로 완전히 동일한 수양론이다.",answer:false,explanation:"주희는 격물치지 중심, 왕수인은 치양지·지행합일을 강조한다.",trapPoint:"유사한 용어를 이유로 학파 차이를 지우면 오답이다.",difficulty:"hard",tags:["통합","동양 윤리"]},
  { id:"integrated-8",category:"통합 비교형",type:"CLAIM",question:"'미래 세대에 대한 책임을 고려해야 한다'는 주장과 가장 가까운 사상가는?",choices:["요나스","벤담","루소","지눌"],answer:"요나스",explanation:"요나스는 기술문명 시대의 책임 윤리를 제시했다.",trapPoint:"현세대 효용만으로 판단하면 오답이다.",difficulty:"easy",tags:["통합","요나스"]},
  { id:"integrated-9",category:"통합 비교형",type:"COMPARE",question:"노직과 롤스의 분배 정의 논쟁 핵심은?",choices:["절차와 권리 vs 패턴 분배 원칙", "중용 vs 쾌락", "신앙 vs 이성", "무위 vs 예"],answer:"절차와 권리 vs 패턴 분배 원칙",explanation:"노직은 권리 취득 절차, 롤스는 공정한 제도 원칙을 중시한다.",trapPoint:"둘 다 자유를 말하지만 정의 기준이 다르다.",difficulty:"hard",tags:["통합","노직","롤스"]},
  { id:"integrated-10",category:"통합 비교형",type:"OX",question:"공자와 맹자는 모두 덕 윤리를 강조하지만, 맹자는 사단 개념을 명시적으로 제시한다.",answer:true,explanation:"맹자는 공자 전통을 계승하며 성선설과 사단론을 체계화했다.",trapPoint:"계승 관계를 단절로 이해하면 오답이다.",difficulty:"medium",tags:["통합","공자","맹자"]}
];

export const trapQuestions: TrapQuestion[] = [...generated, ...extras];
