export type ReviewStatus = "검수완료" | "검수필요" | "수정중";

export type Philosopher = {
  id: string;
  name: string;
  region: "동양" | "서양" | "한국" | "사회사상";
  period: string;
  category: string[];
  oneLine: string;
  coreConcepts: string[];
  viewOfHuman: string;
  ethics: string;
  politics?: string;
  keyStandard: string;
  examTraps: string[];
  frequentStatements: string[];
  compareWith: string[];
  summary30: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  symbol: string;
  accent: string;
  quoteLike: string;
  trapPreview: string;
  confusionPair?: string;
  reviewStatus: ReviewStatus;
  teacherChecked: boolean;
  sourceNote: string;
  curriculumTags: string[];
  mustKnow: string[];
  examWarning: string;
  reviewNotes: string;
  lastReviewedAt: string;
  sourceRefs: string[];
};

const reviewed = {
  reviewStatus: "검수완료" as const,
  teacherChecked: true,
  sourceNote: "고등학교 윤리와 사상 공통 개념어 기준 요약",
  curriculumTags: ["윤리와사상", "수능연계", "핵심개념"],
  mustKnow: ["핵심 기준 1개", "비교 대상 1명", "대표 개념 3개"],
  examWarning: "개념 이름이 비슷한 사상가와 구분해서 기억하세요.",
  reviewNotes: "교과 핵심어 기준 교차검토",
  lastReviewedAt: "2026-05-05",
  sourceRefs: ["고등학교 윤리와 사상 교과 핵심 개념"],
};

export const philosophers: Philosopher[] = [
  { id:"confucius", name:"공자", region:"동양", period:"춘추", category:["유가"], oneLine:"인과 예로 관계 질서를 세우는 유가", coreConcepts:["인","예","정명"], viewOfHuman:"관계 속 수양 가능한 존재", ethics:"수기치인", politics:"덕치", keyStandard:"역할의 적절성", examTraps:["예=형식주의 오해"], frequentStatements:["정명"], compareWith:["맹자","순자"], summary30:"인(仁)을 예(禮)로 실천한다.", difficulty:2, symbol:"仁", accent:"from-amber-300/30 to-orange-500/20", quoteLike:"관계 속에서 인간다움", trapPreview:"무위자연과 구분", confusionPair:"노자", ...reviewed },
  { id:"mencius", name:"맹자", region:"동양", period:"전국", category:["유가"], oneLine:"성선설과 왕도정치", coreConcepts:["성선설","사단","왕도"], viewOfHuman:"선한 단서를 지님", ethics:"사단 확충", politics:"민본 왕도", keyStandard:"선한 본성 확충", examTraps:["성선=완성된 선 오해"], frequentStatements:["백성 귀"], compareWith:["순자"], summary30:"선한 단서를 키우는 정치와 수양.", difficulty:3, symbol:"善", accent:"from-emerald-300/30 to-teal-500/20", quoteLike:"선의 싹을 기른다", trapPreview:"성악설과 혼동", confusionPair:"순자", ...reviewed },
  { id:"xunzi", name:"순자", region:"동양", period:"전국", category:["유가"], oneLine:"성악설과 예치", coreConcepts:["성악설","화성기위","예치"], viewOfHuman:"욕망은 규범 필요", ethics:"교육·훈련", politics:"예법 질서", keyStandard:"욕망 절제", examTraps:["법가로 오인"], frequentStatements:["성악"], compareWith:["맹자"], summary30:"후천적 수양으로 선을 형성.", difficulty:3, symbol:"禮", accent:"from-cyan-300/20 to-blue-500/10", quoteLike:"예는 욕망을 조절", trapPreview:"인간 혐오 아님", confusionPair:"맹자", ...reviewed },
  { id:"laozi", name:"노자", region:"동양", period:"춘추 말", category:["도가"], oneLine:"도와 무위자연", coreConcepts:["도","무위","자연"], viewOfHuman:"자연 질서와 조화", ethics:"인위 최소화", politics:"비간섭", keyStandard:"자연스러움", examTraps:["무위=무행동 오해"], frequentStatements:["무위이무불위"], compareWith:["공자"], summary30:"강한 통제보다 자연의 흐름 중시.", difficulty:3, symbol:"道", accent:"from-sky-300/20 to-indigo-500/10", quoteLike:"억지로 다스리지 않기", trapPreview:"유가 규범과 대비", confusionPair:"공자", ...reviewed },
  { id:"zhu_xi", name:"주희", region:"동양", period:"송", category:["성리학"], oneLine:"리 중심 성리학 체계화", coreConcepts:["리","기","격물치지"], viewOfHuman:"리와 기의 결합", ethics:"거경궁리", keyStandard:"리의 탐구", examTraps:["심즉리와 혼동"], frequentStatements:["격물치지"], compareWith:["왕수인"], summary30:"외재적 탐구로 도덕 원리 파악.", difficulty:4, symbol:"理", accent:"from-fuchsia-300/20 to-purple-500/20", quoteLike:"리를 궁구하라", trapPreview:"양명학과 대비", confusionPair:"왕수인", ...reviewed },
  { id:"wang_yangming", name:"왕수인", region:"동양", period:"명", category:["양명학"], oneLine:"심즉리와 지행합일", coreConcepts:["심즉리","치양지","지행합일"], viewOfHuman:"마음 안의 도덕성", ethics:"양지 실천", keyStandard:"내면 성찰과 실천", examTraps:["주희와 동일시"], frequentStatements:["지행합일"], compareWith:["주희"], summary30:"도덕 원리를 마음에서 찾고 즉시 실천.", difficulty:4, symbol:"心", accent:"from-rose-300/20 to-pink-500/20", quoteLike:"마음이 곧 이치", trapPreview:"격물치지와 구별", confusionPair:"주희", ...reviewed },
  { id:"kant", name:"칸트", region:"서양", period:"근대", category:["의무론"], oneLine:"정언명령 중심 의무론", coreConcepts:["정언명령","자율","인간존엄"], viewOfHuman:"이성적 입법자", ethics:"보편화 가능성", keyStandard:"의무와 존엄", examTraps:["결과윤리와 혼동"], frequentStatements:["목적 그 자체"], compareWith:["벤담"], summary30:"동기와 의무를 도덕 판단의 기준으로 삼음.", difficulty:4, symbol:"★", accent:"from-yellow-300/20 to-amber-500/10", quoteLike:"의무에서 시작", trapPreview:"행복 계산과 구분", confusionPair:"벤담", ...reviewed },
  { id:"bentham", name:"벤담", region:"서양", period:"근대", category:["공리주의"], oneLine:"양적 공리주의", coreConcepts:["공리","쾌락계산","양적"], viewOfHuman:"쾌락 추구 존재", ethics:"총효용 극대화", politics:"입법 공리", keyStandard:"총행복", examTraps:["밀과 동일시"], frequentStatements:["최대 다수"], compareWith:["밀"], summary30:"결과의 총효용으로 옳고 그름 판단.", difficulty:3, symbol:"∑", accent:"from-lime-300/20 to-green-500/10", quoteLike:"행복의 합", trapPreview:"질적 공리주의와 구분", confusionPair:"밀", ...reviewed },
  { id:"mill", name:"밀", region:"서양", period:"근대", category:["자유주의"], oneLine:"질적 공리주의와 자유", coreConcepts:["해악금지","질적 공리","자유"], viewOfHuman:"개성 발전 가능", ethics:"질 높은 행복", politics:"자유권 보장", keyStandard:"자유와 효용의 균형", examTraps:["자유=방임 오해"], frequentStatements:["해악 원리"], compareWith:["벤담"], summary30:"자유를 통해 더 높은 행복을 추구.", difficulty:4, symbol:"↑", accent:"from-teal-300/20 to-cyan-500/10", quoteLike:"자유는 성장의 조건", trapPreview:"벤담과 차이", confusionPair:"벤담", ...reviewed },
  { id:"wonhyo", name:"원효", region:"한국", period:"통일신라", category:["불교"], oneLine:"화쟁으로 교리 대립을 통합", coreConcepts:["화쟁","일심","무애"], viewOfHuman:"깨달음 가능", ethics:"집착을 내려놓고 자비 실천", keyStandard:"대립의 조화", examTraps:["단순 절충으로 오해"], frequentStatements:["일심"], compareWith:["의천"], summary30:"다름을 하나의 진리 맥락에서 화해.", difficulty:3, symbol:"和", accent:"from-orange-300/20 to-rose-500/20", quoteLike:"다름 속의 하나", trapPreview:"교리 혼합주의와 구분", confusionPair:"주희", ...reviewed },
  { id:"yi_hwang", name:"이황", region:"한국", period:"조선", category:["성리학"], oneLine:"리 중심의 도덕 수양 강조", coreConcepts:["리기이원","사단칠정","경"], viewOfHuman:"리의 주재성 강조", ethics:"경을 통한 성찰", keyStandard:"리의 순수성", examTraps:["이이와 동일시"], frequentStatements:["사단은 리발"], compareWith:["이이"], summary30:"도덕 감정의 근거를 리 중심으로 파악.", difficulty:4, symbol:"理", accent:"from-violet-300/20 to-purple-500/20", quoteLike:"경으로 마음을 바로", trapPreview:"기발이승일도와 구분", confusionPair:"이이", ...reviewed },
  { id:"yi_i", name:"이이", region:"한국", period:"조선", category:["성리학"], oneLine:"리와 기의 현실적 통합 강조", coreConcepts:["기발이승일도","이기론","경세"], viewOfHuman:"기의 현실성 중시", ethics:"실천적 수양", politics:"경장론", keyStandard:"현실 적용", examTraps:["이황과 대립 과장"], frequentStatements:["기발이승일도"], compareWith:["이황"], summary30:"성리학을 현실 정치와 개혁에 연결.", difficulty:4, symbol:"氣", accent:"from-cyan-300/20 to-teal-500/20", quoteLike:"이와 기는 함께 작동", trapPreview:"사단칠정 해석 주의", confusionPair:"이황", ...reviewed },
  { id:"jeong_yakyong", name:"정약용", region:"한국", period:"조선 후기", category:["실학"], oneLine:"실사구시와 민생 개혁", coreConcepts:["실학","목민","경세치용"], viewOfHuman:"제도 개선으로 삶 개선", ethics:"백성 중심 책임윤리", politics:"개혁 행정", keyStandard:"민생 효과", examTraps:["공리주의와 혼동"], frequentStatements:["목민"], compareWith:["벤담"], summary30:"도덕을 제도와 행정의 실천으로 연결.", difficulty:3, symbol:"實", accent:"from-green-300/20 to-emerald-500/20", quoteLike:"백성의 삶을 기준", trapPreview:"성리학과 구분", confusionPair:"벤담", ...reviewed },
  { id:"zhuangzi", name:"장자", region:"동양", period:"전국", category:["도가"], oneLine:"상대주의적 관점과 소요유", coreConcepts:["소요유","제물","무위"], viewOfHuman:"고정 관념을 넘어설 수 있음", ethics:"분별 집착 완화", keyStandard:"자유로운 관점 전환", examTraps:["허무주의로 오해"], frequentStatements:["호접몽"], compareWith:["노자"], summary30:"고정된 분별을 넘어 자유를 추구.", difficulty:3, symbol:"逍", accent:"from-sky-300/20 to-blue-500/20", quoteLike:"분별을 비우는 자유", trapPreview:"현실부정으로 오해 금지", confusionPair:"노자", ...reviewed },
  { id:"hobbes", name:"홉스", region:"사회사상", period:"근대", category:["사회계약"], oneLine:"안전을 위한 강한 주권", coreConcepts:["자연상태","만인투쟁","주권"], viewOfHuman:"이기적이고 불안한 존재", ethics:"계약 준수", politics:"절대주권", keyStandard:"질서와 안전", examTraps:["자연권 보장 사상으로 오해"], frequentStatements:["리바이어던"], compareWith:["로크"], summary30:"안전 확보를 위해 권력 집중을 정당화.", difficulty:3, symbol:"국", accent:"from-rose-300/20 to-red-500/20", quoteLike:"질서가 먼저다", trapPreview:"자유주의와 구분", confusionPair:"로크", ...reviewed },
  { id:"locke", name:"로크", region:"사회사상", period:"근대", category:["자유주의"], oneLine:"자연권 보호를 위한 제한정부", coreConcepts:["자연권","저항권","재산권"], viewOfHuman:"이성적 권리주체", ethics:"권리 상호존중", politics:"입헌·제한정부", keyStandard:"권리 보호", examTraps:["홉스와 국가관 혼동"], frequentStatements:["저항권"], compareWith:["홉스"], summary30:"정부는 생명·자유·재산 보호 수단.", difficulty:3, symbol:"권", accent:"from-blue-300/20 to-indigo-500/20", quoteLike:"권리 보호가 정부 목적", trapPreview:"절대주권과 대비", confusionPair:"홉스", ...reviewed },
  { id:"rousseau", name:"루소", region:"사회사상", period:"근대", category:["사회계약"], oneLine:"일반의지와 시민적 자유", coreConcepts:["일반의지","직접참여","시민"], viewOfHuman:"본래 선하나 사회가 왜곡", ethics:"공공선 지향", politics:"인민주권", keyStandard:"공동의 일반의지", examTraps:["전체주의로 단정"], frequentStatements:["인간은 자유롭게 태어났다"], compareWith:["로크"], summary30:"개인 의지보다 공공의 일반의지 중시.", difficulty:4, symbol:"계", accent:"from-emerald-300/20 to-green-500/20", quoteLike:"자유와 공동선", trapPreview:"사적의지와 구분", confusionPair:"로크", ...reviewed },
  { id:"marx", name:"마르크스", region:"사회사상", period:"근대", category:["사회주의"], oneLine:"계급 구조 비판과 역사유물론", coreConcepts:["계급투쟁","소외","역사유물론"], viewOfHuman:"노동을 통해 자기실현", ethics:"착취 구조 비판", politics:"계급 없는 사회 지향", keyStandard:"생산관계의 정의", examTraps:["도덕론 부재로 단순화"], frequentStatements:["만국의 노동자여"], compareWith:["노직"], summary30:"자본주의 모순을 계급 분석으로 해명.", difficulty:4, symbol:"階", accent:"from-red-300/20 to-rose-500/20", quoteLike:"구조를 보라", trapPreview:"단순 평등론 아님", confusionPair:"노직", ...reviewed },
  { id:"rawls", name:"롤스", region:"사회사상", period:"현대", category:["정의론"], oneLine:"공정으로서의 정의", coreConcepts:["원초적 입장","무지의 장막","차등원리"], viewOfHuman:"합리적 협동 주체", ethics:"공정한 절차", politics:"자유·평등의 조화", keyStandard:"최소수혜자 개선", examTraps:["절대평등론으로 오해"], frequentStatements:["차등원리"], compareWith:["노직"], summary30:"불평등은 최소수혜자 이익일 때만 정당.", difficulty:5, symbol:"正", accent:"from-violet-300/20 to-indigo-500/20", quoteLike:"공정한 규칙", trapPreview:"결과평등과 구분", confusionPair:"노직", ...reviewed },
  { id:"nozick", name:"노직", region:"사회사상", period:"현대", category:["자유지상주의"], oneLine:"권리 우선의 최소국가", coreConcepts:["소유권","자격이론","최소국가"], viewOfHuman:"자기소유권 주체", ethics:"강제 재분배 비판", politics:"야경국가", keyStandard:"정당한 취득·이전", examTraps:["무정부주의로 오해"], frequentStatements:["패턴 정의 비판"], compareWith:["롤스"], summary30:"정의는 결과패턴이 아니라 취득 과정에 달림.", difficulty:5, symbol:"自", accent:"from-orange-300/20 to-amber-500/20", quoteLike:"권리는 침해될 수 없다", trapPreview:"롤스와 대비", confusionPair:"롤스", ...reviewed }
];

export const regionFilters: Array<Philosopher["region"] | "전체"> = ["전체", "동양", "서양", "한국", "사회사상"];
