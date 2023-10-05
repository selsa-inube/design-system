import React, { useState } from "react";
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
  onChange: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({ tabs, type = "tabs", selectedTab, onChange }: ITabsProps) => {
  const [displayList, setDisplayList] = useState(false);

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));

    const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.target.closest("li")?.getAttribute("id");
      if (id) {
        setDisplayList(false);
        onChange(id);
      }
    };

    return (
      <>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <StyledIconWrapper onClick={() => setDisplayList(!displayList)}>
              <MdKeyboardArrowDown />
            </StyledIconWrapper>
            <Tab
              key={selectedTab}
              selected={true}
              id={selectedTab}
              onClick={() => onChange(selectedTab)}
              label={tabs.find((tab) => tab.id === selectedTab)?.label!}
            />
          </Stack>
        </StyledTabs>
        {displayList && (
          <OptionList onClick={handleOptionClick}>
            {dropDownOptions.map((optionItem) => (
              <OptionItem
                key={optionItem.id}
                id={optionItem.id}
                label={optionItem.label}
              />
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
            onClick={() => onChange(tab.id)}
            label={tab.label}
          />
        ))}
      </Stack>
    </StyledTabs>
  );
};

export { Tabs };
