import React, { useState } from "react";
import { TextFieldUI } from "../interface";

const TextFieldController = (props) => {
  const { value = "", handleChange } = props;
  const [valueInput, setValueInput] = useState(value);

  const handleEvent = (e) => {
    setValueInput(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <TextFieldUI {...props} value={valueInput} handleChange={handleEvent} />
  );
};

export { TextFieldController };
