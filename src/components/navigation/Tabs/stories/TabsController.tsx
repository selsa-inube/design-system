import { useState } from "react";
import { Tabs, ITabsProps } from "..";

const TabsController = (props: ITabsProps) => {
  const { tabs, type, selectedTab } = props;
  const [selectedTabController, setSelectedTab] = useState(selectedTab);

  const onSelectTab = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <Tabs
      tabs={tabs}
      type={type}
      onSelectTab={onSelectTab}
      selectedTab={selectedTabController}
    />
  );
};

export { TabsController };
