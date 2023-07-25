import { ITabProps } from "./interfaces/Tab.interface";

import { Text } from "../../data/Text";

import { StyledTab } from "./styles";

const Tab = (props: ITabProps) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  return (
    <StyledTab
      onClick={handleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Text
        id={id}
        type="label"
        size="medium"
        appearance={isSelected ? "primary" : "dark"}
        isDisabled={isDisabled}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
