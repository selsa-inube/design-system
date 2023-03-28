import React, { useState } from "react";
import { TextField } from "..";

const TextFieldController = (props) => {
  const { value = "", state = "pending" } = props;
  const [valueInput, setValueInput] = useState(value);
  const [globalState, setGlobalState] = useState(state);

  function isAlphabetical(value) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };
  const handleFocus = () => {
    if (globalState === "invalid") {
      return setGlobalState("invalid");
    }
    setGlobalState("pending");
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    const isValid = isAlphabetical(inputValue);
    setGlobalState(isValid ? "valid" : "invalid");
  };

  return (
    <TextField
      {...props}
      value={valueInput}
      handleChange={handleChange}
      state={globalState}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextFieldController };
