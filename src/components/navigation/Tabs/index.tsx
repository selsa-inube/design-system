import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { OptionItem } from "@inputs/Select/OptionItem";
import { OptionList } from "@inputs/Select/OptionList";
import { Stack } from "@layouts/Stack";
import { Tab, ITabProps } from "@navigation/Tabs/Tab";

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
  const [selectedTabLabel, setSelectedTabLabel] = useState<string | null>(
    selectedTab
  );

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));

    const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e) {
        setSelectedTabLabel(e.target.textContent);
        setIsDropDownOpen(false);
      }
    };
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
              selected={true}
              id={selectedTab}
              onClick={() => onSelectTab(selectedTab)}
              label={selectedTabLabel!}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <OptionList onClick={handleOptionClick}>
            {dropDownOptions.map((optionItem) => (
              <OptionItem key={optionItem.id} id={optionItem.id}>
                {optionItem.label}
              </OptionItem>
            ))}
          </OptionList>
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
