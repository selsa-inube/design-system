import type { ComponentPropsWithRef } from "react";
import {
  AlignOptions,
  HtmlElements,
  AppearancesOptions,
  TyposOptions,
  SizesOptions,
} from "../props";

export interface ITextProps extends ComponentPropsWithRef<"p"> {
  children?: React.ReactNode;
  textAlign?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  appearance: AppearancesOptions;
  isDisabled?: boolean;
  type: TyposOptions;
  size: SizesOptions;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}
