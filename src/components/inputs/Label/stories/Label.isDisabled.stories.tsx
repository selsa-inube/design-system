import { LabelProps } from "../interface.Label";

import { Label } from "..";
import { parameters, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label/IsDisabled",
  components: [Label],
  parameters,
};

const IsDisabled = ({
  isFocused,
  htmlFor,
  isInvalid,
  children,
}: LabelProps) => {
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
