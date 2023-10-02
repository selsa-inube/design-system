import { useState } from "react";
import { Select, ISelectProps } from "..";

const SelectController = (props: ISelectProps) => {
  const { value, status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.outerText;
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
