import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { OptionList } from "@inputs/Select/OptionList";
import { Stack } from "@layouts/Stack";
import { ITabProps, Tab } from "@navigation/Tabs/Tab";

import { Types } from "./props";
import { StyledTabs } from "./styles";
import { Icon } from "@src/components/data/Icon";

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
  const [selectedTabLabel, setSelectedTabLabel] = useState<string>(selectedTab);

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));

    const handleOptionClick = (id: string) => {
      const selected = tabs.find((tab) => tab.id === id);
      if (selected) {
        setSelectedTabLabel(selected.label);
        setIsDropDownOpen(false);
      }
    };

    return (
      <>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <Icon
              appearance="dark"
              icon={<MdKeyboardArrowDown />}
              size="24px"
              spacing="none"
              onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            />

            <Tab
              key={selectedTab}
              label={selectedTabLabel}
              selected={true}
              id={selectedTab}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <OptionList options={dropDownOptions} onClick={handleOptionClick} />
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
