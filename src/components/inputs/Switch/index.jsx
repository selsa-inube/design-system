import React, { useState } from "react";
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
  const { id, isDisabled, name, value, handleChange, size } = props;
  const [isToggled, setToggled] = useState(value);
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  const handleToggle = () => {
    setToggled(!isToggled);
    handleChange(!isToggled);
  };

  return (
    <StyledContainer size={transformedSize}>
      <StyledInput
        id={id}
        type="checkbox"
        size={transformedSize}
        defaultChecked={value}
        onChange={handleToggle}
        disabled={isDisabled}
        name={name}
      />
      <StyledSpan size={transformedSize} disabled={isDisabled}>
        {isToggled ? (
          <MdDone
            style={{
              ...iconProps,
              ...sizeProps(transformedSize),
              ...toggleProps(transformedSize, isToggled),
            }}
          />
        ) : (
          <MdClose
            style={{
              ...iconProps,
              ...sizeProps(transformedSize),
              ...toggleProps(transformedSize, isToggled),
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
