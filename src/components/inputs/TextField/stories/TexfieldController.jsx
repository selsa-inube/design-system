import React, { useState } from "react";
import { TextField } from "..";

const TextFieldController = (props) => {
  const { value = "", state = "pending" } = props;
  const [valueInput, setValueInput] = useState(value);
  const [globalState, setGlobalState] = useState(state);

  function isAlphabetical(value) {
    console.log("first");
    return /^[a-zA-Z]+$/.test(value);
  }

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;
    const isValid = isAlphabetical(inputValue);
    console.log(isValid);
    setGlobalState(isValid ? "valid" : "invalid");
  };

  return (
    <TextField
      {...props}
      value={valueInput}
      handleChange={handleChange}
      state={globalState}
      handleBlur={handleBlur}
    />
  );
};

export { TextFieldController };
