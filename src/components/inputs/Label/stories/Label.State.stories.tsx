import { Label, ILabelProps } from "..";
import { Stack } from "../../../layouts/Stack";

import { props } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
};

const States = ({
  isDisabled,
  isFocused,
  children,
  typo,
  htmlFor,
}: ILabelProps) => {
  return (
    <Stack justifyContent="space-evenly">
      {[false, true].map((isInvalid) => (
        <Label
          isDisabled={isDisabled}
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
  isDisabled: false,
  isFocused: false,
  htmlFor: "id",
  typo: "labelLarge",
  children: "Label Text",
};

export default story;

export { States };
