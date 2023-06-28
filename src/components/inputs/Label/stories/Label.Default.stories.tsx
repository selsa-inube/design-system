import { ReactNode } from "react";

import { Label } from "..";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label/Default",
  components: [Label],
  parameters,
};

interface LabelArgs {
  htmlFor: string;
  typo: "labelLarge" | "labelMedium" | "labelSmall";
  children: ReactNode;
}

const Default = ({ htmlFor, typo, children }: LabelArgs) => {
  return (
    <Label htmlFor={htmlFor} typo={typo}>
      {children}
    </Label>
  );
};
Default.args = {
  htmlFor: "LabelText",
  children: "Label Text",
};
Default.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  typo,
  children,
};

export default story;

export { Default };
