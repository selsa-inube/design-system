import { useState } from "react";
import { ITextareaProps, Textarea } from "..";

const TextareaController = (props: ITextareaProps) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const maxLength = 220;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, state: "pending" });
    return;
  };

  const onFocus = () => {
    setForm({ ...form, state: "pending" });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      onBlur={onBlur}
      errorMessage="The number the characters is too long"
    />
  );
};

export { TextareaController };
