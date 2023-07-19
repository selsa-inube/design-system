import { inube } from "@src/shared/tokens";

export const appearances = Object.keys([
  inube.color.text,
  inube.color.surface,
  inube.color.surface,
]);
export type Appearance = typeof appearances[number];
