import { Inube } from "@src/shared/tokens";

export const typosOptions = Object.keys(Inube.typography);
export type TyposOptions = typeof typosOptions[number];
