export const typos = ["labelLarge", "labelMedium", "labelSmall"] as const;

export type TypographyLabel = typeof typos[number];
