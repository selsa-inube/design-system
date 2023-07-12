import { IBorderColorVariant } from "./Button.BorderColorVariant.interface";
import { IVariantStyle } from "./Button.VariantStyle.interface";

export interface IBorderColors {
  filled: IVariantStyle | string;
  outlined: IVariantStyle | IBorderColorVariant;
  none: IVariantStyle | string;
}
