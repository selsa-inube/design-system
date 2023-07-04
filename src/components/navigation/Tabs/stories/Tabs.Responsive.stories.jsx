import React from "react";
import { Tabs } from "../index";
import { TabsResponsiveController } from "./TabsResponsiveController";

import { tabs, selectedTab, handleSelectedTab } from "./props";

const story = {
  title: "navigation/Tabs/Responsive",
  components: [Tabs],
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const Responsive = (args) => <TabsResponsiveController {...args} />;
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
Responsive.argTypes = {
  tabs,
  selectedTab,
  handleSelectedTab,
};

export default story;
