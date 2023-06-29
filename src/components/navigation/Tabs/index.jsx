import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "../Tab";
import { Stack } from "../../layouts/Stack";
import { StyledTabs, StyledIconWrapper } from "./styles";
import { DropDownMenu } from "../../inputs/DropDownMenu";
import { MdKeyboardArrowDown } from "react-icons/md";

export const TabTypes = Object.freeze({
  TAB: "tab",
  SELECT: "select",
});

const defaultType = TabTypes.TAB;

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
  const { tabs, type, handleSelectedTab, selectedTab } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const transformedType = Object.values(TabTypes).includes(type)
    ? type
    : defaultType;

  checkDuplicateTabIds(tabs);

  if (transformedType === TabTypes.SELECT) {
    const firstTab = tabs[0];
    const dropDownOptions = tabs.slice(1).map((tab) => ({
      id: tab.id,
      label: tab.label,
      isDisabled: tab.isDisabled,
    }));

    return (
      <>
        <StyledTabs>
          <Stack gap="24px">
            <StyledIconWrapper
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <MdKeyboardArrowDown />
            </StyledIconWrapper>
            <Tab
              key={firstTab.id}
              isDisabled={firstTab.isDisabled}
              isSelected={firstTab.id === selectedTab}
              id={firstTab.id}
              handleClick={() => handleSelectedTab(firstTab.id)}
              label={firstTab.label}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <DropDownMenu
            options={dropDownOptions}
            handleSelect={(value) => handleSelectedTab(value)}
            isOpenOptions={isDropDownOpen}
            onCloseOptions={() => setIsDropDownOpen(false)}
          />
        )}
      </>
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
  handleSelectedTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export { Tabs };
