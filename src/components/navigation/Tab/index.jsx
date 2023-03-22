import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyledContainer } from "./styles";

const Tab = (props) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    children,
  } = props;
  const transformedHandleClick = isDisabled ? undefined : handleClick;
  return (
    <StyledContainer
      onClick={transformedHandleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Label htmlFor={id} isFocused={isSelected} isDisabled={isDisabled}>
        {children}
      </Label>
    </StyledContainer>
  );
};

Tab.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Tab };
