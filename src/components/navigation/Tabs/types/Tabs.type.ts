export const types = ["select", "tabs"] as const;

export type Types = typeof types[number];
