import { IActions } from "./Button.Actions.interface";

export interface IBackgroundColorVariant {
  normal: Partial<IActions> | any;
  hover: Partial<IActions> | any;
}
