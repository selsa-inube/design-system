import { IAction } from "./Table.Action.interface";
import { IEntry } from "./Table.Entry.interface";

export interface IDisplayEntryProps {
  portalId: string;
  entry: IEntry;
  actions: IAction[];
  title: string;
  titleLabels: Array<string>;
  infoTitle?: string;
  actionsTitle?: string;
}
