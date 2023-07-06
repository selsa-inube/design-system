export const variants = ["filled", "outlined", "none"] as const;
export type Variant = typeof variants[number];
