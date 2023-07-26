export const sizes = ["large", "medium", "small"] as const;

export type SizesOptions = typeof sizes[number];
