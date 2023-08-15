import { ReactNode } from "react";

import { Label } from "../";
import { Stack } from "@layouts/Stack";

import { Size, sizes, props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

interface LabelArgs {
  disabled: boolean;
  htmlFor: string;
  focused: boolean;
  invalid: boolean;
  size: Size;
  children: ReactNode;
}

const Sizes = ({
  disabled,
  focused,
  htmlFor,
  invalid,
  children,
}: LabelArgs) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {sizes.map((size) => (
        <Label
          disabled={disabled}
          focused={focused}
          htmlFor={htmlFor}
          size={size}
          invalid={invalid}
          key={size}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

Sizes.args = {
  htmlFor: "id",
  children: "Text Label",
  disabled: false,
  focused: false,
  invalid: false,
};

export default story;
export { Sizes };
