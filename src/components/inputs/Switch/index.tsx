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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange,
    label,
    margin = "0px",
    padding = "0px",
  } = props;

  const tranformedGap = label ? "10px" : "0px";
  const transformedJustify = label ? "space-between" : "center";

  return (
    <Stack
      direction={"row"}
      justifyContent={transformedJustify}
      alignItems="center"
      gap={tranformedGap}
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
          disabled={isDisabled}
          name={name}
        />
        <StyledSpan size={size} isDisabled={isDisabled}>
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
        <Label htmlFor={id} disabled={isDisabled}>
          {label}
        </Label>
      )}
    </Stack>
  );
};

export { Switch };
