import { useState } from "react";
import { Select, ISelectProps } from "..";

const SelectController = (props: ISelectProps) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    setForm({ value, status: "pending" });
  };

  const onFocus = () => {
    if (!value) {
      setForm({ ...form, status: "pending" });
    }
  };

  return (
    <Select
      {...props}
      value={form.value}
      status={form.status}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

export { SelectController };
