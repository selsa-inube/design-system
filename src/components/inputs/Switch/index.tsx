import { MdDone, MdClose } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Label } from "@inputs/Label";

import { StyledContainer, StyledInput, StyledSpan, StyledIcon } from "./styles";
import { Size, Spacing } from "./props";

export interface ISwitchProps {
  id: string;
  name?: string;
  value?: string;
  size?: Size;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  margin: Spacing;
  padding: Spacing;
  disabled?: boolean;
}

const Switch = (props: ISwitchProps) => {
  const {
    disabled = false,
    id,
    name,
    value,
    size = "small",
    checked = false,
    onChange,
    label,
    margin = "s0",
    padding = "s0",
  } = props;

  console.log(margin, "marginIndex");
  return (
    <Stack
      direction={"row"}
      justifyContent={label ? "space-between" : "center"}
      alignItems="center"
      gap={label ? "10px" : "0px"}
      margin={margin}
      padding={padding}
    >
      <StyledContainer size={size}>
        <StyledInput
          id={id}
          type="checkbox"
          size={size}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
        />
        <StyledSpan size={size} disabled={disabled}>
          {checked ? (
            <StyledIcon checked={checked} size={size}>
              <MdDone id="mdIcon" />
            </StyledIcon>
          ) : (
            <StyledIcon checked={checked} size={size}>
              <MdClose id="mdIcon" />
            </StyledIcon>
          )}
        </StyledSpan>
      </StyledContainer>
      {label && (
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
      )}
    </Stack>
  );
};

export { Switch };
