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
};

export const philosophers: Philosopher[] = [
  { id:"confucius", name:"공자", region:"동양", period:"춘추 시대", category:["유가"], oneLine:"예(禮)로 관계를 바로 세워 인(仁)을 실현하는 사상가", coreConcepts:["인", "예", "정명", "군자"], viewOfHuman:"인간은 관계 속에서 도덕적 성숙을 이룰 수 있는 존재다.", ethics:"수기치인: 자신을 닦아 타인과 사회를 조화롭게 이끈다.", politics:"덕치와 정명으로 질서를 회복한다.", keyStandard:"관계적 조화와 역할의 적절성", examTraps:["인을 감정적 사랑으로만 축소", "예를 형식주의로 오해"], frequentStatements:["군자는 의에 밝고 소인은 이익에 밝다.", "이름이 바르지 않으면 말이 순조롭지 않다."], compareWith:["맹자","순자","아리스토텔레스"], summary30:"공자는 인간다움을 뜻하는 인을 예라는 사회적 실천으로 구체화했다.", difficulty:2 },
  { id:"mencius", name:"맹자", region:"동양", period:"전국 시대", category:["유가"], oneLine:"성선설과 민본으로 왕도정치를 정당화한 철학자", coreConcepts:["성선설", "사단", "왕도정치"], viewOfHuman:"인간은 선한 싹(사단)을 타고난다.", ethics:"선한 본성을 확충하는 수양이 핵심이다.", politics:"백성을 근본으로 하는 왕도 정치", keyStandard:"본성의 선함을 얼마나 확충했는가", examTraps:["성선설=이미 완성된 선으로 오해", "의를 이익과 대립만 하는 개념으로 단순화"], frequentStatements:["측은지심은 인의 단서이다.", "백성이 귀하고 사직이 그 다음이며 군주는 가볍다."], compareWith:["순자","공자","칸트"], summary30:"맹자는 인간에게 선의 단서가 내재한다고 보고 교육과 정치가 이를 키워야 한다고 봤다.", difficulty:3 },
  { id:"xunzi", name:"순자", region:"동양", period:"전국 시대", category:["유가"], oneLine:"성악설을 바탕으로 예와 교육의 필요를 강조한 사상가", coreConcepts:["성악설", "화성기위", "예치"], viewOfHuman:"인간의 자연적 욕망은 방치하면 혼란으로 기운다.", ethics:"후천적 학습과 규범 훈련으로 선을 만든다.", politics:"예법 중심의 질서 확립", keyStandard:"욕망의 절제와 규범의 내면화", examTraps:["성악설=인간 혐오로 해석", "유가가 아니라 법가로 오인"], frequentStatements:["사람의 본성은 악하고 선은 인위이다.", "예는 욕망을 절도 있게 조절한다."], compareWith:["맹자","공자","벤담"], summary30:"순자는 인간의 본성을 낙관하지 않고 사회 제도와 교육을 통해 도덕을 형성한다고 본다.", difficulty:3 },
  { id:"laozi", name:"노자", region:"동양", period:"춘추 말기", category:["도가"], oneLine:"무위자연으로 인위적 통제를 비판한 사상가", coreConcepts:["도", "무위", "자연", "소박"], viewOfHuman:"인간은 본래 자연의 흐름 속에서 조화를 이룰 수 있다.", ethics:"억지 개입을 줄이고 욕망을 비워 자연에 따른다.", politics:"작은 정부와 비간섭 통치", keyStandard:"인위의 최소화와 자연스러움", examTraps:["무위를 아무것도 안 함으로 오해", "도덕 부정 사상으로 단순화"], frequentStatements:["무위이무불위", "큰 나라는 작은 생선을 굽듯 다스린다."], compareWith:["공자","왕수인","밀"], summary30:"노자는 강한 규범과 권력이 오히려 왜곡을 낳는다고 보고 자연의 질서를 회복하려 했다.", difficulty:3 },
  { id:"zhu-xi", name:"주희", region:"동양", period:"남송", category:["성리학"], oneLine:"리와 기의 체계를 통해 도덕 수양론을 정교화한 성리학자", coreConcepts:["리기론", "격물치지", "존천리거인욕"], viewOfHuman:"본연지성은 선하나 기질의 탁함이 이를 가린다.", ethics:"사물의 이치를 탐구해 도덕 판단을 맑게 한다.", politics:"수양된 선비의 공적 책임 강조", keyStandard:"천리를 따르는가, 인욕에 끌리는가", examTraps:["격물치지를 과학 실험으로 해석", "리를 초월적 실체로만 고정"], frequentStatements:["사물에 나아가 이치를 궁구한다.", "천리를 보존하고 인욕을 제거한다."], compareWith:["왕수인","맹자","칸트"], summary30:"주희는 도덕의 근거를 우주 질서인 리와 연결하며 학문적 수양을 체계화했다.", difficulty:4 },
  { id:"wang-yangming", name:"왕수인", region:"동양", period:"명", category:["양명학"], oneLine:"마음의 자각과 실천의 즉시성을 강조한 철학자", coreConcepts:["심즉리", "치양지", "지행합일"], viewOfHuman:"도덕 원리는 마음 안에 이미 갖추어져 있다.", ethics:"참된 앎은 곧 행동으로 이어져야 한다.", politics:"현장 실천 중심의 도덕 정치", keyStandard:"양지를 실제 행위로 드러내는가", examTraps:["심즉리를 주관주의로 오해", "지행합일을 행동주의로 축소"], frequentStatements:["마음이 곧 이치다.", "앎과 행위는 본래 하나다."], compareWith:["주희","노자","소크라테스"], summary30:"왕수인은 외부 탐구보다 내면의 도덕 직관과 실천의 결합을 강조했다.", difficulty:4 },
  { id:"socrates", name:"소크라테스", region:"서양", period:"고대 그리스", category:["덕 윤리"], oneLine:"대화를 통해 무지를 자각시키고 덕의 앎을 추구한 철학자", coreConcepts:["산파술", "지덕합일", "무지의 자각"], viewOfHuman:"인간은 성찰을 통해 더 나은 삶의 기준을 발견할 수 있다.", ethics:"악행은 무지에서 비롯되며 참된 앎은 선한 행위를 낳는다.", keyStandard:"성찰된 앎의 진정성", examTraps:["지덕합일=지식만 있으면 자동 선행", "상대주의자로 오해"], frequentStatements:["너 자신을 알라.", "검토되지 않은 삶은 살 가치가 없다."], compareWith:["플라톤","왕수인","칸트"], summary30:"소크라테스는 도덕을 외적 규칙보다 내적 성찰의 문제로 전환했다.", difficulty:3 },
  { id:"plato", name:"플라톤", region:"서양", period:"고대 그리스", category:["이데아론"], oneLine:"이데아와 정의로운 국가론을 제시한 철학자", coreConcepts:["이데아", "영혼 삼분", "철인정치"], viewOfHuman:"영혼은 이성·기개·욕망의 조화를 이뤄야 정의롭다.", ethics:"이성이 욕망을 통제해 선의 이데아를 지향한다.", politics:"철학자가 통치해야 정의가 실현된다.", keyStandard:"영혼과 국가의 조화로운 질서", examTraps:["이데아를 단순한 관념으로 이해", "철인정치를 독재 옹호로 단순화"], frequentStatements:["정의는 각자가 제 일을 하는 것이다.", "선의 이데아가 인식의 최고 기준이다."], compareWith:["아리스토텔레스","소크라테스","공자"], summary30:"플라톤은 개인 윤리와 정치 질서를 동일한 구조로 보고 정의의 원리를 설계했다.", difficulty:4 },
  { id:"aristotle", name:"아리스토텔레스", region:"서양", period:"고대 그리스", category:["덕 윤리"], oneLine:"행복과 중용의 덕 윤리를 체계화한 철학자", coreConcepts:["에우다이모니아", "중용", "실천적 지혜"], viewOfHuman:"인간은 이성적 활동을 통해 탁월성을 완성하는 존재다.", ethics:"덕은 습관과 실천을 통해 형성된다.", politics:"폴리스 안에서 시민적 덕이 완성된다.", keyStandard:"상황에 맞는 중용과 실천적 지혜", examTraps:["중용=평균주의", "행복=쾌락 극대화로 오해"], frequentStatements:["덕은 과도와 결핍 사이의 중용이다.", "인간의 목적은 영혼의 탁월한 활동이다."], compareWith:["플라톤","공자","밀"], summary30:"아리스토텔레스는 좋은 삶을 결과보다 성품과 실천의 관점에서 설명했다.", difficulty:3 },
  { id:"kant", name:"칸트", region:"서양", period:"근대", category:["의무론"], oneLine:"보편적 도덕 법칙과 자율을 강조한 의무론자", coreConcepts:["정언명령", "선의지", "자율"], viewOfHuman:"인간은 이성적 입법자로서 존엄을 지닌다.", ethics:"결과가 아니라 행위의 동기와 보편화 가능성이 핵심이다.", politics:"인간을 수단이 아닌 목적으로 대우하는 공적 질서", keyStandard:"보편화 가능성과 인간 존엄 존중", examTraps:["의무론=감정 배제 기계윤리", "정언명령을 규칙 암기로만 학습"], frequentStatements:["네 행위 준칙이 보편적 법칙이 되도록 행위하라.", "인간을 언제나 목적으로 대하라."], compareWith:["벤담","맹자","주희"], summary30:"칸트는 도덕을 결과 계산이 아닌 이성의 자율적 법칙에 두었다.", difficulty:4 },
  { id:"bentham", name:"벤담", region:"서양", period:"근대", category:["공리주의"], oneLine:"최대 다수의 최대 행복을 기준으로 제도를 설계한 사상가", coreConcepts:["공리의 원리", "쾌락 계산", "양적 공리주의"], viewOfHuman:"인간은 쾌락을 추구하고 고통을 피하려는 존재다.", ethics:"행위의 옳고 그름은 총효용 증대 여부로 판단한다.", politics:"법·제도는 사회 전체 효용을 극대화해야 한다.", keyStandard:"총쾌락과 총고통의 순증가", examTraps:["공리주의=개인 권리 무시로만 단정", "쾌락의 질적 차이 부정 맥락 누락"], frequentStatements:["자연은 인간을 쾌락과 고통의 지배 아래 두었다.", "최대 다수의 최대 행복"], compareWith:["밀","칸트","순자"], summary30:"벤담은 도덕과 정책을 결과 중심의 효용 계산으로 통합하려 했다.", difficulty:3 },
  { id:"mill", name:"밀", region:"서양", period:"근대", category:["자유주의", "공리주의"], oneLine:"자유의 원리와 질적 공리주의를 결합한 철학자", coreConcepts:["해악 금지 원리", "질적 공리주의", "자유"], viewOfHuman:"인간은 개성의 발전을 통해 더 높은 행복에 도달한다.", ethics:"행복의 양뿐 아니라 질을 고려해야 한다.", politics:"타인에게 해를 끼치지 않는 한 개인 자유를 보장해야 한다.", keyStandard:"자유 보장과 장기적 행복 증진의 균형", examTraps:["자유를 무제한 방임으로 오해", "벤담과 동일한 양적 공리주의로 혼동"], frequentStatements:["해를 끼치지 않는 한 자유는 보장되어야 한다.", "만족한 돼지보다 불만족한 인간이 낫다."], compareWith:["벤담","아리스토텔레스","노자"], summary30:"밀은 효용의 틀을 유지하면서도 자유와 인격 발전의 가치를 강화했다.", difficulty:4 },
];

export const regionFilters: Array<Philosopher["region"] | "전체"> = ["전체", "동양", "서양", "한국", "사회사상"];
