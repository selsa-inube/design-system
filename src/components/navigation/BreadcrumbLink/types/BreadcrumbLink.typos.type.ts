export const typos = ["large", "medium", "small"] as const;
export type Typos = typeof typos[number];
