import React, { useState } from "react";
import { TextFieldUI } from "./interface";

const getFocused = (state, isFocused) => {
  if (state === "invalid") {
    return false;
  }

  return isFocused;
};

const getState = (state) => {
  if (state === "invalid") {
    return state;
  }

  return "default";
};

const getAppearanceValid = (isDisabled) => {
  if (isDisabled) {
    return "disabled";
  }
  return "success";
};

const getAppearanceError = (isDisabled) => {
  if (isDisabled) {
    return "disabled";
  }

  return "error";
};

const TextField = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TextFieldUI
      {...props}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export {
  TextField,
  getFocused,
  getState,
  getAppearanceValid,
  getAppearanceError,
};
