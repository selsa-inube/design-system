import { useState } from "react";
import { Textfield, ITextfieldProps } from "..";

interface IFormState {
  value: string | number;
  state: ITextfieldProps["state"];
}

const TextfieldController = (props: ITextfieldProps) => {
  const { value = "", state: initialState = "pending" } = props;

  const [form, setForm] = useState<IFormState>({ value, state: initialState });

  function isAlphabetical(inputValue: string): boolean {
    return /^[a-zA-Z]+$/.test(inputValue);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setForm({ value: inputValue, state: "pending" });
  };

  const onFocus = () => {
    if (form.state === "invalid") {
      return setForm((prevState) => ({ ...prevState, state: "invalid" }));
    }
    setForm((prevState) => ({ ...prevState, state: "pending" }));
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValid = isAlphabetical(inputValue);
    setForm((prevState) => ({
      ...prevState,
      state: isValid ? "valid" : "invalid",
    }));
  };

  return (
    <Textfield
      {...props}
      value={form.value}
      onChange={onChange}
      state={form.state}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export { TextfieldController };
