import { Label, ILabelProps } from "..";
import { Stack } from "@layouts/Stack";

import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const States = ({
  isDisabled,
  focused,
  children,
  typo,
  htmlFor,
}: ILabelProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {[false, true].map((invalid) => (
        <Label
          isDisabled={isDisabled}
          focused={focused}
          invalid={invalid}
          htmlFor={htmlFor}
          typo={typo}
          key={invalid.toString()}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

States.args = {
  isDisabled: false,
  focused: false,
  htmlFor: "id",
  typo: "labelLarge",
  children: "Label Text",
};

export default story;

export { States };
