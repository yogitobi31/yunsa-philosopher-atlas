import { ThoughtEdge, ThoughtNode } from "@/src/types/thoughtMap";

export const thoughtNodes: ThoughtNode[] = [
  { id: "confucius", name: "공자", group: "동양 윤리", period: "춘추 시대", symbol: "仁", shortIdea: "예(禮)와 인(仁)으로 관계 질서를 세운다.", x: 14, y: 30 },
  { id: "mencius", name: "맹자", group: "동양 윤리", period: "전국 시대", symbol: "惻", shortIdea: "사단을 확충해 선한 본성을 완성한다.", x: 27, y: 22 },
  { id: "xunzi", name: "순자", group: "동양 윤리", period: "전국 시대", symbol: "化", shortIdea: "욕망을 예로 교정해 인위를 쌓는다.", x: 29, y: 43 },
  { id: "zhu-xi", name: "주희", group: "동양 윤리", period: "남송", symbol: "理", shortIdea: "리(理)의 탐구와 수양으로 도덕을 실현한다.", x: 43, y: 27 },
  { id: "toegye", name: "이황", group: "한국 윤리", period: "조선", symbol: "敬", shortIdea: "경(敬) 중심 수양으로 리의 도덕성을 강조한다.", x: 55, y: 20 },
  { id: "yulgok", name: "이이", group: "한국 윤리", period: "조선", symbol: "氣", shortIdea: "기발함을 포괄하며 현실 개혁과 수양을 함께 본다.", x: 57, y: 37 },
  { id: "socrates", name: "소크라테스", group: "서양 윤리", period: "고대 그리스", symbol: "Δ", shortIdea: "무지를 자각하고 대화로 덕을 탐구한다.", x: 66, y: 58 },
  { id: "plato", name: "플라톤", group: "서양 윤리", period: "고대 그리스", symbol: "Ι", shortIdea: "이데아 인식을 통해 정의로운 영혼을 지향한다.", x: 77, y: 52 },
  { id: "aristotle", name: "아리스토텔레스", group: "서양 윤리", period: "고대 그리스", symbol: "Φ", shortIdea: "중용과 실천적 지혜로 행복을 완성한다.", x: 87, y: 61 },
  { id: "kant", name: "칸트", group: "서양 윤리", period: "근대", symbol: "義", shortIdea: "정언명령에 따라 보편화 가능한 의무를 따른다.", x: 77, y: 76 },
  { id: "rawls", name: "롤스", group: "사회사상", period: "현대", symbol: "正", shortIdea: "무지의 베일 아래 정의 원칙을 합의한다.", x: 89, y: 82 },
  { id: "rousseau", name: "루소", group: "사회사상", period: "근대", symbol: "契", shortIdea: "일반의지를 통해 자유와 평등의 질서를 설계한다.", x: 67, y: 90 },
];

export const thoughtEdges: ThoughtEdge[] = [
  { id: "e1", from: "confucius", to: "mencius", relation: "계승", explanation: "맹자는 공자의 인(仁)을 인간 본성의 선함(사단)으로 적극 확장했다.", examPoint: "인의 계승은 같지만 본성 설명은 맹자가 더 이론화했다." },
  { id: "e2", from: "confucius", to: "xunzi", relation: "재해석", explanation: "순자는 예의 중요성은 계승하되 인간 본성을 악으로 보고 교육·제도로 교정해야 한다고 본다.", examPoint: "공자-순자는 예를 공유하지만 성선/성악을 반드시 구분해야 한다." },
  { id: "e3", from: "mencius", to: "zhu-xi", relation: "이론 체계화", explanation: "주희는 맹자의 도덕 본성 논의를 성리학 체계 속 리(理) 중심으로 정교화했다.", examPoint: "맹자(사단)와 주희(리·격물치지)의 연결 출제가 자주 나온다." },
  { id: "e4", from: "zhu-xi", to: "toegye", relation: "심화", explanation: "이황은 주희 성리학을 조선 맥락에서 심화하며 리의 도덕 주재성과 경을 강조했다.", examPoint: "주희와 이황은 리 중심, 이이는 기의 작동 강조로 대비된다." },
  { id: "e5", from: "zhu-xi", to: "yulgok", relation: "변용", explanation: "이이는 주희를 계승하되 현실 정치와 기의 역동성을 더 강하게 반영했다.", examPoint: "이황·이이 비교 문항에서 리·기의 강조점 차이가 핵심이다." },
  { id: "e6", from: "socrates", to: "plato", relation: "사제", explanation: "플라톤은 소크라테스의 문답법을 바탕으로 이데아론과 국가론을 전개했다.", examPoint: "소크라테스는 대화법, 플라톤은 이데아/정의 국가로 확장." },
  { id: "e7", from: "plato", to: "aristotle", relation: "비판적 계승", explanation: "아리스토텔레스는 스승의 이데아론을 비판하며 현실 속 목적론과 덕 윤리를 정립했다.", examPoint: "플라톤(초월) vs 아리스토텔레스(경험·실천) 대비가 빈출." },
  { id: "e8", from: "kant", to: "rawls", relation: "정의론 영향", explanation: "롤스는 칸트적 자율성과 보편주의를 정치철학의 정의 원칙으로 재구성했다.", examPoint: "칸트의 의무론이 롤스의 공정으로서의 정의에 철학적 기반 제공." },
  { id: "e9", from: "rousseau", to: "rawls", relation: "사회계약 계보", explanation: "롤스는 루소의 사회계약 전통을 현대적 절차(원초적 입장)로 재설계했다.", examPoint: "루소 일반의지와 롤스 합의 절차를 같은 계약론 흐름으로 묶어라." },
  { id: "e10", from: "aristotle", to: "kant", relation: "긴장/대화", explanation: "덕의 습관을 강조한 아리스토텔레스와 의무의 보편 법칙을 강조한 칸트는 윤리 판단 틀을 대비시킨다.", examPoint: "행복 중심 목적론 vs 동기 중심 의무론을 구분하는 선지가 자주 출제." },
];
