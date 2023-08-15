import { Label, ILabelProps } from "..";
import { Stack } from "@layouts/Stack";

import { props, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const States = ({
  disabled,
  focused,
  children,
  size,
  htmlFor,
}: ILabelProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {[false, true].map((invalid) => (
        <Label
          disabled={disabled}
          focused={focused}
          invalid={invalid}
          htmlFor={htmlFor}
          size={size}
          key={invalid.toString()}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

States.args = {
  disabled: false,
  focused: false,
  htmlFor: "id",
  size: "large",
  children: "Label Text",
};

export default story;

export { States };
