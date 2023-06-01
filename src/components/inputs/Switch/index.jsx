import React from "react";
import PropTypes from "prop-types";
import { MdDone, MdClose } from "react-icons/md";

import { Stack } from "../../layouts/Stack";
import { Label } from "../Label";

import { StyledContainer, StyledInput, StyledSpan, StyledIcon } from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "small";

const Switch = (props) => {
  const {
    isDisabled = false,
    id,
    name,
    value,
    size = defaultSize,
    checked = false,
    handleChange,
    label,
  } = props;

  const transformedSize = sizes.includes(size) ? size : defaultSize;
  const tranformedGap = label.trim().length === 0 ? "10px" : "0px";
  const transformedAlignment =
    label.trim().length === 0 ? "space-between" : "center";

  return (
    <Stack
      direction={"row"}
      justifyContent={transformedAlignment}
      alignItems="center"
      gap={tranformedGap}
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
        <StyledSpan size={transformedSize} disabled={isDisabled}>
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

Switch.propTypes = {
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export { Switch };
