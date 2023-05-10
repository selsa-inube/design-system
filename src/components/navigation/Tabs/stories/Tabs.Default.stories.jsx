import React from "react";
import { Tabs } from "../index";
import { TabsController } from "./TabsController";

import { tabs, selectedTab, handleSelectedTab } from "./props";

const story = {
  title: "navigation/Tabs/Default",
  components: [Tabs],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <TabsController {...args} />;
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
};
Default.argTypes = {
  tabs,
  selectedTab,
  handleSelectedTab,
};

export default story;
