import { useState } from "react";

import { Select, ISelectProps } from "..";
import { StyledForm } from "./styles";
import { Button } from "../../Button";

const InForm = (props: ISelectProps) => {
  const { value = "", status = "pending", required } = props;
  const [form, setForm] = useState({ value, status });

  const handleClick = (e: Event) => {
    const element = document.getElementById("select") as HTMLInputElement;
    const valueElement = element.value;
    if (valueElement === "" && required) {
      setForm({ ...form, status: "invalid" });
      e.preventDefault();
      return;
    } else {
      setForm({ ...form, status: "valid" });
      e.preventDefault();
    }
  };

  const onFocus = (e?: Event) => {
    if (!value) {
      setForm({ ...form, status: "pending" });
    }
  };

  return (
    <StyledForm>
      <Select
        {...props}
        status={form.status}
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
