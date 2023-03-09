import { TextField } from "..";
import { sizes } from "..";
import { StyledFlex } from "./stories.stiles";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  isFullWidth,
} from "./props";

const story = {
  title: "inputs/textField/Size",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <StyledFlex>
      {sizes.map((size) => (
        <div key={size}>
          <TextField size={size} {...args} />
        </div>
      ))}
    </StyledFlex>
  );
};

const Size = TextFieldComponent.bind({});
Size.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  isDisabled: false,
  isFocused: false,
  placeholder: "Write your full name",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  errorMessage: "",
  isInvalid: false,
  isFullWidth: false,
};

Size.argTypes = {
  label,
  name,
  id,
  placeholder,
  isDisabled,
  isFocused,
  type,
  value,
  handleChange,
  iconBefore,
  iconAfter,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  isInvalid,
  errorMessage,
  isFullWidth,
};

export default story;

export { Size };
