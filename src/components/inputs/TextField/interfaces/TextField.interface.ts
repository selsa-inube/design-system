import { InputType } from "../types/TextField.InputType.type";
import { Size } from "../types/TextField.Size.type";
import { State } from "../types/TextField.State.type";

export interface ITextFieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  isDisabled?: boolean;
  type?: InputType;
  value?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  isRequired: boolean;
  state?: State;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  isFullWidth?: boolean;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  isFocused?: boolean;
}
