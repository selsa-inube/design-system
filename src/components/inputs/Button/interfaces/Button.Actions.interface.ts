import { IActionStyle } from "./Button.ActionStyle.interface";

export interface IActions {
  primary: IActionStyle;
  secondary: IActionStyle;
  confirm: IActionStyle;
  warning: IActionStyle;
  remove: IActionStyle;
  help: IActionStyle;
  disabled: IActionStyle;
}
