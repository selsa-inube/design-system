import React, { useState } from "react";
import { TextField } from "../";

const TextFieldController = (props) => {
  const { value = "", handleChange } = props;
  const [valueInput, setValueInput] = useState(value);

  const handleEvent = (e) => {
    setValueInput(e.target.value);
    handleChange(e.target.value);
  };

  return <TextField {...props} value={valueInput} handleChange={handleEvent} />;
};

export { TextFieldController };
