import { IssueTopic } from "@/src/types/issueTopic";

export const issueTopics: IssueTopic[] = [
  {
    id: "human-nature",
    title: "인간 본성은 선한가, 교정이 필요한가?",
    question: "사람은 원래 착해서 키워야 할까, 아니면 욕망을 다스려야 할까?",
    shortInsight: "맹자는 '선한 단서 확충', 순자는 '예로 욕망 교정'으로 접근한다.",
    relatedPhilosophers: ["mencius", "xunzi", "confucius"],
    keyContrast: "성선의 확충(맹자) vs 성악의 교정(순자)",
    examPoint: "성선/성악은 인간 가치판단이 아니라 수양 방법의 차이로 출제된다.",
    commonTrap: "순자를 법가처럼 외우거나, 맹자를 '이미 완성된 선'으로 이해하면 오답이 된다.",
    conceptAxis: { leftLabel: "본성의 선함 강조", rightLabel: "규범·교육의 교정 강조", positions: [
      { philosopherId: "mencius", label: "맹자", description: "사단을 확충해 덕을 완성", position: 14 },
      { philosopherId: "confucius", label: "공자", description: "예와 인으로 관계 속 수양", position: 48 },
      { philosopherId: "xunzi", label: "순자", description: "예·교육으로 욕망 조절", position: 86 },
    ] },
    comparePairs: [
      { a: "mencius", b: "xunzi", oneLineDifference: "맹자는 선한 단서를 키우고, 순자는 욕망을 규범으로 교정한다.", examTrap: "둘 다 유가이며 '예'를 중시한다는 공통점을 빼면 함정에 걸린다." },
      { a: "confucius", b: "xunzi", oneLineDifference: "공자는 관계 속 인·예 조화를, 순자는 제도적 예치를 더 강조한다.", examTrap: "공자와 순자를 성악/성선으로만 단순 이분법하면 세부 선지에서 틀린다." },
    ],
  },
  {
    id: "moral-judgment",
    title: "도덕 판단은 동기인가, 결과인가?",
    question: "행위의 옳고 그름은 의무를 지켰는지로 볼까, 행복을 늘렸는지로 볼까?",
    shortInsight: "칸트는 보편화 가능한 의무, 벤담·밀은 효용 극대화를 기준으로 본다.",
    relatedPhilosophers: ["kant", "bentham", "mill"],
    keyContrast: "의무의 보편성(칸트) vs 결과의 효용(벤담·밀)",
    examPoint: "칸트는 '동기', 공리주의는 '결과'를 기준으로 한다는 축을 먼저 잡아야 한다.",
    commonTrap: "밀의 자유론을 칸트의 자율성과 섞거나, 밀·벤담을 같은 공리주의로만 처리하면 감점된다.",
    conceptAxis: { leftLabel: "의무·동기 중심", rightLabel: "결과·효용 중심", positions: [
      { philosopherId: "kant", label: "칸트", description: "정언명령과 인간 존엄", position: 8 },
      { philosopherId: "mill", label: "밀", description: "질적 공리 + 자유의 가치", position: 72 },
      { philosopherId: "bentham", label: "벤담", description: "양적 쾌락계산", position: 90 },
    ] },
    comparePairs: [
      { a: "kant", b: "bentham", oneLineDifference: "칸트는 행위 원리의 보편성, 벤담은 결과 행복의 총량을 본다.", examTrap: "'최대 행복'을 칸트 선지에 섞어 출제하는 경우가 많다." },
      { a: "bentham", b: "mill", oneLineDifference: "벤담은 양적 계산, 밀은 질적 차이와 자유를 강조한다.", examTrap: "둘 다 공리주의라며 자유·질 개념을 지워버리면 오답이 된다." },
    ],
  },
  {
    id: "justice-state",
    title: "정의로운 사회는 어떻게 설계되는가?",
    question: "국가는 강한 질서를 우선해야 할까, 권리·공정을 우선해야 할까?",
    shortInsight: "홉스·로크·루소·롤스·노직은 사회계약과 정의를 서로 다르게 설계한다.",
    relatedPhilosophers: ["hobbes", "locke", "rousseau", "rawls", "nozick"],
    keyContrast: "안전·주권 강화(홉스) ↔ 권리·공정·자기소유권(로크·롤스·노직)",
    examPoint: "사회계약론 내부에서도 국가 권한과 재분배 정당화 기준이 다름을 비교해야 한다.",
    commonTrap: "롤스를 절대평등론으로, 노직을 무정부주의로 오해하는 선지가 자주 등장한다.",
    conceptAxis: { leftLabel: "국가 권한 강화", rightLabel: "개인 권리·재분배 논쟁", positions: [
      { philosopherId: "hobbes", label: "홉스", description: "질서 확보를 위한 강한 주권", position: 12 },
      { philosopherId: "rousseau", label: "루소", description: "일반의지에 따른 시민적 자유", position: 46 },
      { philosopherId: "rawls", label: "롤스", description: "공정한 절차와 차등원리", position: 68 },
      { philosopherId: "locke", label: "로크", description: "자연권 보호 중심 제한정부", position: 76 },
      { philosopherId: "nozick", label: "노직", description: "강제 재분배 비판, 최소국가", position: 93 },
    ] },
    comparePairs: [
      { a: "hobbes", b: "locke", oneLineDifference: "홉스는 안전을 위한 절대주권, 로크는 권리 보호를 위한 제한정부를 본다.", examTrap: "두 사상가 모두 계약론이지만 정부 권한 범위가 완전히 다르다." },
      { a: "rawls", b: "nozick", oneLineDifference: "롤스는 불평등의 정당화 조건을 묻고, 노직은 취득·이전의 정당성을 묻는다.", examTrap: "결과 패턴 중심 정의와 절차 중심 정의를 뒤집는 선지 주의." },
    ],
  },
];
