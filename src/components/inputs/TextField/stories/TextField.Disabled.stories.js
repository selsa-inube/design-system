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
  size,
} from "./props";

const story = {
  title: "inputs/textField/Disabled",
  components: [TextField],
  parameters,
};

const TextFieldComponent = (args) => {
  return (
    <StyledFlex>
      {sizes.map((size) => (
        <div key={size}>
          <TextField size={size} isDisabled={true} {...args} />
        </div>
      ))}
    </StyledFlex>
  );
};

const Disabled = TextFieldComponent.bind({});
Disabled.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  isFocused: false,
  placeholder: "Write your full name",
  handleChange: () => {},
  maxLength: 10,
  minLength: 1,
  errorMessage: "",
  isInvalid: false,
};

Disabled.argTypes = {
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
  size,
};

export default story;

export { Disabled };
