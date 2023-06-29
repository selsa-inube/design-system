import { TabProps } from "./interfaces/interface.Tab";

import { Text } from "../../data/Text";

import { StyledTab } from "./styles";

const Tab = (props: TabProps) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  const appearance = (isSelected: boolean, isDisabled: boolean) => {
    if (isSelected && !isDisabled) {
      return "primary";
    }
    if (isDisabled) {
      return "disabled";
    }
    return "dark";
  };

  return (
    <StyledTab
      onClick={handleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Text
        id={id}
        typo="labelMedium"
        appearance={appearance(isSelected, isDisabled)}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
