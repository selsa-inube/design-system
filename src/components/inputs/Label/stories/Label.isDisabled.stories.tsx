import { ReactNode } from "react";

import { Label } from "..";
import { parameters, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label/IsDisabled",
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

const IsDisabled = ({ isFocused, htmlFor, isInvalid, children }: LabelArgs) => {
  return (
    <Label
      isDisabled={true}
      isFocused={isFocused}
      htmlFor={htmlFor}
      isInvalid={isInvalid}
    >
      {children}
    </Label>
  );
};
IsDisabled.args = {
  children: "Label Text",
  isFocused: false,
  htmlFor: "id",
  isInvalid: false,
};
IsDisabled.argTypes = {
  isFocused,
  htmlFor,
  isInvalid,
};

export default story;

export { IsDisabled };
