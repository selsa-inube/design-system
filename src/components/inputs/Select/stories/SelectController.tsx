import { useState } from "react";
import { Select, ISelectProps } from "..";

const SelectController = (props: ISelectProps) => {
  const { value = "", state = "pending" } = props;
  const [form, setForm] = useState({ value, state });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    setForm({ value, state: "pending" });
  };

  const onFocus = () => {
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
      onFocus={onFocus}
    />
  );
};

export { SelectController };
