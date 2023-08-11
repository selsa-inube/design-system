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
  isFocused,
  children,
  typo,
  htmlFor,
}: ILabelProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {[false, true].map((isInvalid) => (
        <Label
          disabled={disabled}
          isFocused={isFocused}
          isInvalid={isInvalid}
          htmlFor={htmlFor}
          typo={typo}
          key={isInvalid.toString()}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

States.args = {
  disabled: false,
  isFocused: false,
  htmlFor: "id",
  typo: "labelLarge",
  children: "Label Text",
};

export default story;

export { States };
