import { colors } from "../../../../shared/colors/colors";
export const appearancesOptions = Object.keys(colors.sys.text);
export type AppearancesOptions = typeof appearancesOptions[number];
