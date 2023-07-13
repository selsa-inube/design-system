export const states = ["valid", "invalid", "pending"] as const;

export type States = typeof states[number];
