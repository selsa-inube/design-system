import { State } from "../props";

export interface IMessageProps {
  state?: State;
  isDisabled?: boolean;
  errorMessage?: string;
  validMessage?: string;
}
