export const sizes = ["wide", "compact"] as const;

export type Size = typeof sizes[number];
