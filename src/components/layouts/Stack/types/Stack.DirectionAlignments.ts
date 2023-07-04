export const directionAlignments = ["row", "column"] as const;

export type DirectionAlignment = typeof directionAlignments[number];
