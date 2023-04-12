import { Label } from "../";

import { StyledContentStates } from "./stories.styles";

import {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  children,
  typo,
} from "./props";

const story = {
  title: "inputs/Label/States",
  components: [Label],
  parameters,
};

const States = ({ isDisabled, isFocused, children, typo, htmlFor }) => {
  return (
    <StyledContentStates>
      {[false, true].map((isInvalid) => (
        <Label
          isDisabled={isDisabled}
          isFocused={isFocused}
          isInvalid={isInvalid}
          htmlFor={htmlFor}
          typo={typo}
          key={isInvalid.toString()}
        >
          {children}
        </Label>
      ))}
    </StyledContentStates>
  );
};

States.args = {
  isDisabled: false,
  isFocused: false,
  htmlFor: "id",
  typo: "labelLarge",
  children: "Label Text",
};

States.argTypes = {
  isDisabled,
  isFocused,
  htmlFor,
  typo,
  children,
};

export default story;

export { States };
