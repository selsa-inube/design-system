import { useState } from "react";

import { TextField, ITextFieldProps } from "..";

const TextFieldController = (props: ITextFieldProps) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  function isAlphabetical(value: string) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    if (form.state === "invalid") {
      return setForm({ ...form, state: "invalid" });
    }
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, state: isValid ? "valid" : "invalid" });
  };

  return (
    <TextField
      {...props}
      value={form.value}
      onChange={onChange}
      state={form.state}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextFieldController };
