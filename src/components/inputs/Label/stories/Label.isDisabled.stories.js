import Label from "..";

import { parameters, isFocused, htmlFor, state } from "./props";

const story = {
  title: "inputs/labels/IsDisabled",
  components: [Label],
  parameters,
};

const IsDisabled = ({ isFocused, htmlFor, state, children }) => {
  return (
    <Label
      isDisabled={true}
      isFocused={isFocused}
      htmlFor={htmlFor}
      state={state}
    >
      {children}
    </Label>
  );
};
IsDisabled.args = {
  children: "Label",
  isFocused: false,
  htmlFor: "id",
  state: "default",
};
IsDisabled.argTypes = {
  isFocused,
  htmlFor,
  state,
};

export default story;

export { IsDisabled };
