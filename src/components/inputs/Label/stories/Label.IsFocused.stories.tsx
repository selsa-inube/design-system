import { LabelProps } from "../interfaces";

import { Label } from "..";
import {
  parameters,
  isDisabled,
  htmlFor,
  isInvalid,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label/IsFocused",
  components: [Label],
  parameters,
};

const IsFocused = ({
  children,
  isInvalid,
  htmlFor,
  typo,
  isDisabled,
}: LabelProps) => {
  return (
    <Label
      isDisabled={isDisabled}
      isFocused={true}
      isInvalid={isInvalid}
      htmlFor={htmlFor}
      typo={typo}
    >
      {children}
    </Label>
  );
};
IsFocused.args = {
  children: "Label Text",
  isDisabled: false,
  htmlFor: "id",
  isInvalid: false,
  typo: "labelLarge",
};

IsFocused.argTypes = {
  isDisabled,
  children,
  htmlFor,
  isInvalid,
  typo,
};

export default story;
export { IsFocused };
