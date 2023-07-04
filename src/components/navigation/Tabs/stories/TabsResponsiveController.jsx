import React, { useState, useEffect } from "react";
import { Tabs } from "../index";

const TabsResponsiveController = ({ tabs, selectedTab }) => {
  const [selectedTabController, setSelectedTab] = useState(selectedTab);
  const [type, setType] = useState("tab");

  const updateTabType = () => {
    const windowWidth = window.innerWidth;

    const maxTabsForSmallScreen = 2;
    const maxTabsForMediumScreen = 6;

    if (windowWidth < 578 && tabs.length > maxTabsForSmallScreen) {
      setType("select");
    } else if (windowWidth < 768 && tabs.length > maxTabsForMediumScreen) {
      setType("select");
    } else {
      setType("tab");
    }
  };

  useEffect(() => {
    updateTabType();
    window.addEventListener("resize", updateTabType);

    return () => {
      window.removeEventListener("resize", updateTabType);
    };
  }, [tabs]);

  return (
    <div id="tabs-container">
      <Tabs
        tabs={tabs}
        type={type}
        handleSelectedTab={setSelectedTab}
        selectedTab={selectedTabController}
      />
    </div>
  );
};

export { TabsResponsiveController };
