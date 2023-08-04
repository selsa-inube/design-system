import { Tabs, ITabsProps } from "..";
import { TabsController } from "./TabsController";

import { props, parameters } from "../props";

const story = {
  title: "navigation/Tabs",
  components: [Tabs],
  parameters,
  argTypes: props,
};

export const Default = (args: ITabsProps) => <TabsController {...args} />;
Default.args = {
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
  type: "tabs",
};

export default story;
