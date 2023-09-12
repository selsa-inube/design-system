import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { DropdownMenu } from "@inputs/Select/DropdownMenu";
import { Stack } from "@layouts/Stack";
import { ITabProps, Tab } from "@navigation/Tabs/Tab";

import { Types } from "./props";
import { StyledTabs, StyledIconWrapper } from "./styles";

export interface ITabsProps {
  tabs: ITabProps[];
  type?: Types;
  onSelectTab: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({
  tabs,
  type = "tabs",
  selectedTab,
  onSelectTab,
}: ITabsProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedTabLabel, setSelectedTabLabel] = useState<string>("");
  const [selectedTabIsDisabled, setSelectedTabIsDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    const selected = tabs.find((tab) => tab.id === selectedTab);
    if (selected) {
      setSelectedTabLabel(selected.label);
      setSelectedTabIsDisabled(selected?.disabled ?? false);
    }
  }, [selectedTab, tabs]);

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));
    return (
      <>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <StyledIconWrapper
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            >
              <MdKeyboardArrowDown />
            </StyledIconWrapper>
            <Tab
              key={selectedTab}
              disabled={selectedTabIsDisabled}
              selected={true}
              id={selectedTab}
              onClick={() => onSelectTab(selectedTab)}
              label={selectedTabLabel}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <DropdownMenu
            options={dropDownOptions}
            onSelect={onSelectTab}
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
            disabled={tab.disabled}
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
