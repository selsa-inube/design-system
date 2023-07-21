import { Inube } from "@src/shared/tokens";

export const appearancesOptions = Object.keys(Inube.Color.Text);
export type AppearancesOptions = typeof appearancesOptions[number];
