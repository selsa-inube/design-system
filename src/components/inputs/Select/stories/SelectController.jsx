import React, { useState } from "react";
import { Select } from "..";

const SelectController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  function isAlphabetical(value) {
    return /^[a-zA-Z]+$/.test(value.trim());
  }

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    if (!value) {
      setForm({ ...form, state: "pending" });
    }
  };

  const handleInput = (e) => {
    console.log("entra");
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, state: isValid ? "valid" : "invalid" });
  };

  return (
    <Select
      {...props}
      value={form.value}
      handleChange={handleChange}
      state={form.state}
      handleFocus={handleFocus}
      handleInput={handleInput}
    />
  );
};

export { SelectController };
