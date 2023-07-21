export const shapes = ["circle", "rectangle"] as const;
export type Shape = typeof shapes[number];
