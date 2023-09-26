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
  //const [selectedTabLabel, setSelectedTabLabel] = useState<string>(selectedTab);
  //const [selectedTabIsDisabled, setSelectedTabIsDisabled] =
  //useState<boolean>(false);

  if (type === "select") {
    const selected = tabs.find((tab) => tab.id === selectedTab);
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));

    console.log(dropDownOptions, "dropDownOptions", "selected ->", selected);
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
              label={selected?.label || selectedTab}
              selected={true}
              id={selectedTab}
              onClick={() => onSelectTab(selected?.label!)}
            />
          </Stack>
        </StyledTabs>
        {isDropDownOpen && (
          <OptionList
            options={dropDownOptions}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
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
