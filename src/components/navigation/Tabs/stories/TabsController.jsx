import React, { useState } from "react";
import { Tabs } from "../index";

const TabsController = (props) => {
  const { tabs, selectedTab } = props;
  const [selectedTabController, setSelectedTab] = useState(selectedTab);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <Tabs
      tabs={tabs}
      handleSelectedTab={handleSelectedTab}
      selectedTab={selectedTabController}
    />
  );
};

export { TabsController };
