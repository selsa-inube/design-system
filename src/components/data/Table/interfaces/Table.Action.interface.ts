import { ReactNode } from "react";

export interface IAction {
  id: string;
  actionName: string;
  content?: () => ReactNode;
  type: string;
}
