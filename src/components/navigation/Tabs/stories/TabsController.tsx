import { useState } from "react";
import { Tabs, ITabsProps } from "..";

const TabsController = (props: ITabsProps) => {
  const { tabs, type, selectedTab } = props;
  const [selectedTabController, setSelectedTab] = useState(selectedTab);

  const handleSelectedTab = (tabId: string) => {
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
