import React, { useState } from "react";
import { TextField } from "..";

const TextFieldController = (props) => {
  const { value = "" } = props;
  const [valueInput, setValueInput] = useState(value);

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <TextField {...props} value={valueInput} handleChange={handleChange} />
  );
};

export { TextFieldController };
