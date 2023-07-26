export const wrapControls = [
  "wrap",
  "nowrap",
  "wrap-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;

export type WrapControl = typeof wrapControls[number];
