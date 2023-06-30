import { AlignOptions } from "../types/AlignOptions.type";
import { AppearancesOptions } from "../types/AppearancesOptions.type";
import { HtmlElements } from "../types/HtmlElements.type";
import { TyposOptions } from "../types/TyposOptions.type";

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
