import { Size } from "../props";

export interface ISwitchProps {
  isDisabled?: boolean;
  id: string;
  name?: string;
  value?: string;
  size?: Size;
  checked?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  margin: string;
  padding: string;
  disabled?: boolean;
}
