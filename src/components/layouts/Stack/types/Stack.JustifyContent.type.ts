export const justifyContentProperties = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "left",
  "right",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;

export type JustifyContent = typeof justifyContentProperties[number];
