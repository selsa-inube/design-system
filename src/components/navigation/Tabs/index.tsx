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
  onChange: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({ tabs, type = "tabs", selectedTab, onChange }: ITabsProps) => {
  const [displayList, setDisplayList] = useState(false);
  const [selectedTabLabel, setSelectedTabLabel] = useState<string | null>(
    selectedTab
  );

  const handleTabClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedTab = e.target as HTMLElement;
    const tabId = clickedTab
      .closest("[data-tab-id]")
      ?.getAttribute("data-tab-id");
    if (tabId && !clickedTab.hasAttribute("disabled")) {
      onChange(tabId);
    }
  };

  if (type === "select") {
    const dropDownOptions = tabs.map((tab) => ({
      id: tab.id,
      label: tab.label,
      disabled: tab.disabled,
    }));

    const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e) {
        setSelectedTabLabel(e.target.textContent);
        setDisplayList(false);
      }
    };

    return (
      <div>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <StyledIconWrapper onClick={() => setDisplayList(!displayList)}>
              <MdKeyboardArrowDown />
            </StyledIconWrapper>
            <Tab
              key={selectedTab}
              selected={true}
              id={selectedTab}
              label={selectedTabLabel!}
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
      </div>
    );
  }

  return (
    <StyledTabs onClick={handleTabClick}>
      <Stack gap="24px">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            disabled={tab.disabled}
            selected={tab.id === selectedTab}
            id={tab.id}
            label={tab.label}
          />
        ))}
      </Stack>
    </StyledTabs>
  );
};

export { Tabs };
