import { Text } from "@data/Text";

import { StyledTab } from "./styles";

export interface ITabProps {
  label: string;
  id: string;
  disabled: boolean;
  selected: boolean;
  handleClick: () => void;
}

const Tab = (props: ITabProps) => {
  const { disabled = false, selected = false, id, handleClick, label } = props;

  return (
    <StyledTab
      onClick={handleClick}
      disabled={disabled}
      selected={selected}
      id={id}
    >
      <Text
        type="label"
        size="medium"
        appearance={selected ? "primary" : "dark"}
        disabled={disabled}
      >
        {label}
      </Text>
    </StyledTab>
  );
};

export { Tab };
