import { useState } from "react";

import { Select } from "../index";
import { StyledForm } from "./styles";
import { Button } from "../../Button";
import { ISelectProps } from "..";

const InForm = (props: ISelectProps) => {
  const { value = "", state = "pending", isRequired } = props;
  const [form, setForm] = useState({ value, state });

  const handleClick = (e: Event) => {
    const element = document.getElementById("select") as HTMLInputElement;
    const valueElement = element.value;
    if (valueElement === "" && isRequired) {
      setForm({ ...form, state: "invalid" });
      e.preventDefault();
      return;
    } else {
      setForm({ ...form, state: "valid" });
      e.preventDefault();
    }
  };

  const handleFocus = (e?: Event) => {
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
        handleFocus={(e) => handleFocus(e)}
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
