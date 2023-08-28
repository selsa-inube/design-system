import { useState } from "react";
import { ITextareaProps, Textarea } from "..";

const TextareaController = (props: ITextareaProps) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const maxLength = 220;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, state: "pending" });
    return;
  };

  const handleFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      errorMessage="The number the characters is too long"
    />
  );
};

export { TextareaController };
