import React, { useState } from "react";
import { Select } from "..";

const SelectController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const handleChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    if (!value) {
      setForm({ ...form, state: "pending" });
    }
  };

  return (
    <Select
      {...props}
      value={form.value}
      state={form.state}
      handleChange={handleChange}
      handleFocus={handleFocus}
    />
  );
};

export { SelectController };
