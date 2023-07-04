export const wrapControls = ["wrap", "nowrap"] as const;

export type WrapControl = typeof wrapControls[number];
