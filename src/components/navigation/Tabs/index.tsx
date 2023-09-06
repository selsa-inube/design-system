import { useState, useEffect } from "react"; // added useEffect
import { MdKeyboardArrowDown } from "react-icons/md";

import { Types } from "./props";
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
  handleSelectedTab: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({
  tabs,
  type = "tabs",
  selectedTab,
  handleSelectedTab,
}: ITabsProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedTabLabel, setSelectedTabLabel] = useState<string>("");
  const [selectedTabIsDisabled, setSelectedTabIsDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    const selected = tabs.find((tab) => tab.id === selectedTab);
    if (selected) {
      setSelectedTabLabel(selected.label);
      setSelectedTabIsDisabled(selected.isDisabled);
    }
  }, [selectedTab, tabs]);

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      isDisabled: tab.isDisabled,
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
              onClick={() => handleSelectedTab(selectedTab)}
              label={selectedTabLabel}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <DropdownMenu
            options={dropDownOptions}
            handleSelect={handleSelectedTab}
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
            onClick={() => handleSelectedTab(tab.id)}
            label={tab.label}
          />
        ))}
      </Stack>
    </StyledTabs>
  );
};

export { Tabs };
