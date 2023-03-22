import React, { useState } from "react";
import { TextField } from "..";

const TextFieldController = (props) => {
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <TextField {...props} value={valueInput} handleChange={handleChange} />
  );
};

export { TextFieldController };
