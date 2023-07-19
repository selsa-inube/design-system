import { AlignOptions } from "../types/Text.AlignOptions.type";
import { AppearancesOptions } from "../types/Text.AppearancesOptions.type";
import { HtmlElements } from "../types/Text.HtmlElements.type";
import { TyposOptions } from "../types/Text.TyposOptions.type";

export interface ITextProps {
  children?: React.ReactNode;
  textAlign?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  appearance?: AppearancesOptions;
  typo?: TyposOptions;
}
