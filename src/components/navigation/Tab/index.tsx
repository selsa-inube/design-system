import { Text } from "@data/Text";

import { StyledTab } from "./styles";
import { Themed } from "./props";

export interface ITabProps extends Themed {
  label: string;
  id: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const Tab = (props: ITabProps) => {
  const { disabled = false, selected = false, id, onClick, label } = props;

  return (
    <StyledTab
      onClick={onClick}
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
