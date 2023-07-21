import type { ComponentPropsWithRef } from "react";
import { AlignOptions } from "../types/Text.AlignOptions.type";
import { AppearancesOptions } from "../types/Text.AppearancesOptions.type";
import { HtmlElements } from "../types/Text.HtmlElements.type";
import { SizesOptions } from "../types/Text.Size.type";
import { TyposOptions } from "../types/Text.TyposOptions.type";

export interface ITextProps extends ComponentPropsWithRef<"p"> {
  children?: React.ReactNode;
  textAlign?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  appearance?: AppearancesOptions;
  isDisabled?: boolean;
  type?: TyposOptions;
  size?: SizesOptions;
  cursorHover?: boolean;
  parentHover?: boolean;
  ellipsis?: boolean;
}
