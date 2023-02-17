import React from "react";
import PropTypes from "prop-types";
import { MdDone, MdClose } from "react-icons/md";

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
  } = props;

  const transformedSize = sizes.includes(size) ? size : defaultSize;

  if (!sizes.includes(size)) {
    console.warn(
      `Invalid prop value for 'size': ${size}. Allowed values are ${sizes.join(
        ", "
      )}.`
    );
  }

  if (typeof isDisabled !== "boolean") {
    console.warn(
      `Invalid prop value for 'isDisabled': ${isDisabled}. Allowed values are true or false.`
    );
  }

  if (typeof checked !== "boolean") {
    console.warn(
      `Invalid prop value for 'checked': ${checked}. Allowed values are true or false.`
    );
  }

  if (typeof handleChange !== "function") {
    console.warn(`Invalid prop value for 'handleChange': ${handleChange}.`);
  }

  if (!sizes.includes(size)) {
    console.warn(
      `Invalid prop value for 'size': ${size}. Allowed values are ${sizes.join(
        ", "
      )}.`
    );
  }

  return (
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
};

export { Switch };
