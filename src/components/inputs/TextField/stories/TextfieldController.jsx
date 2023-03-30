import React, { useState } from "react";
import { TextField } from "..";

const TextFieldController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  function isAlphabetical(value) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    if (form.state === "invalid") {
      return setForm({ ...form, state: "invalid" });
    }
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e) => {
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, state: isValid ? "valid" : "invalid" });
  };

  return (
    <TextField
      {...props}
      value={form.value}
      handleChange={handleChange}
      state={form.state}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextFieldController };
