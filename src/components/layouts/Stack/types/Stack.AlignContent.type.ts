export const alignContent = [
  "baseline",
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;

export type AlignContent = typeof alignContent[number];
