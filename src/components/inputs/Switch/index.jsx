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
