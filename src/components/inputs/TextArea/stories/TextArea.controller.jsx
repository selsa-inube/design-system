import React, { useState } from "react";
import { TextArea } from "..";

const TextAreaController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
    return;
  };

  const handleFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  return (
    <TextArea
      {...props}
      value={form.value}
      state={form.state}
      handleChange={handleChange}
      handleFocus={handleFocus}
    />
  );
};

export { TextAreaController };
