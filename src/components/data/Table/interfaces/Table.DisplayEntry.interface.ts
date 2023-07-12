import { IAction } from "./Table.Action.interface";
import { IEntry } from "./Table.Entry.interface";
import { ITitle } from "./Table.Title.interface";

export interface IDisplayEntryProps {
  portalId: string;
  entry: IEntry;
  actions: IAction[];
  title: string;
  titleLabels: ITitle[];
  infoTitle?: string;
  actionsTitle?: string;
}
