export const shapes = ["circle", "square"] as const;
export type Shape = typeof shapes[number];
