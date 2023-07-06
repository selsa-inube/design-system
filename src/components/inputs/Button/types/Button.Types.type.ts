export const types = ["button", "submit", "reset", "link"] as const;
export type Type = typeof types[number];
