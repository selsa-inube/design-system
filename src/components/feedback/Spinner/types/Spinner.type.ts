export const sizes = ["large", "medium", "small"] as const;
export const appearances = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
] as const;

export type SizeSoinner = typeof sizes[number];
export type AppearanceSpinner = typeof appearances[number];
