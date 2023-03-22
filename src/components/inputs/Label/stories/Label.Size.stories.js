import { Label, typos } from "..";
import { Stack } from "../../../layouts/Stack";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  state,
  typo,
  children,
} from "./props";

const story = {
  title: "inputs/Label/Size",
  components: [Label],
  parameters,
};

const Size = (props) => {
  return (
    <Stack>
      {typos.map((typo) => (
        <div key={typo}>
          <Label {...props} typo={typo}>
            {children}
          </Label>
        </div>
      ))}
    </Stack>
  );
};

Size.args = {
  htmlFor: "LabelText",
  children: "Label Text",
};

export default story;
export { Size };
