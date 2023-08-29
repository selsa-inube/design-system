import React, { useState } from "react";
import { Textarea } from "..";

const TextareaController = (props) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const maxLength = 220;

  const onChange = (e) => {
    setForm({ value: e.target.value, status: "pending" });
    return;
  };

  const onFocus = () => {
    setForm({ ...form, status: "pending" });
  };

  const onBlur = (e) => {
    if (e.target.value.length > maxLength) {
      setForm({ ...form, status: "invalid" });
    } else setForm({ ...form, status: "valid" });
  };
  return (
    <Textarea
      {...props}
      value={form.value}
      status={form.status}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      errorMessage="The number the characters is too long"
    />
  );
};

export { TextareaController };
