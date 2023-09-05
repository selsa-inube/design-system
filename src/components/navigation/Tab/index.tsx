import { Text } from "@data/Text";

import { StyledTab } from "./styles";

export interface ITabProps {
  label: string;
  id: string;
  disabled: boolean;
  isSelected: boolean;
  handleClick: () => void;
}

const Tab = (props: ITabProps) => {
  const {
    disabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  return (
    <StyledTab
      onClick={handleClick}
      disabled={disabled}
      isSelected={isSelected}
      id={id}
    >
      <Text
        type="label"
        size="medium"
        appearance={isSelected ? "primary" : "dark"}
        disabled={disabled}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
