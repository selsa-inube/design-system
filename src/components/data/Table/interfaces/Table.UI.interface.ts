import { IAction } from "./Table.Action.interface";
import { IBreakpoint } from "./Table.Breakpoint.interface";
import { IEntry } from "./Table.Entry.interface";
import { ITitle } from "./Table.Title.interface";

export interface ITableUIProps {
  portalId: string;
  titles: ITitle[];
  actions: IAction[];
  entries: IEntry[];
  breakpoints: IBreakpoint[];
  modalTitle: string;
  infoTitle: string;
  actionsTitle: string;
}
