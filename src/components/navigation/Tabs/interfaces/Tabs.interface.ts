import { Types } from "../types/Tabs.type";
import { ITabItem } from "./Tabs.Item.interface";

export interface ITabsProps {
  tabs: ITabItem[];
  type?: Types;
  handleSelectedTab: (id: string) => void;
  selectedTab: string;
}
