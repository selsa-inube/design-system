export const flexAlignments = [
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-evenly",
  "space-between",
] as const;

export type FlexAlignment = typeof flexAlignments[number];
