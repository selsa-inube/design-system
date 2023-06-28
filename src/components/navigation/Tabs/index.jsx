import React from "react";
import PropTypes from "prop-types";
import { Tab } from "../Tab";
import { Stack } from "../../layouts/Stack";
import { StyledTabs } from "./styles";
import { Select } from "../../inputs/Select";

export const TabTypes = Object.freeze({
  TAB: "tab",
  SELECT: "select",
});

export const sizes = Object.freeze({
  WIDE: "wide",
  COMPACT: "compact",
});

const defaultType = TabTypes.TAB;
const defaultSize = sizes.WIDE;

const checkDuplicateTabIds = (tabs) => {
  const ids = tabs.map((tab) => tab.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    return console.warn(
      `Warning: Tab components with the same id were found: [${duplicateIds}]. Tab component ids must be unique for components to maintain their identity across updates.`
    );
  }
  return false;
};

const Tabs = (props) => {
  const { tabs, type, size, handleSelectedTab, selectedTab } = props;
  const transformedType = Object.values(TabTypes).includes(type)
    ? type
    : defaultType;
  const transformedSize = Object.values(sizes).includes(size)
    ? size
    : defaultSize;
  checkDuplicateTabIds(tabs);

  if (transformedType === TabTypes.SELECT) {
    const selectOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      isDisabled: tab.isDisabled,
    }));
    return (
      <Select
        size={transformedSize}
        options={selectOptions}
        value={selectedTab}
        handleChange={(value) => handleSelectedTab(value)}
      />
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
  type: PropTypes.oneOf(Object.values(TabTypes)),
  size: PropTypes.oneOf(Object.values(sizes)),
  handleSelectedTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export { Tabs };
