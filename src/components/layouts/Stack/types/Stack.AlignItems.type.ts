export const alignItemsProperties = [
  "baseline",
  "normal",
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "self-start",
  "self-end",
  "initial",
  "revert",
  "unset",
  "start",
  "end",
] as const;

export type AlignItem = typeof alignItemsProperties[number];
