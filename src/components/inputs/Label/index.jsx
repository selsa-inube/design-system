import React from "react";
import PropTypes from "prop-types";

import { StyledLabel } from "./styles";

const typos = ["labelLarge", "labelMedium", "labelSmall"];

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultIsInvalid = false;
const defaultTypo = "labelLarge";

const Label = (props) => {
  const {
    isDisabled = defaultIsDisabled,
    isFocused = defaultIsFocused,
    htmlFor,
    isInvalid = defaultIsInvalid,
    typo = "labelLarge",
    children,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof isFocused === "boolean" ? isFocused : defaultIsFocused;

  const transformedIsInvalid =
    typeof isInvalid === "boolean" ? isInvalid : defaultIsInvalid;

  const transformedTypo = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledLabel
      isDisabled={transformedIsDisabled}
      isFocused={transformedIsFocused}
      htmlFor={htmlFor}
      isInvalid={transformedIsInvalid}
      typo={transformedTypo}
    >
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool,
  typo: PropTypes.oneOf(typos),
  children: PropTypes.node,
};

export { Label, typos };
