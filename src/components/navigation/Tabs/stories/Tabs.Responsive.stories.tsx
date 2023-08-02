import { Tabs, ITabsProps } from "..";
import { TabsResponsiveController } from "./TabsResponsiveController";

import { props } from "../props";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  argTypes: props,
};

export const Responsive = (args: ITabsProps) => (
  <TabsResponsiveController {...args} />
);
Responsive.args = {
  tabs: [
    {
      id: "generalInformation",
      isDisabled: false,
      label: "General Information",
    },
    { id: "branches", isDisabled: false, label: "Branches" },
    { id: "projects", isDisabled: false, label: "Projects" },
    { id: "events", isDisabled: false, label: "Events" },
    { id: "aidBudget", isDisabled: false, label: "Aid budget units" },
    { id: "payroll", isDisabled: false, label: "Payroll" },
  ],
  selectedTab: "generalInformation",
};

export default story;
