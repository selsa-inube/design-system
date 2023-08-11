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
      {[false, true].map((isInvalid) => (
        <Label
          isDisabled={isDisabled}
          focused={focused}
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
  isDisabled: false,
  focused: false,
  htmlFor: "id",
  typo: "labelLarge",
  children: "Label Text",
};

export default story;

export { States };
