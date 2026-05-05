export type IssueTopic = {
  id: string;
  title: string;
  question: string;
  shortInsight: string;
  relatedPhilosophers: string[];
  keyContrast: string;
  examPoint: string;
  commonTrap: string;
  conceptAxis: {
    leftLabel: string;
    rightLabel: string;
    positions: {
      philosopherId: string;
      label: string;
      description: string;
      position: number;
    }[];
  };
  comparePairs: {
    a: string;
    b: string;
    oneLineDifference: string;
    examTrap: string;
  }[];
};
