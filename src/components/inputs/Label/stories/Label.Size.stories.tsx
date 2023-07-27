import { ReactNode } from "react";

import { TypographyLabel, typos } from "../types/Label.type";
import { Label } from "../";
import { Stack } from "../../../layouts/Stack";

import { parameters, isDisabled, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
};

interface LabelArgs {
  isDisabled: boolean;
  htmlFor: string;
  isFocused: boolean;
  isInvalid: boolean;
  typo: TypographyLabel;
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
  htmlFor: "id",
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
