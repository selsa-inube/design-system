export const typos = ["labelLarge", "labelMedium", "labelSmall"] as const;

export type TypographyLabel = typeof typos[number];

export interface LabelProps {
  isDisabled?: boolean;
  isFocused?: boolean;
  htmlFor: string;
  isInvalid?: boolean;
  typo?: TypographyLabel;
  children: React.ReactNode;
}
