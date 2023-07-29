import { Size, States } from "../props";
import { ISelectOptions } from "./Select.Options.interface";

export interface ISelectProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  value?: string | number;
  isRequired?: boolean;
  state?: States;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  isFullWidth?: boolean;
  options: ISelectOptions[];
  handleChange?: (event: MouseEvent) => void;
  handleFocus?: (event: FocusEvent) => void;
  handleBlur?: (event: FocusEvent) => void;
  handleClick?: (event: MouseEvent) => void;
}
