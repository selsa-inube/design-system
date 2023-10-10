import { useRef, useEffect } from "react";
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

const Tabs = (props: ITabsProps) => {
  const { tabs, type = "tabs", selectedTab, onChange } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const displayList = selectedTab === "_openList_";

  const handleInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.closest("li")?.getAttribute("id");
    if (id) {
      onChange(id);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node) &&
      displayList
    ) {
      onChange("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [displayList]);

  const handleTabClick = (e: React.MouseEvent) => {
    const targetElement = e.target as Element;
    const tabElement = targetElement.closest("[id]");
    if (tabElement) {
      const id = tabElement.getAttribute("id");
      if (id && !tabElement.getAttribute("disabled")) {
        onChange(id);
      }
    }
  };

  const toggleDropdown = () => {
    if (displayList) {
      onChange(selectedTab !== "_openList_" ? selectedTab : selectedTab);
    } else {
      onChange("_openList_");
    }
  };

  console.log("selectedTab: ", selectedTab);
  if (type === "select") {
    return (
      <div ref={wrapperRef}>
        <StyledTabs type={type}>
          <Stack gap="8px">
            <Icon
              spacing="wide"
              onClick={toggleDropdown}
              appearance="dark"
              icon={<MdKeyboardArrowDown />}
            />
            <Tab
              key={selectedTab}
              selected={true}
              id={selectedTab}
              label={tabs.find((tab) => tab.id === selectedTab)?.label!}
            />
          </Stack>
        </StyledTabs>
        {displayList && (
          <OptionList onClick={handleInsideClick}>
            {tabs.map((tab) => (
              <OptionItem key={tab.id} id={tab.id} label={tab.label} />
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
