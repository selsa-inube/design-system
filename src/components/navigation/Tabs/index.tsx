import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Types, types } from "./props";
import { Tab } from "@navigation/Tab";
import { Stack } from "@layouts/Stack";
import { DropdownMenu } from "@inputs/Select/DropdownMenu";
import { StyledTabs, StyledIconWrapper } from "./styles";

export interface ITabsItem {
  id: string;
  label: string;
  isDisabled: boolean;
}

export interface ITabsProps {
  tabs: ITabsItem[];
  type?: Types;
  onSelectTab: (id: string) => void;
  selectedTab: string;
}

const defaultType = "tabs";

const checkDuplicateTabIds = (tabs: ITabsItem[]) => {
  const ids = tabs.map((tab) => tab.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    return console.warn(
      `Warning: Tab components with the same id were found: [${duplicateIds}]. Tab component ids must be unique for components to maintain their identity across updates.`
    );
  }
  return false;
};

const Tabs = ({
  tabs,
  type = defaultType,
  selectedTab,
  onSelectTab,
}: ITabsProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const transformedType = types.includes(type) ? type : defaultType;
  checkDuplicateTabIds(tabs);

  if (transformedType === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      isDisabled: tab.isDisabled,
    }));
    const transformedLabel = tabs.find((tab) => tab.id === selectedTab)?.label!;
    const transformedIsDisabled = tabs.find((tab) => tab.id === selectedTab)
      ?.isDisabled!;
    return (
      <>
        <StyledTabs type={transformedType}>
          <Stack gap="8px">
            <StyledIconWrapper
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <MdKeyboardArrowDown />
            </StyledIconWrapper>
            <Tab
              key={selectedTab}
              disabled={transformedIsDisabled}
              selected={true}
              id={selectedTab}
              onClick={() => onSelectTab(selectedTab)}
              label={transformedLabel}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <DropdownMenu
            options={dropDownOptions}
            handleSelect={onSelectTab}
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
            disabled={tab.isDisabled}
            selected={tab.id === selectedTab}
            id={tab.id}
            onClick={() => onSelectTab(tab.id)}
            label={tab.label}
          />
        ))}
      </Stack>
    </StyledTabs>
  );
};

export { Tabs };
