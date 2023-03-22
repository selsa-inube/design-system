import React, { useState } from "react";
import { TextFieldUI } from "../interface";

const TextFieldController = (props) => {
  const [valueInput, setValueInput] = useState("");

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <TextFieldUI {...props} value={valueInput} handleChange={handleChange} />
  );
};

export { TextFieldController };
