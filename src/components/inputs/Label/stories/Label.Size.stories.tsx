import { ReactNode } from "react";

import { Label, typos } from "..";
import { Stack } from "../../../layouts/Stack";

import { parameters, isDisabled, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label/Size",
  components: [Label],
  parameters,
};

interface LabelArgs {
  isDisabled: boolean;
  htmlFor: string;
  isFocused: boolean;
  isInvalid: boolean;
  typo: "labelLarge" | "labelMedium" | "labelSmall";
  children: ReactNode;
}

const Size = ({
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  children,
}: LabelArgs) => {
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
