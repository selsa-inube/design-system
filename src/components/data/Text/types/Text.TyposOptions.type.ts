import { typography } from "../../../../shared/typography/typography";
export const typosOptions = Object.keys(typography.sys.typescale);
export type TyposOptions = typeof typosOptions[number];
