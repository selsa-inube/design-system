import { ILabelProps } from "../interfaces/Label.interface";

import { Label } from "..";
import { parameters, isFocused, htmlFor, isInvalid } from "./props";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
};

const IsDisabled = ({
  isFocused,
  htmlFor,
  isInvalid,
  children,
}: ILabelProps) => {
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
