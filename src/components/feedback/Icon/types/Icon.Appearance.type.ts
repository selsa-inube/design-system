import { inube } from "@src/shared/tokens";

export const appearances = Object.keys(inube.color.text);
export type Appearance = typeof appearances[number];
