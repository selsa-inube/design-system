import { ReactNode } from "react";

import { Label } from "../";
import { Stack } from "@layouts/Stack";

import { TypographyLabel, props, typos, parameters } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

interface LabelArgs {
  disabled: boolean;
  htmlFor: string;
  isFocused: boolean;
  isInvalid: boolean;
  typo: TypographyLabel;
  children: ReactNode;
}

const Size = ({
  disabled,
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
          disabled={disabled}
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
  disabled: false,
  isFocused: false,
  isInvalid: false,
};

export default story;
export { Size };
