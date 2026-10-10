export type ExpertiseItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  research: string;
  solution: string;
  impact: string;
  status: string;
  featured: boolean;
};

export type ResearchArea = {
  title: string;
  description: string;
};

export type TrainingItem = {
  title: string;
  audience: string;
  description: string;
};

export type PublicationItem = {
  type: string;
  title: string;
  summary: string;
  status: string;
};

export type SpeakingItem = {
  type: string;
  title: string;
  summary: string;
};

export type InsightItem = {
  category: string;
  title: string;
  summary: string;
};
