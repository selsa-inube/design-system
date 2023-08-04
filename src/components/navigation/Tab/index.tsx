import { Text } from "@data/Text";

import { StyledTab } from "./styles";

export interface ITabProps {
  label: string;
  id: string;
  isDisabled: boolean;
  isSelected: boolean;
  handleClick: () => void;
}

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
      id={id}
    >
      <Text
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
