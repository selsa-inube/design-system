import React, { useState } from "react";

import { Select } from "../index";

import { Button } from "../../Button/index";
import { StyledForm } from "./styles";
import {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
} from "./props";

const story = {
  title: "Inputs/Select/InForm",
  component: [Select],
  parameters,
};

const InForm = (props) => {
  const { value = "", state = "pending", isRequired } = props;
  const [form, setForm] = useState({ value, state });

  const handleClick = (e) => {
    if (!value && isRequired) {
      setForm({ ...form, state: "invalid" });
      e.preventDefault();
      return;
    }
    return;
  };

  return (
    <StyledForm>
      <Select {...props} state={form.state} />
      <Button
        type="submit"
        spacing="compact"
        handleClick={(e) => handleClick(e)}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

InForm.args = {
  label: "Select",
  name: "select",
  id: "select",
  placeholder: "Select",
  value: "",
  isRequired: true,
  options: [
    { id: "1", label: "Item 1", isDisabled: false },
    { id: "2", label: "123", isDisabled: false },
    { id: "3", label: "Item", isDisabled: false },
  ],
  size: "compact",
  errorMessage: "This field can not be blank",
};

InForm.argTypes = {
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
};

export default story;
export { InForm };
