import { useState } from "react";

import { Textfield, ITextfieldProps } from "..";

const TextfieldController = (props: ITextfieldProps) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  function isAlphabetical(value: string) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Textfield
      {...props}
      value={form.value}
      handleChange={handleChange}
      state={form.state}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextfieldController };
