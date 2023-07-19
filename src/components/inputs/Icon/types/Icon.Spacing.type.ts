export const spacings = ["none", "compact", "wide"] as const;
export type Spacing = typeof spacings[number];
