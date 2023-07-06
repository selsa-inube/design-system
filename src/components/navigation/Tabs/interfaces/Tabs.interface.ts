import { TabType } from "../types/Tab.types";
import { ITabItem } from "./Tabs.Item.interface";

export interface ITabsProps {
  tabs: ITabItem[];
  type?: TabType;
  handleSelectedTab: (id: string) => void;
  selectedTab: string;
}
