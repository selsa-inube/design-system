import { ILabelProps } from "../interfaces/Label.interface";

import { Label } from "..";
import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  children,
  typo,
} from "./props";

const story = {
  title: "inputs/Label/States",
  components: [Label],
  parameters,
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

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  typo,
  children,
};

export default story;

export { States };