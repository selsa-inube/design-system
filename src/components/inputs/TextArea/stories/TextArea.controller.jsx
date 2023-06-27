import React, { useState } from "react";
import { TextArea } from "..";

const TextAreaController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const maxLength = 220;

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
    return;
  };

  const handleFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e) => {
    if (e.target.value.length > maxLength) {
      setForm({ ...form, state: "invalid" });
    } else setForm({ ...form, state: "valid" });
  };
  return (
    <TextArea
      {...props}
      value={form.value}
      state={form.state}
      maxLength={maxLength}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      errorMessage="The number the characters is too long"
    />
  );
};

export { TextAreaController };
