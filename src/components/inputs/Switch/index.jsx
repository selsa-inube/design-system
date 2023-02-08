import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdDone } from "@react-icons/all-files/md/MdDone";
import { MdClose } from "@react-icons/all-files/md/MdClose";

import { StyledContainer, StyledInput, StyledSpan } from "./styles";

const sizes = ["large", "small"];
const defaultSize = "small";

const Switch = (props) => {
  const { id, isDisabled, name, value, handleChange, size } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  console.log("size ", size);
  return (
    <StyledContainer id={id} size={transformedSize}>
      <StyledInput type="checkbox" size={transformedSize} />
      <StyledSpan size={transformedSize}>
        <MdDone color="white" />
        <MdClose color="white" />
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
