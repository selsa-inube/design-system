import React, { useState, useEffect } from "react";
import { Tabs } from "../index";
import { useMediaQueries } from "./../../../../hooks/useMediaQueries";

const TabsResponsiveController = ({ tabs, selectedTab }) => {
  const [selectedTabController, setSelectedTab] = useState(selectedTab);
  const [type, setType] = useState("select");

  const mediaQueries = useMediaQueries([
    "(min-width: 320px) and (max-width: 768px)",
    "(min-width: 769px)",
  ]);

  useEffect(() => {
    if (mediaQueries["(min-width: 320px) and (max-width: 768px)"]) {
      setType("select");
    } else if (mediaQueries["(min-width: 769px)"]) {
      setType("tab");
    }
  }, [mediaQueries]);

  return (
    <Tabs
      tabs={tabs}
      type={type}
      handleSelectedTab={setSelectedTab}
      selectedTab={selectedTabController}
    />
  );
};

export { TabsResponsiveController };
