export const directionAlignments = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;

export type DirectionAlignment = typeof directionAlignments[number];
