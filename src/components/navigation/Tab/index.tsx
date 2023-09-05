import { Text } from "@data/Text";

import { StyledTab } from "./styles";

export interface ITabProps {
  label: string;
  id: string;
  isDisabled: boolean;
  selected: boolean;
  handleClick: () => void;
}

const Tab = (props: ITabProps) => {
  const {
    isDisabled = false,
    selected = false,
    id,
    handleClick,
    label,
  } = props;

  return (
    <StyledTab
      onClick={handleClick}
      isDisabled={isDisabled}
      selected={selected}
      id={id}
    >
      <Text
        type="label"
        size="medium"
        appearance={selected ? "primary" : "dark"}
        disabled={isDisabled}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
