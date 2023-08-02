import { ReactNode } from "react";

import { Label } from "../";
import { Stack } from "../../../layouts/Stack";

import { TypographyLabel, props, typos } from "../props";

const story = {
  title: "inputs/Label",
  components: [Label],
  argTypes: props,
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

export default story;
export { Size };
