export const appearances = [
  "primary",
  "secondary",
  "confirm",
  "warning",
  "remove",
  "help",
] as const;
export type Appearance = typeof appearances[number];
