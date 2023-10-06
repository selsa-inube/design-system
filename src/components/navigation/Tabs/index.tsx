import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { OptionItem } from "@inputs/Select/OptionItem";
import { OptionList } from "@inputs/Select/OptionList";
import { Stack } from "@layouts/Stack";
import { Tab, ITabProps } from "@navigation/Tabs/Tab";

import { Types } from "./props";
import { StyledTabs } from "./styles";
import { Icon } from "@data/Icon";

export interface ITabsProps {
  tabs: ITabProps[];
  type?: Types;
  onChange: (id: string) => void;
  selectedTab: string;
}

const Tabs = ({ tabs, type = "tabs", selectedTab, onChange }: ITabsProps) => {
  const [displayList, setDisplayList] = useState(false);

  const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.closest("li")?.getAttribute("id");
    if (id) {
      setDisplayList(false);
      onChange(id);
    }
  };

  if (type === "select") {
    return (
      <>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <Icon
              spacing="wide"
              onClick={() => setDisplayList(!displayList)}
              appearance="dark"
              icon={<MdKeyboardArrowDown />}
            />
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
            {tabs.map((tab) => (
              <OptionItem key={tab.id} id={tab.id} label={tab.label} />
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
