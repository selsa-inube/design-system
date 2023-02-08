import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdDone } from "@react-icons/all-files/md/MdDone";
import { MdClose } from "@react-icons/all-files/md/MdClose";

import { StyledContainer, StyledInput, StyledSpan } from "./styles";

const sizes = ["large", "small"];
const defaultSize = "small";
const MdDoneStyles = {
  position: "absolute",
  width: "10px",
  height: "10px",
  left: "5px",
  top: "3px",
};
const MdCloseStyles = {
  position: "absolute",
  width: "10px",
  height: "10px",
  left: "17px",
  top: "3px",
};

const Switch = (props) => {
  const { id, isDisabled, name, value, handleChange, size } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;
  const [isToggled, setToggled] = useState(value);

  const handleToggle = () => {
    setToggled(!isToggled);
    handleChange(!isToggled);
  };

  return (
    <StyledContainer id={id} size={transformedSize}>
      <StyledInput
        type="checkbox"
        size={transformedSize}
        defaultChecked={value}
        onChange={handleToggle}
        disabled={isDisabled}
        name={name}
      />
      <StyledSpan size={transformedSize}>
        {isToggled === true ? (
          <MdDone color="white" style={MdDoneStyles} />
        ) : (
          <MdClose color="white" style={MdCloseStyles} />
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
