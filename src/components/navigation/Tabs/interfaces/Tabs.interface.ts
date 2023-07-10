import { Types } from "../types/Tabs.type";
import { ITabsItem } from "./Tabs.Item.interface";

export interface ITabsProps {
  tabs: ITabsItem[];
  type?: Types;
  handleSelectedTab: (id: string) => void;
  selectedTab: string;
}
