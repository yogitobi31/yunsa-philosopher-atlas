export type ThoughtGroup = "동양 윤리" | "서양 윤리" | "한국 윤리" | "사회사상";

export type ThoughtNode = {
  id: string;
  name: string;
  group: ThoughtGroup;
  period: string;
  symbol: string;
  shortIdea: string;
  x: number;
  y: number;
};

export type ThoughtEdge = {
  id: string;
  from: string;
  to: string;
  relation: string;
  explanation: string;
  examPoint: string;
};
