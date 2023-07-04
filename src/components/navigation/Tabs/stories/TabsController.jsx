import React, { useState } from "react";
import { Tabs } from "../index";

const TabsController = (props) => {
  const { tabs, type, selectedTab } = props;
  const [selectedTabController, setSelectedTab] = useState(selectedTab);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <Tabs
      tabs={tabs}
      type={type}
      handleSelectedTab={handleSelectedTab}
      selectedTab={selectedTabController}
    />
  );
};

export { TabsController };
