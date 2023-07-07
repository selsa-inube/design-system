import { useState } from "react";
import { Tab } from "../Tab";
import { Stack } from "../../layouts/Stack";
import { StyledTabs, StyledIconWrapper } from "./styles";
import { DropDownMenu } from "../../inputs/DropDownMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ITabsProps } from "./interfaces/Tabs.interface";

import { ITabItem } from "./interfaces/Tabs.Item.interface";
import { types } from "./types/Tabs.type";

const defaultType = "tabs";

const checkDuplicateTabIds = (tabs: ITabItem[]) => {
  const ids = tabs.map((tab) => tab.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    return console.warn(
      `Warning: Tab components with the same id were found: [${duplicateIds}]. Tab component ids must be unique for components to maintain their identity across updates.`
    );
  }
  return false;
};

const Tabs = (props: ITabsProps) => {
  const { tabs, type, handleSelectedTab, selectedTab } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const transformedType = types.includes(type) ? type : defaultType;
  checkDuplicateTabIds(tabs);

  if (transformedType === "select") {
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

export { Tabs };
