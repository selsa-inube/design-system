export const sizes = ["large", "medium", "small"] as const;

export type Size = typeof sizes[number];
