import { MdDone, MdClose } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Label } from "@inputs/Label";

import { StyledContainer, StyledInput, StyledSpan, StyledIcon } from "./styles";
import { Size } from "./props";

export interface ISwitchProps {
  isDisabled?: boolean;
  id: string;
  name?: string;
  value?: string;
  size?: Size;
  checked?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  margin: string;
  padding: string;
  disabled?: boolean;
}

const Switch = (props: ISwitchProps) => {
  const {
    isDisabled = false,
    id,
    name,
    value,
    size = "small",
    checked = false,
    handleChange,
    label,
    margin = "0px",
    padding = "0px",
  } = props;

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
          onChange={handleChange}
          disabled={isDisabled}
          name={name}
        />
        <StyledSpan size={size} isDisabled={isDisabled}>
          <StyledIcon checked={checked} size={size}>
            {checked ? <MdDone id="mdIcon" /> : <MdClose id="mdIcon" />}
          </StyledIcon>
        </StyledSpan>
      </StyledContainer>
      {label && (
        <Label htmlFor={id} disabled={isDisabled}>
          {label}
        </Label>
      )}
    </Stack>
  );
};

export { Switch };
