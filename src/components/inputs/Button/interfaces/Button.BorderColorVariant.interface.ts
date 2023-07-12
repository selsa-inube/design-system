import { IActions } from "./Button.Actions.interface";

export interface IBorderColorVariant {
  normal: Partial<IActions> | any;
  hover: Partial<IActions> | any;
}
