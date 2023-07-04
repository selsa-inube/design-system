import { AlignOptions } from "../types/Text.AlignOptions.type";
import { AppearancesOptions } from "../types/Text.AppearancesOptions.type";
import { HtmlElements } from "../types/Text.HtmlElements.type";
import { TyposOptions } from "../types/Text.TyposOptions.type";

export interface ITextProps {
  children?: React.ReactNode;
  align?: AlignOptions;
  margin?: string;
  padding?: string;
  as?: HtmlElements;
  id?: string;
  appearance?: AppearancesOptions;
  typo?: TyposOptions;
}
