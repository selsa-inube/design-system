import React from "react";
import PropTypes from "prop-types";
import { MdDone, MdClose } from "react-icons/md/index";

import {
  StyledContainer,
  StyledInput,
  StyledSpan,
  iconProps,
  sizeProps,
  toggleProps,
} from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "small";

const Switch = (props) => {
  const {
    id,
    isDisabled,
    name,
    value,
    handleChange,
    size = defaultSize,
  } = props;

  const transformedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <StyledContainer size={transformedSize}>
      <StyledInput
        id={id}
        type="checkbox"
        size={transformedSize}
        checked={value}
        onChange={handleChange}
        disabled={isDisabled}
        name={name}
      />
      <StyledSpan size={transformedSize} disabled={isDisabled}>
        {value ? (
          <MdDone
            style={{
              ...iconProps,
              ...sizeProps(transformedSize),
              ...toggleProps(transformedSize, value),
            }}
          />
        ) : (
          <MdClose
            style={{
              ...iconProps,
              ...sizeProps(transformedSize),
              ...toggleProps(transformedSize, value),
            }}
          />
        )}
      </StyledSpan>
    </StyledContainer>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(sizes),
};

export { Switch };
