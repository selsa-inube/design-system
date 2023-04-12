import React from "react";
import PropTypes from "prop-types";
import { Tab } from "../Tab";
import { Stack } from "../../layouts/Stack";
import { StyledTabs } from "./styles";

const checkDuplicateTabIds = (tabs) => {
  const ids = tabs.map((tab) => tab.id);

  return ids.filter((id, index) => ids.indexOf(id) !== index);
};

const Tabs = (props) => {
  const { tabs, handleSelectedTab, selectedTab } = props;

  const duplicateIds = checkDuplicateTabIds(tabs);

  if (duplicateIds.length > 0) {
    console.warn(
      `Warning: Tab components with the same id were found: [${duplicateIds}]. Tab component ids must be unique for components to maintain their identity across updates.`
    );
  }

  return (
    <StyledTabs>
      <Stack gap="24px">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            isDisabled={tab.isDisabled}
            isSelected={tab.id === selectedTab}
            id={tab.id}
            handleClick={() => handleSelectedTab(tab.id)}
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
