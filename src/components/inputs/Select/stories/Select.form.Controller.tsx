import { useState } from "react";

import { Select, ISelectProps } from "..";
import { StyledForm } from "./styles";
import { Button } from "../../Button";

const InForm = (props: ISelectProps) => {
  const { value = "", status = "pending", required } = props;
  const [form, setForm] = useState({ value, status });

  const onClick = (e: Event) => {
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
  const message =
    form.status === "valid"
      ? "The field has been successfully validated"
      : "This field can not be blank";

  return (
    <StyledForm>
      <Select
        {...props}
        message={message}
        status={form.status}
        id="select"
        onFocus={(e) => onFocus(e)}
      />
      <Button type="submit" spacing="compact" handleClick={(e) => onClick(e!)}>
        Submit
      </Button>
    </StyledForm>
  );
};

export { InForm };
