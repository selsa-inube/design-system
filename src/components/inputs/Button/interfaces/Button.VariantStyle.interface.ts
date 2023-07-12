import { IColorPalette } from "./Button.ColorPalette.interface";

export interface IVariantStyle {
  normal: IColorPalette;
  hover: Partial<IColorPalette> | any;
}
