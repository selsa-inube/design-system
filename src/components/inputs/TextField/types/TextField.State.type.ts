export const states = ["valid", "invalid", "pending"] as const;

export type State = typeof states[number];
