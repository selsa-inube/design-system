import React, { useState } from "react";
import { Textarea } from "..";

const TextareaController = (props) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const maxLength = 220;

  const onChange = (e) => {
    setForm({ value: e.target.value, state: "pending" });
    return;
  };

  const onFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e) => {
    if (e.target.value.length > maxLength) {
      setForm({ ...form, state: "invalid" });
    } else setForm({ ...form, state: "valid" });
  };
  return (
    <Textarea
      {...props}
      value={form.value}
      state={form.state}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      handleBlur={handleBlur}
      errorMessage="The number the characters is too long"
    />
  );
};

export { TextareaController };
