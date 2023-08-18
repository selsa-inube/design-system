import { useState } from "react";
import { Textfield, ITextfieldProps, IMessage } from "..";
import { State } from "../props";

interface IFormState {
  value: any;
  state: State;
  message?: IMessage;
}

const TextfieldController = (props: ITextfieldProps) => {
  const { value = "", state = "pending" } = props;

  const [form, setForm] = useState<IFormState>({ value, state });

  function isAlphabetical(value: string): boolean {
    return /^[a-zA-Z]+$/.test(value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, value: e.target.value, state: "pending" });
  };

  const handleFocus = () => {
    if (form.state === "invalid") {
      return setForm({ ...form, state: "invalid", message: form.message });
    }
    setForm({ ...form, state: "pending" });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    if (isValid) {
      setForm({
        ...form,
        state: "valid",
        message: { content: "Input is valid.", type: "success" },
      });
    } else {
      setForm({
        ...form,
        state: "invalid",
        message: { content: "Input should be alphabetical.", type: "invalid" },
      });
    }
  };

  return (
    <Textfield
      {...props}
      value={form.value}
      onChange={onChange}
      state={form.state}
      message={props.message ? props.message : form.message}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

export { TextfieldController };
