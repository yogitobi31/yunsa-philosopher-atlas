export type PhilosopherCategory = "동양 윤리" | "한국 윤리" | "서양 윤리" | "사회사상" | "현대 응용 윤리";

export type Philosopher = {
  id: string;
  name: string;
  category: PhilosopherCategory;
  tradition: string;
  era: string;
  oneLineSummary: string;
  coreFlow: string[];
  keyIdeas: string[];
  examPoint: string;
  trapPoint: string;
  compareWith: string[];
  keywords: string[];
  representativeClaim: string;
};

export const philosophers: Philosopher[] = [
  { id:"confucius",name:"공자",category:"동양 윤리",tradition:"유교",era:"춘추",oneLineSummary:"인간다운 마음을 예로 실천해 조화로운 사회를 세운다.",coreFlow:["인","예","군자","사회 질서"],keyIdeas:["인과 예의 통합","정명","수기치인"],examPoint:"공자는 인을 바탕으로 예를 실천하는 도덕적 인간을 강조한다.",trapPoint:"인을 사적 호감으로만 보거나 예를 형식 규칙으로만 이해하면 오답이다.",compareWith:["맹자","순자"],keywords:["인","예","정명","군자"],representativeClaim:"덕 있는 군자가 예를 실천할 때 공동체 질서가 바로 선다."},
  { id:"mencius",name:"맹자",category:"동양 윤리",tradition:"유교",era:"전국",oneLineSummary:"인간의 선한 본성을 확충하여 도덕적 삶과 왕도정치를 실현한다.",coreFlow:["성선설","사단","확충","왕도정치"],keyIdeas:["사단 확충","민본","의로운 정치"],examPoint:"맹자는 인간에게 선한 도덕 감정의 단서인 사단이 있다고 본다.",trapPoint:"사단과 사덕을 혼동하거나 순자의 성악설과 섞으면 오답이다.",compareWith:["공자","순자"],keywords:["성선설","사단","사덕","왕도정치"],representativeClaim:"선한 본성의 싹을 기르면 개인 수양과 정치가 함께 바로 선다."},
  { id:"xunzi",name:"순자",category:"동양 윤리",tradition:"유교",era:"전국",oneLineSummary:"악한 본성을 예와 교육으로 교화해야 한다고 본다.",coreFlow:["성악설","예","교육","교화"],keyIdeas:["화성기위","제도와 교육","욕망 조절"],examPoint:"순자는 인간의 욕망을 조절하기 위해 예와 제도의 필요성을 강조한다.",trapPoint:"성악설을 도덕 불가능론으로 이해하면 오답이다.",compareWith:["맹자","공자"],keywords:["성악설","예","화성기위","교화"],representativeClaim:"인간은 후천적 교육과 예를 통해 도덕적 존재가 될 수 있다."},
  { id:"laozi",name:"노자",category:"동양 윤리",tradition:"도가",era:"춘추",oneLineSummary:"인위적 지배보다 무위자연을 따라 조화로운 삶을 추구한다.",coreFlow:["도","무위","소박","자연"],keyIdeas:["무위자연","소국과민","인위 비판"],examPoint:"노자는 억지로 다스리는 통치보다 무위의 정치 원리를 중시한다.",trapPoint:"무위를 아무것도 하지 않는 태만으로 보면 오답이다.",compareWith:["공자","장자"],keywords:["도","무위자연","소국과민"],representativeClaim:"도에 순응할 때 인간과 사회의 과도한 갈등이 줄어든다."},
  { id:"zhuangzi",name:"장자",category:"동양 윤리",tradition:"도가",era:"전국",oneLineSummary:"분별과 집착을 넘어 자유로운 삶의 경지를 제시한다.",coreFlow:["제물","소요유","무위","자유"],keyIdeas:["제물론","소요유","상대주의적 성찰"],examPoint:"장자는 가치 분별의 절대화를 경계하며 정신적 자유를 강조한다.",trapPoint:"모든 가치 판단을 부정하는 허무주의로 단정하면 오답이다.",compareWith:["노자","묵자"],keywords:["제물론","소요유","무위"],representativeClaim:"고정된 분별을 내려놓을 때 참된 자유에 가까워진다."},
  { id:"mozi",name:"묵자",category:"동양 윤리",tradition:"묵가",era:"전국",oneLineSummary:"차별 없는 사랑과 실용적 기준으로 사회 혼란을 줄이고자 한다.",coreFlow:["겸애","교리","절용","상현"],keyIdeas:["겸애","비공","실용주의"],examPoint:"묵자는 유교의 친소 차등 사랑을 비판하고 겸애를 제시했다.",trapPoint:"겸애를 가족 윤리의 완전 부정으로 보면 오답이다.",compareWith:["공자","맹자"],keywords:["겸애","비공","절용"],representativeClaim:"공평한 사랑과 실용적 질서가 백성의 삶을 안정시킨다."},
  { id:"zhu-xi",name:"주희",category:"동양 윤리",tradition:"성리학",era:"남송",oneLineSummary:"리 중심 수양과 격물치지로 도덕 원리를 탐구한다.",coreFlow:["리","기","격물치지","거경"],keyIdeas:["성즉리","격물치지","거경궁리"],examPoint:"주희는 사물의 이치를 탐구해 도덕 인식을 확장해야 한다고 본다.",trapPoint:"왕수인의 치양지와 동일시하면 오답이다.",compareWith:["왕수인","이황"],keywords:["성리학","리","격물치지"],representativeClaim:"도덕 원리는 리에 있으며 학문과 수양으로 이를 밝혀야 한다."},
  { id:"wang-yangming",name:"왕수인",category:"동양 윤리",tradition:"양명학",era:"명",oneLineSummary:"마음의 양지를 자각하고 즉시 실천하는 지행합일을 강조한다.",coreFlow:["심즉리","치양지","지행합일"],keyIdeas:["심즉리","치양지","지행합일"],examPoint:"왕수인은 도덕 지식과 실천의 분리를 비판한다.",trapPoint:"주희처럼 외재적 탐구만 중시한다고 이해하면 오답이다.",compareWith:["주희","이이"],keywords:["심즉리","치양지","지행합일"],representativeClaim:"참된 앎은 실천으로 이어질 때 완성된다."}
];

export const regionFilters = ["전체","동양 윤리","한국 윤리","서양 윤리","사회사상","현대 응용 윤리"] as const;
