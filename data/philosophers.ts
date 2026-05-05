/**
 * 이 데이터는 고등학교 윤리와 사상 학습용 요약 데이터이며, 수능/내신 대비를 위해 개념 간 구분이 명확하게 드러나도록 구성한다.
 * 내용 추가 시 철학자 간 연결 관계와 시험 포인트의 정확성을 반드시 우선한다.
 */

export type PhilosopherCategory = "동양윤리" | "서양윤리" | "한국윤리" | "사회사상";

export type PhilosopherRelation = {
  targetId: string;
  type: "계승" | "대립" | "유사" | "비교빈출";
  note: string;
};

export type Philosopher = {
  id: string;
  name: string;
  hanjaOrSymbol: string;
  period: string;
  region: "동양" | "서양" | "한국" | "사회사상";
  category: PhilosopherCategory;
  oneLine: string;
  thesis: string;
  flow: string[];
  categoryLabel: string;
  coreQuestion: string;
  coreConcepts: string[];
  decisionStandard: string;
  humanView: string;
  idealStateOrSociety: string;
  examPoint: string;
  commonTrap: string;
  contrastWith: string[];
  memoryImage: string;
  keywords: string[];
  shortSummary: string;
  longSummary: string;
  relations: PhilosopherRelation[];
};

export const philosophers: Philosopher[] = [
  { id:"confucius", name:"공자", hanjaOrSymbol:"仁", period:"춘추", region:"동양", category:"동양윤리", oneLine:"관계 질서를 예로 세우고 인으로 완성한다.", thesis:"인간다운 마음을 예로 실천해 조화로운 사회를 세운다.", flow:["인","예","군자","사회 질서"], categoryLabel:"동양 윤리 · 유교", coreQuestion:"혼란한 사회에서 사람다움은 어떻게 회복되는가?", coreConcepts:["인","예","정명"], decisionStandard:"관계·역할에 맞는 예의 실천", humanView:"교육과 수양으로 인을 구현할 수 있는 존재", idealStateOrSociety:"덕치와 정명이 구현된 조화로운 공동체", examPoint:"공자는 인(仁)을 예(禮)라는 사회적 형식으로 구체화한다.", commonTrap:"공자를 단순 형식주의나 권위주의로 단정하면 오답.", contrastWith:["laozi","mencius","xunzi"], memoryImage:"촘촘한 관계망을 바로 세우는 예의 나침반", keywords:["유교","덕치","수기치인"], shortSummary:"관계 속 실천윤리", longSummary:"공자는 도덕을 개인 내면에만 두지 않고 관계 질서 속에서 실천되도록 구성했다.", relations:[{targetId:"mencius",type:"계승",note:"인·도덕정치 계승"},{targetId:"xunzi",type:"비교빈출",note:"유교 내 인간본성 비교"},{targetId:"laozi",type:"대립",note:"인위적 질서 vs 무위자연"}]},
  { id:"mencius", name:"맹자", hanjaOrSymbol:"善", period:"전국", region:"동양", category:"동양윤리", oneLine:"선한 단서를 확충해 왕도정치로 나아간다.", thesis:"선한 본성을 확충해 백성을 살리는 정치를 지향한다.", flow:["선한 본성","확충","왕도정치"], categoryLabel:"동양 윤리 · 유교", coreQuestion:"인간 안의 선함은 어떻게 현실 정치로 이어지는가?", coreConcepts:["성선설","사단","왕도"], decisionStandard:"사단의 보존·확충 여부", humanView:"인간은 측은·수오·사양·시비의 단서를 지님", idealStateOrSociety:"백성을 중시하는 왕도정치", examPoint:"사단은 완성된 덕이 아니라 확충해야 할 도덕의 싹이다.", commonTrap:"성선설=노력 불필요라는 해석은 틀림.", contrastWith:["xunzi","confucius"], memoryImage:"작은 싹에 물을 주어 큰 숲으로 키우는 정원사", keywords:["민본","사단확충"], shortSummary:"도덕의 싹을 키우는 윤리", longSummary:"맹자는 인간의 선한 가능성을 교육·수양·정치로 연결해 도덕 공동체를 설계했다.", relations:[{targetId:"xunzi",type:"대립",note:"성선설 vs 성악설"},{targetId:"confucius",type:"계승",note:"인의 정치 계승"}]},
  { id:"xunzi", name:"순자", hanjaOrSymbol:"禮", period:"전국", region:"동양", category:"동양윤리", oneLine:"욕망을 예로 교정해 질서를 만든다.", thesis:"인간 욕망을 예와 교육으로 다듬어 사회 질서를 세운다.", flow:["악한 본성","예와 교육","교화"], categoryLabel:"동양 윤리 · 유교", coreQuestion:"욕망이 강한 인간을 어떻게 도덕적으로 길러낼 수 있는가?", coreConcepts:["성악설","화성기위","예치"], decisionStandard:"욕망의 절제와 예의 내면화", humanView:"인간은 본성상 욕망을 지니며 교정이 필요", idealStateOrSociety:"교육·예치로 유지되는 안정 질서", examPoint:"순자의 성악설은 인간 혐오가 아니라 교육 필요성의 논증이다.", commonTrap:"순자를 법가로 동일시하면 오답.", contrastWith:["mencius"], memoryImage:"흐트러진 물줄기를 제방으로 바로잡는 장치", keywords:["예치","후천수양"], shortSummary:"교정과 훈련의 윤리", longSummary:"순자는 인간 욕망을 현실적으로 보고 예·교육으로 사회적 선을 형성한다고 본다.", relations:[{targetId:"mencius",type:"대립",note:"인간본성 논쟁"}]},
  { id:"kant", name:"칸트", hanjaOrSymbol:"★", period:"근대", region:"서양", category:"서양윤리", oneLine:"결과보다 의무와 동기의 보편성을 묻는다.", thesis:"도덕은 결과가 아니라 선의지와 의무의 보편성에 달려 있다.", flow:["선의지","의무","정언명령","인간 존엄"], categoryLabel:"서양 윤리 · 의무론", coreQuestion:"도덕법칙은 어떤 조건에서 누구에게나 타당한가?", coreConcepts:["정언명령","선의지","자율"], decisionStandard:"보편화 가능한 의무와 인간 존엄", humanView:"인간은 스스로 법을 세우는 이성적 존재", idealStateOrSociety:"타인을 수단이 아닌 목적으로 대하는 도덕 공동체", examPoint:"칸트는 행위 결과가 아닌 행위 준칙의 보편화 가능성을 본다.", commonTrap:"공리주의처럼 행복 총량을 기준으로 해석하면 틀림.", contrastWith:["bentham","mill"], memoryImage:"별 모양 나침반으로 항상 북쪽(의무)을 가리키는 항해", keywords:["의무론","정언명령"], shortSummary:"의무 중심 윤리", longSummary:"칸트는 도덕의 기준을 감정이나 결과가 아닌 자율적 이성의 보편 법칙에서 찾는다.", relations:[{targetId:"bentham",type:"대립",note:"동기 중심 vs 결과 중심"},{targetId:"mill",type:"대립",note:"의무론 vs 공리주의"}]},
  { id:"bentham", name:"벤담", hanjaOrSymbol:"∑", period:"근대", region:"서양", category:"서양윤리", oneLine:"최대 다수의 최대 행복을 양적으로 계산한다.", thesis:"행위의 옳고 그름은 총효용의 크기로 판단할 수 있다.", flow:["쾌락 계산","총효용","최대 행복"], categoryLabel:"서양 윤리 · 공리주의", coreQuestion:"정책과 행위를 가장 효율적으로 평가하는 기준은 무엇인가?", coreConcepts:["공리","쾌락계산","양적공리주의"], decisionStandard:"총쾌락(총효용)의 극대화", humanView:"고통 회피·쾌락 추구 존재", idealStateOrSociety:"공리 계산에 근거한 입법·제도", examPoint:"벤담은 쾌락의 질보다 양과 강도·지속성 등을 계산한다.", commonTrap:"밀과 동일하게 질적 비교를 한다고 보면 오답.", contrastWith:["mill","kant"], memoryImage:"저울에 쾌락과 고통을 수치로 올려 합산하는 계산기", keywords:["최대다수","효용"], shortSummary:"양적 효용의 윤리", longSummary:"벤담은 공적 판단의 기준을 결과의 효용 합계에 두며 정책평가 도구로 확장했다.", relations:[{targetId:"mill",type:"계승",note:"공리주의 계보"},{targetId:"kant",type:"대립",note:"결과 중심 vs 의무 중심"}]},
  { id:"mill", name:"밀", hanjaOrSymbol:"↑", period:"근대", region:"서양", category:"서양윤리", oneLine:"질 높은 행복과 자유를 함께 지킨다.", thesis:"자유와 개성을 보장해야 더 높은 질의 행복에 도달한다.", flow:["자유","개성","질적 행복","질적 공리주의"], categoryLabel:"서양 윤리 · 공리주의", coreQuestion:"다수의 행복과 개인의 자유는 어떻게 함께 보장되는가?", coreConcepts:["질적공리주의","해악금지","자유"], decisionStandard:"질적으로 높은 행복 + 타인 비침해", humanView:"개성 발달을 통해 성장하는 존재", idealStateOrSociety:"표현·사상의 자유가 보장된 사회", examPoint:"밀은 공리주의 내부에서 자유와 개성의 가치를 강화했다.", commonTrap:"자유를 무제한 방임으로 이해하면 틀림.", contrastWith:["bentham","kant"], memoryImage:"높은 계단으로 올라가며 더 질 높은 행복을 선택하는 장면", keywords:["자유주의","해악원리"], shortSummary:"자유를 결합한 공리주의", longSummary:"밀은 효용의 기준을 질적으로 재구성하고, 자유를 사회 진보의 핵심 조건으로 제시했다.", relations:[{targetId:"bentham",type:"계승",note:"공리주의 발전"}]},
  { id:"hobbes", name:"홉스", hanjaOrSymbol:"⚔", period:"근대", region:"사회사상", category:"사회사상", oneLine:"전쟁 상태를 멈추기 위해 강한 주권이 필요하다.", thesis:"자연상태의 불안을 멈추려면 강력한 주권이 필요하다.", flow:["자연상태","불안","사회계약","강한 국가"], categoryLabel:"사회사상 · 사회계약론", coreQuestion:"안전 없는 자유는 가능한가?", coreConcepts:["자연상태","만인투쟁","절대주권"], decisionStandard:"생명 보전을 위한 질서 확보", humanView:"두려움과 욕망을 가진 자기보존적 존재", idealStateOrSociety:"강력한 주권이 치안을 보장하는 국가", examPoint:"홉스의 계약은 권리 보호보다 질서·안전 확보가 우선이다.", commonTrap:"자연권 보장형 제한정부로 설명하면 오답.", contrastWith:["locke","rousseau"], memoryImage:"혼란한 전장을 거대한 방패(주권)로 막는 그림", keywords:["리바이어던","질서"], shortSummary:"안전 우선 국가론", longSummary:"홉스는 자연상태의 공포를 출발점으로 절대주권의 정당성을 논증했다.", relations:[{targetId:"locke",type:"대립",note:"절대주권 vs 제한정부"}]},
  { id:"locke", name:"로크", hanjaOrSymbol:"권", period:"근대", region:"사회사상", category:"사회사상", oneLine:"정부는 자연권을 지키기 위한 위임 기구다.", thesis:"국가 권력은 자연권 보호를 위해 시민이 위임한 수단이다.", flow:["자연권","동의","제한정부","저항권"], categoryLabel:"사회사상 · 사회계약론", coreQuestion:"정당한 정부 권력의 한계는 어디까지인가?", coreConcepts:["자연권","재산권","저항권"], decisionStandard:"생명·자유·재산의 보호 여부", humanView:"이성적으로 권리를 인식하는 개인", idealStateOrSociety:"입헌·제한정부와 시민의 저항권", examPoint:"로크는 정부가 권리를 침해하면 저항이 정당하다고 본다.", commonTrap:"홉스처럼 절대주권을 옹호한다고 보면 틀림.", contrastWith:["hobbes","rousseau"], memoryImage:"권리 문서에 봉인된 자물쇠를 시민이 쥔 모습", keywords:["자유주의","사회계약"], shortSummary:"권리 보호의 정부론", longSummary:"로크는 자연권 보장을 정부 정당성의 기준으로 삼아 근대 자유주의의 기초를 세웠다.", relations:[{targetId:"hobbes",type:"대립",note:"국가권력 범위 대비"},{targetId:"rousseau",type:"비교빈출",note:"사회계약 결론 비교"}]},
  { id:"rawls", name:"롤스", hanjaOrSymbol:"正", period:"현대", region:"사회사상", category:"사회사상", oneLine:"무지의 베일 아래 합의할 정의 원칙을 찾는다.", thesis:"공정한 절차에서 합의 가능한 정의 원칙이 정당한 질서를 만든다.", flow:["원초적 입장","무지의 베일","정의 원칙","차등 원리"], categoryLabel:"현대 윤리 · 정의론", coreQuestion:"공정한 사회 규칙은 어떤 절차에서 정당화되는가?", coreConcepts:["원초적입장","무지의베일","차등원리"], decisionStandard:"기본자유 평등 + 최소수혜자 이익", humanView:"상호 무관심하지만 합리적인 협동 주체", idealStateOrSociety:"공정한 기회와 분배 정의가 보장된 사회", examPoint:"롤스는 평등의 절대화가 아니라 최소수혜자 개선 조건부 불평등을 허용한다.", commonTrap:"무조건 동일분배론으로 해석하면 오답.", contrastWith:["nozick"], memoryImage:"눈가리개를 하고도 공정한 규칙표를 고르는 회의", keywords:["정의론","공정성"], shortSummary:"공정 절차 중심 정의론", longSummary:"롤스는 원초적 입장 사고실험으로 자유와 평등의 균형 원칙을 도출했다.", relations:[{targetId:"nozick",type:"대립",note:"패턴 정의 vs 자격이론"}]},
  { id:"nozick", name:"노직", hanjaOrSymbol:"自", period:"현대", region:"사회사상", category:"사회사상", oneLine:"정의는 결과 패턴이 아니라 정당한 취득 과정이다.", thesis:"정의는 결과 분포보다 취득과 이전의 절차적 정당성에 있다.", flow:["자기소유","정당 취득","정당 이전","최소국가"], categoryLabel:"현대 윤리 · 자유지상주의", coreQuestion:"국가는 개인 소유권에 어디까지 개입할 수 있는가?", coreConcepts:["자격이론","자기소유권","최소국가"], decisionStandard:"정당한 취득·이전·교정 절차", humanView:"자기 삶의 주권을 지닌 권리 주체", idealStateOrSociety:"강제 재분배를 최소화한 최소국가", examPoint:"노직은 결과 평등보다 권리 침해 여부를 우선한다.", commonTrap:"노직을 무정부주의로 분류하면 오답.", contrastWith:["rawls"], memoryImage:"개인 소유 경계선을 지키는 얇은 국가 울타리", keywords:["자유지상주의","소유권"], shortSummary:"권리 우선 최소국가론", longSummary:"노직은 분배정의를 결과 패턴으로 설계하려는 시도를 권리 침해로 비판한다.", relations:[{targetId:"rawls",type:"대립",note:"분배정의 논쟁"}]}
];

export const regionFilters: Array<Philosopher["region"] | "전체"> = ["전체", "동양", "서양", "한국", "사회사상"];
export const categoryFilters: Array<PhilosopherCategory | "전체"> = ["전체", "동양윤리", "서양윤리", "한국윤리", "사회사상"];
