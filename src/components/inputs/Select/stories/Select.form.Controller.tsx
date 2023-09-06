import { useState } from "react";

import { Select, ISelectProps } from "..";
import { StyledForm } from "./styles";
import { Button } from "../../Button";

const InForm = (props: ISelectProps) => {
  const { value = "", state = "pending", required } = props;
  const [form, setForm] = useState({ value, state });

  const handleClick = (e: Event) => {
    const element = document.getElementById("select") as HTMLInputElement;
    const valueElement = element.value;
    if (valueElement === "" && required) {
      setForm({ ...form, state: "invalid" });
      e.preventDefault();
      return;
    } else {
      setForm({ ...form, state: "valid" });
      e.preventDefault();
    }
  };

  const onFocus = (e?: Event) => {
    if (!value) {
      setForm({ ...form, state: "pending" });
    }
  };

  return (
    <StyledForm>
      <Select
        {...props}
        state={form.state}
        id="select"
        onFocus={(e) => onFocus(e)}
      />
      <Button
        type="submit"
        spacing="compact"
        handleClick={(e) => handleClick(e!)}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

export { InForm };
