import React from "react";

import { Label, typos } from "..";
import { Stack } from "../../../layouts/Stack";

import { parameters, isDisabled, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label/Size",
  components: [Label],
  parameters,
};

const Size = ({ isDisabled, isFocused, htmlFor, isInvalid, children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {typos.map((typo) => (
        <Label
          isDisabled={isDisabled}
          isFocused={isFocused}
          htmlFor={htmlFor}
          typo={typo}
          isInvalid={isInvalid}
          key={typo}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

Size.args = {
  htmlFor: "LabelText",
  children: "Text Label",
  isDisabled: false,
  isFocused: false,
  isInvalid: false,
};

Size.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
};

export default story;
export { Size };
