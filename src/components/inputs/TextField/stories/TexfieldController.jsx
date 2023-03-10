import React, { useState } from "react";
import { TextField } from "../";

const TextFieldController = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <TextField {...props} value={value} onChange={handleChange} />;
};

export { TextFieldController };
