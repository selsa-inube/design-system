export const appearances = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
] as const;

export type Appearance = typeof appearances[number];
