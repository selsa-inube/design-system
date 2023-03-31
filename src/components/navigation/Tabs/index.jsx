import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "../Tab";
import { Stack } from "../../layouts/Stack";
import { StyledTabs } from "./styles";

const Tabs = (props) => {
  const { tabs, handleSelectedTab, selectedTab } = props;
  const [activeTab, setActiveTab] = useState(selectedTab);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    handleSelectedTab(tabId);
  };

  return (
    <StyledTabs>
      <Stack gap="24px">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            isDisabled={tab.isDisabled}
            isSelected={tab.id === activeTab}
            id={tab.id}
            handleClick={() => handleClick(tab.id)}
            label={tab.label}
          />
        ))}
      </Stack>
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSelectedTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export { Tabs };
