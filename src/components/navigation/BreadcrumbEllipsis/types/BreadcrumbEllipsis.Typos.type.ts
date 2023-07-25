export const sizes = ["large", "small"] as const;
export type Typos = typeof sizes[number];
