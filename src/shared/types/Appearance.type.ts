import { inube } from "@src/shared/tokens";

export const appearances = typeof inube.color.text;
export type Appearance = keyof typeof appearances;
