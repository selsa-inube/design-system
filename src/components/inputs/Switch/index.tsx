import { MdDone, MdClose } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Label } from "../Label";

import { StyledContainer, StyledInput, StyledSpan, StyledIcon } from "./styles";
import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { Size, sizes } from "./props";

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

const defaultSize: Size = "small";
const defaultMargin = "0px";
const defaultPadding = "0px";

const Switch = (props: ISwitchProps) => {
  const {
    isDisabled = false,
    id,
    name,
    value,
    size = defaultSize,
    checked = false,
    handleChange,
    label,
    margin,
    padding,
  } = props;

  const transformedSize: Size = sizes.includes(size) ? size : defaultSize;
  const tranformedGap = label ? "10px" : "0px";
  const transformedJustify = label ? "space-between" : "center";

  return (
    <Stack
      direction={"row"}
      justifyContent={transformedJustify}
      alignItems="center"
      gap={tranformedGap}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      <StyledContainer size={transformedSize}>
        <StyledInput
          id={id}
          type="checkbox"
          size={transformedSize}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          name={name}
        />
        <StyledSpan size={transformedSize} isDisabled={isDisabled}>
          {checked ? (
            <StyledIcon checked={checked} size={transformedSize}>
              <MdDone id="mdIcon" />
            </StyledIcon>
          ) : (
            <StyledIcon checked={checked} size={transformedSize}>
              <MdClose id="mdIcon" />
            </StyledIcon>
          )}
        </StyledSpan>
      </StyledContainer>
      {label && (
        <Label htmlFor={id} isDisabled={isDisabled} onClick={handleChange}>
          {label}
        </Label>
      )}
    </Stack>
  );
};

export { Switch };
