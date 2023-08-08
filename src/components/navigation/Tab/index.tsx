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
    >
      <Text
        id={id}
        type="label"
        size="medium"
        appearance={isSelected ? "primary" : "dark"}
        disabled={isDisabled}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
