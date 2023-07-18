import { Tabs } from "../index";
import { ITabsProps } from "../interfaces/Tabs.interface";
import { TabsController } from "./TabsController";

import {
  parameters,
  tabs,
  selectedTab,
  handleSelectedTab,
  type,
} from "./props";

const story = {
  title: "navigation/Tabs/Default",
  components: [Tabs],
  parameters,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
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
Default.argTypes = {
  tabs,
  selectedTab,
  handleSelectedTab,
  type,
};

export default story;
