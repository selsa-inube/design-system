import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdDone } from "@react-icons/all-files/md/MdDone";
import { MdClose } from "@react-icons/all-files/md/MdClose";

import { StyledContainer, StyledInput, StyledSpan } from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "small";

const Switch = (props) => {
  const { id, isDisabled, name, value, handleChange, size } = props;
  const [isToggled, setToggled] = useState(value);
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  const iconProps = {
    position: "absolute",
    color: "white",
  };

  const sizeProps =
    transformedSize === "small"
      ? { width: "10px", height: "10px", top: "3px" }
      : { width: "14px", height: "14px", top: "3px" };

  const toggleProps =
    transformedSize === "small"
      ? { left: isToggled ? "5px" : "17px" }
      : { left: isToggled ? "5px" : "22px" };

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
          <MdDone style={{ ...iconProps, ...sizeProps, ...toggleProps }} />
        ) : (
          <MdClose style={{ ...iconProps, ...sizeProps, ...toggleProps }} />
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
  handleChange: PropTypes.func,
  size: PropTypes.string,
};

export { Switch };
