import { State } from "../types/TextField.State.type";

export interface IMessageProps {
  state?: State;
  isDisabled?: boolean;
  errorMessage?: string;
  validMessage?: string;
}
