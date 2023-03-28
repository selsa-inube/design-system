import { Label, typos } from "..";
import { Stack } from "../../../layouts/Stack";

import { parameters, isDisabled, isFocused, htmlFor, state } from "./props";

const story = {
  title: "inputs/Label/Size",
  components: [Label],
  parameters,
};

const Size = ({ isDisabled, isFocused, htmlFor, state, children }) => {
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
          state={state}
          key={typo}
        >
          {children}
        </Label>
      ))}
    </Stack>
  );
};

Size.args = {
  htmlFor: "LabelText",
  children: "Text Label",
  isDisabled: false,
  isFocused: false,
};

Size.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  state,
};

export default story;
export { Size };
