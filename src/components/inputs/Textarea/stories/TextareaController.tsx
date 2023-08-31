import { useState } from "react";
import { ITextareaProps, Textarea } from "..";

const TextareaController = (props: ITextareaProps) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const maxLength = 220;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
    return;
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      return setForm({ ...form, status: "invalid" });
    }
    setForm({ ...form, status: "pending" });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      setForm({ ...form, status: "invalid" });
    } else setForm({ ...form, status: "valid" });
  };
  const message =
    form.status === "valid"
      ? "The field has been successfully validated"
      : "The number the characters is too long";
  return (
    <Textarea
      {...props}
      value={form.value}
      status={form.status}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      message={message}
    />
  );
};

export { TextareaController };
