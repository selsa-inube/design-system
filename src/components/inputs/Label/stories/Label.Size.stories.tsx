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
  focused: boolean;
  invalid: boolean;
  typo: TypographyLabel;
  children: ReactNode;
}

const Size = ({ disabled, focused, htmlFor, invalid, children }: LabelArgs) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="flex-start"
    >
      {typos.map((typo) => (
        <Label
          disabled={disabled}
          focused={focused}
          htmlFor={htmlFor}
          typo={typo}
          invalid={invalid}
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
  focused: false,
  invalid: false,
};

export default story;
export { Size };
