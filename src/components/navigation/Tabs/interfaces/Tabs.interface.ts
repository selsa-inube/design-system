import { TabType } from "../types/Tabs.type";
import { ITabsItem } from "./Tabs.Item.interface";

export interface ITabsProps {
  tabs: ITabsItem[];
  type?: TabType;
  handleSelectedTab: (id: string) => void;
  selectedTab: string;
}
