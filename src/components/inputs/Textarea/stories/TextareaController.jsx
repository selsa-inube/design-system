import React, { useState } from "react";
import { Textarea } from "..";

const TextareaController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = () => {
    if (form.value) {
      setForm({ ...form, state: "valid" });
    } else {
      setForm({ ...form, state: "invalid" });
    }
  };

  return (
    <Textarea
      {...props}
      value={form.value}
      state={form.state}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextareaController };
