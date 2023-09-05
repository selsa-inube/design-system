import { Text } from "@data/Text";

import { StyledTab } from "./styles";

export interface ITabProps {
  label: string;
  id: string;
  isDisabled: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const Tab = (props: ITabProps) => {
  const { isDisabled = false, isSelected = false, id, onClick, label } = props;

  return (
    <StyledTab
      onClick={onClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
      id={id}
    >
      <Text
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
